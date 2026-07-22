/**
 * @module repair/cancelCoincidentFaces
 *
 * Cancel EXACT opposite-winding coincident triangle pairs — the zero-thickness
 * internal "membranes" that a polygon/prism cut can leave behind when a grazing
 * cut welds a sub-tolerance sliver back onto the surface with the reverse winding.
 *
 * Two faces cancel iff, after a neighbourhood weld (shared integer identity), they
 * reference the SAME three vertices with OPPOSITE winding. Both faces are removed
 * (a zero-thickness lamina bounds no volume, so removing the pair preserves the
 * signed volume and — because the pair's edges were shared only by the two lamina
 * faces or by the lamina plus its host loop — does NOT open the mesh).
 *
 * This is deliberately STRICTER than removeOverlappingTriangles(), which matches by
 * centroid distance + anti-parallel normals + area ratio and can therefore delete
 * near-coincident but genuinely-distinct wall triangles (tearing holes). Same-winding
 * duplicates and degenerate faces are left untouched here — those belong to
 * deduplicateSeamVertices() / removeDegenerateTriangles().
 *
 * Identity uses a neighbourhood-weld integer pool (round(x/eps) checking the 27
 * neighbouring cells) rather than toFixed() string keys, so vertices that fall
 * either side of a quantisation boundary still weld to one id. Exact rationals are
 * deliberately NOT used for identity: welding is a tolerance operation, and two
 * floats that should be one vertex are almost never bit-identical.
 */

import { makeWeldPool, estimateWeldEps } from "./neighbourhoodPool.js";

/**
 * Remove zero-thickness opposite-winding coincident face pairs.
 *
 * @param {Array<{ v0:{x,y,z}, v1:{x,y,z}, v2:{x,y,z} }>} soup - Triangle soup
 * @param {number} [tolerance] - Weld tolerance in metres. Defaults to an estimate
 *                               from the mean edge length (~1e-6 of it) when omitted;
 *                               pass the caller's own weld epsilon for predictable results.
 * @returns {Array<{ v0:{x,y,z}, v1:{x,y,z}, v2:{x,y,z} }>} New soup with lamina pairs removed.
 */
export function cancelCoincidentFaces(soup, tolerance) {
	if (!soup || soup.length < 2) return soup ? soup.slice() : soup;

	var eps = tolerance > 0 ? tolerance : estimateWeldEps(soup);
	var pool = makeWeldPool(eps);

	// Face vertex-id triples (original coords are kept for output; the pool is
	// identity only — it never moves the emitted geometry).
	var F = new Array(soup.length);
	for (var i = 0; i < soup.length; i++) {
		var t = soup[i];
		F[i] = [
			pool.id(t.v0.x, t.v0.y, t.v0.z),
			pool.id(t.v1.x, t.v1.y, t.v1.z),
			pool.id(t.v2.x, t.v2.y, t.v2.z)
		];
	}

	// Winding-preserving canonical rotation key (smallest id first, order kept).
	function rot(a, b, c) {
		if (a <= b && a <= c) return a + "," + b + "," + c;
		if (b <= a && b <= c) return b + "," + c + "," + a;
		return c + "," + a + "," + b;
	}

	// Bucket non-degenerate faces by their own winding key.
	var byWinding = new Map();
	for (var j = 0; j < F.length; j++) {
		var f = F[j];
		if (f[0] === f[1] || f[1] === f[2] || f[2] === f[0]) continue; // degenerate: leave it
		var k = rot(f[0], f[1], f[2]);
		var b = byWinding.get(k);
		if (!b) { b = []; byWinding.set(k, b); }
		b.push(j);
	}

	// Mark each face dead once paired with an unused opposite-winding twin.
	var dead = new Uint8Array(F.length);
	for (var m = 0; m < F.length; m++) {
		if (dead[m]) continue;
		var fm = F[m];
		if (fm[0] === fm[1] || fm[1] === fm[2] || fm[2] === fm[0]) continue;
		var revKey = rot(fm[0], fm[2], fm[1]); // same 3 ids, reversed winding
		var cand = byWinding.get(revKey);
		if (!cand) continue;
		for (var q = 0; q < cand.length; q++) {
			var jj = cand[q];
			if (jj !== m && !dead[jj]) { dead[m] = 1; dead[jj] = 1; break; }
		}
	}

	var out = [];
	for (var r = 0; r < soup.length; r++) if (!dead[r]) out.push(soup[r]);
	return out;
}
