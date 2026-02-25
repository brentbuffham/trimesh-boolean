/**
 * @module boolean/booleanOp
 *
 * Main boolean operation entry point. Computes the union, intersection,
 * or subtraction of two triangle meshes using a classify-then-split
 * algorithm:
 *
 * 1. Find tagged intersection segments between mesh A and mesh B
 * 2. Build crossed-triangle sets from segment tags
 * 3. Build spatial grids for both meshes
 * 4. Classify via flood fill (BFS with ray-cast seeds)
 * 5. Split straddling triangles and classify sub-triangles
 * 6. Deduplicate seam vertices
 * 7. Propagate normals (BFS winding or Z-up fallback)
 * 8. Combine groups based on operation
 * 9. Return welded result
 */

import { intersectMeshPairTagged } from "../intersect/intersectMeshPair.js";
import { buildSpatialGrid, estimateAvgEdge } from "../intersect/spatialGrid.js";
import { classifyByFloodFill, splitStraddlingAndClassify } from "./classifyTriangles.js";
import { deduplicateSeamVertices } from "../repair/deduplicateVertices.js";
import { weldVertices, weldedToSoup } from "../repair/weldVertices.js";
import { ensureZUpNormals } from "../normals/alignNormals.js";
import { vKey } from "../util/math.js";

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
 * Perform a boolean operation on two triangle meshes.
 *
 * Algorithm:
 *   1. Find tagged intersection segments between soupA and soupB
 *   2. Build crossed triangle sets from segment tags
 *   3. Build spatial grids for both meshes
 *   4. Classify via flood fill
 *   5. Split straddling triangles and classify sub-triangles
 *   6. Deduplicate seam vertices
 *   7. Propagate normals for consistent winding
 *   8. Combine groups based on operation:
 *      - "subtract": A_outside + B_inside (B_inside normals flipped)
 *      - "union": A_outside + B_outside
 *      - "intersect": A_inside + B_inside
 *   9. Return welded result
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupA - First mesh triangle soup
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupB - Second mesh triangle soup
 * @param {"subtract"|"union"|"intersect"} operation - Boolean operation to perform
 * @returns {{ soup: Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>, points: Array<{x,y,z}>, triangles: Array<{ vertices: [{x,y,z},{x,y,z},{x,y,z}] }> }|null}
 *          Result mesh as soup and welded indexed form, or null if inputs are empty
 */
export function boolean(soupA, soupB, operation) {
	if (!soupA || !soupB || soupA.length === 0 || soupB.length === 0) {
		return null;
	}

	// Step 1) Get tagged intersection segments
	var taggedSegments = intersectMeshPairTagged(soupA, soupB);

	if (taggedSegments.length === 0) {
		// No intersection -- return appropriate result based on operation
		var resultSoup;
		if (operation === "union") {
			resultSoup = soupA.concat(soupB);
		} else if (operation === "intersect") {
			// No intersection means empty result
			return null;
		} else {
			// subtract: A minus nothing = A
			resultSoup = soupA.slice();
		}
		var welded = weldVertices(resultSoup, 0);
		return { soup: resultSoup, points: welded.points, triangles: welded.triangles };
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

	var gridA = buildSpatialGrid(soupA, cellSizeA);
	var gridB = buildSpatialGrid(soupB, cellSizeB);

	// Step 4) Flood-fill classify: each connected non-crossed region gets one seed
	var classA = classifyByFloodFill(soupA, crossedSetA, soupB, gridB, cellSizeB);
	var classB = classifyByFloodFill(soupB, crossedSetB, soupA, gridA, cellSizeA);

	// Step 5) Split straddling triangles and classify sub-triangles
	var groupsA = splitStraddlingAndClassify(soupA, classA, crossedSetA, soupB, gridB, cellSizeB);
	var groupsB = splitStraddlingAndClassify(soupB, classB, crossedSetB, soupA, gridA, cellSizeA);

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

	// Step 8) Combine groups based on operation
	var combined = [];

	if (operation === "subtract") {
		// A_outside + B_inside (with B_inside normals flipped)
		for (var ai = 0; ai < groupsA.outside.length; ai++) {
			combined.push(groupsA.outside[ai]);
		}
		var flippedBInside = flipSoup(groupsB.inside);
		for (var bi = 0; bi < flippedBInside.length; bi++) {
			combined.push(flippedBInside[bi]);
		}
	} else if (operation === "union") {
		// A_outside + B_outside
		for (var ao = 0; ao < groupsA.outside.length; ao++) {
			combined.push(groupsA.outside[ao]);
		}
		for (var bo = 0; bo < groupsB.outside.length; bo++) {
			combined.push(groupsB.outside[bo]);
		}
	} else if (operation === "intersect") {
		// A_inside + B_inside
		for (var aii = 0; aii < groupsA.inside.length; aii++) {
			combined.push(groupsA.inside[aii]);
		}
		for (var bii = 0; bii < groupsB.inside.length; bii++) {
			combined.push(groupsB.inside[bii]);
		}
	} else {
		return null;
	}

	if (combined.length === 0) {
		return null;
	}

	// Step 9) Final weld and return
	var finalWelded = weldVertices(combined, 1e-4);

	return {
		soup: combined,
		points: finalWelded.points,
		triangles: finalWelded.triangles
	};
}
