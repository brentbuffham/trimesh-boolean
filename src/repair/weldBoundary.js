/**
 * @module repair/weldBoundary
 *
 * Weld boundary vertices (open-edge endpoints) to nearby boundary vertices
 * using union-find clustering. This closes seam gaps by snapping open-edge
 * vertices to their nearest boundary neighbors.
 */

import { vKey, edgeKey } from "../util/math.js";

/**
 * Weld boundary vertices using union-find.
 * Only boundary vertices (those on edges with count === 1) are considered
 * for merging. Vertices within tolerance are clustered and replaced with
 * their centroid.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} tolerance - Max 3D distance to snap boundary vertices
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangle soup with boundary vertices merged
 */
export function weldBoundaryVertices(tris, tolerance) {
	if (tolerance <= 0) return tris;

	var edgeMap = {};
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var verts = [tri.v0, tri.v1, tri.v2];
		var keys = [vKey(verts[0]), vKey(verts[1]), vKey(verts[2])];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(keys[e], keys[ne]);
			if (!edgeMap[ek]) edgeMap[ek] = { count: 0, k0: keys[e], k1: keys[ne], v0: verts[e], v1: verts[ne] };
			edgeMap[ek].count++;
		}
	}

	var boundaryVerts = {};
	for (var ek2 in edgeMap) {
		if (edgeMap[ek2].count === 1) {
			boundaryVerts[edgeMap[ek2].k0] = edgeMap[ek2].v0;
			boundaryVerts[edgeMap[ek2].k1] = edgeMap[ek2].v1;
		}
	}

	var bvKeys = Object.keys(boundaryVerts);
	if (bvKeys.length === 0) return tris;

	var cellSize = Math.max(tolerance * 2, 0.01);
	var grid = {};
	var tolSq = tolerance * tolerance;

	for (var bi = 0; bi < bvKeys.length; bi++) {
		var bv = boundaryVerts[bvKeys[bi]];
		var gk = Math.floor(bv.x / cellSize) + "," + Math.floor(bv.y / cellSize) + "," + Math.floor(bv.z / cellSize);
		if (!grid[gk]) grid[gk] = [];
		grid[gk].push(bvKeys[bi]);
	}

	// Union-find
	var parent = {};
	for (var pi = 0; pi < bvKeys.length; pi++) {
		parent[bvKeys[pi]] = bvKeys[pi];
	}

	function find(k) {
		while (parent[k] !== k) {
			parent[k] = parent[parent[k]];
			k = parent[k];
		}
		return k;
	}

	function union(a, b) {
		var ra = find(a), rb = find(b);
		if (ra !== rb) parent[ra] = rb;
	}

	for (var si = 0; si < bvKeys.length; si++) {
		var sv = boundaryVerts[bvKeys[si]];
		var sgx = Math.floor(sv.x / cellSize);
		var sgy = Math.floor(sv.y / cellSize);
		var sgz = Math.floor(sv.z / cellSize);

		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var cell = grid[(sgx + dx) + "," + (sgy + dy) + "," + (sgz + dz)];
					if (!cell) continue;
					for (var ci = 0; ci < cell.length; ci++) {
						if (cell[ci] === bvKeys[si]) continue;
						var cv = boundaryVerts[cell[ci]];
						var ddx = sv.x - cv.x, ddy = sv.y - cv.y, ddz = sv.z - cv.z;
						if (ddx * ddx + ddy * ddy + ddz * ddz <= tolSq) {
							union(bvKeys[si], cell[ci]);
						}
					}
				}
			}
		}
	}

	// Build clusters and compute centroids
	var clusters = {};
	for (var ki = 0; ki < bvKeys.length; ki++) {
		var root = find(bvKeys[ki]);
		var v = boundaryVerts[bvKeys[ki]];
		if (!clusters[root]) {
			clusters[root] = { sumX: 0, sumY: 0, sumZ: 0, count: 0 };
		}
		clusters[root].sumX += v.x;
		clusters[root].sumY += v.y;
		clusters[root].sumZ += v.z;
		clusters[root].count++;
	}

	var mergeMap = {};
	var mergedCount = 0;
	for (var mi = 0; mi < bvKeys.length; mi++) {
		var root2 = find(bvKeys[mi]);
		var cl = clusters[root2];
		if (cl.count > 1) {
			mergeMap[bvKeys[mi]] = {
				x: cl.sumX / cl.count,
				y: cl.sumY / cl.count,
				z: cl.sumZ / cl.count
			};
			mergedCount++;
		}
	}

	if (mergedCount === 0) {
		return tris;
	}

	function remap(v2) {
		var k = vKey(v2);
		if (mergeMap[k]) return mergeMap[k];
		return v2;
	}

	var result = [];
	for (var ri = 0; ri < tris.length; ri++) {
		var rv0 = remap(tris[ri].v0);
		var rv1 = remap(tris[ri].v1);
		var rv2 = remap(tris[ri].v2);

		var k0 = vKey(rv0), k1 = vKey(rv1), k2 = vKey(rv2);
		if (k0 === k1 || k1 === k2 || k0 === k2) {
			continue;
		}

		result.push({ v0: rv0, v1: rv1, v2: rv2 });
	}

	return result;
}
