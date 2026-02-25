/**
 * @module repair/removeOverlapping
 *
 * Remove overlapping anti-parallel internal wall triangles.
 *
 * Detection: Two triangles overlap when:
 *   - Their centroids are within tolerance in 3D
 *   - Their normals are nearly anti-parallel (dot product < -0.5)
 *   - They have similar areas (ratio > 0.3)
 */

import { dist3 } from "../util/math.js";

/**
 * Remove overlapping triangles that form internal walls.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} [tolerance=0.5] - Max centroid distance to consider overlap
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Cleaned triangle soup
 */
export function removeOverlappingTriangles(tris, tolerance) {
	if (typeof tolerance === "undefined") tolerance = 0.5;

	var centroids = [];
	var normals = [];
	var areas = [];

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		centroids.push({
			x: (tri.v0.x + tri.v1.x + tri.v2.x) / 3,
			y: (tri.v0.y + tri.v1.y + tri.v2.y) / 3,
			z: (tri.v0.z + tri.v1.z + tri.v2.z) / 3
		});
		var ux = tri.v1.x - tri.v0.x, uy = tri.v1.y - tri.v0.y, uz = tri.v1.z - tri.v0.z;
		var vx = tri.v2.x - tri.v0.x, vy = tri.v2.y - tri.v0.y, vz = tri.v2.z - tri.v0.z;
		var nx = uy * vz - uz * vy;
		var ny = uz * vx - ux * vz;
		var nz = ux * vy - uy * vx;
		var nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
		if (nLen > 0) { nx /= nLen; ny /= nLen; nz /= nLen; }
		normals.push({ x: nx, y: ny, z: nz });
		areas.push(0.5 * nLen);
	}

	var cellSize = Math.max(tolerance * 2, 0.1);
	var grid = {};

	function gKey(c) {
		return Math.floor(c.x / cellSize) + "," + Math.floor(c.y / cellSize) + "," + Math.floor(c.z / cellSize);
	}

	for (var gi = 0; gi < tris.length; gi++) {
		var gk = gKey(centroids[gi]);
		if (!grid[gk]) grid[gk] = [];
		grid[gk].push(gi);
	}

	var removeSet = {};

	for (var si = 0; si < tris.length; si++) {
		if (removeSet[si]) continue;

		var sc = centroids[si];
		var gx = Math.floor(sc.x / cellSize);
		var gy = Math.floor(sc.y / cellSize);
		var gz = Math.floor(sc.z / cellSize);

		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var cell = grid[(gx + dx) + "," + (gy + dy) + "," + (gz + dz)];
					if (!cell) continue;

					for (var ci = 0; ci < cell.length; ci++) {
						var ti = cell[ci];
						if (ti <= si || removeSet[ti]) continue;

						var cdist = dist3(sc, centroids[ti]);
						if (cdist > tolerance) continue;

						var areaRatio = Math.min(areas[si], areas[ti]) / Math.max(areas[si], areas[ti]);
						if (areaRatio < 0.3) continue;

						var dot = normals[si].x * normals[ti].x +
							normals[si].y * normals[ti].y +
							normals[si].z * normals[ti].z;

						if (dot < -0.5) {
							if (areas[si] <= areas[ti]) {
								removeSet[si] = true;
							} else {
								removeSet[ti] = true;
							}
						} else if (dot > 0.5) {
							if (areas[si] <= areas[ti]) {
								removeSet[si] = true;
							} else {
								removeSet[ti] = true;
							}
						}
					}
				}
			}
		}
	}

	var removedCount = Object.keys(removeSet).length;
	if (removedCount === 0) {
		return tris;
	}

	var result = [];
	for (var ri = 0; ri < tris.length; ri++) {
		if (!removeSet[ri]) result.push(tris[ri]);
	}

	return result;
}
