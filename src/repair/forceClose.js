/**
 * @module repair/forceClose
 *
 * Force-close an indexed mesh using integer point indices.
 * Operates on the indexed mesh (after weld) to find boundary edges
 * and close them with zero floating-point precision issues.
 */

/**
 * Force-close an indexed mesh by filling boundary edges with fan triangles.
 * Uses integer point indices to avoid floating-point precision issues.
 *
 * @param {Array<{x: number, y: number, z: number}>} points - Vertex array
 * @param {Array<{ vertices: [{x,y,z},{x,y,z},{x,y,z}] }>} triangles - Indexed triangles
 * @returns {{ points: Array<{x,y,z}>, triangles: Array<{ vertices: [{x,y,z},{x,y,z},{x,y,z}] }> }}
 */
export function forceCloseIndexedMesh(points, triangles) {
	var ptIndex = {};
	for (var pi = 0; pi < points.length; pi++) {
		var pk = points[pi].x + "," + points[pi].y + "," + points[pi].z;
		ptIndex[pk] = pi;
	}

	var idxTris = [];
	for (var ti = 0; ti < triangles.length; ti++) {
		var v = triangles[ti].vertices;
		var i0 = ptIndex[v[0].x + "," + v[0].y + "," + v[0].z];
		var i1 = ptIndex[v[1].x + "," + v[1].y + "," + v[1].z];
		var i2 = ptIndex[v[2].x + "," + v[2].y + "," + v[2].z];
		if (i0 !== undefined && i1 !== undefined && i2 !== undefined) {
			idxTris.push([i0, i1, i2]);
		}
	}

	var cellSize = 2.0;
	var grid = {};
	for (var gi = 0; gi < points.length; gi++) {
		var gp = points[gi];
		var gk = Math.floor(gp.x / cellSize) + "," + Math.floor(gp.y / cellSize) + "," + Math.floor(gp.z / cellSize);
		if (!grid[gk]) grid[gk] = [];
		grid[gk].push(gi);
	}

	var totalAdded = 0;
	var maxPasses = 30;

	for (var pass = 0; pass < maxPasses; pass++) {
		var edgeMap = {};
		for (var ei = 0; ei < idxTris.length; ei++) {
			var t = idxTris[ei];
			for (var e = 0; e < 3; e++) {
				var a = t[e], b = t[(e + 1) % 3];
				var ek = a < b ? a + "|" + b : b + "|" + a;
				edgeMap[ek] = (edgeMap[ek] || 0) + 1;
			}
		}

		var boundaryEdges = [];
		for (var bek in edgeMap) {
			if (edgeMap[bek] === 1) {
				var parts = bek.split("|");
				boundaryEdges.push([parseInt(parts[0]), parseInt(parts[1])]);
			}
		}

		if (boundaryEdges.length === 0) {
			break;
		}

		var newTris = [];
		var usedEdges = {};

		for (var bi = 0; bi < boundaryEdges.length; bi++) {
			var be = boundaryEdges[bi];
			var beKey = be[0] < be[1] ? be[0] + "|" + be[1] : be[1] + "|" + be[0];
			if (usedEdges[beKey]) continue;

			var p0 = points[be[0]];
			var p1 = points[be[1]];
			var mid = {
				x: (p0.x + p1.x) / 2,
				y: (p0.y + p1.y) / 2,
				z: (p0.z + p1.z) / 2
			};

			var mgx = Math.floor(mid.x / cellSize);
			var mgy = Math.floor(mid.y / cellSize);
			var mgz = Math.floor(mid.z / cellSize);

			var bestIdx = -1;
			var bestDist = Infinity;

			for (var dx = -1; dx <= 1; dx++) {
				for (var dy = -1; dy <= 1; dy++) {
					for (var dz = -1; dz <= 1; dz++) {
						var cell = grid[(mgx + dx) + "," + (mgy + dy) + "," + (mgz + dz)];
						if (!cell) continue;
						for (var ci = 0; ci < cell.length; ci++) {
							var cIdx = cell[ci];
							if (cIdx === be[0] || cIdx === be[1]) continue;

							var cp = points[cIdx];
							var ddx = mid.x - cp.x, ddy = mid.y - cp.y, ddz = mid.z - cp.z;
							var d2 = ddx * ddx + ddy * ddy + ddz * ddz;
							if (d2 >= bestDist) continue;

							var ek0 = be[0] < cIdx ? be[0] + "|" + cIdx : cIdx + "|" + be[0];
							var ek1 = be[1] < cIdx ? be[1] + "|" + cIdx : cIdx + "|" + be[1];
							if ((edgeMap[ek0] || 0) >= 2) continue;
							if ((edgeMap[ek1] || 0) >= 2) continue;

							var abx = p1.x - p0.x, aby = p1.y - p0.y, abz = p1.z - p0.z;
							var acx = cp.x - p0.x, acy = cp.y - p0.y, acz = cp.z - p0.z;
							var cx2 = aby * acz - abz * acy;
							var cy2 = abz * acx - abx * acz;
							var cz2 = abx * acy - aby * acx;
							var area = cx2 * cx2 + cy2 * cy2 + cz2 * cz2;
							if (area < 1e-12) continue;

							bestIdx = cIdx;
							bestDist = d2;
						}
					}
				}
			}

			if (bestIdx >= 0) {
				idxTris.push([be[0], be[1], bestIdx]);
				newTris.push([be[0], be[1], bestIdx]);
				usedEdges[beKey] = true;

				var nek0 = be[0] < bestIdx ? be[0] + "|" + bestIdx : bestIdx + "|" + be[0];
				var nek1 = be[1] < bestIdx ? be[1] + "|" + bestIdx : bestIdx + "|" + be[1];
				edgeMap[nek0] = (edgeMap[nek0] || 0) + 1;
				edgeMap[nek1] = (edgeMap[nek1] || 0) + 1;
				edgeMap[beKey] = 2;
			}
		}

		if (newTris.length === 0) {
			break;
		}

		totalAdded += newTris.length;
	}

	var outTris = [];
	for (var oi = 0; oi < idxTris.length; oi++) {
		var t2 = idxTris[oi];
		outTris.push({
			vertices: [
				{ x: points[t2[0]].x, y: points[t2[0]].y, z: points[t2[0]].z },
				{ x: points[t2[1]].x, y: points[t2[1]].y, z: points[t2[1]].z },
				{ x: points[t2[2]].x, y: points[t2[2]].y, z: points[t2[2]].z }
			]
		});
	}

	return { points: points, triangles: outTris };
}
