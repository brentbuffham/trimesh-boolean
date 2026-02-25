/**
 * @module repair/cleanCrossing
 *
 * Remove duplicate/conflicting triangles that cause over-shared edges (count > 2).
 *
 * Two-pass approach:
 *   Pass 1: For each over-shared edge, sort triangles by area (largest first),
 *           mark the smallest for removal until only 2 remain per edge.
 *   Pass 2: Also remove exact fingerprint duplicates among remaining triangles.
 */

import { triangleArea3D, vKey, edgeKey } from "../util/math.js";

/**
 * Remove duplicate/conflicting triangles that cause over-shared edges.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Cleaned triangle soup
 */
export function cleanCrossingTriangles(tris) {
	var areas = [];
	var edgeToTris = {};
	var triKeys = [];

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		areas.push(triangleArea3D(tri));
		var k0 = vKey(tri.v0);
		var k1 = vKey(tri.v1);
		var k2 = vKey(tri.v2);
		triKeys.push([k0, k1, k2]);

		var edges = [edgeKey(k0, k1), edgeKey(k1, k2), edgeKey(k2, k0)];
		for (var e = 0; e < 3; e++) {
			if (!edgeToTris[edges[e]]) edgeToTris[edges[e]] = [];
			edgeToTris[edges[e]].push(i);
		}
	}

	var removeSet = {};

	for (var ek in edgeToTris) {
		var triList = edgeToTris[ek];
		if (triList.length <= 2) continue;

		var sorted = triList.slice().sort(function (a, b) { return areas[b] - areas[a]; });
		for (var r = 2; r < sorted.length; r++) {
			removeSet[sorted[r]] = true;
		}
	}

	var seenFingerprints = {};

	for (var j = 0; j < tris.length; j++) {
		if (removeSet[j]) continue;

		var keys = triKeys[j].slice().sort();
		var fingerprint = keys.join("||");
		if (seenFingerprints[fingerprint]) {
			removeSet[j] = true;
		} else {
			seenFingerprints[fingerprint] = true;
		}
	}

	var removedCount = Object.keys(removeSet).length;
	if (removedCount === 0) {
		return tris;
	}

	var result = [];
	for (var k = 0; k < tris.length; k++) {
		if (!removeSet[k]) {
			result.push(tris[k]);
		}
	}

	return result;
}
