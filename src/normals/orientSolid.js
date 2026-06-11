/**
 * @module normals/orientSolid
 *
 * Topological solid orientation — the two-step fix for "mixed normals":
 *
 *   Step 1 (COHERENCE): flood-fill across shared manifold edges, flipping each
 *   neighbour so that adjacent triangles traverse their shared edge in opposite
 *   directions. Pure topology — no centroid rays, no Z-up guessing. After this
 *   every triangle in a connected component agrees: all-out or all-in.
 *
 *   Step 2 (DIRECTION): one global decision per component via signed volume —
 *   negative volume means the coherent family points inward, so flip the whole
 *   component. Exact for closed components; open sheets are left as-coherent
 *   (their signed volume is reported but not acted on).
 *
 * Born 2026-06-11: a boolean result built from a survey DXF (3DFACE entities
 * carry no winding convention) was watertight but had 16k+ winding violations —
 * a checkerboard of flipped patches. Every volume tool reported a different
 * wrong number, and per-triangle In/Out heuristics could not fix it.
 *
 * Propagation deliberately does NOT cross non-manifold edges (3+ triangles):
 * orientation is ambiguous there; each fan side is handled by whichever
 * manifold path reaches it first.
 */

import { vKey } from "../util/math.js";

/**
 * Orient a triangle soup so each connected component is winding-coherent and
 * (for closed components) outward-facing.
 *
 * Does not mutate the input soup; flipped triangles are new objects, untouched
 * triangles are passed through by reference.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup - Triangle soup
 * @param {Object} [options]
 * @param {boolean} [options.outward=true] - Closed components face outward
 *        (positive signed volume). Set false for inward.
 * @returns {{
 *   soup: Array,
 *   diagnostics: {
 *     components: number,
 *     flippedForCoherence: number,
 *     componentsFlippedForDirection: number,
 *     windingViolationsBefore: number,
 *     windingViolationsAfter: number,
 *     signedVolume: number,
 *     closedComponents: number,
 *     openComponents: number
 *   }
 * }}
 */
export function orientSolid(soup, options) {
	var opts = options || {};
	var outward = opts.outward !== false;
	var n = soup.length;

	// ── Build adjacency over undirected edges ──
	// edgeKey -> [{ tri: index, dir: "ab"|"ba" }] where dir records whether the
	// triangle traverses the edge from the lexically smaller key to the larger.
	var edgeMap = {};
	var triKeys = new Array(n);

	function edgeId(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

	for (var i = 0; i < n; i++) {
		var t = soup[i];
		var ks = [vKey(t.v0), vKey(t.v1), vKey(t.v2)];
		triKeys[i] = ks;
		for (var e = 0; e < 3; e++) {
			var a = ks[e], b = ks[(e + 1) % 3];
			var id = edgeId(a, b);
			(edgeMap[id] = edgeMap[id] || []).push({ tri: i, dir: a < b ? "ab" : "ba" });
		}
	}

	function countViolations(flippedArr) {
		// Two manifold neighbours are coherent when they traverse the shared
		// edge in OPPOSITE directions (after accounting for flips).
		var v = 0;
		for (var id in edgeMap) {
			var users = edgeMap[id];
			if (users.length !== 2) continue;
			var d0 = users[0].dir === "ab" ? 1 : -1;
			var d1 = users[1].dir === "ab" ? 1 : -1;
			if (flippedArr) {
				if (flippedArr[users[0].tri]) d0 = -d0;
				if (flippedArr[users[1].tri]) d1 = -d1;
			}
			if (d0 === d1) v++;
		}
		return v;
	}

	var violationsBefore = countViolations(null);

	// ── Step 1: coherence flood fill (manifold edges only) ──
	var flipped = new Uint8Array(n);
	var visited = new Uint8Array(n);
	var componentOf = new Int32Array(n);
	var componentCount = 0;
	var flippedForCoherence = 0;

	for (var seed = 0; seed < n; seed++) {
		if (visited[seed]) continue;
		var queue = [seed];
		visited[seed] = 1;
		componentOf[seed] = componentCount;

		var head = 0;
		while (head < queue.length) {
			var cur = queue[head++];
			var ks2 = triKeys[cur];
			for (var e2 = 0; e2 < 3; e2++) {
				var a2 = ks2[e2], b2 = ks2[(e2 + 1) % 3];
				var users2 = edgeMap[edgeId(a2, b2)];
				if (!users2 || users2.length !== 2) continue; // boundary or non-manifold: don't propagate
				var other = users2[0].tri === cur ? users2[1] : users2[0];
				if (visited[other.tri]) continue;
				var self = users2[0].tri === cur ? users2[0] : users2[1];

				// Effective directions after current flip states
				var dSelf = (self.dir === "ab" ? 1 : -1) * (flipped[cur] ? -1 : 1);
				var dOther = (other.dir === "ab" ? 1 : -1);
				// Coherent neighbours traverse opposite: if same, the neighbour
				// must be flipped.
				if (dSelf === dOther) {
					flipped[other.tri] = 1;
					flippedForCoherence++;
				}
				visited[other.tri] = 1;
				componentOf[other.tri] = componentCount;
				queue.push(other.tri);
			}
		}
		componentCount++;
	}

	// ── Step 2: per-component signed volume → global direction ──
	// Local origin (first vertex of first triangle of each component) keeps the
	// determinant well-conditioned at UTM scale.
	var compVol = new Float64Array(componentCount);
	var compOrigin = new Array(componentCount);
	var compOpenEdges = new Uint32Array(componentCount);

	for (var id2 in edgeMap) {
		var users3 = edgeMap[id2];
		if (users3.length === 1) compOpenEdges[componentOf[users3[0].tri]]++;
	}

	for (var ti = 0; ti < n; ti++) {
		var comp = componentOf[ti];
		var tt = soup[ti];
		if (!compOrigin[comp]) compOrigin[comp] = { x: tt.v0.x, y: tt.v0.y, z: tt.v0.z };
		var o = compOrigin[comp];
		var p0 = tt.v0, p1 = flipped[ti] ? tt.v2 : tt.v1, p2 = flipped[ti] ? tt.v1 : tt.v2;
		var ax = p0.x - o.x, ay = p0.y - o.y, az = p0.z - o.z;
		var bx = p1.x - o.x, by = p1.y - o.y, bz = p1.z - o.z;
		var cx = p2.x - o.x, cy = p2.y - o.y, cz = p2.z - o.z;
		compVol[comp] += ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx);
	}

	var componentsFlippedForDirection = 0;
	var closedComponents = 0;
	var openComponents = 0;
	var totalSignedVolume = 0;

	var flipComponent = new Uint8Array(componentCount);
	for (var c = 0; c < componentCount; c++) {
		var vol = compVol[c] / 6;
		var isClosed = compOpenEdges[c] === 0;
		if (isClosed) closedComponents++; else openComponents++;
		if (isClosed && ((outward && vol < 0) || (!outward && vol > 0))) {
			flipComponent[c] = 1;
			componentsFlippedForDirection++;
			vol = -vol;
		}
		totalSignedVolume += vol;
	}

	// ── Materialise the result soup ──
	var outSoup = new Array(n);
	for (var oi = 0; oi < n; oi++) {
		var doFlip = (flipped[oi] === 1) !== (flipComponent[componentOf[oi]] === 1);
		if (doFlip) {
			var st = soup[oi];
			outSoup[oi] = { v0: st.v0, v1: st.v2, v2: st.v1 };
		} else {
			outSoup[oi] = soup[oi];
		}
	}

	// Recount violations on the final orientation
	var finalFlip = new Uint8Array(n);
	for (var fi = 0; fi < n; fi++) {
		finalFlip[fi] = (flipped[fi] === 1) !== (flipComponent[componentOf[fi]] === 1) ? 1 : 0;
	}
	var violationsAfter = countViolations(finalFlip);

	return {
		soup: outSoup,
		diagnostics: {
			components: componentCount,
			flippedForCoherence: flippedForCoherence,
			componentsFlippedForDirection: componentsFlippedForDirection,
			windingViolationsBefore: violationsBefore,
			windingViolationsAfter: violationsAfter,
			signedVolume: totalSignedVolume,
			closedComponents: closedComponents,
			openComponents: openComponents
		}
	};
}
