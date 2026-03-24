/**
 * @module boolean/booleanOp
 *
 * Main boolean operation entry point. Computes the union, intersection,
 * or subtraction of two triangle meshes using a classify-then-split
 * algorithm:
 *
 * 1. Find tagged intersection segments between mesh A and mesh B
 * 2. Build crossed-triangle sets from segment tags
 * 3. Build multi-axis spatial grids for both meshes (XY, YZ, XZ)
 * 4. Classify via flood fill (BFS with multi-axis majority-vote seeds)
 * 5. Split straddling triangles and classify sub-triangles
 * 6. Deduplicate seam vertices
 * 7. Propagate normals (BFS winding or Z-up fallback)
 * 8. Combine groups based on operation
 * 9. Return welded result
 */

import { intersectMeshPairTagged } from "../intersect/intersectMeshPair.js";
import { buildSpatialGrid, buildSpatialGridOnAxes, estimateAvgEdge } from "../intersect/spatialGrid.js";
import { classifyByFloodFill, splitStraddlingAndClassify } from "./classifyTriangles.js";
import { deduplicateSeamVertices } from "../repair/deduplicateVertices.js";
import { weldVertices, weldedToSoup } from "../repair/weldVertices.js";
import { ensureZUpNormals } from "../normals/alignNormals.js";
import { vKey, soupCentroid, translateSoup } from "../util/math.js";
import { resolveTJunctions } from "../repair/resolveTJunctions.js";
import { weldBoundaryVertices } from "../repair/weldBoundary.js";
import { fillOpenEdgeLoops } from "../repair/fillOpenLoops.js";
import { findConnectedComponents } from "../util/connectedComponents.js";
import { forceCloseIndexedMesh } from "../repair/forceClose.js";


/**
 * Propagate consistent winding order across a triangle mesh via BFS.
 *
 * If the mesh is manifold (every edge shared by exactly 2 triangles),
 * BFS from a seed triangle enforces consistent winding by checking
 * shared-edge direction. If not manifold, falls back to ensureZUpNormals.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangle soup with consistent normals
 */
function propagateNormals(tris) {
	if (tris.length === 0) return tris;

	// Build half-edge-to-triangle adjacency
	var PREC = 6;
	function vk(v) {
		return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC);
	}

	// For each triangle, compute its 3 directed half-edges
	var edgeToTris = {}; // "ka|kb" (sorted) -> [{triIdx, from, to}]

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var k0 = vk(tri.v0), k1 = vk(tri.v1), k2 = vk(tri.v2);
		var edges = [
			{ from: k0, to: k1 },
			{ from: k1, to: k2 },
			{ from: k2, to: k0 }
		];
		for (var e = 0; e < 3; e++) {
			var sortedKey = edges[e].from < edges[e].to
				? edges[e].from + "|" + edges[e].to
				: edges[e].to + "|" + edges[e].from;
			if (!edgeToTris[sortedKey]) edgeToTris[sortedKey] = [];
			edgeToTris[sortedKey].push({
				triIdx: i,
				from: edges[e].from,
				to: edges[e].to
			});
		}
	}

	// Check manifoldness -- every edge should have exactly 2 triangles
	var isManifold = true;
	for (var ek in edgeToTris) {
		if (edgeToTris[ek].length !== 2) {
			isManifold = false;
			break;
		}
	}

	if (!isManifold) {
		// Non-manifold: fall back to per-triangle Z-up normals
		return ensureZUpNormals(tris);
	}

	// Build per-triangle neighbor list via shared edges
	var neighbors = new Array(tris.length);
	for (var ni = 0; ni < tris.length; ni++) neighbors[ni] = [];

	for (var ek2 in edgeToTris) {
		var pair = edgeToTris[ek2];
		if (pair.length !== 2) continue;
		var t0 = pair[0], t1 = pair[1];
		neighbors[t0.triIdx].push({
			neighbor: t1.triIdx,
			// If both traverse this edge in the SAME direction, they're inconsistent
			sameDirection: (t0.from === t1.from)
		});
		neighbors[t1.triIdx].push({
			neighbor: t0.triIdx,
			sameDirection: (t0.from === t1.from)
		});
	}

	// BFS from seed (triangle 0), enforce consistent winding
	var flipped = new Uint8Array(tris.length); // 0=keep, 1=flip
	var visited = new Uint8Array(tris.length);
	visited[0] = 1; // seed keeps its winding

	var queue = [0];
	var head = 0;

	while (head < queue.length) {
		var cur = queue[head++];
		var nbrs = neighbors[cur];
		for (var n = 0; n < nbrs.length; n++) {
			var nb = nbrs[n];
			if (visited[nb.neighbor]) continue;
			visited[nb.neighbor] = 1;

			// Two adjacent triangles should traverse their shared edge in OPPOSITE directions.
			// If sameDirection is true, one needs flipping.
			var curFlipped = flipped[cur];
			if (nb.sameDirection) {
				// They traverse in the same direction -> neighbor needs opposite flip state
				flipped[nb.neighbor] = curFlipped ? 0 : 1;
			} else {
				// They traverse in opposite directions -> same flip state
				flipped[nb.neighbor] = curFlipped;
			}

			queue.push(nb.neighbor);
		}
	}

	// Apply flips
	var result = [];
	for (var ri = 0; ri < tris.length; ri++) {
		var t = tris[ri];
		if (flipped[ri]) {
			result.push({
				v0: { x: t.v0.x, y: t.v0.y, z: t.v0.z },
				v1: { x: t.v2.x, y: t.v2.y, z: t.v2.z },
				v2: { x: t.v1.x, y: t.v1.y, z: t.v1.z }
			});
		} else {
			result.push({
				v0: { x: t.v0.x, y: t.v0.y, z: t.v0.z },
				v1: { x: t.v1.x, y: t.v1.y, z: t.v1.z },
				v2: { x: t.v2.x, y: t.v2.y, z: t.v2.z }
			});
		}
	}

	return result;
}

/**
 * Flip the winding order of all triangles in a soup (reverses normals).
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>}
 */
function flipSoup(tris) {
	var result = [];
	for (var i = 0; i < tris.length; i++) {
		var t = tris[i];
		result.push({
			v0: { x: t.v0.x, y: t.v0.y, z: t.v0.z },
			v1: { x: t.v2.x, y: t.v2.y, z: t.v2.z },
			v2: { x: t.v1.x, y: t.v1.y, z: t.v1.z }
		});
	}
	return result;
}

/**
 * Split two meshes into inside/outside groups without combining them.
 *
 * This is the "split-and-pick" workflow: compute 4 groups
 * (A-inside-B, A-outside-B, B-inside-A, B-outside-A), then the caller
 * decides which groups to keep. Mirrors Kirra's computeSplits pattern.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupA - First mesh
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupB - Second mesh
 * @returns {{ groups: { aInside: Array, aOutside: Array, bInside: Array, bOutside: Array }, segments: Array }|null}
 */
export function splitMeshPair(soupA, soupB) {
	if (!soupA || !soupB || soupA.length === 0 || soupB.length === 0) {
		return null;
	}

	// Step 0) Translate to origin for floating-point precision
	var centroid = soupCentroid(soupA, soupB);
	var cx = centroid.x, cy = centroid.y, cz = centroid.z;
	soupA = translateSoup(soupA, -cx, -cy, -cz);
	soupB = translateSoup(soupB, -cx, -cy, -cz);

	// Step 1) Get tagged intersection segments
	var taggedSegments = intersectMeshPairTagged(soupA, soupB);

	if (taggedSegments.length === 0) {
		return {
			groups: {
				aInside: [],
				aOutside: translateSoup(soupA, cx, cy, cz),
				bInside: [],
				bOutside: translateSoup(soupB, cx, cy, cz)
			},
			segments: []
		};
	}

	// Step 2) Build crossed triangle sets from tagged segments
	var crossedSetA = {};
	var crossedSetB = {};
	for (var s = 0; s < taggedSegments.length; s++) {
		var seg = taggedSegments[s];
		if (!crossedSetA[seg.idxA]) crossedSetA[seg.idxA] = [];
		crossedSetA[seg.idxA].push(seg);
		if (!crossedSetB[seg.idxB]) crossedSetB[seg.idxB] = [];
		crossedSetB[seg.idxB].push(seg);
	}

	// Step 3) Build spatial grids for ray-cast classification
	var avgEdgeA = estimateAvgEdge(soupA);
	var avgEdgeB = estimateAvgEdge(soupB);
	var cellSizeA = Math.max(avgEdgeA * 2, 0.1);
	var cellSizeB = Math.max(avgEdgeB * 2, 0.1);

	var gridsA = {
		xy: { grid: buildSpatialGrid(soupA, cellSizeA), cellSize: cellSizeA },
		yz: { grid: buildSpatialGridOnAxes(soupA, cellSizeA, function (v) { return v.y; }, function (v) { return v.z; }), cellSize: cellSizeA },
		xz: { grid: buildSpatialGridOnAxes(soupA, cellSizeA, function (v) { return v.x; }, function (v) { return v.z; }), cellSize: cellSizeA }
	};
	var gridsB = {
		xy: { grid: buildSpatialGrid(soupB, cellSizeB), cellSize: cellSizeB },
		yz: { grid: buildSpatialGridOnAxes(soupB, cellSizeB, function (v) { return v.y; }, function (v) { return v.z; }), cellSize: cellSizeB },
		xz: { grid: buildSpatialGridOnAxes(soupB, cellSizeB, function (v) { return v.x; }, function (v) { return v.z; }), cellSize: cellSizeB }
	};

	// Step 4) Flood-fill classify
	var classA = classifyByFloodFill(soupA, crossedSetA, soupB, gridsB);
	var classB = classifyByFloodFill(soupB, crossedSetB, soupA, gridsA);

	// Step 5) Split straddling triangles and classify sub-triangles.
	// The half-space test inside calibrates its normal convention by sampling
	// a few points near the intersection and ray-casting them.
	var groupsA = splitStraddlingAndClassify(soupA, classA, crossedSetA, soupB, gridsB, "idxB");
	var groupsB = splitStraddlingAndClassify(soupB, classB, crossedSetB, soupA, gridsA, "idxA");

	// Step 5b) Fix non-manifold edges within each split group
	if (groupsA.inside.length > 0) groupsA.inside = fixMergedNonManifold(groupsA.inside);
	if (groupsA.outside.length > 0) groupsA.outside = fixMergedNonManifold(groupsA.outside);
	if (groupsB.inside.length > 0) groupsB.inside = fixMergedNonManifold(groupsB.inside);
	if (groupsB.outside.length > 0) groupsB.outside = fixMergedNonManifold(groupsB.outside);

	// Step 6) Deduplicate seam vertices
	if (groupsA.inside.length > 0) groupsA.inside = deduplicateSeamVertices(groupsA.inside, 1e-4);
	if (groupsA.outside.length > 0) groupsA.outside = deduplicateSeamVertices(groupsA.outside, 1e-4);
	if (groupsB.inside.length > 0) groupsB.inside = deduplicateSeamVertices(groupsB.inside, 1e-4);
	if (groupsB.outside.length > 0) groupsB.outside = deduplicateSeamVertices(groupsB.outside, 1e-4);

	// Step 7) Propagate normals for consistent winding
	if (groupsA.inside.length > 0) groupsA.inside = propagateNormals(groupsA.inside);
	if (groupsA.outside.length > 0) groupsA.outside = propagateNormals(groupsA.outside);
	if (groupsB.inside.length > 0) groupsB.inside = propagateNormals(groupsB.inside);
	if (groupsB.outside.length > 0) groupsB.outside = propagateNormals(groupsB.outside);

	// Translate results back to original coordinates
	return {
		groups: {
			aInside: translateSoup(groupsA.inside, cx, cy, cz),
			aOutside: translateSoup(groupsA.outside, cx, cy, cz),
			bInside: translateSoup(groupsB.inside, cx, cy, cz),
			bOutside: translateSoup(groupsB.outside, cx, cy, cz)
		},
		segments: taggedSegments
	};
}

/**
 * Merge split groups into a single result soup based on the operation type,
 * then weld and return the combined mesh.
 *
 * @param {{ aInside: Array, aOutside: Array, bInside: Array, bOutside: Array }} groups
 * @param {"subtract"|"union"|"intersect"} operation
 * @returns {{ soup: Array, points: Array, triangles: Array }|null}
 */
export function mergeSplitGroups(groups, operation) {
	var combined = [];

	if (operation === "subtract") {
		for (var ai = 0; ai < groups.aOutside.length; ai++) {
			combined.push(groups.aOutside[ai]);
		}
		var flippedBInside = flipSoup(groups.bInside);
		for (var bi = 0; bi < flippedBInside.length; bi++) {
			combined.push(flippedBInside[bi]);
		}
	} else if (operation === "union") {
		for (var ao = 0; ao < groups.aOutside.length; ao++) {
			combined.push(groups.aOutside[ao]);
		}
		for (var bo = 0; bo < groups.bOutside.length; bo++) {
			combined.push(groups.bOutside[bo]);
		}
	} else if (operation === "intersect") {
		for (var aii = 0; aii < groups.aInside.length; aii++) {
			combined.push(groups.aInside[aii]);
		}
		for (var bii = 0; bii < groups.bInside.length; bii++) {
			combined.push(groups.bInside[bii]);
		}
	} else {
		return null;
	}

	if (combined.length === 0) {
		return null;
	}

	// Step: Fix non-manifold edges in the combined mesh by removing the
	// triangle that causes the least damage (fewest new open edges).
	combined = fixMergedNonManifold(combined);

	var finalWelded = weldVertices(combined, 1e-4);
	return {
		soup: combined,
		points: finalWelded.points,
		triangles: finalWelded.triangles
	};
}

/**
 * Merge user-selected split groups into a single result.
 *
 * Each group can be independently included or excluded, and optionally
 * flipped (normals reversed). This is the "super flexible" counterpart
 * to mergeSplitGroups which hard-codes the classic boolean recipes.
 *
 * Selection object keys:
 *   aInside   {boolean|"flip"}  Include A-inside-B triangles; "flip" reverses normals
 *   aOutside  {boolean|"flip"}  Include A-outside-B triangles
 *   bInside   {boolean|"flip"}  Include B-inside-A triangles
 *   bOutside  {boolean|"flip"}  Include B-outside-A triangles
 *
 * Example — "chop top off a cylinder" (keep only A-outside-B):
 *   selectSplits(groups, { aOutside: true })
 *
 * Example — "knife through paper, keep both sides":
 *   selectSplits(groups, { aInside: true, aOutside: true })
 *
 * Example — classic subtract (A - B):
 *   selectSplits(groups, { aOutside: true, bInside: "flip" })
 *
 * @param {{ aInside: Array, aOutside: Array, bInside: Array, bOutside: Array }} groups
 * @param {{ aInside?: boolean|"flip", aOutside?: boolean|"flip", bInside?: boolean|"flip", bOutside?: boolean|"flip" }} selection
 * @returns {{ soup: Array, points: Array, triangles: Array }|null}
 */
export function selectSplits(groups, selection) {
	if (!groups || !selection) return null;
	var sel = selection;
	var combined = [];

	// Step 1) Collect selected groups, flipping where requested
	var groupNames = ["aInside", "aOutside", "bInside", "bOutside"];
	for (var g = 0; g < groupNames.length; g++) {
		var gName = groupNames[g];
		var flag = sel[gName];
		if (!flag) continue;
		var src = groups[gName];
		if (!src || src.length === 0) continue;

		if (flag === "flip") {
			var flipped = flipSoup(src);
			for (var fi = 0; fi < flipped.length; fi++) combined.push(flipped[fi]);
		} else {
			for (var si = 0; si < src.length; si++) combined.push(src[si]);
		}
	}

	if (combined.length === 0) return null;

	// Step 2) Fix non-manifold edges
	combined = fixMergedNonManifold(combined);

	// Step 3) Weld and return
	var finalWelded = weldVertices(combined, 1e-4);
	return {
		soup: combined,
		points: finalWelded.points,
		triangles: finalWelded.triangles
	};
}

/**
 * Decompose the 4 binary split groups into individual connected components.
 *
 * After splitMeshPair returns {aInside, aOutside, bInside, bOutside}, this
 * function finds the connected components within each group and returns a
 * flat array of component objects. For the "convoluted block crossing a
 * terrain twice" case this produces 9 components: 4 terrain pieces + 5
 * convoluted pieces.
 *
 * Each component carries metadata:
 *   mesh       "A" | "B"             — which input mesh it came from
 *   side       "inside" | "outside"  — relative to the other mesh
 *   index      number                — component index within its group
 *   soup       TriangleSoup          — the triangles
 *   triCount   number                — soup.length
 *
 * @param {{ aInside: Array, aOutside: Array, bInside: Array, bOutside: Array }} groups
 * @returns {Array<{ mesh: string, side: string, index: number, soup: Array, triCount: number }>}
 */
export function splitToComponents(groups) {
	if (!groups) return [];
	var result = [];

	var groupDefs = [
		{ key: "aInside",  mesh: "A", side: "inside"  },
		{ key: "aOutside", mesh: "A", side: "outside" },
		{ key: "bInside",  mesh: "B", side: "inside"  },
		{ key: "bOutside", mesh: "B", side: "outside" }
	];

	for (var g = 0; g < groupDefs.length; g++) {
		var def = groupDefs[g];
		var soup = groups[def.key];
		if (!soup || soup.length === 0) continue;

		var components = findConnectedComponents(soup);
		for (var c = 0; c < components.length; c++) {
			result.push({
				mesh: def.mesh,
				side: def.side,
				index: c,
				soup: components[c],
				triCount: components[c].length
			});
		}
	}

	return result;
}

/**
 * Merge tiny disconnected fragments into their nearest same-group sibling.
 *
 * After splitToComponents, classification noise can produce small stray
 * components within a binary group (e.g. A-inside).  This function absorbs
 * any component whose triangle count is below `threshold` into the nearest
 * larger component of the same (mesh, side) group, measured by centroid
 * Euclidean distance.
 *
 * @param {Array<{ mesh: string, side: string, index: number, soup: Array, triCount: number }>} comps
 * @param {number} [threshold=50] - max tri count to be considered "small"
 * @returns {Array<{ mesh: string, side: string, index: number, soup: Array, triCount: number }>}
 */
export function mergeSmallComponents(comps, threshold) {
	if (!comps || comps.length === 0) return comps;
	if (threshold === undefined || threshold === null) threshold = 50;

	// Step 1) Compute centroid for each component
	for (var ci = 0; ci < comps.length; ci++) {
		var cp = comps[ci];
		var sx = 0, sy = 0, sz = 0, n = 0;
		for (var ti = 0; ti < cp.soup.length; ti++) {
			var t = cp.soup[ti];
			sx += t.v0.x + t.v1.x + t.v2.x;
			sy += t.v0.y + t.v1.y + t.v2.y;
			sz += t.v0.z + t.v1.z + t.v2.z;
			n += 3;
		}
		cp._cx = n > 0 ? sx / n : 0;
		cp._cy = n > 0 ? sy / n : 0;
		cp._cz = n > 0 ? sz / n : 0;
	}

	// Step 2) Group by binary key (mesh + side)
	var groups = {};
	for (var gi = 0; gi < comps.length; gi++) {
		var gk = comps[gi].mesh + "|" + comps[gi].side;
		if (!groups[gk]) groups[gk] = [];
		groups[gk].push(gi);
	}

	// Step 3) For each group, absorb small components into nearest large sibling
	var absorbed = {};
	for (var gkey in groups) {
		var members = groups[gkey];
		var largeIdxs = [];
		var smallIdxs = [];
		for (var mi = 0; mi < members.length; mi++) {
			if (comps[members[mi]].triCount > threshold) {
				largeIdxs.push(members[mi]);
			} else {
				smallIdxs.push(members[mi]);
			}
		}
		if (largeIdxs.length === 0 || smallIdxs.length === 0) continue;

		for (var si = 0; si < smallIdxs.length; si++) {
			var sc = comps[smallIdxs[si]];
			var bestDist = Infinity;
			var bestIdx = largeIdxs[0];
			for (var li = 0; li < largeIdxs.length; li++) {
				var lc = comps[largeIdxs[li]];
				var dx = sc._cx - lc._cx;
				var dy = sc._cy - lc._cy;
				var dz = sc._cz - lc._cz;
				var d2 = dx * dx + dy * dy + dz * dz;
				if (d2 < bestDist) { bestDist = d2; bestIdx = largeIdxs[li]; }
			}
			// Absorb: append small soup into the large component
			var target = comps[bestIdx];
			for (var ai = 0; ai < sc.soup.length; ai++) {
				target.soup.push(sc.soup[ai]);
			}
			target.triCount += sc.triCount;
			absorbed[smallIdxs[si]] = true;
		}
	}

	// Step 4) Filter out absorbed components and re-index
	var out = [];
	var prevKey = "";
	var prevIdx = 0;
	for (var oi = 0; oi < comps.length; oi++) {
		if (absorbed[oi]) continue;
		var oc = comps[oi];
		var ok = oc.mesh + "|" + oc.side;
		if (ok !== prevKey) { prevIdx = 0; prevKey = ok; }
		oc.index = prevIdx++;
		delete oc._cx;
		delete oc._cy;
		delete oc._cz;
		out.push(oc);
	}
	return out;
}

/**
 * Merge an arbitrary list of component soups into a single welded result.
 *
 * Works with the output of splitToComponents — pass in the components the
 * user has selected (with optional flip flags).
 *
 * @param {Array<{ soup: Array, flip?: boolean }>} picks
 * @returns {{ soup: Array, points: Array, triangles: Array }|null}
 */
export function mergeComponents(picks) {
	if (!picks || picks.length === 0) return null;
	var combined = [];

	for (var i = 0; i < picks.length; i++) {
		var src = picks[i].soup;
		if (!src || src.length === 0) continue;

		if (picks[i].flip) {
			var flipped = flipSoup(src);
			for (var fi = 0; fi < flipped.length; fi++) combined.push(flipped[fi]);
		} else {
			for (var si = 0; si < src.length; si++) combined.push(src[si]);
		}
	}

	if (combined.length === 0) return null;
	combined = fixMergedNonManifold(combined);
	var finalWelded = weldVertices(combined, 1e-4);
	return {
		soup: combined,
		points: finalWelded.points,
		triangles: finalWelded.triangles
	};
}

/**
 * Detect non-manifold edges in a merged triangle soup and remove offending
 * triangles. For each non-manifold edge (shared by 3+ tris), pick the
 * triangle whose removal results in the best net open-edge change.
 *
 * @param {Array} soup - combined triangle soup (modified in-place)
 * @returns {Array} cleaned soup
 */
function fixMergedNonManifold(soup) {
	var PREC = 6;
	function vk2(v) {
		return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC);
	}
	function ek2(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

	var maxPasses = 5;
	for (var pass = 0; pass < maxPasses; pass++) {
		// Step 1) Build edge count map
		var edgeCnt = {};
		var triEdges = [];  // triEdges[i] = [ek0, ek1, ek2]
		for (var i = 0; i < soup.length; i++) {
			var t = soup[i];
			var k0 = vk2(t.v0), k1 = vk2(t.v1), k2 = vk2(t.v2);
			var e0 = ek2(k0, k1), e1 = ek2(k1, k2), e2 = ek2(k2, k0);
			triEdges.push([e0, e1, e2]);
			if (!edgeCnt[e0]) edgeCnt[e0] = [];
			edgeCnt[e0].push(i);
			if (!edgeCnt[e1]) edgeCnt[e1] = [];
			edgeCnt[e1].push(i);
			if (!edgeCnt[e2]) edgeCnt[e2] = [];
			edgeCnt[e2].push(i);
		}

		// Step 2) Find all non-manifold edges
		var nmEdges = [];
		for (var ek3 in edgeCnt) {
			if (edgeCnt[ek3].length > 2) nmEdges.push(ek3);
		}
		if (nmEdges.length === 0) break;

		// Step 3) For each non-manifold edge, evaluate removing each candidate
		var toRemove = {};
		for (var ni = 0; ni < nmEdges.length; ni++) {
			var nmTriIdxs = edgeCnt[nmEdges[ni]];
			var bestIdx = -1;
			var bestNet = Infinity;

			for (var ci = 0; ci < nmTriIdxs.length; ci++) {
				var ti = nmTriIdxs[ci];
				if (toRemove[ti]) continue;
				// Compute net open-edge change if we remove tri ti:
				// For each of its 3 edges:
				//   count==1 (open) -> 0: net -1 (lose an open edge)
				//   count==2 (manifold) -> 1: net +1 (gain an open edge)
				//   count>=3 (non-manifold) -> count-1: net 0
				var net = 0;
				var edges = triEdges[ti];
				for (var ei = 0; ei < 3; ei++) {
					var cnt = edgeCnt[edges[ei]].length;
					if (cnt === 1) net -= 1;
					else if (cnt === 2) net += 1;
					// count >= 3: no change in open edges
				}
				if (net < bestNet) {
					bestNet = net;
					bestIdx = ti;
				}
			}

			// Only remove if net change <= 0 (doesn't worsen open edges)
			if (bestIdx >= 0 && bestNet <= 0) {
				toRemove[bestIdx] = true;
			}
		}

		// Step 4) Remove marked triangles
		var removeList = [];
		for (var rk in toRemove) removeList.push(Number(rk));
		if (removeList.length === 0) break;
		removeList.sort(function(a, b) { return b - a; });
		for (var ri = 0; ri < removeList.length; ri++) {
			soup.splice(removeList[ri], 1);
		}
	}

	return soup;
}

/**
 * Perform a boolean operation on two triangle meshes.
 *
 * Internally calls splitMeshPair() to compute the 4 split groups,
 * then mergeSplitGroups() to combine based on the operation.
 *
 * Options (all optional):
 *   preRepair   {boolean}  Resolve T-junctions and weld boundary vertices
 *                          on both inputs before splitting. Default: false.
 *   fillGaps    {boolean}  After the boolean, fill closed open-edge loops
 *                          with fan triangles (fillOpenEdgeLoops). Default: false.
 *   forceClose  {boolean}  After the boolean, force-close using spatial-proximity
 *                          indexed fill (forceCloseIndexedMesh). Default: false.
 *   tolerance   {number}   Vertex snapping tolerance for pre-repair / fill.
 *                          Default: estimateAvgEdge * 0.01.
 *   tjunctionPasses {number} Max T-junction resolution passes. Default: 3.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupA
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupB
 * @param {"subtract"|"union"|"intersect"} operation
 * @param {Object} [options]
 * @returns {{ soup: Array, points: Array, triangles: Array }|null}
 */
export function boolean(soupA, soupB, operation, options) {
	if (!soupA || !soupB || soupA.length === 0 || soupB.length === 0) {
		return null;
	}

	var opts = options || {};

	// Step 1) Optional pre-repair: resolve T-junctions + weld boundary
	if (opts.preRepair) {
		var tolA = opts.tolerance !== undefined ? opts.tolerance : estimateAvgEdge(soupA) * 0.01;
		var tolB = opts.tolerance !== undefined ? opts.tolerance : estimateAvgEdge(soupB) * 0.01;
		var passes = opts.tjunctionPasses !== undefined ? opts.tjunctionPasses : 3;
		soupA = resolveTJunctions(soupA, tolA, passes);
		soupA = weldBoundaryVertices(soupA, tolA);
		soupB = resolveTJunctions(soupB, tolB, passes);
		soupB = weldBoundaryVertices(soupB, tolB);
	}

	// Step 2) Split meshes into inside/outside groups
	var split = splitMeshPair(soupA, soupB);
	if (!split) return null;

	// Step 3) Handle no-intersection case
	if (split.segments.length === 0) {
		var resultSoup;
		if (operation === "union") {
			resultSoup = soupA.concat(soupB);
		} else if (operation === "intersect") {
			return null;
		} else {
			resultSoup = soupA.slice();
		}
		var welded = weldVertices(resultSoup, 0);
		return { soup: resultSoup, points: welded.points, triangles: welded.triangles };
	}

	// Step 4) Merge groups based on operation
	var result = mergeSplitGroups(split.groups, operation);
	if (!result) return null;

	// Step 5) Optional post-repair: fill open-edge loops with fan triangles
	if (opts.fillGaps && result.soup) {
		var fillTol = opts.tolerance !== undefined ? opts.tolerance : 1e-6;
		result.soup = fillOpenEdgeLoops(result.soup, fillTol);
		var rw1 = weldVertices(result.soup, 1e-4);
		result.points = rw1.points;
		result.triangles = rw1.triangles;
	}

	// Step 6) Optional post-repair: force-close via indexed spatial fill
	if (opts.forceClose && result.soup) {
		var w = weldVertices(result.soup, 0.0001);
		var closed = forceCloseIndexedMesh(w.points, w.triangles);
		var newSoup = [];
		for (var ci = 0; ci < closed.triangles.length; ci++) {
			var cv = closed.triangles[ci].vertices;
			newSoup.push({
				v0: { x: cv[0].x, y: cv[0].y, z: cv[0].z },
				v1: { x: cv[1].x, y: cv[1].y, z: cv[1].z },
				v2: { x: cv[2].x, y: cv[2].y, z: cv[2].z }
			});
		}
		result.soup = newSoup;
		var rw2 = weldVertices(result.soup, 1e-4);
		result.points = rw2.points;
		result.triangles = rw2.triangles;
	}

	return result;
}
