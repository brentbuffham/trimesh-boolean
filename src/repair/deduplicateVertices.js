/**
 * @module repair/deduplicateVertices
 *
 * Merge seam vertices at exact (within tolerance) positions.
 * CSG / split operations create duplicate vertices along seam edges —
 * this merges them so downstream edge-counting sees shared edges correctly.
 */

/**
 * Deduplicate triangle-soup vertices that share exact (within tolerance) positions.
 *
 * @param {Array} tris - Triangle soup [{v0,v1,v2}, ...]
 * @param {number} [tolerance=1e-4] - Distance tolerance
 * @returns {Array} Triangle soup with deduplicated vertices
 */
export function deduplicateSeamVertices(tris, tolerance) {
	if (!tris || tris.length === 0) return tris;
	if (tolerance === undefined) tolerance = 1e-4;

	var cellSize = tolerance * 3;
	var invCell = 1.0 / cellSize;
	var grid = {};
	var canonical = [];
	var mergedCount = 0;

	function getKey(x, y, z) {
		var cx = Math.floor(x * invCell);
		var cy = Math.floor(y * invCell);
		var cz = Math.floor(z * invCell);
		return cx + "," + cy + "," + cz;
	}

	function findOrRegister(vx, vy, vz) {
		var cx = Math.floor(vx * invCell);
		var cy = Math.floor(vy * invCell);
		var cz = Math.floor(vz * invCell);
		var tolSq = tolerance * tolerance;
		var bestDist = tolSq;
		var bestVert = null;

		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var key = (cx + dx) + "," + (cy + dy) + "," + (cz + dz);
					var bucket = grid[key];
					if (!bucket) continue;
					for (var b = 0; b < bucket.length; b++) {
						var cv = bucket[b];
						var ddx = cv.x - vx, ddy = cv.y - vy, ddz = cv.z - vz;
						var dSq = ddx * ddx + ddy * ddy + ddz * ddz;
						if (dSq < bestDist) {
							bestDist = dSq;
							bestVert = cv;
						}
					}
				}
			}
		}

		if (bestVert) {
			mergedCount++;
			return bestVert;
		}

		var newVert = { x: vx, y: vy, z: vz };
		var regKey = getKey(vx, vy, vz);
		if (!grid[regKey]) grid[regKey] = [];
		grid[regKey].push(newVert);
		canonical.push(newVert);
		return newVert;
	}

	var result = [];
	var degenerateRemoved = 0;

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var cv0 = findOrRegister(tri.v0.x, tri.v0.y, tri.v0.z);
		var cv1 = findOrRegister(tri.v1.x, tri.v1.y, tri.v1.z);
		var cv2 = findOrRegister(tri.v2.x, tri.v2.y, tri.v2.z);

		if (cv0 === cv1 || cv1 === cv2 || cv2 === cv0) {
			degenerateRemoved++;
			continue;
		}

		result.push({ v0: cv0, v1: cv1, v2: cv2 });
	}

	return result;
}
