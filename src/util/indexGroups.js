/**
 * @module util/indexGroups
 *
 * Convert the boolean split GROUPS ({v0,v1,v2} object soup) into a compact INDEXED
 * representation: one shared vertex pool + per-group triangles as [i,j,k] index
 * triples into that pool.
 *
 * Why: the soup form stores every triangle's three vertices as separate objects
 * (~5-10x heavier than indexed), so consumers that need to render/persist a
 * multi-million-triangle result are forced to re-dedupe it themselves — or run out
 * of memory. This returns the indexed twin ONCE, cheaply, sharing the pool ACROSS
 * all four groups so the seam between aInside/aOutside welds automatically.
 *
 * Back-compatible: this is additive. The soup `groups` are unchanged; callers opt
 * in (bmsBooleanOp `{ indexed: true }`) or call this directly on any soup groups.
 */

/**
 * @param {{ aInside?: Array, aOutside?: Array, bInside?: Array, bOutside?: Array }} groups
 *        soup groups ({ v0, v1, v2 } triangles)
 * @param {number} [tolerance=1e-4] - vertex-weld quantization (world units)
 * @returns {{
 *   points: Array<{x:number,y:number,z:number}>,
 *   groups: { aInside: number[][], aOutside: number[][], bInside: number[][], bOutside: number[][] }
 * }}
 */
export function indexGroups(groups, tolerance) {
	tolerance = tolerance || 1e-4;
	var inv = 1 / tolerance;
	var points = [];
	var map = new Map();

	function id(v) {
		// Quantized coordinate key. The groups are already seam-deduplicated upstream,
		// so value-identical vertices map to one index; genuinely distinct stay apart.
		var key = Math.round(v.x * inv) + "," + Math.round(v.y * inv) + "," + Math.round(v.z * inv);
		var i = map.get(key);
		if (i === undefined) { i = points.length; points.push({ x: v.x, y: v.y, z: v.z }); map.set(key, i); }
		return i;
	}

	var names = ["aInside", "aOutside", "bInside", "bOutside"];
	var out = { points: points, groups: { aInside: [], aOutside: [], bInside: [], bOutside: [] } };
	for (var g = 0; g < names.length; g++) {
		var arr = groups[names[g]] || [];
		var tris = out.groups[names[g]];
		for (var i = 0; i < arr.length; i++) {
			var t = arr[i];
			tris.push([id(t.v0), id(t.v1), id(t.v2)]);
		}
	}
	return out;
}

/**
 * Flatten indexed groups into typed arrays: one shared Float64Array of positions
 * and a Uint32Array of triangle indices per group. Convenient for transfer/GPU
 * upload. Positions are the SAME pool across all groups (indices are global).
 *
 * @param {ReturnType<typeof indexGroups>} indexed
 * @returns {{
 *   positions: Float64Array,
 *   index: { aInside: Uint32Array, aOutside: Uint32Array, bInside: Uint32Array, bOutside: Uint32Array }
 * }}
 */
export function indexGroupsToTypedArrays(indexed) {
	var pts = indexed.points;
	var positions = new Float64Array(pts.length * 3);
	for (var i = 0; i < pts.length; i++) {
		positions[i * 3] = pts[i].x;
		positions[i * 3 + 1] = pts[i].y;
		positions[i * 3 + 2] = pts[i].z;
	}
	var names = ["aInside", "aOutside", "bInside", "bOutside"];
	var index = {};
	for (var g = 0; g < names.length; g++) {
		var tris = indexed.groups[names[g]] || [];
		var arr = new Uint32Array(tris.length * 3);
		for (var t = 0; t < tris.length; t++) {
			arr[t * 3] = tris[t][0];
			arr[t * 3 + 1] = tris[t][1];
			arr[t * 3 + 2] = tris[t][2];
		}
		index[names[g]] = arr;
	}
	return { positions: positions, index: index };
}
