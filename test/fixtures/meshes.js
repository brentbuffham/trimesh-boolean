/**
 * Test mesh fixtures — simple geometric shapes for unit tests.
 */

/**
 * Create a unit cube (1x1x1) centered at origin as triangle soup.
 * 12 triangles (6 faces x 2 triangles).
 */
export function createCube(cx, cy, cz, size) {
	if (cx === undefined) cx = 0;
	if (cy === undefined) cy = 0;
	if (cz === undefined) cz = 0;
	if (size === undefined) size = 1;

	var h = size / 2;
	var v = [
		{ x: cx - h, y: cy - h, z: cz - h }, // 0: ---
		{ x: cx + h, y: cy - h, z: cz - h }, // 1: +--
		{ x: cx + h, y: cy + h, z: cz - h }, // 2: ++-
		{ x: cx - h, y: cy + h, z: cz - h }, // 3: -+-
		{ x: cx - h, y: cy - h, z: cz + h }, // 4: --+
		{ x: cx + h, y: cy - h, z: cz + h }, // 5: +-+
		{ x: cx + h, y: cy + h, z: cz + h }, // 6: +++
		{ x: cx - h, y: cy + h, z: cz + h }  // 7: -++
	];

	function tri(a, b, c) {
		return {
			v0: { x: v[a].x, y: v[a].y, z: v[a].z },
			v1: { x: v[b].x, y: v[b].y, z: v[b].z },
			v2: { x: v[c].x, y: v[c].y, z: v[c].z }
		};
	}

	return [
		// Bottom (Z-)
		tri(0, 2, 1), tri(0, 3, 2),
		// Top (Z+)
		tri(4, 5, 6), tri(4, 6, 7),
		// Front (Y-)
		tri(0, 1, 5), tri(0, 5, 4),
		// Back (Y+)
		tri(2, 3, 7), tri(2, 7, 6),
		// Left (X-)
		tri(0, 4, 7), tri(0, 7, 3),
		// Right (X+)
		tri(1, 2, 6), tri(1, 6, 5)
	];
}

/**
 * Create an open terrain patch (flat quad split into triangles).
 * No side/bottom faces — genuinely open surface.
 */
export function createFlatPatch(cx, cy, z, width, depth, divisionsX, divisionsY) {
	if (cx === undefined) cx = 0;
	if (cy === undefined) cy = 0;
	if (z === undefined) z = 0;
	if (width === undefined) width = 10;
	if (depth === undefined) depth = 10;
	if (divisionsX === undefined) divisionsX = 2;
	if (divisionsY === undefined) divisionsY = 2;

	var soup = [];
	var dx = width / divisionsX;
	var dy = depth / divisionsY;
	var startX = cx - width / 2;
	var startY = cy - depth / 2;

	for (var ix = 0; ix < divisionsX; ix++) {
		for (var iy = 0; iy < divisionsY; iy++) {
			var x0 = startX + ix * dx;
			var y0 = startY + iy * dy;
			var x1 = x0 + dx;
			var y1 = y0 + dy;

			soup.push({
				v0: { x: x0, y: y0, z: z },
				v1: { x: x1, y: y0, z: z },
				v2: { x: x1, y: y1, z: z }
			});
			soup.push({
				v0: { x: x0, y: y0, z: z },
				v1: { x: x1, y: y1, z: z },
				v2: { x: x0, y: y1, z: z }
			});
		}
	}

	return soup;
}

/**
 * Create a wavy terrain patch (open surface with varying Z).
 */
export function createWavyPatch(cx, cy, baseZ, width, depth, divisions, amplitude) {
	if (cx === undefined) cx = 0;
	if (cy === undefined) cy = 0;
	if (baseZ === undefined) baseZ = 0;
	if (width === undefined) width = 10;
	if (depth === undefined) depth = 10;
	if (divisions === undefined) divisions = 4;
	if (amplitude === undefined) amplitude = 1;

	var soup = [];
	var dx = width / divisions;
	var dy = depth / divisions;
	var startX = cx - width / 2;
	var startY = cy - depth / 2;

	function zAt(x, y) {
		return baseZ + amplitude * Math.sin(x * 0.5) * Math.cos(y * 0.5);
	}

	for (var ix = 0; ix < divisions; ix++) {
		for (var iy = 0; iy < divisions; iy++) {
			var x0 = startX + ix * dx;
			var y0 = startY + iy * dy;
			var x1 = x0 + dx;
			var y1 = y0 + dy;

			soup.push({
				v0: { x: x0, y: y0, z: zAt(x0, y0) },
				v1: { x: x1, y: y0, z: zAt(x1, y0) },
				v2: { x: x1, y: y1, z: zAt(x1, y1) }
			});
			soup.push({
				v0: { x: x0, y: y0, z: zAt(x0, y0) },
				v1: { x: x1, y: y1, z: zAt(x1, y1) },
				v2: { x: x0, y: y1, z: zAt(x0, y1) }
			});
		}
	}

	return soup;
}

/**
 * Create a single triangle.
 */
export function createSingleTriangle(v0, v1, v2) {
	return [{
		v0: { x: v0.x, y: v0.y, z: v0.z },
		v1: { x: v1.x, y: v1.y, z: v1.z },
		v2: { x: v2.x, y: v2.y, z: v2.z }
	}];
}
