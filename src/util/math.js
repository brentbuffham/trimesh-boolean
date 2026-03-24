/**
 * @module util/math
 *
 * Core math utilities for triangle mesh operations.
 */

/**
 * 3D Euclidean distance between two points.
 * @param {{ x: number, y: number, z: number }} a
 * @param {{ x: number, y: number, z: number }} b
 * @returns {number}
 */
export function dist3(a, b) {
	var dx = a.x - b.x;
	var dy = a.y - b.y;
	var dz = a.z - b.z;
	return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Squared 3D distance (avoids sqrt for comparisons).
 * @param {{ x: number, y: number, z: number }} a
 * @param {{ x: number, y: number, z: number }} b
 * @returns {number}
 */
export function distSq3(a, b) {
	var dx = a.x - b.x;
	var dy = a.y - b.y;
	var dz = a.z - b.z;
	return dx * dx + dy * dy + dz * dz;
}

/**
 * Compute the area of a triangle in 3D using the cross-product method.
 * @param {{ v0: Object, v1: Object, v2: Object }} tri
 * @returns {number} Area in square units
 */
export function triangleArea3D(tri) {
	var ux = tri.v1.x - tri.v0.x;
	var uy = tri.v1.y - tri.v0.y;
	var uz = tri.v1.z - tri.v0.z;
	var vx = tri.v2.x - tri.v0.x;
	var vy = tri.v2.y - tri.v0.y;
	var vz = tri.v2.z - tri.v0.z;
	var cx = uy * vz - uz * vy;
	var cy = uz * vx - ux * vz;
	var cz = ux * vy - uy * vx;
	return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
}

/**
 * Compute axis-aligned bounding box from an array of points.
 * @param {Array<{ x: number, y: number, z: number }>} points
 * @returns {{ minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number }}
 */
export function computeBounds(points) {
	var minX = Infinity, minY = Infinity, minZ = Infinity;
	var maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
	for (var i = 0; i < points.length; i++) {
		var p = points[i];
		if (p.x < minX) minX = p.x;
		if (p.y < minY) minY = p.y;
		if (p.z < minZ) minZ = p.z;
		if (p.x > maxX) maxX = p.x;
		if (p.y > maxY) maxY = p.y;
		if (p.z > maxZ) maxZ = p.z;
	}
	return { minX: minX, maxX: maxX, minY: minY, maxY: maxY, minZ: minZ, maxZ: maxZ };
}

/**
 * Cross product of two 3D vectors.
 * @param {{ x: number, y: number, z: number }} a
 * @param {{ x: number, y: number, z: number }} b
 * @returns {{ x: number, y: number, z: number }}
 */
export function cross(a, b) {
	return {
		x: a.y * b.z - a.z * b.y,
		y: a.z * b.x - a.x * b.z,
		z: a.x * b.y - a.y * b.x
	};
}

/**
 * Linearly interpolate between two vertices.
 * @param {{ x: number, y: number, z: number }} a
 * @param {{ x: number, y: number, z: number }} b
 * @param {number} t - Interpolation factor [0, 1]
 * @returns {{ x: number, y: number, z: number }}
 */
export function lerpVert(a, b, t) {
	return {
		x: a.x + t * (b.x - a.x),
		y: a.y + t * (b.y - a.y),
		z: a.z + t * (b.z - a.z)
	};
}

/**
 * Standard vertex key for spatial hashing (6 decimal places).
 * @param {{ x: number, y: number, z: number }} v
 * @returns {string}
 */
export function vKey(v) {
	return v.x.toFixed(6) + "," + v.y.toFixed(6) + "," + v.z.toFixed(6);
}

/**
 * Canonical edge key (order-independent).
 * @param {string} ka - Vertex key A
 * @param {string} kb - Vertex key B
 * @returns {string}
 */
export function edgeKey(ka, kb) {
	return ka < kb ? ka + "|" + kb : kb + "|" + ka;
}

/**
 * Compute shared centroid of two triangle soups.
 */
export function soupCentroid(soupA, soupB) {
	var sx = 0, sy = 0, sz = 0, n = 0;
	for (var i = 0; i < soupA.length; i++) {
		var t = soupA[i];
		sx += t.v0.x + t.v1.x + t.v2.x;
		sy += t.v0.y + t.v1.y + t.v2.y;
		sz += t.v0.z + t.v1.z + t.v2.z;
		n += 3;
	}
	for (var j = 0; j < soupB.length; j++) {
		var t2 = soupB[j];
		sx += t2.v0.x + t2.v1.x + t2.v2.x;
		sy += t2.v0.y + t2.v1.y + t2.v2.y;
		sz += t2.v0.z + t2.v1.z + t2.v2.z;
		n += 3;
	}
	return { x: sx / n, y: sy / n, z: sz / n };
}

/**
 * Translate a triangle soup by an offset.
 */
export function translateSoup(soup, dx, dy, dz) {
	var out = new Array(soup.length);
	for (var i = 0; i < soup.length; i++) {
		var t = soup[i];
		out[i] = {
			v0: { x: t.v0.x + dx, y: t.v0.y + dy, z: t.v0.z + dz },
			v1: { x: t.v1.x + dx, y: t.v1.y + dy, z: t.v1.z + dz },
			v2: { x: t.v2.x + dx, y: t.v2.y + dy, z: t.v2.z + dz }
		};
	}
	return out;
}

/**
 * Count open (boundary) and non-manifold (over-shared) edges in a triangle soup.
 * @param {Array} tris - Array of {v0, v1, v2}
 * @returns {{ openEdges: number, overShared: number, total: number }}
 */
export function countOpenEdges(tris) {
	var edgeMap = {};

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var verts = [tri.v0, tri.v1, tri.v2];
		var keys = [vKey(verts[0]), vKey(verts[1]), vKey(verts[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(keys[e], keys[ne]);
			if (!edgeMap[ek]) {
				edgeMap[ek] = 0;
			}
			edgeMap[ek]++;
		}
	}

	var openEdges = 0;
	var overShared = 0;
	var total = 0;

	for (var ek2 in edgeMap) {
		total++;
		if (edgeMap[ek2] === 1) {
			openEdges++;
		} else if (edgeMap[ek2] > 2) {
			overShared++;
		}
	}

	return { openEdges: openEdges, overShared: overShared, total: total };
}
