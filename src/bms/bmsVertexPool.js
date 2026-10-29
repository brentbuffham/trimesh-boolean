/**
 * @module bms/bmsVertexPool
 *
 * Shared vertex pool with spatial hash deduplication.
 * Points within tolerance get merged to the same object reference.
 * Each pool vertex tracks which triangles from which mesh reference it.
 *
 * This is the foundation of the BMS pipeline — shared Steiner points
 * between both meshes are guaranteed by identity (===), not by
 * toFixed string matching.
 */

/**
 * @typedef {Object} PoolVertex
 * @property {number} x
 * @property {number} y
 * @property {number} z
 * @property {number} id - Unique integer ID for adjacency maps
 * @property {Array<{mesh: string, triIdx: number}>} triRefs - Which triangles reference this point
 */

/**
 * Create a shared vertex pool with spatial hash deduplication.
 *
 * @param {number} tolerance - Points within this distance get merged
 * @returns {{
 *   getOrCreate: function(number, number, number, {mesh: string, triIdx: number}=): PoolVertex,
 *   getAll: function(): PoolVertex[],
 *   size: function(): number
 * }}
 */
export function createVertexPool(tolerance) {
	var cellSize = tolerance * 2;
	if (cellSize < 1e-12) cellSize = 1e-6;

	// Cells are keyed by a 32-bit hash of their integer coordinates in a Map,
	// not a "cx,cy,cz" string: the 27-cell search built 27 strings per
	// lookup, which dominated large builds. Cells that share a hash share a
	// bucket; that only costs distance checks, never correctness, because
	// every candidate is tested against the real tolerance.
	/** @type {Map<number, PoolVertex[]>} */
	var grid = new Map();
	var allVertices = [];
	var nextId = 0;
	var tolSq = tolerance * tolerance;

	/**
	 * Hash integer cell coordinates (any size; ToInt32 wraps) to a cell key.
	 * @param {number} cx
	 * @param {number} cy
	 * @param {number} cz
	 * @returns {number}
	 */
	function cellHash(cx, cy, cz) {
		var h = Math.imul(cx | 0, 0x9E3779B1) ^ Math.imul(cy | 0, 0x85EBCA6B) ^ Math.imul(cz | 0, 0xC2B2AE35);
		h ^= h >>> 15;
		return Math.imul(h, 0x2C1B3C6D) >>> 0;
	}

	/**
	 * Hash a point into a cell key.
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @returns {number}
	 */
	function cellKey(x, y, z) {
		return cellHash(Math.floor(x / cellSize), Math.floor(y / cellSize), Math.floor(z / cellSize));
	}

	/**
	 * How far from a coordinate a vertex inside tolerance can sit, for choosing cells:
	 * the tolerance, a hair more, and a few ulps of the coordinate itself (the distance
	 * test and the cell index are both rounded, and a UTM easting has ulps near 1e-9).
	 * @param {number} v
	 * @returns {number}
	 */
	function reach(v) {
		return tolerance * 1.000001 + Math.abs(v) * 2e-15;
	}

	/**
	 * Search the cells a tolerance ball around the point can touch for the
	 * nearest existing vertex within tolerance. Cells are two tolerances wide,
	 * so that is 2 cells per axis (8 in all), not the 27 around the point's own
	 * cell. The cells are visited in the same ascending order, so among equally
	 * near vertices the same one wins.
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @returns {PoolVertex|null}
	 */
	function findNearest(x, y, z) {
		var rx = reach(x), ry = reach(y), rz = reach(z);
		var x0 = Math.floor((x - rx) / cellSize), x1 = Math.floor((x + rx) / cellSize);
		var y0 = Math.floor((y - ry) / cellSize), y1 = Math.floor((y + ry) / cellSize);
		var z0 = Math.floor((z - rz) / cellSize), z1 = Math.floor((z + rz) / cellSize);

		var bestDist = tolSq;
		var bestVert = null;

		for (var cx = x0; cx <= x1; cx++) {
			for (var cy = y0; cy <= y1; cy++) {
				for (var cz = z0; cz <= z1; cz++) {
					var bucket = grid.get(cellHash(cx, cy, cz));
					if (!bucket) continue;
					for (var i = 0; i < bucket.length; i++) {
						var v = bucket[i];
						var ex = v.x - x, ey = v.y - y, ez = v.z - z;
						var d2 = ex * ex + ey * ey + ez * ez;
						if (d2 < bestDist) {
							bestDist = d2;
							bestVert = v;
						}
					}
				}
			}
		}

		return bestVert;
	}

	/**
	 * Look up or insert a point. If a point within tolerance exists,
	 * return it (and optionally append the triRef). Otherwise create
	 * a new pool vertex.
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @param {{mesh: string, triIdx: number}} [triRef] - Optional triangle reference
	 * @returns {PoolVertex}
	 */
	function getOrCreate(x, y, z, triRef) {
		var existing = findNearest(x, y, z);
		if (existing) {
			if (triRef) {
				// Don't add duplicate triRefs
				var dominated = false;
				for (var i = 0; i < existing.triRefs.length; i++) {
					var r = existing.triRefs[i];
					if (r.mesh === triRef.mesh && r.triIdx === triRef.triIdx) {
						dominated = true;
						break;
					}
				}
				if (!dominated) {
					existing.triRefs.push(triRef);
				}
			}
			return existing;
		}

		// Create new pool vertex
		var vertex = {
			x: x,
			y: y,
			z: z,
			id: nextId++,
			triRefs: triRef ? [triRef] : []
		};

		// Insert into spatial hash
		var key = cellKey(x, y, z);
		var cell = grid.get(key);
		if (cell) cell.push(vertex);
		else grid.set(key, [vertex]);

		allVertices.push(vertex);
		return vertex;
	}

	/**
	 * Return all pool vertices.
	 * @returns {PoolVertex[]}
	 */
	function getAll() {
		return allVertices;
	}

	/**
	 * Return the number of unique vertices in the pool.
	 * @returns {number}
	 */
	function size() {
		return allVertices.length;
	}

	return {
		getOrCreate: getOrCreate,
		getAll: getAll,
		size: size
	};
}
