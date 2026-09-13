/**
 * @module verify/verifyOutput
 *
 * Read-only invariant check on a finished triangle soup.
 *
 * This is the output-side twin of {@link module:bms/bmsVerify}. That one asks
 * "did the CLASSIFICATION hold together?"; this one asks "is the GEOMETRY I am
 * about to hand back actually valid?".
 *
 * Why it exists: the gate that decides whether to pre-repair (`censusMessy`)
 * inspects the INPUT and guesses. On the real Kirra surfaces that guess is
 * wrong — it reports clean while the meshes demonstrably contain T-junctions.
 * A check that measures the OUTPUT cannot be fooled that way. Guessing the
 * input is a heuristic; measuring the output is a fact.
 *
 * It mutates nothing and repairs nothing. It reports, so a caller (or the
 * finisher) can decide what to do.
 *
 * Identity is a neighbourhood weld (shared integer ids), not toFixed strings:
 * quantised keys put two vertices a nanometre apart into different buckets
 * depending on which side of a grid boundary they land, which is exactly the
 * failure mode these checks are meant to catch.
 */

import { makeWeldPool, estimateWeldEps } from "../repair/neighbourhoodPool.js";

/**
 * @typedef {Object} OutputCheck
 * @property {string} check - Invariant name
 * @property {boolean} ok - Did it hold?
 * @property {number} count - Number of violations (0 when ok)
 * @property {string} detail - Human-readable summary
 */

/**
 * Verify the invariants of a finished triangle soup.
 *
 * @param {Array<{v0:Object, v1:Object, v2:Object}>} soup
 * @param {Object} [options]
 * @param {number} [options.tolerance] - Weld epsilon. Default: estimateWeldEps(soup).
 * @param {boolean} [options.expectClosed] - Require a closed solid (no open
 *        edges). Omit to accept an open surface, which is the normal case for
 *        terrain and DTM work.
 * @param {number} [options.minArea] - Area below which a triangle counts as
 *        degenerate. Default: (tolerance^2) / 2.
 * @returns {{
 *   ok: boolean,
 *   checks: Array<OutputCheck>,
 *   stats: { triangles: number, vertices: number, openEdges: number,
 *            nonManifoldEdges: number, area: number }
 * }}
 */
export function verifyOutput(soup, options) {
	var opts = options || {};
	var checks = [];
	var i;

	if (!soup || soup.length === 0) {
		return {
			ok: false,
			checks: [{ check: "nonEmpty", ok: false, count: 0, detail: "soup is empty" }],
			stats: { triangles: 0, vertices: 0, openEdges: 0, nonManifoldEdges: 0, area: 0 }
		};
	}

	var tol = opts.tolerance !== undefined ? opts.tolerance : estimateWeldEps(soup);
	if (!(tol > 0)) tol = 1e-6;

	// Shared integer identity for every vertex.
	var pool = makeWeldPool(tol);
	var F = new Array(soup.length);
	for (i = 0; i < soup.length; i++) {
		var t = soup[i];
		F[i] = [
			pool.id(t.v0.x, t.v0.y, t.v0.z),
			pool.id(t.v1.x, t.v1.y, t.v1.z),
			pool.id(t.v2.x, t.v2.y, t.v2.z)
		];
	}

	// Areas and degenerates.
	var minArea = opts.minArea !== undefined ? opts.minArea : (tol * tol) / 2;
	var degenerate = 0;
	var totalArea = 0;
	for (i = 0; i < soup.length; i++) {
		var a = triArea(soup[i]);
		totalArea += a;
		// A repeated pooled id means the triangle collapsed under the weld.
		var collapsed = F[i][0] === F[i][1] || F[i][1] === F[i][2] || F[i][0] === F[i][2];
		if (a <= minArea || collapsed) degenerate++;
	}
	checks.push(mk("noDegenerateTriangles", degenerate,
		degenerate + " triangle(s) at or below " + minArea.toExponential(2) +
		" area, or with repeated vertices"));

	// Duplicate triangles: same vertex set, either winding.
	var seen = Object.create(null);
	var duplicates = 0;
	for (i = 0; i < soup.length; i++) {
		var srt = F[i].slice().sort(function (x, y) { return x - y; });
		var key = srt[0] + "," + srt[1] + "," + srt[2];
		if (seen[key]) duplicates++; else seen[key] = 1;
	}
	checks.push(mk("noDuplicateTriangles", duplicates, duplicates + " duplicate triangle(s)"));

	// Edge census: open, non-manifold, and winding consistency.
	// For each undirected edge, record how many triangles traverse it each way.
	// A consistently wound 2-manifold edge is used exactly once in each
	// direction; twice the SAME way means the two neighbours disagree.
	var edges = Object.create(null);
	for (i = 0; i < soup.length; i++) {
		var f = F[i];
		for (var e = 0; e < 3; e++) {
			var u = f[e], v = f[(e + 1) % 3];
			if (u === v) continue; // degenerate edge, already counted above
			var lo = u < v ? u : v, hi = u < v ? v : u;
			var ek = lo + "_" + hi;
			var rec = edges[ek];
			if (!rec) rec = edges[ek] = { fwd: 0, rev: 0 };
			if (u === lo) rec.fwd++; else rec.rev++;
		}
	}

	var openEdges = 0, nonManifold = 0, windingConflicts = 0;
	for (var k in edges) {
		var r = edges[k];
		var uses = r.fwd + r.rev;
		if (uses === 1) { openEdges++; continue; }
		if (uses > 2) { nonManifold++; continue; }
		if (r.fwd !== 1 || r.rev !== 1) windingConflicts++;
	}

	checks.push(mk("consistentWinding", windingConflicts,
		windingConflicts + " shared edge(s) traversed the same way by both triangles"));
	checks.push(mk("manifoldEdges", nonManifold,
		nonManifold + " edge(s) shared by more than two triangles"));

	if (opts.expectClosed) {
		checks.push(mk("closed", openEdges,
			openEdges + " open edge(s) on a mesh required to be closed"));
	}

	// T-junctions: a vertex lying on the interior of an edge it does not belong
	// to. These are the "open sleeves" — the mesh looks joined but cracks.
	var tjunctions = countTJunctions(pool.points, edges, tol);
	checks.push(mk("noTJunctions", tjunctions, tjunctions + " vertex/edge T-junction(s)"));

	var ok = true;
	for (i = 0; i < checks.length; i++) if (!checks[i].ok) ok = false;

	return {
		ok: ok,
		checks: checks,
		stats: {
			triangles: soup.length,
			vertices: pool.points.length,
			openEdges: openEdges,
			nonManifoldEdges: nonManifold,
			area: totalArea
		}
	};
}

function mk(name, count, detail) {
	return { check: name, ok: count === 0, count: count, detail: count === 0 ? "ok" : detail };
}

function triArea(t) {
	var ax = t.v1.x - t.v0.x, ay = t.v1.y - t.v0.y, az = t.v1.z - t.v0.z;
	var bx = t.v2.x - t.v0.x, by = t.v2.y - t.v0.y, bz = t.v2.z - t.v0.z;
	var cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx;
	return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
}

/**
 * Count vertices sitting on the interior of an edge they do not belong to.
 *
 * Grid-bucketed by MEAN EDGE LENGTH, for the same reason
 * resolveTJunctionsHoleFree sizes its grid that way: a tolerance-sized cell
 * makes a long edge take thousands of steps to walk.
 */
function countTJunctions(points, edges, tol) {
	var keys = Object.keys(edges);
	if (keys.length === 0 || points.length === 0) return 0;

	var parsed = new Array(keys.length);
	var lenSum = 0;
	var i;
	for (i = 0; i < keys.length; i++) {
		var parts = keys[i].split("_");
		var ia = +parts[0], ib = +parts[1];
		var A = points[ia], B = points[ib];
		parsed[i] = [ia, ib, A, B];
		lenSum += Math.sqrt(
			(A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y) + (A.z - B.z) * (A.z - B.z)
		);
	}
	var cell = Math.max(lenSum / keys.length, tol * 4);

	var grid = Object.create(null);
	for (i = 0; i < points.length; i++) {
		var p = points[i];
		var ck = Math.floor(p.x / cell) + "," + Math.floor(p.y / cell) + "," + Math.floor(p.z / cell);
		(grid[ck] || (grid[ck] = [])).push(i);
	}

	var tol2 = tol * tol;
	var hits = 0;
	for (i = 0; i < parsed.length; i++) {
		var ea = parsed[i][0], eb = parsed[i][1], P0 = parsed[i][2], P1 = parsed[i][3];
		var dx = P1.x - P0.x, dy = P1.y - P0.y, dz = P1.z - P0.z;
		var len2 = dx * dx + dy * dy + dz * dz;
		if (len2 <= tol2) continue;

		var steps = Math.max(1, Math.ceil(Math.sqrt(len2) / cell));
		var seenV = Object.create(null);
		for (var s = 0; s <= steps; s++) {
			var fr = s / steps;
			var sx = P0.x + dx * fr, sy = P0.y + dy * fr, sz = P0.z + dz * fr;
			var bx = Math.floor(sx / cell), by = Math.floor(sy / cell), bz = Math.floor(sz / cell);
			for (var ox = -1; ox <= 1; ox++) {
				for (var oy = -1; oy <= 1; oy++) {
					for (var oz = -1; oz <= 1; oz++) {
						var bucket = grid[(bx + ox) + "," + (by + oy) + "," + (bz + oz)];
						if (!bucket) continue;
						for (var bi = 0; bi < bucket.length; bi++) {
							var vi = bucket[bi];
							if (vi === ea || vi === eb || seenV[vi]) continue;
							seenV[vi] = 1;
							var V = points[vi];
							var tt = ((V.x - P0.x) * dx + (V.y - P0.y) * dy + (V.z - P0.z) * dz) / len2;
							if (tt <= 0 || tt >= 1) continue; // strictly interior only
							var qx = P0.x + dx * tt - V.x;
							var qy = P0.y + dy * tt - V.y;
							var qz = P0.z + dz * tt - V.z;
							if (qx * qx + qy * qy + qz * qz <= tol2) hits++;
						}
					}
				}
			}
		}
	}
	return hits;
}
