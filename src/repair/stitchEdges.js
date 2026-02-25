/**
 * @module repair/stitchEdges
 *
 * Stitch open boundary edges that are close in 3D space.
 * Finds individual boundary edge endpoints within tolerance and
 * connects them with quads (2 triangles each).
 */

import { dist3, vKey, edgeKey } from "../util/math.js";

/**
 * Stitch open boundary edges that are close in 3D space.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} [stitchTolerance=1.0] - Max 3D distance to connect boundary edges
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Additional stitch triangles
 */
export function stitchByProximity(tris, stitchTolerance) {
	if (typeof stitchTolerance === "undefined") stitchTolerance = 1.0;

	var edgeMap = {};
	var halfEdges = {};

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var verts = [tri.v0, tri.v1, tri.v2];
		var keys = [vKey(verts[0]), vKey(verts[1]), vKey(verts[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(keys[e], keys[ne]);
			if (!edgeMap[ek]) {
				edgeMap[ek] = { count: 0, v0: verts[e], v1: verts[ne], k0: keys[e], k1: keys[ne] };
			}
			edgeMap[ek].count++;
			halfEdges[keys[e] + "|" + keys[ne]] = true;
		}
	}

	var boundaryEdges = [];
	for (var ek2 in edgeMap) {
		if (edgeMap[ek2].count === 1) {
			var be = edgeMap[ek2];
			if (halfEdges[be.k0 + "|" + be.k1]) {
				boundaryEdges.push({ v0: be.v1, v1: be.v0, k0: be.k1, k1: be.k0 });
			} else {
				boundaryEdges.push({ v0: be.v0, v1: be.v1, k0: be.k0, k1: be.k1 });
			}
		}
	}

	if (boundaryEdges.length === 0) {
		return [];
	}

	var cellSize = Math.max(stitchTolerance * 3, 0.1);
	var vertGrid = {};

	function gridKey(v) {
		var gx = Math.floor(v.x / cellSize);
		var gy = Math.floor(v.y / cellSize);
		var gz = Math.floor(v.z / cellSize);
		return gx + "," + gy + "," + gz;
	}

	for (var bi = 0; bi < boundaryEdges.length; bi++) {
		var bEdge = boundaryEdges[bi];
		for (var vi = 0; vi < 2; vi++) {
			var vert = vi === 0 ? bEdge.v0 : bEdge.v1;
			var gk = gridKey(vert);
			if (!vertGrid[gk]) vertGrid[gk] = [];
			vertGrid[gk].push({ edgeIdx: bi, vertIdx: vi, vertex: vert });
		}
	}

	var usedEdges = {};
	var extraTris = [];

	for (var si = 0; si < boundaryEdges.length; si++) {
		if (usedEdges[si]) continue;
		var srcEdge = boundaryEdges[si];

		var bestMatch = -1;
		var bestTotalDist = Infinity;
		var bestFlip = false;

		var gx0 = Math.floor(srcEdge.v0.x / cellSize);
		var gy0 = Math.floor(srcEdge.v0.y / cellSize);
		var gz0 = Math.floor(srcEdge.v0.z / cellSize);

		var candidates = {};
		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var checkKey = (gx0 + dx) + "," + (gy0 + dy) + "," + (gz0 + dz);
					var cell = vertGrid[checkKey];
					if (!cell) continue;
					for (var ci = 0; ci < cell.length; ci++) {
						var cand = cell[ci];
						if (cand.edgeIdx === si || usedEdges[cand.edgeIdx]) continue;
						candidates[cand.edgeIdx] = true;
					}
				}
			}
		}

		for (var candIdx in candidates) {
			var candEdge = boundaryEdges[candIdx];

			var d00 = dist3(srcEdge.v0, candEdge.v0);
			var d11 = dist3(srcEdge.v1, candEdge.v1);
			var d01 = dist3(srcEdge.v0, candEdge.v1);
			var d10 = dist3(srcEdge.v1, candEdge.v0);

			var totalSame = d00 + d11;
			var totalFlip = d01 + d10;

			if (totalSame <= totalFlip) {
				if (d00 <= stitchTolerance && d11 <= stitchTolerance && totalSame < bestTotalDist) {
					bestMatch = parseInt(candIdx);
					bestTotalDist = totalSame;
					bestFlip = false;
				}
			} else {
				if (d01 <= stitchTolerance && d10 <= stitchTolerance && totalFlip < bestTotalDist) {
					bestMatch = parseInt(candIdx);
					bestTotalDist = totalFlip;
					bestFlip = true;
				}
			}
		}

		if (bestMatch >= 0) {
			var matchEdge = boundaryEdges[bestMatch];
			usedEdges[si] = true;
			usedEdges[bestMatch] = true;

			var mV0 = bestFlip ? matchEdge.v1 : matchEdge.v0;
			var mV1 = bestFlip ? matchEdge.v0 : matchEdge.v1;

			extraTris.push({ v0: srcEdge.v0, v1: srcEdge.v1, v2: mV0 });
			extraTris.push({ v0: srcEdge.v1, v1: mV1, v2: mV0 });
		}
	}

	return extraTris;
}
