/**
 * @module repair/neighbourhoodPool
 *
 * Neighbourhood-weld vertex identity pool.
 *
 * A robust replacement for toFixed()-string vertex keys when you need "are these
 * two vertices the same point (within eps)?" identity. Plain grid quantisation
 * (round(x/eps)) MISSES welds when two near-coincident points straddle a cell
 * boundary; toFixed() has the same boundary bug (1.0000004 -> "1.000000" but
 * 1.0000006 -> "1.000001"). This pool buckets by cell but, before minting a new
 * id, searches the 27 neighbouring cells for an existing vertex within eps — so
 * boundary-straddling points still resolve to one id.
 *
 * Identity only. The pool stores the first coordinate seen for each id and never
 * moves geometry; callers decide whether to emit original or representative coords.
 *
 * NOTE: this is a tolerance-weld, deliberately NOT exact-rational identity — two
 * floats that should be one vertex are almost never bit-identical, so exact
 * equality would split them. Use exact predicates (orient3d/determinant3) for
 * orientation SIGNS, not for fuzzy identity.
 */

/**
 * @param {number} eps - Weld radius in metres. Two vertices within eps collapse to one id.
 * @returns {{ id: (x:number,y:number,z:number)=>number, points: Array<{x,y,z}>, size: ()=>number }}
 */
export function makeWeldPool(eps) {
	var cell = eps > 0 ? eps : 1e-6; // bucket size == weld radius; ±1 cell search covers the eps ball
	var inv = 1 / cell;
	var grid = new Map(); // "gx,gy,gz" -> array of vertex ids
	var pts = [];
	var eps2 = cell * cell;

	function id(x, y, z) {
		var gx = Math.floor(x * inv), gy = Math.floor(y * inv), gz = Math.floor(z * inv);
		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var arr = grid.get((gx + dx) + "," + (gy + dy) + "," + (gz + dz));
					if (!arr) continue;
					for (var i = 0; i < arr.length; i++) {
						var p = pts[arr[i]];
						var ddx = p.x - x, ddy = p.y - y, ddz = p.z - z;
						if (ddx * ddx + ddy * ddy + ddz * ddz <= eps2) return arr[i];
					}
				}
			}
		}
		var nid = pts.length;
		pts.push({ x: x, y: y, z: z });
		var hk = gx + "," + gy + "," + gz;
		var b = grid.get(hk);
		if (!b) { b = []; grid.set(hk, b); }
		b.push(nid);
		return nid;
	}

	return { id: id, points: pts, size: function () { return pts.length; } };
}

/**
 * Estimate a sensible weld epsilon from a soup's mean edge length (~1e-6 of it),
 * for callers that don't supply their own tolerance. Sampled over the first N tris.
 *
 * @param {Array<{ v0, v1, v2 }>} soup
 * @returns {number} A small positive epsilon in metres.
 */
export function estimateWeldEps(soup) {
	if (!soup || soup.length === 0) return 1e-6;
	var n = Math.min(soup.length, 200);
	var sum = 0, cnt = 0;
	for (var i = 0; i < n; i++) {
		var t = soup[i];
		sum += edgeLen(t.v0, t.v1) + edgeLen(t.v1, t.v2) + edgeLen(t.v2, t.v0);
		cnt += 3;
	}
	var avg = cnt > 0 ? sum / cnt : 1;
	var eps = avg * 1e-6;
	return eps > 0 ? eps : 1e-6;
}

function edgeLen(a, b) {
	var dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
	return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
