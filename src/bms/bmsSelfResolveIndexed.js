/**
 * @module bms/bmsSelfResolveIndexed
 *
 * INDEXED entry point for the exact fold resolver.
 *
 * In/out format mirrors indexGroupsToTypedArrays (v0.5.12):
 * `{ positions: Float64Array (world coords, xyz triplets), index: Uint32Array }`.
 *
 * It hydrates the indexed mesh to a soup and delegates to {@link bmsSelfResolve},
 * which runs the full pipeline: conforming self-arrangement (edge-Steiner
 * splits + near-vertex snap-round + seam weld) → region-consistent PATCH winding
 * classification → coincident dedup → outward orientation. The result is
 * re-indexed through a quantised vertex pool.
 *
 * NOTE: the earlier narrow-band variant (band-only split, far pass-through by
 * index) is superseded — the region-consistent patch classifier needs the whole
 * arrangement's barrier graph to avoid tearing, so it runs over the full soup.
 * For multi-million-triangle inputs, restoring a band-scoped patch classifier
 * (barrier graph confined to the dilated band, far field force-kept) is the
 * follow-up; correctness on the real 47k slice-solid comes first.
 */

import { bmsSelfResolve } from "./bmsSelfArrange.js";

/**
 * Resolve self-intersections (folds) of an indexed triangle mesh.
 *
 * @param {{ positions: Float64Array|number[], index: Uint32Array|number[] }} mesh
 *        World-coordinate positions (xyz triplets) + triangle index triples.
 * @param {Object} [options] - Forwarded to bmsSelfResolve (tolerance,
 *        minAreaRatio, threshold, weldTolerance, preOrient, orient, ...).
 * @returns {{
 *   positions: Float64Array, index: Uint32Array, changed: boolean,
 *   diagnostics: Object
 * }}
 */
export function bmsSelfResolveIndexed(mesh, options) {
	var opts = options || {};
	var positions = mesh.positions;
	var index = mesh.index;
	var triCount = (index.length / 3) | 0;

	if (triCount === 0) {
		return { positions: positions, index: index, changed: false, diagnostics: { inputTris: 0, outputTris: 0 } };
	}

	// Hydrate indexed → soup (bmsSelfResolve translates to a local origin itself).
	var soup = new Array(triCount);
	for (var t = 0; t < triCount; t++) {
		var a = index[t * 3] * 3, b = index[t * 3 + 1] * 3, c = index[t * 3 + 2] * 3;
		soup[t] = {
			v0: { x: positions[a], y: positions[a + 1], z: positions[a + 2] },
			v1: { x: positions[b], y: positions[b + 1], z: positions[b + 2] },
			v2: { x: positions[c], y: positions[c + 1], z: positions[c + 2] }
		};
	}

	var res = bmsSelfResolve(soup, opts);
	var diag = res.diagnostics || {};
	diag.inputTris = triCount;

	if (!res.changed) {
		diag.outputTris = triCount;
		return { positions: positions, index: index, changed: false, diagnostics: diag };
	}

	var reidx = indexResultSoup(res.soup, opts.tolerance !== undefined ? opts.tolerance : 1e-4);
	diag.outputTris = (reidx.index.length / 3) | 0;
	diag.newVertices = (reidx.positions.length / 3) | 0;

	return { positions: reidx.positions, index: reidx.index, changed: true, diagnostics: diag };
}

/**
 * Re-index a soup through a quantised (weld) vertex pool. Vertices within the
 * quantisation cell collapse to one index; degenerate triangles are dropped.
 * @param {Array<{v0,v1,v2}>} soup
 * @param {number} tol
 * @returns {{ positions: Float64Array, index: Uint32Array }}
 */
function indexResultSoup(soup, tol) {
	var inv = 1 / (tol > 0 ? tol : 1e-4);
	var map = new Map();
	var pts = [];
	var tris = [];
	function id(v) {
		var k = Math.round(v.x * inv) + "," + Math.round(v.y * inv) + "," + Math.round(v.z * inv);
		var i = map.get(k);
		if (i === undefined) { i = pts.length; pts.push(v); map.set(k, i); }
		return i;
	}
	for (var t = 0; t < soup.length; t++) {
		var a = id(soup[t].v0), b = id(soup[t].v1), c = id(soup[t].v2);
		if (a === b || b === c || c === a) continue;
		tris.push(a, b, c);
	}
	var positions = new Float64Array(pts.length * 3);
	for (var p = 0; p < pts.length; p++) {
		positions[p * 3] = pts[p].x;
		positions[p * 3 + 1] = pts[p].y;
		positions[p * 3 + 2] = pts[p].z;
	}
	return { positions: positions, index: new Uint32Array(tris) };
}
