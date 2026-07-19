/**
 * @module classify/windingNumber
 *
 * Generalized winding number (Jacobson, Kavan & Sorkine-Hornung 2013):
 * the sum of signed solid angles of every triangle w.r.t. a query point,
 * divided by 4π. Real-valued, robust to open arcs, flipped patches and
 * coincident double sheets — the classifier that discrete even-odd
 * parity cannot match on self-intersecting mining meshes.
 *
 * Used by the self-intersection fold resolver: after the self-arrangement
 * re-cuts every fold, sub-triangles are KEPT only where the winding
 * number STEPS across 0.5 between their two sides (the outer boundary of
 * the solid region); interior double sheets (w >= 1 on both sides) and
 * free flaps (w < 0.5 on both sides) are dropped.
 *
 * This is the DIRECT O(M) sum per query — correctness first. A Barnes-Hut
 * fast-winding-number tree (Barill et al. 2018) can replace the inner
 * loop later without changing any caller.
 */

import { vKey, edgeKey } from "../util/math.js";

var FOUR_PI = 4 * Math.PI;

/**
 * Signed solid angle of triangle (a, b, c) as seen from point p.
 * Van Oosterom & Strackee (1983) — numerically stable atan2 form.
 *
 * Positive when the triangle's CCW winding faces the point (the point is
 * on the side its geometric normal points toward).
 *
 * @returns {number} Solid angle in steradians (0 when p lies on a vertex)
 */
export function solidAngleAt(px, py, pz, ax, ay, az, bx, by, bz, cx, cy, cz) {
	var Ax = ax - px, Ay = ay - py, Az = az - pz;
	var Bx = bx - px, By = by - py, Bz = bz - pz;
	var Cx = cx - px, Cy = cy - py, Cz = cz - pz;

	var la = Math.sqrt(Ax * Ax + Ay * Ay + Az * Az);
	var lb = Math.sqrt(Bx * Bx + By * By + Bz * Bz);
	var lc = Math.sqrt(Cx * Cx + Cy * Cy + Cz * Cz);
	if (la < 1e-30 || lb < 1e-30 || lc < 1e-30) return 0;

	// det [A B C] — triple product
	var det = Ax * (By * Cz - Bz * Cy) - Ay * (Bx * Cz - Bz * Cx) + Az * (Bx * Cy - By * Cx);

	var ab = Ax * Bx + Ay * By + Az * Bz;
	var bc = Bx * Cx + By * Cy + Bz * Cz;
	var ca = Cx * Ax + Cy * Ay + Cz * Az;

	var den = la * lb * lc + ab * lc + bc * la + ca * lb;

	return 2 * Math.atan2(det, den);
}

/**
 * Signed solid angle of a soup triangle as seen from point p.
 *
 * @param {{x,y,z}} p
 * @param {{ v0: Object, v1: Object, v2: Object }} tri
 * @returns {number}
 */
export function solidAngle(p, tri) {
	return solidAngleAt(
		p.x, p.y, p.z,
		tri.v0.x, tri.v0.y, tri.v0.z,
		tri.v1.x, tri.v1.y, tri.v1.z,
		tri.v2.x, tri.v2.y, tri.v2.z
	);
}

/**
 * Generalized winding number of a point w.r.t. a triangle soup.
 * +1 inside a closed outward-oriented surface, 0 outside; real-valued
 * (fractional) for open or defective surfaces; 2 inside a double sheet.
 *
 * @param {{x,y,z}} p
 * @param {Array<{ v0, v1, v2 }>} soup
 * @returns {number}
 */
export function windingNumber(p, soup) {
	var sum = 0;
	for (var i = 0; i < soup.length; i++) {
		sum += solidAngle(p, soup[i]);
	}
	return sum / FOUR_PI;
}

/**
 * Generalized winding number over an INDEXED mesh — iterates raw typed
 * arrays, no triangle objects (the multi-million-triangle path).
 *
 * @param {number} px @param {number} py @param {number} pz
 * @param {Float64Array|number[]} positions - [x0,y0,z0, x1,y1,z1, ...]
 * @param {Uint32Array|number[]} index - triangle vertex indices, 3 per tri
 * @returns {number}
 */
export function windingNumberIndexed(px, py, pz, positions, index) {
	var sum = 0;
	for (var i = 0; i < index.length; i += 3) {
		var a = index[i] * 3, b = index[i + 1] * 3, c = index[i + 2] * 3;
		sum += solidAngleAt(
			px, py, pz,
			positions[a], positions[a + 1], positions[a + 2],
			positions[b], positions[b + 1], positions[b + 2],
			positions[c], positions[c + 1], positions[c + 2]
		);
	}
	return sum / FOUR_PI;
}

/**
 * Winding-number STEP extraction — stage 4 of the self-intersection
 * resolver. For each candidate sub-triangle, evaluate the winding number
 * a small distance off each side of its centroid (w.r.t. the ORIGINAL
 * un-arranged mesh, supplied as `windingFn`):
 *
 *   - both sides outside (w < threshold)  → free flap        → DROP
 *   - both sides inside  (w >= threshold) → interior sheet   → DROP
 *   - winding steps across the threshold  → solid boundary   → KEEP,
 *     oriented so the face normal points at the OUTSIDE (w < threshold).
 *
 * @param {Array<{ v0, v1, v2 }>} subTris - Arranged sub-triangles to classify
 * @param {function(number, number, number): number} windingFn - w(px,py,pz)
 *        w.r.t. the original mesh (windingNumber / windingNumberIndexed
 *        closure, or a fast-winding-number tree later)
 * @param {Object} [options]
 * @param {number} [options.threshold=0.5] - Inside/outside winding cut
 * @param {number} [options.offsetFactor=1e-3] - Query offset = factor x sqrt(triArea)
 * @returns {{
 *   kept: Array, dropped: number, flipped: number,
 *   keptFlags: Uint8Array, flipFlags: Uint8Array
 * }} kept triangles preserve vertex object references (flips swap v1/v2
 *    but keep the same objects); mesh/origIdx tags are carried over.
 */
export function extractByWinding(subTris, windingFn, options) {
	var opts = options || {};
	var threshold = opts.threshold !== undefined ? opts.threshold : 0.5;
	var offsetFactor = opts.offsetFactor !== undefined ? opts.offsetFactor : 1e-3;

	var kept = [];
	var dropped = 0;
	var flipped = 0;
	var keptFlags = new Uint8Array(subTris.length);
	var flipFlags = new Uint8Array(subTris.length);

	for (var i = 0; i < subTris.length; i++) {
		var t = subTris[i];

		var e1x = t.v1.x - t.v0.x, e1y = t.v1.y - t.v0.y, e1z = t.v1.z - t.v0.z;
		var e2x = t.v2.x - t.v0.x, e2y = t.v2.y - t.v0.y, e2z = t.v2.z - t.v0.z;
		var nx = e1y * e2z - e1z * e2y;
		var ny = e1z * e2x - e1x * e2z;
		var nz = e1x * e2y - e1y * e2x;
		var nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
		if (nLen < 1e-30) { dropped++; continue; } // degenerate

		nx /= nLen; ny /= nLen; nz /= nLen;
		var area = nLen * 0.5;
		var delta = Math.sqrt(area) * offsetFactor;
		if (delta < 1e-12) delta = 1e-12;

		var cx = (t.v0.x + t.v1.x + t.v2.x) / 3;
		var cy = (t.v0.y + t.v1.y + t.v2.y) / 3;
		var cz = (t.v0.z + t.v1.z + t.v2.z) / 3;

		var wFront = windingFn(cx + nx * delta, cy + ny * delta, cz + nz * delta);
		var wBack = windingFn(cx - nx * delta, cy - ny * delta, cz - nz * delta);

		var outFront = wFront < threshold;
		var outBack = wBack < threshold;

		if (outFront === outBack) { dropped++; continue; }

		keptFlags[i] = 1;
		if (outFront) {
			kept.push(t);
		} else {
			// Flip so the normal points at the outside — reuse vertex objects.
			var f = { v0: t.v0, v1: t.v2, v2: t.v1 };
			if (t.mesh !== undefined) f.mesh = t.mesh;
			if (t.origIdx !== undefined) f.origIdx = t.origIdx;
			kept.push(f);
			flipFlags[i] = 1;
			flipped++;
		}
	}

	return { kept: kept, dropped: dropped, flipped: flipped, keptFlags: keptFlags, flipFlags: flipFlags };
}

/**
 * REGION-CONSISTENT winding extraction — one decision per PATCH, not per
 * triangle. Per-triangle extraction (extractByWinding) makes independent
 * keep/drop calls that disagree across shared edges → tears. This flood-fills
 * the arrangement into patches bounded by the intersection BARRIER edges (and
 * non-manifold edges), coherently orients each patch, samples the generalized
 * winding number ONCE per patch on each side, and keeps the whole patch iff it
 * separates inside (winding ≥ threshold) from outside — edge-consistent by
 * construction, so tears can only occur at barriers (where the arrangement is
 * already conforming). Naturally drops interior double sheets (both sides
 * inside) and free flaps (both sides outside), and is robust to the −1/+2
 * winding regions of a non-orientable reference because it tests a threshold on
 * whole patches, not a per-triangle 0.5 step.
 *
 * @param {Array<{v0,v1,v2,mesh?,origIdx?}>} subTris - conforming arrangement
 * @param {Object.<string, boolean>} barrierKeys - edgeKey → true for intersection edges
 * @param {function(number,number,number): number} windingFn - w.r.t. ORIGINAL soup
 * @param {Object} [options]
 * @param {number} [options.threshold=0.5] - inside iff winding ≥ threshold
 * @param {number} [options.offsetFactor=1e-3] - query offset = factor·√area
 * @param {number} [options.samplesPerPatch=5] - winding samples per patch (majority)
 * @returns {{ kept: Array, patches: number, keptPatches: number, droppedPatches: number }}
 */
export function extractByWindingPatches(subTris, barrierKeys, windingFn, options) {
	var opts = options || {};
	var threshold = opts.threshold !== undefined ? opts.threshold : 0.5;
	var offsetFactor = opts.offsetFactor !== undefined ? opts.offsetFactor : 1e-3;
	var samplesPerPatch = opts.samplesPerPatch !== undefined ? opts.samplesPerPatch : 5;
	var n = subTris.length;

	// Edge → users (by vKey). dir records low→high traversal for coherence.
	var edgeMap = {};
	var triKeys = new Array(n);
	for (var i = 0; i < n; i++) {
		var t = subTris[i];
		var ks = [vKey(t.v0), vKey(t.v1), vKey(t.v2)];
		triKeys[i] = ks;
		for (var e = 0; e < 3; e++) {
			var a = ks[e], b = ks[(e + 1) % 3];
			var ek = edgeKey(a, b);
			(edgeMap[ek] = edgeMap[ek] || []).push({ tri: i, dir: a < b ? 1 : -1 });
		}
	}

	// Flood-fill patches across NON-barrier, MANIFOLD edges; propagate coherent
	// orientation (flip flags).
	var patchOf = new Int32Array(n);
	for (var z = 0; z < n; z++) patchOf[z] = -1;
	var flip = new Uint8Array(n);
	var patches = [];
	for (var seed = 0; seed < n; seed++) {
		if (patchOf[seed] >= 0) continue;
		var pid = patches.length;
		var members = [seed];
		patchOf[seed] = pid;
		var queue = [seed];
		var head = 0;
		while (head < queue.length) {
			var cur = queue[head++];
			var ks2 = triKeys[cur];
			for (var e2 = 0; e2 < 3; e2++) {
				var a2 = ks2[e2], b2 = ks2[(e2 + 1) % 3];
				var ek2 = edgeKey(a2, b2);
				if (barrierKeys[ek2]) continue;          // barrier: patch boundary
				var users = edgeMap[ek2];
				if (users.length !== 2) continue;        // boundary/non-manifold: stop
				var other = users[0].tri === cur ? users[1] : users[0];
				if (patchOf[other.tri] >= 0) continue;
				var self = users[0].tri === cur ? users[0] : users[1];
				var dSelf = self.dir * (flip[cur] ? -1 : 1);
				if (dSelf === other.dir) flip[other.tri] = 1; // coherent = opposite traversal
				patchOf[other.tri] = pid;
				members.push(other.tri);
				queue.push(other.tri);
			}
		}
		patches.push(members);
	}

	function normArea(t, fl) {
		var e1x = t.v1.x - t.v0.x, e1y = t.v1.y - t.v0.y, e1z = t.v1.z - t.v0.z;
		var e2x = t.v2.x - t.v0.x, e2y = t.v2.y - t.v0.y, e2z = t.v2.z - t.v0.z;
		var nx = e1y * e2z - e1z * e2y, ny = e1z * e2x - e1x * e2z, nz = e1x * e2y - e1y * e2x;
		if (fl) { nx = -nx; ny = -ny; nz = -nz; }
		var l = Math.sqrt(nx * nx + ny * ny + nz * nz);
		if (l < 1e-30) return null;
		return { x: nx / l, y: ny / l, z: nz / l, area: l * 0.5 };
	}

	var kept = [];
	var keptPatches = 0, droppedPatches = 0;
	for (var p = 0; p < patches.length; p++) {
		var mem = patches[p];
		// Sample the largest few triangles for a stable per-patch decision.
		var order = mem.slice().sort(function (x, y) {
			return normAreaVal(subTris[y]) - normAreaVal(subTris[x]);
		});
		var K = Math.min(samplesPerPatch, order.length);
		var frontInVotes = 0, backInVotes = 0, samples = 0;
		for (var si = 0; si < K; si++) {
			var idx = order[si];
			var tt = subTris[idx];
			var nrm = normArea(tt, flip[idx]);
			if (!nrm) continue;
			var delta = Math.sqrt(nrm.area) * offsetFactor;
			if (delta < 1e-9) delta = 1e-9;
			var cx = (tt.v0.x + tt.v1.x + tt.v2.x) / 3;
			var cy = (tt.v0.y + tt.v1.y + tt.v2.y) / 3;
			var cz = (tt.v0.z + tt.v1.z + tt.v2.z) / 3;
			var wF = windingFn(cx + nrm.x * delta, cy + nrm.y * delta, cz + nrm.z * delta);
			var wB = windingFn(cx - nrm.x * delta, cy - nrm.y * delta, cz - nrm.z * delta);
			if (wF >= threshold) frontInVotes++;
			if (wB >= threshold) backInVotes++;
			samples++;
		}
		if (samples === 0) { droppedPatches++; continue; }
		var frontIn = frontInVotes * 2 > samples;
		var backIn = backInVotes * 2 > samples;
		if (frontIn === backIn) { droppedPatches++; continue; } // double sheet or flap
		keptPatches++;
		// Orient normal toward OUTSIDE (the < threshold side). front = +coherent
		// normal; if front is inside, outside is back → flip.
		for (var m = 0; m < mem.length; m++) {
			var mi = mem[m];
			var mt = subTris[mi];
			var doFlip = (flip[mi] === 1) !== frontIn;
			if (doFlip) kept.push({ v0: mt.v0, v1: mt.v2, v2: mt.v1 });
			else kept.push({ v0: mt.v0, v1: mt.v1, v2: mt.v2 });
		}
	}

	return { kept: kept, patches: patches.length, keptPatches: keptPatches, droppedPatches: droppedPatches };
}

function normAreaVal(t) {
	var e1x = t.v1.x - t.v0.x, e1y = t.v1.y - t.v0.y, e1z = t.v1.z - t.v0.z;
	var e2x = t.v2.x - t.v0.x, e2y = t.v2.y - t.v0.y, e2z = t.v2.z - t.v0.z;
	var nx = e1y * e2z - e1z * e2y, ny = e1z * e2x - e1x * e2z, nz = e1x * e2y - e1y * e2x;
	return nx * nx + ny * ny + nz * nz;
}
