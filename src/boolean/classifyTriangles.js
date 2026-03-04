/**
 * @module boolean/classifyTriangles
 *
 * Triangle classification for boolean operations. Uses multi-axis ray casting
 * (majority vote across Z, X, Y) to determine whether triangles lie inside or
 * outside the other mesh, with flood-fill propagation for efficient bulk
 * classification and CDT-based splitting for straddling (crossed) triangles.
 *
 * Sub-triangles from CDT splits are classified via vertex adjacency (inheriting
 * from non-crossed neighbors) with ray-cast fallback only when no adjacent
 * non-crossed triangle exists.
 */

import { queryGrid } from "../intersect/spatialGrid.js";
import { queryGridOnAxes } from "../intersect/spatialGrid.js";
import { fanTriangulate } from "./splitTriangles.js";

// Deterministic jitter offsets for avoiding edge/coplanar ray hits.
// 3 offsets per axis, each pair (da, db) shifts the ray's 2D position slightly.
// Different offsets per axis to avoid correlated edge hits on axis-aligned geometry.
var JITTERS = {
	z: [
		{ da: 0.0000537, db: 0.0000241 },
		{ da: -0.0000319, db: 0.0000673 },
		{ da: 0.0000157, db: -0.0000489 }
	],
	x: [
		{ da: 0.0000443, db: -0.0000317 },
		{ da: -0.0000261, db: 0.0000559 },
		{ da: 0.0000189, db: 0.0000371 }
	],
	y: [
		{ da: -0.0000397, db: 0.0000283 },
		{ da: 0.0000521, db: -0.0000447 },
		{ da: -0.0000173, db: 0.0000613 }
	]
};

/**
 * Cast a single ray on one axis and count positive-direction hits.
 *
 * @param {number} pa - First projection coordinate (possibly jittered)
 * @param {number} pb - Second projection coordinate (possibly jittered)
 * @param {number} pr - Ray-axis coordinate (not jittered)
 * @param {Array} candidates - Triangle indices from spatial grid query
 * @param {Array} otherTris - Other surface triangles
 * @param {string} axis - 'z', 'x', or 'y'
 * @returns {number} Count of positive-direction hits
 */
function castRayOnAxis(pa, pb, pr, candidates, otherTris, axis) {
	var countPos = 0;

	for (var c = 0; c < candidates.length; c++) {
		var tri = otherTris[candidates[c]];

		// Extract the 2 projection coords + ray coord for each vertex
		var a0, b0, r0, a1, b1, r1, a2, b2, r2;
		if (axis === "z") {
			a0 = tri.v0.x; b0 = tri.v0.y; r0 = tri.v0.z;
			a1 = tri.v1.x; b1 = tri.v1.y; r1 = tri.v1.z;
			a2 = tri.v2.x; b2 = tri.v2.y; r2 = tri.v2.z;
		} else if (axis === "x") {
			a0 = tri.v0.y; b0 = tri.v0.z; r0 = tri.v0.x;
			a1 = tri.v1.y; b1 = tri.v1.z; r1 = tri.v1.x;
			a2 = tri.v2.y; b2 = tri.v2.z; r2 = tri.v2.x;
		} else {
			a0 = tri.v0.x; b0 = tri.v0.z; r0 = tri.v0.y;
			a1 = tri.v1.x; b1 = tri.v1.z; r1 = tri.v1.y;
			a2 = tri.v2.x; b2 = tri.v2.z; r2 = tri.v2.y;
		}

		// Barycentric test in (a, b) projection
		var d = (b1 - b2) * (a0 - a2) + (a2 - a1) * (b0 - b2);
		if (Math.abs(d) < 1e-12) continue; // degenerate projection

		var u = ((b1 - b2) * (pa - a2) + (a2 - a1) * (pb - b2)) / d;
		var v = ((b2 - b0) * (pa - a2) + (a0 - a2) * (pb - b2)) / d;
		var w = 1 - u - v;

		if (u < -1e-10 || v < -1e-10 || w < -1e-10) continue; // outside triangle

		// Interpolate ray-axis coord at (pa, pb) on the triangle's plane
		var rHit = u * r0 + v * r1 + w * r2;

		if (rHit > pr) countPos++;
	}

	return countPos;
}

/**
 * Classify a point on a single axis by casting 3 jittered rays and taking
 * the majority vote.  Each ray is offset slightly in the 2D projection
 * plane to avoid hitting triangle edges/vertices exactly.
 *
 * Projects point and triangles onto a 2D plane for the given axis:
 *   - axis='z': project to XY, ray along +Z
 *   - axis='x': project to YZ, ray along +X
 *   - axis='y': project to XZ, ray along +Y
 *
 * @param {{ x: number, y: number, z: number }} point - Point to classify
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} grid - Spatial grid for the relevant 2D projection
 * @param {number} cellSize - Grid cell size
 * @param {string} axis - 'z', 'x', or 'y'
 * @returns {number} 0 = no hits (no vote), 1 = inside (odd majority), 2 = outside (even majority)
 */
function classifyPointOnAxis(point, otherTris, grid, cellSize, axis) {
	// Base 2D coordinates and ray-axis coordinate
	var basePa, basePb, pr;
	if (axis === "z") {
		basePa = point.x; basePb = point.y; pr = point.z;
	} else if (axis === "x") {
		basePa = point.y; basePb = point.z; pr = point.x;
	} else {
		basePa = point.x; basePb = point.z; pr = point.y;
	}

	var jitters = JITTERS[axis];
	var insideVotes = 0;
	var hadHits = 0;

	for (var j = 0; j < 3; j++) {
		var pa = basePa + jitters[j].da;
		var pb = basePb + jitters[j].db;

		// Query spatial grid at jittered position
		var candidates;
		if (axis === "z") {
			candidates = queryGrid(grid, { minX: pa, maxX: pa, minY: pb, maxY: pb }, cellSize);
		} else {
			candidates = queryGridOnAxes(grid, pa, pb, cellSize);
		}

		var count = castRayOnAxis(pa, pb, pr, candidates, otherTris, axis);

		if (count > 0) hadHits++;
		if (count % 2 === 1) insideVotes++;
	}

	// 3-state return: 0 = no hits (no vote), 1 = inside, 2 = outside
	if (hadHits === 0) return 0;         // no ray hit anything → no vote
	return insideVotes >= 2 ? 1 : 2;     // majority inside → 1, majority outside → 2
}

/**
 * Multi-axis point classification using majority vote across all 3 axes.
 *
 * Casts +Z, +X, and +Y rays (3 jittered rays per axis) and classifies by majority vote:
 *   - Each axis returns 0 (no hits/no vote), 1 (inside), or 2 (outside)
 *   - If 2+ axes vote "inside" -> inside (handles any wall angle)
 *   - If only 1 axis votes "inside" and 1+ vote "outside" -> outside (prevents false positives)
 *   - If only 1 axis has hits at all -> trust that single result
 *   - If 0 axes have hits -> outside
 *
 * This handles any geometry angle (0-90 deg walls) without thresholds.
 *
 * @param {{ x: number, y: number, z: number }} point - Point to classify
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} grids - { xy: {grid, cellSize}, yz: {grid, cellSize}, xz: {grid, cellSize} }
 * @returns {number} 1 = inside, -1 = outside
 */
export function classifyPointMultiAxis(point, otherTris, grids) {
	var zCount = classifyPointOnAxis(point, otherTris, grids.xy.grid, grids.xy.cellSize, "z");
	var xCount = classifyPointOnAxis(point, otherTris, grids.yz.grid, grids.yz.cellSize, "x");
	var yCount = classifyPointOnAxis(point, otherTris, grids.xz.grid, grids.xz.cellSize, "y");

	// 0 = no hits (no vote), 1 = inside, 2 = outside
	var insideVotes = 0;
	var outsideVotes = 0;

	if (zCount === 1) insideVotes++;
	else if (zCount === 2) outsideVotes++;

	if (xCount === 1) insideVotes++;
	else if (xCount === 2) outsideVotes++;

	if (yCount === 1) insideVotes++;
	else if (yCount === 2) outsideVotes++;

	// Majority vote: 2+ inside -> inside; otherwise outside
	if (insideVotes >= 2) return 1;
	if (outsideVotes >= 1) return -1;

	// Only one axis had hits and it voted inside — trust it
	if (insideVotes === 1) return 1;

	// No axes had any hits -> outside
	return -1;
}

/**
 * Classify triangles using flood fill from intersection boundary.
 *
 * Non-crossed triangles are partitioned into connected components via shared
 * edges (excluding edges shared with crossed triangles). Each component is
 * classified by a single seed triangle using multi-axis ray casting against
 * the other surface, then that classification is propagated to the entire
 * component.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup to classify
 * @param {Object} crossedMap - Map of triIndex -> [taggedSegments]
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} otherGrids - { xy: {grid, cellSize}, yz: {grid, cellSize}, xz: {grid, cellSize} }
 * @returns {Int8Array} Classification per triangle: 1=inside, -1=outside
 */
export function classifyByFloodFill(tris, crossedMap, otherTris, otherGrids) {
	var n = tris.length;
	var result = new Int8Array(n);

	// Build edge adjacency for non-crossed triangles only
	var PREC = 6;
	function vk(v) {
		return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC);
	}

	var edgeToTris = {};
	for (var i = 0; i < n; i++) {
		if (crossedMap[i]) continue; // skip crossed triangles
		var tri = tris[i];
		var k0 = vk(tri.v0), k1 = vk(tri.v1), k2 = vk(tri.v2);
		var edges = [
			k0 < k1 ? k0 + "|" + k1 : k1 + "|" + k0,
			k1 < k2 ? k1 + "|" + k2 : k2 + "|" + k1,
			k2 < k0 ? k2 + "|" + k0 : k0 + "|" + k2
		];
		for (var e = 0; e < 3; e++) {
			if (!edgeToTris[edges[e]]) edgeToTris[edges[e]] = [];
			edgeToTris[edges[e]].push(i);
		}
	}

	// Build neighbor list from shared edges (non-crossed only)
	var neighbors = new Array(n);
	for (var ni = 0; ni < n; ni++) neighbors[ni] = [];

	for (var ek in edgeToTris) {
		var triList = edgeToTris[ek];
		for (var a = 0; a < triList.length; a++) {
			for (var b = a + 1; b < triList.length; b++) {
				neighbors[triList[a]].push(triList[b]);
				neighbors[triList[b]].push(triList[a]);
			}
		}
	}

	// BFS flood fill -- find connected components, classify each by one seed
	var visited = new Uint8Array(n);

	for (var seed = 0; seed < n; seed++) {
		if (visited[seed] || crossedMap[seed]) continue;

		// Classify seed via multi-axis ray casting against other surface
		var seedTri = tris[seed];
		var cx = (seedTri.v0.x + seedTri.v1.x + seedTri.v2.x) / 3;
		var cy = (seedTri.v0.y + seedTri.v1.y + seedTri.v2.y) / 3;
		var cz = (seedTri.v0.z + seedTri.v1.z + seedTri.v2.z) / 3;
		var seedClass = classifyPointMultiAxis(
			{ x: cx, y: cy, z: cz },
			otherTris, otherGrids
		);

		// BFS: propagate seed classification to entire component
		var queue = [seed];
		visited[seed] = 1;
		result[seed] = seedClass;

		var head = 0;
		while (head < queue.length) {
			var curr = queue[head++];
			var nbrs = neighbors[curr];
			for (var ni2 = 0; ni2 < nbrs.length; ni2++) {
				var nb = nbrs[ni2];
				if (!visited[nb]) {
					visited[nb] = 1;
					result[nb] = seedClass;
					queue.push(nb);
				}
			}
		}
	}

	return result;
}

/**
 * Separate triangles into inside/outside groups.
 *
 * Non-crossed triangles go directly by their pre-computed classification.
 * Crossed (straddling) triangles are re-triangulated with Steiner points
 * at intersection segment endpoints, then each sub-triangle is classified
 * via vertex adjacency (inheriting classification from adjacent non-crossed
 * triangles) with ray-cast fallback.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {Int8Array} classifications - Per-triangle classification (1=inside, -1=outside)
 * @param {Object} crossedMap - Map of triIndex -> [taggedSegments]
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} otherGrids - { xy: {grid, cellSize}, yz: {grid, cellSize}, xz: {grid, cellSize} }
 * @param {string} otherIdxKey - Key to get other mesh's triangle index from tagged segments ("idxA" or "idxB")
 * @returns {{ inside: Array, outside: Array }} Classified triangle groups
 */
export function splitStraddlingAndClassify(tris, classifications, crossedMap, otherTris, otherGrids, otherIdxKey) {
	var inside = [];
	var outside = [];

	var PREC = 6;
	function vk(v) {
		return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC);
	}

	// Step A: Build vertex-key -> classification map from NON-CROSSED triangles.
	// Each original mesh vertex that belongs to at least one non-crossed triangle
	// gets the flood-fill classification of that triangle.
	var vertexClassMap = {};
	for (var i = 0; i < tris.length; i++) {
		if (crossedMap[i]) continue; // skip crossed triangles
		var cls = classifications[i];
		var tri = tris[i];
		var verts = [tri.v0, tri.v1, tri.v2];
		for (var vi = 0; vi < 3; vi++) {
			var key = vk(verts[vi]);
			if (vertexClassMap[key] === undefined) {
				vertexClassMap[key] = cls;
			}
		}
	}

	// Step B: Collect all Steiner point keys (intersection segment endpoints).
	// These vertices lie ON the intersection line — skip them for classification.
	var steinerKeys = {};
	for (var ci in crossedMap) {
		var segs = crossedMap[ci];
		for (var s = 0; s < segs.length; s++) {
			steinerKeys[vk(segs[s].p0)] = true;
			steinerKeys[vk(segs[s].p1)] = true;
		}
	}

	// Step C: Collect ALL intersection segments into a flat list for half-space lookups.
	// Also build edge-key maps for border-segment classification in Step D0.
	var allSegments = [];
	var segEdgeSet = {};
	var segEdgeToSeg = {};
	for (var asi in crossedMap) {
		var aSegs = crossedMap[asi];
		for (var asj = 0; asj < aSegs.length; asj++) {
			allSegments.push(aSegs[asj]);
			var esk0 = vk(aSegs[asj].p0);
			var esk1 = vk(aSegs[asj].p1);
			var esKey = esk0 < esk1 ? esk0 + "|" + esk1 : esk1 + "|" + esk0;
			segEdgeSet[esKey] = true;
			segEdgeToSeg[esKey] = aSegs[asj];
		}
	}

	// Step C1) Calibrate the normal sign convention.
	// The host triangle's face normal determines which side is "inside". We sample
	// a few intersection segments, offset a point along the other mesh's face normal,
	// and ray-cast to verify the convention. Majority vote sets normalSign.
	var normalSign = 1;
	if (allSegments.length > 0) {
		var votePlus = 0, voteMinus = 0;
		var samplesToCheck = Math.min(allSegments.length, 12);
		var sampleStep = Math.max(1, Math.floor(allSegments.length / samplesToCheck));
		for (var calIdx = 0; calIdx < allSegments.length && (votePlus + voteMinus) < samplesToCheck; calIdx += sampleStep) {
			var calSeg = allSegments[calIdx];
			var calTri = otherTris[calSeg[otherIdxKey]];
			if (!calTri) continue;
			// Step C1a) Compute the other mesh's triangle normal
			var ce1x = calTri.v1.x - calTri.v0.x, ce1y = calTri.v1.y - calTri.v0.y, ce1z = calTri.v1.z - calTri.v0.z;
			var ce2x = calTri.v2.x - calTri.v0.x, ce2y = calTri.v2.y - calTri.v0.y, ce2z = calTri.v2.z - calTri.v0.z;
			var cnx = ce1y * ce2z - ce1z * ce2y;
			var cny = ce1z * ce2x - ce1x * ce2z;
			var cnz = ce1x * ce2y - ce1y * ce2x;
			var cnLen = Math.sqrt(cnx * cnx + cny * cny + cnz * cnz);
			if (cnLen < 1e-12) continue;
			cnx /= cnLen; cny /= cnLen; cnz /= cnLen;
			// Step C1b) Pick the dominant normal axis for a reliable single-axis ray-cast.
			var absNx = Math.abs(cnx), absNy = Math.abs(cny), absNz = Math.abs(cnz);
			var calAxis, calGrid, calCellSize;
			if (absNz >= absNx && absNz >= absNy) {
				calAxis = "z";
				calGrid = otherGrids.xy.grid;
				calCellSize = otherGrids.xy.cellSize;
			} else if (absNx >= absNy) {
				calAxis = "x";
				calGrid = otherGrids.yz.grid;
				calCellSize = otherGrids.yz.cellSize;
			} else {
				calAxis = "y";
				calGrid = otherGrids.xz.grid;
				calCellSize = otherGrids.xz.cellSize;
			}
			// Step C1c) Segment midpoint, offset in the +normal direction
			var calMx = (calSeg.p0.x + calSeg.p1.x) / 2;
			var calMy = (calSeg.p0.y + calSeg.p1.y) / 2;
			var calMz = (calSeg.p0.z + calSeg.p1.z) / 2;
			var offset = 0.05;
			var calPt = { x: calMx + cnx * offset, y: calMy + cny * offset, z: calMz + cnz * offset };
			// Step C1d) Single-axis ray-cast: 0 = no hits, 1 = inside, 2 = outside
			var calResult = classifyPointOnAxis(calPt, otherTris, calGrid, calCellSize, calAxis);
			if (calResult === 0) continue;
			if (calResult === 1) voteMinus++;
			else votePlus++;
		}
		if (voteMinus > votePlus) normalSign = -1;
	}
	function halfSpaceTest(point, tolerance) {
		if (allSegments.length === 0) return 0;
		var tol = (tolerance !== undefined) ? tolerance : 1e-10;
		var bestSeg = allSegments[0];
		var bestDist = Infinity;
		for (var hi = 0; hi < allSegments.length; hi++) {
			var hmx = (allSegments[hi].p0.x + allSegments[hi].p1.x) / 2;
			var hmy = (allSegments[hi].p0.y + allSegments[hi].p1.y) / 2;
			var hmz = (allSegments[hi].p0.z + allSegments[hi].p1.z) / 2;
			var hdx = point.x - hmx, hdy = point.y - hmy, hdz = point.z - hmz;
			var hd2 = hdx * hdx + hdy * hdy + hdz * hdz;
			if (hd2 < bestDist) { bestDist = hd2; bestSeg = allSegments[hi]; }
		}
		var hOtherTri = otherTris[bestSeg[otherIdxKey]];
		if (!hOtherTri) return 0;
		var he1x = hOtherTri.v1.x - hOtherTri.v0.x;
		var he1y = hOtherTri.v1.y - hOtherTri.v0.y;
		var he1z = hOtherTri.v1.z - hOtherTri.v0.z;
		var he2x = hOtherTri.v2.x - hOtherTri.v0.x;
		var he2y = hOtherTri.v2.y - hOtherTri.v0.y;
		var he2z = hOtherTri.v2.z - hOtherTri.v0.z;
		var hnx = he1y * he2z - he1z * he2y;
		var hny = he1z * he2x - he1x * he2z;
		var hnz = he1x * he2y - he1y * he2x;
		var hrpx = hOtherTri.v0.x, hrpy = hOtherTri.v0.y, hrpz = hOtherTri.v0.z;
		var hDotPt = (point.x - hrpx) * hnx + (point.y - hrpy) * hny + (point.z - hrpz) * hnz;
		if (Math.abs(hDotPt) > tol) {
			return (hDotPt * normalSign < 0) ? 1 : -1;
		}
		return 0;
	}

	// Step C2) Helper: classify a point against a SPECIFIC segment's other-mesh plane.
	// Used by Step D0 (border-segment) and Step E3 (constraint enforcement).
	function segHalfSpace(point, seg) {
		var sOtherTri = otherTris[seg[otherIdxKey]];
		if (!sOtherTri) return 0;
		var se1x = sOtherTri.v1.x - sOtherTri.v0.x;
		var se1y = sOtherTri.v1.y - sOtherTri.v0.y;
		var se1z = sOtherTri.v1.z - sOtherTri.v0.z;
		var se2x = sOtherTri.v2.x - sOtherTri.v0.x;
		var se2y = sOtherTri.v2.y - sOtherTri.v0.y;
		var se2z = sOtherTri.v2.z - sOtherTri.v0.z;
		var snx = se1y * se2z - se1z * se2y;
		var sny = se1z * se2x - se1x * se2z;
		var snz = se1x * se2y - se1y * se2x;
		var sdot = (point.x - sOtherTri.v0.x) * snx + (point.y - sOtherTri.v0.y) * sny + (point.z - sOtherTri.v0.z) * snz;
		if (Math.abs(sdot) > 1e-10) {
			return (sdot * normalSign < 0) ? 1 : -1;
		}
		return 0;
	}

	// Step D: Process each triangle.
	// Each entry tracks: tri, cls, confident (half-space = true, flood-fill = false)
	var allSubs = [];

	for (var ti = 0; ti < tris.length; ti++) {
		if (!crossedMap[ti]) {
			// Non-crossed: try half-space test first, fall back to flood-fill
			var ncTri = tris[ti];
			var ncCx = (ncTri.v0.x + ncTri.v1.x + ncTri.v2.x) / 3;
			var ncCy = (ncTri.v0.y + ncTri.v1.y + ncTri.v2.y) / 3;
			var ncCz = (ncTri.v0.z + ncTri.v1.z + ncTri.v2.z) / 3;
			var ncHalf = halfSpaceTest({ x: ncCx, y: ncCy, z: ncCz });
			if (ncHalf !== 0) {
				allSubs.push({ tri: ncTri, cls: ncHalf, confident: true });
			} else {
				allSubs.push({ tri: ncTri, cls: classifications[ti], confident: false });
			}
			continue;
		}

		// Crossed triangle: re-triangulate with intersection segment endpoints
		var segments = crossedMap[ti];
		var current = fanTriangulate(tris[ti], segments);

		for (var j = 0; j < current.length; j++) {
			var sub = current[j];
			var subVerts = [sub.v0, sub.v1, sub.v2];

			// Step D0) Border-segment classification: if this sub-tri shares an
			// edge with an intersection segment, use THAT segment's plane directly.
			// This prevents the "nearest segment" from picking a wrong crossing.
			var foundClass = 0;
			var confident = false;
			var subK0 = vk(sub.v0), subK1 = vk(sub.v1), subK2 = vk(sub.v2);
			var subEKeys = [
				subK0 < subK1 ? subK0 + "|" + subK1 : subK1 + "|" + subK0,
				subK1 < subK2 ? subK1 + "|" + subK2 : subK2 + "|" + subK1,
				subK2 < subK0 ? subK2 + "|" + subK0 : subK0 + "|" + subK2
			];
			var borderSeg = null;
			for (var bse = 0; bse < 3; bse++) {
				if (segEdgeToSeg[subEKeys[bse]]) { borderSeg = segEdgeToSeg[subEKeys[bse]]; break; }
			}
			if (borderSeg) {
				var bCx = (sub.v0.x + sub.v1.x + sub.v2.x) / 3;
				var bCy = (sub.v0.y + sub.v1.y + sub.v2.y) / 3;
				var bCz = (sub.v0.z + sub.v1.z + sub.v2.z) / 3;
				foundClass = segHalfSpace({ x: bCx, y: bCy, z: bCz }, borderSeg);
				if (foundClass !== 0) confident = true;
			}

			// Step D1) Find a "free" vertex (not a Steiner point on the intersection line)
			var freeVert = null;
			if (foundClass === 0) {
				for (var sv = 0; sv < 3; sv++) {
					var svKey = vk(subVerts[sv]);
					if (steinerKeys[svKey]) continue;
					if (!freeVert) freeVert = subVerts[sv];
				}
			}

			// Step D2) Half-space test from the free vertex (nearest segment fallback)
			if (foundClass === 0 && freeVert) {
				foundClass = halfSpaceTest(freeVert);
				if (foundClass !== 0) confident = true;
			}

			// Step D2b) All-Steiner pocket triangle: half-space from centroid.
			if (foundClass === 0 && !freeVert && !borderSeg) {
				var pcx = (sub.v0.x + sub.v1.x + sub.v2.x) / 3;
				var pcy = (sub.v0.y + sub.v1.y + sub.v2.y) / 3;
				var pcz = (sub.v0.z + sub.v1.z + sub.v2.z) / 3;
				foundClass = halfSpaceTest({ x: pcx, y: pcy, z: pcz }, 1e-15);
				if (foundClass !== 0) confident = true;
			}

			// Step D3) Fallback: vertex adjacency
			if (foundClass === 0 && freeVert) {
				var fvKey = vk(freeVert);
				var adjClass = vertexClassMap[fvKey];
				if (adjClass !== undefined) {
					foundClass = adjClass;
				}
			}

			// Step D4) Fallback: ray-cast from the free vertex
			if (foundClass === 0 && freeVert) {
				foundClass = classifyPointMultiAxis(freeVert, otherTris, otherGrids);
			}

			if (foundClass !== 0 && freeVert) {
				vertexClassMap[vk(freeVert)] = foundClass;
			}

			allSubs.push({ tri: sub, cls: foundClass, confident: confident });
		}
	}

	// Step E: Build edge adjacency across ALL entries (non-crossed + sub-triangles).
	// This lets confident half-space classifications propagate to adjacent entries.
	// IMPORTANT: exclude intersection segment edges — triangles sharing an
	// intersection edge are on opposite sides and must NOT propagate across it.
	// (segEdgeSet and segEdgeToSeg were already built in Step C.)
	var subEdgeMap = {};
	for (var si = 0; si < allSubs.length; si++) {
		var st = allSubs[si].tri;
		var sk0 = vk(st.v0), sk1 = vk(st.v1), sk2 = vk(st.v2);
		var subEdges = [
			sk0 < sk1 ? sk0 + "|" + sk1 : sk1 + "|" + sk0,
			sk1 < sk2 ? sk1 + "|" + sk2 : sk2 + "|" + sk1,
			sk2 < sk0 ? sk2 + "|" + sk0 : sk0 + "|" + sk2
		];
		for (var se = 0; se < 3; se++) {
			if (!subEdgeMap[subEdges[se]]) subEdgeMap[subEdges[se]] = [];
			subEdgeMap[subEdges[se]].push(si);
		}
	}

	var subNeighbors = new Array(allSubs.length);
	for (var sn = 0; sn < allSubs.length; sn++) subNeighbors[sn] = [];
	for (var sek in subEdgeMap) {
		// Step E0) Skip intersection segment edges — they separate inside/outside
		if (segEdgeSet[sek]) continue;
		var seList = subEdgeMap[sek];
		for (var sa = 0; sa < seList.length; sa++) {
			for (var sb = sa + 1; sb < seList.length; sb++) {
				subNeighbors[seList[sa]].push(seList[sb]);
				subNeighbors[seList[sb]].push(seList[sa]);
			}
		}
	}

	// Step E1) Propagate confident (half-space) classifications to adjacent
	// non-confident entries.
	var maxPasses = 10;
	for (var pass = 0; pass < maxPasses; pass++) {
		var changed = false;
		for (var ui = 0; ui < allSubs.length; ui++) {
			if (allSubs[ui].confident) continue;
			var nbrs2 = subNeighbors[ui];
			for (var ni3 = 0; ni3 < nbrs2.length; ni3++) {
				var neighbor = allSubs[nbrs2[ni3]];
				if (neighbor.confident && neighbor.cls !== 0) {
					if (allSubs[ui].cls !== neighbor.cls) {
						allSubs[ui].cls = neighbor.cls;
						changed = true;
					}
					allSubs[ui].confident = true;
					break;
				}
			}
		}
		if (!changed) break;
	}

	// Step E2) Fill any remaining cls===0 entries via adjacency then ray-cast
	for (var pass2 = 0; pass2 < 5; pass2++) {
		var changed2 = false;
		for (var ui2 = 0; ui2 < allSubs.length; ui2++) {
			if (allSubs[ui2].cls !== 0) continue;
			var nbrs3 = subNeighbors[ui2];
			for (var ni4 = 0; ni4 < nbrs3.length; ni4++) {
				if (allSubs[nbrs3[ni4]].cls !== 0) {
					allSubs[ui2].cls = allSubs[nbrs3[ni4]].cls;
					changed2 = true;
					break;
				}
			}
		}
		if (!changed2) break;
	}
	for (var li = 0; li < allSubs.length; li++) {
		if (allSubs[li].cls !== 0) continue;
		var lt = allSubs[li].tri;
		var lcx = (lt.v0.x + lt.v1.x + lt.v2.x) / 3;
		var lcy = (lt.v0.y + lt.v1.y + lt.v2.y) / 3;
		var lcz = (lt.v0.z + lt.v1.z + lt.v2.z) / 3;
		allSubs[li].cls = classifyPointMultiAxis(
			{ x: lcx, y: lcy, z: lcz }, otherTris, otherGrids
		);
	}

	// Step E3) Constraint enforcement: sub-triangles sharing a segment edge
	// MUST have opposite classifications (one inside, one outside).
	// If both have the same cls, reclassify them using the specific segment's plane.
	for (var cek in segEdgeToSeg) {
		var ceSubs = subEdgeMap[cek];
		if (!ceSubs || ceSubs.length < 2) continue;
		var ceHasIn = false, ceHasOut = false;
		for (var cei = 0; cei < ceSubs.length; cei++) {
			if (allSubs[ceSubs[cei]].cls === 1) ceHasIn = true;
			if (allSubs[ceSubs[cei]].cls === -1) ceHasOut = true;
		}
		if (ceHasIn && ceHasOut) continue;
		// Constraint violated -- reclassify from the segment's plane
		var ceSeg = segEdgeToSeg[cek];
		for (var cej = 0; cej < ceSubs.length; cej++) {
			var ceT = allSubs[ceSubs[cej]].tri;
			var ceCx = (ceT.v0.x + ceT.v1.x + ceT.v2.x) / 3;
			var ceCy = (ceT.v0.y + ceT.v1.y + ceT.v2.y) / 3;
			var ceCz = (ceT.v0.z + ceT.v1.z + ceT.v2.z) / 3;
			var ceCls = segHalfSpace({ x: ceCx, y: ceCy, z: ceCz }, ceSeg);
			if (ceCls !== 0) {
				allSubs[ceSubs[cej]].cls = ceCls;
				allSubs[ceSubs[cej]].confident = true;
			}
		}
	}

	// Step F: Bin into inside / outside
	for (var fi = 0; fi < allSubs.length; fi++) {
		if (allSubs[fi].cls === 1) {
			inside.push(allSubs[fi].tri);
		} else {
			outside.push(allSubs[fi].tri);
		}
	}

	return { inside: inside, outside: outside };
}
