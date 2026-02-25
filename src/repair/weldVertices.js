/**
 * @module repair/weldVertices
 *
 * Weld triangle soup into indexed mesh, merging vertices within tolerance.
 * Uses spatial grid for O(n) welding instead of O(n^2).
 */

/**
 * Weld triangle soup into indexed mesh, merging vertices within tolerance.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} tolerance - Distance tolerance for merging vertices
 * @returns {{ points: Array<{x,y,z}>, triangles: Array<{ vertices: [{x,y,z},{x,y,z},{x,y,z}] }> }}
 */
export function weldVertices(tris, tolerance) {
	var points = [];
	var triangles = [];

	if (tolerance <= 0) {
		for (var i = 0; i < tris.length; i++) {
			var tri = tris[i];
			points.push(
				{ x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
				{ x: tri.v1.x, y: tri.v1.y, z: tri.v1.z },
				{ x: tri.v2.x, y: tri.v2.y, z: tri.v2.z }
			);
			triangles.push({
				vertices: [
					{ x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
					{ x: tri.v1.x, y: tri.v1.y, z: tri.v1.z },
					{ x: tri.v2.x, y: tri.v2.y, z: tri.v2.z }
				]
			});
		}
		return { points: points, triangles: triangles };
	}

	var cellSize = Math.max(tolerance * 2, 0.002);
	var grid = {};
	var tolSq = tolerance * tolerance;

	function getOrAddPoint(v) {
		var gx = Math.floor(v.x / cellSize);
		var gy = Math.floor(v.y / cellSize);
		var gz = Math.floor(v.z / cellSize);

		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var key = (gx + dx) + "," + (gy + dy) + "," + (gz + dz);
					var cell = grid[key];
					if (!cell) continue;
					for (var c = 0; c < cell.length; c++) {
						var p = points[cell[c]];
						var ddx = p.x - v.x, ddy = p.y - v.y, ddz = p.z - v.z;
						if (ddx * ddx + ddy * ddy + ddz * ddz <= tolSq) {
							return cell[c];
						}
					}
				}
			}
		}

		var idx = points.length;
		points.push({ x: v.x, y: v.y, z: v.z });
		var homeKey = gx + "," + gy + "," + gz;
		if (!grid[homeKey]) grid[homeKey] = [];
		grid[homeKey].push(idx);
		return idx;
	}

	for (var i2 = 0; i2 < tris.length; i2++) {
		var tri2 = tris[i2];
		var i0 = getOrAddPoint(tri2.v0);
		var i1 = getOrAddPoint(tri2.v1);
		var i22 = getOrAddPoint(tri2.v2);

		if (i0 === i1 || i1 === i22 || i0 === i22) continue;

		triangles.push({
			vertices: [
				{ x: points[i0].x, y: points[i0].y, z: points[i0].z },
				{ x: points[i1].x, y: points[i1].y, z: points[i1].z },
				{ x: points[i22].x, y: points[i22].y, z: points[i22].z }
			]
		});
	}

	return { points: points, triangles: triangles };
}

/**
 * Convert welded {vertices} format back to {v0, v1, v2} soup.
 *
 * @param {Array<{ vertices: [{x,y,z},{x,y,z},{x,y,z}] }>} weldedTriangles
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangle soup
 */
export function weldedToSoup(weldedTriangles) {
	var soup = [];
	for (var i = 0; i < weldedTriangles.length; i++) {
		var verts = weldedTriangles[i].vertices;
		soup.push({
			v0: { x: verts[0].x, y: verts[0].y, z: verts[0].z },
			v1: { x: verts[1].x, y: verts[1].y, z: verts[1].z },
			v2: { x: verts[2].x, y: verts[2].y, z: verts[2].z }
		});
	}
	return soup;
}
