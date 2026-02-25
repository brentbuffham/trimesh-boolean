/**
 * @module normals/alignNormals
 *
 * Ensure triangle normals point in the +Z direction (Z-up convention).
 * Used as a fallback when BFS winding propagation cannot be applied
 * (non-manifold meshes).
 */

import { triNormal } from "./triNormal.js";

/**
 * Flip any downward-facing triangles so their normals point Z-up.
 *
 * For each triangle, computes the face normal via cross product.
 * If the Z component is negative (below the -0.01 threshold), the
 * winding order is reversed (v1 and v2 swapped) to flip the normal
 * upward.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangle soup with Z-up normals
 */
export function ensureZUpNormals(tris) {
	var result = [];

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var v0 = { x: tri.v0.x, y: tri.v0.y, z: tri.v0.z };
		var v1 = { x: tri.v1.x, y: tri.v1.y, z: tri.v1.z };
		var v2 = { x: tri.v2.x, y: tri.v2.y, z: tri.v2.z };

		var n = triNormal({ v0: v0, v1: v1, v2: v2 });

		if (n.z < -0.01) {
			// Downward-facing -- swap v1 and v2 to flip normal
			result.push({ v0: v0, v1: v2, v2: v1 });
		} else {
			result.push({ v0: v0, v1: v1, v2: v2 });
		}
	}

	return result;
}

/**
 * Flip all triangle normals unconditionally by swapping v1 and v2.
 * Returns a NEW cloned array — never modifies the original.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Cloned array with all normals inverted
 */
export function flipAllNormals(tris) {
	var result = [];

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		result.push({
			v0: { x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
			v1: { x: tri.v2.x, y: tri.v2.y, z: tri.v2.z },
			v2: { x: tri.v1.x, y: tri.v1.y, z: tri.v1.z }
		});
	}

	return result;
}
