/**
 * @module boolean/classifyTriangles
 *
 * Triangle classification for boolean operations. Uses Z-ray casting to
 * determine whether triangles lie inside or outside the other mesh, with
 * flood-fill propagation for efficient bulk classification and CDT-based
 * splitting for straddling (crossed) triangles.
 */

import { queryGrid } from "../intersect/spatialGrid.js";
import { retriangulateWithSteinerPoints } from "./splitTriangles.js";

/**
 * Classify a point as inside or outside the other surface using Z-ray casting.
 *
 * Casts a ray from the point in the +Z direction, counts how many triangles
 * of the other surface the ray passes through using barycentric coordinates.
 * Odd crossings = inside, even = outside.
 *
 * Works in all orientations:
 * - Closed solids (pit shells, extruded polygons): standard PIP in 3D
 * - Open terrain surfaces: ray from below crosses once = inside
 * - Vertical walls: automatically skipped (degenerate XY projection)
 *
 * @param {{ x: number, y: number, z: number }} point - Point to classify
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} otherGrid - Spatial grid over otherTris (XY-based)
 * @param {number} otherCellSize - Grid cell size
 * @returns {number} 1 = inside, -1 = outside
 */
export function classifyPointByRayCast(point, otherTris, otherGrid, otherCellSize) {
	var px = point.x, py = point.y, pz = point.z;

	// A +Z ray has fixed XY -- query grid cells containing (px, py)
	var bb = { minX: px, maxX: px, minY: py, maxY: py };
	var candidates = queryGrid(otherGrid, bb, otherCellSize);

	var count = 0;
	for (var c = 0; c < candidates.length; c++) {
		var tri = otherTris[candidates[c]];

		// Barycentric coordinates of (px, py) in triangle's XY projection
		var x0 = tri.v0.x, y0 = tri.v0.y;
		var x1 = tri.v1.x, y1 = tri.v1.y;
		var x2 = tri.v2.x, y2 = tri.v2.y;

		var d = (y1 - y2) * (x0 - x2) + (x2 - x1) * (y0 - y2);
		if (Math.abs(d) < 1e-12) continue; // degenerate XY -- vertical face or sliver

		var u = ((y1 - y2) * (px - x2) + (x2 - x1) * (py - y2)) / d;
		var v = ((y2 - y0) * (px - x2) + (x0 - x2) * (py - y2)) / d;
		var w = 1 - u - v;

		if (u < -1e-10 || v < -1e-10 || w < -1e-10) continue; // outside triangle

		// Interpolate Z at (px, py) on the triangle's plane
		var z = u * tri.v0.z + v * tri.v1.z + w * tri.v2.z;

		if (z > pz) count++; // intersection above the point
	}

	return (count % 2 === 1) ? 1 : -1;
}

/**
 * Classify triangles using flood fill from intersection boundary.
 *
 * Non-crossed triangles are partitioned into connected components via shared
 * edges (excluding edges shared with crossed triangles). Each component is
 * classified by a single seed triangle using ray casting against the other
 * surface, then that classification is propagated to the entire component.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup to classify
 * @param {Object} crossedMap - Map of triIndex -> [taggedSegments]
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} otherGrid - Spatial grid over otherTris
 * @param {number} otherCellSize - Grid cell size
 * @returns {Int8Array} Classification per triangle: 1=inside, -1=outside
 */
export function classifyByFloodFill(tris, crossedMap, otherTris, otherGrid, otherCellSize) {
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

		// Classify seed via ray casting against other surface
		var seedTri = tris[seed];
		var cx = (seedTri.v0.x + seedTri.v1.x + seedTri.v2.x) / 3;
		var cy = (seedTri.v0.y + seedTri.v1.y + seedTri.v2.y) / 3;
		var cz = (seedTri.v0.z + seedTri.v1.z + seedTri.v2.z) / 3;
		var seedClass = classifyPointByRayCast(
			{ x: cx, y: cy, z: cz },
			otherTris, otherGrid, otherCellSize
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
 * via ray casting against the other surface.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {Int8Array} classifications - Per-triangle classification (1=inside, -1=outside)
 * @param {Object} crossedMap - Map of triIndex -> [taggedSegments]
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} otherGrid - Spatial grid over otherTris
 * @param {number} otherCellSize - Grid cell size
 * @returns {{ inside: Array, outside: Array }} Classified triangle groups
 */
export function splitStraddlingAndClassify(tris, classifications, crossedMap, otherTris, otherGrid, otherCellSize) {
	var inside = [];
	var outside = [];

	for (var i = 0; i < tris.length; i++) {
		if (!crossedMap[i]) {
			// Non-crossed: use pre-computed classification
			if (classifications[i] === 1) {
				inside.push(tris[i]);
			} else {
				outside.push(tris[i]);
			}
			continue;
		}

		// Crossed triangle: re-triangulate with all intersection segment endpoints
		// as Steiner points. This handles large triangles crossed by many small ones.
		var segments = crossedMap[i];
		var current = retriangulateWithSteinerPoints(tris[i], segments);

		// Classify each sub-triangle via ray casting against other surface
		for (var j = 0; j < current.length; j++) {
			var sub = current[j];
			var cx = (sub.v0.x + sub.v1.x + sub.v2.x) / 3;
			var cy = (sub.v0.y + sub.v1.y + sub.v2.y) / 3;
			var cz = (sub.v0.z + sub.v1.z + sub.v2.z) / 3;
			var cls = classifyPointByRayCast(
				{ x: cx, y: cy, z: cz },
				otherTris, otherGrid, otherCellSize
			);
			if (cls === 1) {
				inside.push(sub);
			} else {
				outside.push(sub);
			}
		}
	}

	return { inside: inside, outside: outside };
}
