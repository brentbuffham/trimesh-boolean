import { describe, it, expect } from "vitest";
import { cancelCoincidentFaces, resolveTJunctionsHoleFree } from "../src/index.js";

// ---- tiny topology measure (weld at eps -> integer ids) ----
function measure(soup, eps) {
	if (eps === undefined) eps = 1e-6;
	var pool = new Map(), V = [], F = [];
	function id(x, y, z) {
		var k = Math.round(x / eps) + "|" + Math.round(y / eps) + "|" + Math.round(z / eps);
		var i = pool.get(k);
		if (i === undefined) { i = V.length; V.push({ x: x, y: y, z: z }); pool.set(k, i); }
		return i;
	}
	for (var t = 0; t < soup.length; t++) {
		var s = soup[t];
		F.push([id(s.v0.x, s.v0.y, s.v0.z), id(s.v1.x, s.v1.y, s.v1.z), id(s.v2.x, s.v2.y, s.v2.z)]);
	}
	// edges
	var em = new Map();
	var degen = 0;
	for (var f = 0; f < F.length; f++) {
		var a = F[f][0], b = F[f][1], c = F[f][2];
		if (a === b || b === c || c === a) { degen++; continue; }
		var e = [[a, b], [b, c], [c, a]];
		for (var j = 0; j < 3; j++) {
			var lo = Math.min(e[j][0], e[j][1]), hi = Math.max(e[j][0], e[j][1]);
			var k = lo + "_" + hi;
			em.set(k, (em.get(k) || 0) + 1);
		}
	}
	var open = 0, nonman = 0, edges = [];
	em.forEach(function (n, k) {
		if (n === 1) open++; else if (n > 2) nonman++;
		var p = k.split("_"); edges.push([+p[0], +p[1]]);
	});
	// coincident opposite-winding pairs
	function rot(a, b, c) { if (a <= b && a <= c) return a + "," + b + "," + c; if (b <= a && b <= c) return b + "," + c + "," + a; return c + "," + a + "," + b; }
	var byW = new Map();
	for (var g = 0; g < F.length; g++) { var ff = F[g]; if (ff[0] === ff[1] || ff[1] === ff[2] || ff[2] === ff[0]) continue; var kk = rot(ff[0], ff[1], ff[2]); byW.set(kk, (byW.get(kk) || 0) + 1); }
	var coinc = 0, seen = new Set();
	for (var h = 0; h < F.length; h++) { var fh = F[h]; if (fh[0] === fh[1] || fh[1] === fh[2] || fh[2] === fh[0]) continue; var rk = rot(fh[0], fh[2], fh[1]); if (byW.get(rk)) { var pk = [rot(fh[0], fh[1], fh[2]), rk].sort().join("#"); if (!seen.has(pk)) { seen.add(pk); coinc++; } } }
	// T-junctions: vertex strictly interior to an edge
	var tj = 0;
	for (var ei = 0; ei < edges.length; ei++) {
		var A = V[edges[ei][0]], B = V[edges[ei][1]];
		var dx = B.x - A.x, dy = B.y - A.y, dz = B.z - A.z, L2 = dx * dx + dy * dy + dz * dz;
		if (L2 < 1e-18) continue;
		for (var v = 0; v < V.length; v++) {
			if (v === edges[ei][0] || v === edges[ei][1]) continue;
			var P = V[v];
			var pr = ((P.x - A.x) * dx + (P.y - A.y) * dy + (P.z - A.z) * dz) / L2;
			if (pr <= 1e-6 || pr >= 1 - 1e-6) continue;
			var px = A.x + pr * dx, py = A.y + pr * dy, pz = A.z + pr * dz;
			if (Math.hypot(P.x - px, P.y - py, P.z - pz) < eps * 4) tj++;
		}
	}
	return { tris: soup.length, open: open, nonman: nonman, coinc: coinc, degen: degen, tj: tj };
}

function area(t) {
	var ux = t.v1.x - t.v0.x, uy = t.v1.y - t.v0.y, uz = t.v1.z - t.v0.z;
	var vx = t.v2.x - t.v0.x, vy = t.v2.y - t.v0.y, vz = t.v2.z - t.v0.z;
	var cx = uy * vz - uz * vy, cy = uz * vx - ux * vz, cz = ux * vy - uy * vx;
	return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
}
function totalArea(soup) { var a = 0; for (var i = 0; i < soup.length; i++) a += area(soup[i]); return a; }

// A closed unit tetrahedron (4 outward-wound faces) as a clean, watertight base.
function tetra() {
	var p0 = { x: 0, y: 0, z: 0 }, p1 = { x: 1, y: 0, z: 0 }, p2 = { x: 0, y: 1, z: 0 }, p3 = { x: 0, y: 0, z: 1 };
	return [
		{ v0: p0, v1: p2, v2: p1 },
		{ v0: p0, v1: p1, v2: p3 },
		{ v0: p0, v1: p3, v2: p2 },
		{ v0: p1, v1: p2, v2: p3 }
	];
}

describe("cancelCoincidentFaces", function () {
	it("cancels an opposite-winding coincident pair (zero-thickness lamina)", function () {
		var tri = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 } };
		var twin = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 0, y: 1, z: 0 }, v2: { x: 1, y: 0, z: 0 } }; // reversed
		var other = { v0: { x: 5, y: 5, z: 5 }, v1: { x: 6, y: 5, z: 5 }, v2: { x: 5, y: 6, z: 5 } };
		var out = cancelCoincidentFaces([tri, twin, other], 1e-6);
		expect(out.length).toBe(1);
		expect(out[0]).toBe(other);
	});

	it("welds near-coincident (within eps) before cancelling", function () {
		var tri = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 } };
		// reversed winding of tri, each vertex nudged < eps from its tri counterpart
		var twin = { v0: { x: 1e-7, y: 0, z: 0 }, v1: { x: 1e-7, y: 1, z: 0 }, v2: { x: 1, y: 1e-7, z: 0 } };
		var out = cancelCoincidentFaces([tri, twin], 1e-4);
		expect(out.length).toBe(0);
	});

	it("does NOT cancel a same-winding duplicate", function () {
		var tri = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 } };
		var dup = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 } };
		var out = cancelCoincidentFaces([tri, dup], 1e-6);
		expect(out.length).toBe(2);
	});

	it("leaves a clean closed solid untouched and volume-conserving", function () {
		var t = tetra();
		var out = cancelCoincidentFaces(t, 1e-6);
		expect(out.length).toBe(4);
		expect(measure(out).open).toBe(0);
	});

	it("removes a lamina glued onto a closed solid without opening it", function () {
		var t = tetra();
		// glue a zero-thickness flap onto face 0 (both windings of an existing face)
		var f = t[0];
		var lamA = { v0: f.v0, v1: f.v1, v2: f.v2 };
		var lamB = { v0: f.v0, v1: f.v2, v2: f.v1 };
		var dirty = t.concat([lamA, lamB]);
		expect(measure(dirty).coinc).toBeGreaterThan(0);
		var out = cancelCoincidentFaces(dirty, 1e-6);
		var m = measure(out);
		expect(m.coinc).toBe(0);
		expect(m.open).toBe(0);      // still closed
		expect(m.nonman).toBe(0);    // lamina's non-manifold edges gone
	});
});

describe("resolveTJunctionsHoleFree", function () {
	// A flat patch with a deliberate T-junction: left side splits edge A-B at M,
	// right side keeps A-B whole -> M is a T-junction on the right triangle's edge.
	function tjPatch() {
		var A = { x: 0, y: 0, z: 0 }, B = { x: 2, y: 0, z: 0 };
		var M = { x: 1, y: 0, z: 0 };             // midpoint of A-B
		var L = { x: 0, y: 1, z: 0 };             // left apex
		var R = { x: 2, y: -1, z: 0 };            // right apex
		return [
			{ v0: A, v1: M, v2: L },              // left, split half 1
			{ v0: M, v1: B, v2: L },              // left, split half 2
			{ v0: A, v1: R, v2: B }               // right, UNSPLIT -> T-junction at M on edge A-B(right sees B-A)
		];
	}

	it("resolves a T-junction and leaves no degenerate/coincident tris", function () {
		var patch = tjPatch();
		var before = measure(patch, 1e-6);
		expect(before.tj).toBeGreaterThan(0);

		var out = resolveTJunctionsHoleFree(patch, 1e-4);
		var after = measure(out, 1e-6);
		expect(after.tj).toBe(0);
		expect(after.degen).toBe(0);
		expect(after.coinc).toBe(0);
		// surface area conserved (resolution only subdivides)
		expect(totalArea(out)).toBeCloseTo(totalArea(patch), 9);
	});

	it("does not increase open edges (hole-free)", function () {
		var patch = tjPatch();
		var before = measure(patch, 1e-6);
		var out = resolveTJunctionsHoleFree(patch, 1e-4);
		var after = measure(out, 1e-6);
		// the mismatched shared edge is now matched on both sides -> open edges drop, never rise
		expect(after.open).toBeLessThanOrEqual(before.open);
	});

	it("is idempotent (second pass changes nothing topologically)", function () {
		var patch = tjPatch();
		var once = resolveTJunctionsHoleFree(patch, 1e-4);
		var twice = resolveTJunctionsHoleFree(once, 1e-4);
		expect(twice.length).toBe(once.length);
		expect(measure(twice, 1e-6).tj).toBe(0);
	});

	it("leaves a T-junction-free mesh unchanged", function () {
		var t = tetra();
		var out = resolveTJunctionsHoleFree(t, 1e-4);
		expect(out.length).toBe(4);
		expect(totalArea(out)).toBeCloseTo(totalArea(t), 9);
	});

	it("scales to long diagonal edges (segment walk, not bbox sweep)", function () {
		// A long diagonal edge (0,0)->(100,100) with a mid-edge vertex. The old
		// on-edge query iterated the edge's bounding BOX of grid cells — ~100/eps per
		// axis squared = tens of millions of cells -> multi-second hang. The segment
		// walk is O(length/cell). This test must finish well under the default timeout.
		var A = { x: 0, y: 0, z: 0 }, B = { x: 100, y: 100, z: 0 }, M = { x: 50, y: 50, z: 0 };
		var Lap = { x: 0, y: 100, z: 0 }, Rap = { x: 100, y: 0, z: 0 };
		var patch = [
			{ v0: A, v1: M, v2: Lap },
			{ v0: M, v1: B, v2: Lap },
			{ v0: A, v1: Rap, v2: B } // unsplit -> T-junction at M on the long diagonal
		];
		var out = resolveTJunctionsHoleFree(patch, 1e-3);
		expect(measure(out, 1e-6).tj).toBe(0);
		expect(measure(out, 1e-6).degen).toBe(0);
	});

	it("stays fast on a dense large-coordinate mesh (grid cell ~ mean edge, not tolerance)", function () {
		// ~1800 triangles over UTM-ish coords with ~30 m edges + one T-junction. If the
		// on-edge grid cell were tolerance-sized (0.016 m) the segment walk would take
		// ~1800*3*(30/0.016)*27 ≈ 270M ops (many seconds); sized to the mean edge it's
		// a few ops per edge. Guarded by the timeout below + an explicit bound.
		var N = 30, step = 30, base = 478000;
		var pts = [];
		for (var j = 0; j <= N; j++) for (var i = 0; i <= N; i++) pts.push({ x: base + i * step, y: base + j * step, z: 0 });
		function P(i, j) { return pts[j * (N + 1) + i]; }
		var soup = [];
		for (var jj = 0; jj < N; jj++) for (var ii = 0; ii < N; ii++) {
			soup.push({ v0: P(ii, jj), v1: P(ii + 1, jj), v2: P(ii + 1, jj + 1) });
			soup.push({ v0: P(ii, jj), v1: P(ii + 1, jj + 1), v2: P(ii, jj + 1) });
		}
		// a triangle whose long edge passes through an existing grid vertex -> T-junction
		soup.push({ v0: P(4, 5), v1: P(6, 5), v2: P(5, 6) }); // P(5,5) sits on edge P(4,5)-P(6,5)
		var t0 = Date.now();
		var out = resolveTJunctionsHoleFree(soup, 1e-3);
		var ms = Date.now() - t0;
		expect(ms).toBeLessThan(3000);
		expect(out.length).toBeGreaterThan(soup.length - 5); // completed, geometry retained
	}, 5000);
});
