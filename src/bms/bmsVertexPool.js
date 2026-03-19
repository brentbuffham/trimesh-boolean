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

	/** @type {Object.<string, PoolVertex[]>} */
	var grid = {};
	var allVertices = [];
	var nextId = 0;
	var tolSq = tolerance * tolerance;

	/**
	 * Hash a point into a cell key.
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @returns {string}
	 */
	function cellKey(x, y, z) {
		var cx = Math.floor(x / cellSize);
		var cy = Math.floor(y / cellSize);
		var cz = Math.floor(z / cellSize);
		return cx + "," + cy + "," + cz;
	}

	/**
	 * Search the 27 neighboring cells for the nearest existing vertex
	 * within tolerance.
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @returns {PoolVertex|null}
	 */
	function findNearest(x, y, z) {
		var cx = Math.floor(x / cellSize);
		var cy = Math.floor(y / cellSize);
		var cz = Math.floor(z / cellSize);

		var bestDist = tolSq;
		var bestVert = null;

		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var key = (cx + dx) + "," + (cy + dy) + "," + (cz + dz);
					var bucket = grid[key];
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
		if (!grid[key]) grid[key] = [];
		grid[key].push(vertex);

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
