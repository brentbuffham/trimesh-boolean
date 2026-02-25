/**
 * @module normals/classifyDirection
 *
 * Classify the normal direction of a triangle mesh.
 * Includes volume computation, projected area, and surface area.
 */

import { triNormal } from "./triNormal.js";

/**
 * Classify normal direction of a triangle mesh.
 *
 * For closed solids: uses signed volume to determine "Out" (outward-facing)
 * or "In" (inward-facing).
 *
 * For open surfaces: computes area-weighted average normal to determine
 * dominant axis (Z+, Z-, Y+, Y-, X+, X-), or "Aligned" if consistent
 * but not axis-dominant, or "Chaos" if normals are inconsistent.
 *
 * @param {Array} tris - Triangle soup
 * @param {boolean} isClosed - Whether the mesh is closed
 * @param {number} signedVolume - Signed volume from divergence theorem
 * @returns {string} Classification label
 */
export function classifyNormalDirection(tris, isClosed, signedVolume) {
	if (tris.length === 0) return "N/A";

	var sumNx = 0, sumNy = 0, sumNz = 0;
	var totalArea = 0;

	for (var i = 0; i < tris.length; i++) {
		var v0 = tris[i].v0, v1 = tris[i].v1, v2 = tris[i].v2;
		var ux = v1.x - v0.x, uy = v1.y - v0.y, uz = v1.z - v0.z;
		var vx = v2.x - v0.x, vy = v2.y - v0.y, vz = v2.z - v0.z;
		var cx = uy * vz - uz * vy;
		var cy = uz * vx - ux * vz;
		var cz = ux * vy - uy * vx;
		var area = 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
		if (area < 1e-12) continue;

		sumNx += cx * 0.5;
		sumNy += cy * 0.5;
		sumNz += cz * 0.5;
		totalArea += area;
	}

	if (totalArea < 1e-12) return "N/A";

	if (isClosed) {
		if (signedVolume > 1e-6) return "Out";
		if (signedVolume < -1e-6) return "In";
	}

	var avgLen = Math.sqrt(sumNx * sumNx + sumNy * sumNy + sumNz * sumNz);
	var consistency = avgLen / totalArea;

	if (consistency < 0.15) {
		if (signedVolume > 1e-6) return isClosed ? "Out" : "~Out";
		if (signedVolume < -1e-6) return isClosed ? "In" : "~In";
		return "Chaos";
	}

	var nx = sumNx / avgLen;
	var ny = sumNy / avgLen;
	var nz = sumNz / avgLen;

	var ax = Math.abs(nx), ay = Math.abs(ny), az = Math.abs(nz);

	if (az > 0.7 && az >= ax && az >= ay) {
		return nz > 0 ? "Z+" : "Z-";
	}
	if (ax > 0.7 && ax >= ay && ax >= az) {
		return nx > 0 ? "X+" : "X-";
	}
	if (ay > 0.7 && ay >= ax && ay >= az) {
		return ny > 0 ? "Y+" : "Y-";
	}

	if (consistency > 0.5) return "Aligned";

	return "Chaos";
}

/**
 * Compute signed mesh volume from triangle soup using divergence theorem.
 * Translates to local centroid to avoid floating-point issues with large coordinates.
 *
 * @param {Array} tris - Triangle soup [{v0, v1, v2}, ...]
 * @returns {number} Signed volume (positive = outward normals)
 */
export function computeSignedVolume(tris) {
	if (tris.length === 0) return 0;

	var cx = 0, cy = 0, cz = 0;
	var n = tris.length;
	for (var c = 0; c < n; c++) {
		cx += tris[c].v0.x + tris[c].v1.x + tris[c].v2.x;
		cy += tris[c].v0.y + tris[c].v1.y + tris[c].v2.y;
		cz += tris[c].v0.z + tris[c].v1.z + tris[c].v2.z;
	}
	var inv = 1.0 / (n * 3);
	cx *= inv; cy *= inv; cz *= inv;

	var vol = 0;
	for (var i = 0; i < n; i++) {
		var x0 = tris[i].v0.x - cx, y0 = tris[i].v0.y - cy, z0 = tris[i].v0.z - cz;
		var x1 = tris[i].v1.x - cx, y1 = tris[i].v1.y - cy, z1 = tris[i].v1.z - cz;
		var x2 = tris[i].v2.x - cx, y2 = tris[i].v2.y - cy, z2 = tris[i].v2.z - cz;

		vol += (x0 * (y1 * z2 - y2 * z1)
			- x1 * (y0 * z2 - y2 * z0)
			+ x2 * (y0 * z1 - y1 * z0)) / 6.0;
	}

	return vol;
}

/**
 * Compute projected footprint area onto a plane.
 * Only includes front-facing triangles to avoid double-counting.
 *
 * @param {Array} tris - Triangle soup
 * @param {"xy"|"yz"|"xz"} plane
 * @returns {number} Projected footprint area
 */
export function computeProjectedArea(tris, plane) {
	var area = 0;

	for (var i = 0; i < tris.length; i++) {
		var v0 = tris[i].v0;
		var v1 = tris[i].v1;
		var v2 = tris[i].v2;
		var n = triNormal(tris[i]);

		if (plane === "xy") {
			if (n.z <= 0) continue;
			var cross2d = (v1.x - v0.x) * (v2.y - v0.y) - (v2.x - v0.x) * (v1.y - v0.y);
			area += Math.abs(cross2d) / 2.0;
		} else if (plane === "yz") {
			if (n.x <= 0) continue;
			var cross2d2 = (v1.y - v0.y) * (v2.z - v0.z) - (v2.y - v0.y) * (v1.z - v0.z);
			area += Math.abs(cross2d2) / 2.0;
		} else if (plane === "xz") {
			if (n.y <= 0) continue;
			var cross2d3 = (v1.x - v0.x) * (v2.z - v0.z) - (v2.x - v0.x) * (v1.z - v0.z);
			area += Math.abs(cross2d3) / 2.0;
		}
	}

	return area;
}

/**
 * Compute true 3D surface area (sum of actual triangle areas).
 *
 * @param {Array} tris - Triangle soup
 * @returns {number} Total surface area
 */
export function compute3DSurfaceArea(tris) {
	var area = 0;

	for (var i = 0; i < tris.length; i++) {
		var v0 = tris[i].v0;
		var v1 = tris[i].v1;
		var v2 = tris[i].v2;

		var ux = v1.x - v0.x, uy = v1.y - v0.y, uz = v1.z - v0.z;
		var vx = v2.x - v0.x, vy = v2.y - v0.y, vz = v2.z - v0.z;

		var cx = uy * vz - uz * vy;
		var cy = uz * vx - ux * vz;
		var cz = ux * vy - uy * vx;

		area += 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
	}

	return area;
}
