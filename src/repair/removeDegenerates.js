/**
 * @module repair/removeDegenerates
 *
 * Remove degenerate and sliver triangles from triangle soup.
 * Degenerate: area below minimum threshold.
 * Sliver: minimum altitude / maximum edge length below ratio threshold.
 */

import { triangleArea3D, dist3 } from "../util/math.js";

/**
 * Remove degenerate and sliver triangles from a triangle soup.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} [minArea=1e-6] - Minimum triangle area in square units
 * @param {number} [sliverRatio=0.01] - Min altitude / max edge threshold
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Filtered triangle soup
 */
export function removeDegenerateTriangles(tris, minArea, sliverRatio) {
	if (typeof minArea === "undefined") minArea = 1e-6;
	if (typeof sliverRatio === "undefined") sliverRatio = 0.01;

	var result = [];
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var area = triangleArea3D(tri);
		if (area < minArea) continue;
		var e0 = dist3(tri.v0, tri.v1);
		var e1 = dist3(tri.v1, tri.v2);
		var e2 = dist3(tri.v2, tri.v0);
		var maxEdge = Math.max(e0, e1, e2);
		if (maxEdge > 0) {
			var minAlt = (2 * area) / maxEdge;
			if (minAlt / maxEdge < sliverRatio) continue;
		}
		result.push(tri);
	}
	return result;
}
