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
import { retriangulateWithSteinerPoints } from "./splitTriangles.js";

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
 * @returns {{ inside: Array, outside: Array }} Classified triangle groups
 */
export function splitStraddlingAndClassify(tris, classifications, crossedMap, otherTris, otherGrids) {
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

	// Step C: Process each triangle
	for (var ti = 0; ti < tris.length; ti++) {
		if (!crossedMap[ti]) {
			// Non-crossed: use pre-computed flood-fill classification
			if (classifications[ti] === 1) {
				inside.push(tris[ti]);
			} else {
				outside.push(tris[ti]);
			}
			continue;
		}

		// Crossed triangle: re-triangulate with intersection segment endpoints
		var segments = crossedMap[ti];
		var current = retriangulateWithSteinerPoints(tris[ti], segments);

		// Classify each sub-triangle by vertex adjacency:
		// Find the vertex NOT on the intersection line, then inherit classification
		// from the adjacent non-crossed triangle that shares that vertex.
		for (var j = 0; j < current.length; j++) {
			var sub = current[j];
			var subVerts = [sub.v0, sub.v1, sub.v2];

			// Look for a "free" vertex (not a Steiner point) that has a
			// known classification from an adjacent non-crossed triangle
			var foundClass = 0;
			for (var sv = 0; sv < 3; sv++) {
				var svKey = vk(subVerts[sv]);
				if (steinerKeys[svKey]) continue; // vertex is ON the intersection line

				var adjClass = vertexClassMap[svKey];
				if (adjClass !== undefined) {
					foundClass = adjClass;
					break;
				}
			}

			if (foundClass === 0) {
				// Fallback: no adjacent non-crossed triangle found for any free vertex.
				// This can happen when all original vertices of the parent triangle
				// are shared only by other crossed triangles. Use ray-casting.
				var scx = (sub.v0.x + sub.v1.x + sub.v2.x) / 3;
				var scy = (sub.v0.y + sub.v1.y + sub.v2.y) / 3;
				var scz = (sub.v0.z + sub.v1.z + sub.v2.z) / 3;
				foundClass = classifyPointMultiAxis(
					{ x: scx, y: scy, z: scz },
					otherTris, otherGrids
				);
			}

			if (foundClass === 1) {
				inside.push(sub);
			} else {
				outside.push(sub);
			}
		}
	}

	return { inside: inside, outside: outside };
}
