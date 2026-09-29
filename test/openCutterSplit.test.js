import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { bmsBooleanOp } from "../src/index.js";

// ─────────────────────────────────────────────────────────────────────────────
// Real Kirra pair: a closed solid (TRIM_nuts) cut by an OPEN cutter (24 open
// edges). The intersection is ONE closed loop of 1190 segments, so the result
// must be exactly four surfaces - aInside, aOutside, bInside, bOutside - each a
// single connected region. Before 0.7.5 the cutter's walls passed a few mm from
// the solid's edges, crossing points landed a hair off corners and edges, the
// barrier had holes, the flood fill found ONE region per mesh, and the
// classifier voted every triangle alone: 10 pieces plus hundreds of slivers.
//
// Asserted against the geometry (region counts, edge presence), not against
// verifyOutput's pass/fail.
// ─────────────────────────────────────────────────────────────────────────────

var fx = JSON.parse(readFileSync(new URL("./fixtures/kirra-nuts-cut.json", import.meta.url), "utf8"));
function soup(flat) {
	return flat.map(function (f) {
		return { v0: { x: f[0], y: f[1], z: f[2] }, v1: { x: f[3], y: f[4], z: f[5] }, v2: { x: f[6], y: f[7], z: f[8] } };
	});
}

function key(v) { return v.x.toFixed(3) + "," + v.y.toFixed(3) + "," + v.z.toFixed(3); }

/** Number of edge-connected regions (triangles joined across shared edges). */
function edgeRegions(tris) {
	var owner = {};
	tris.forEach(function (t, i) {
		var k = [key(t.v0), key(t.v1), key(t.v2)];
		for (var e = 0; e < 3; e++) {
			var a = k[e], b = k[(e + 1) % 3];
			var ek = a < b ? a + "|" + b : b + "|" + a;
			(owner[ek] = owner[ek] || []).push(i);
		}
	});
	var parent = tris.map(function (_, i) { return i; });
	function find(x) { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
	Object.keys(owner).forEach(function (ek) {
		var l = owner[ek];
		for (var i = 1; i < l.length; i++) parent[find(l[i])] = find(l[0]);
	});
	var roots = {};
	tris.forEach(function (_, i) { roots[find(i)] = true; });
	return Object.keys(roots).length;
}

function altitude(t) {
	var ux = t.v1.x - t.v0.x, uy = t.v1.y - t.v0.y, uz = t.v1.z - t.v0.z;
	var vx = t.v2.x - t.v0.x, vy = t.v2.y - t.v0.y, vz = t.v2.z - t.v0.z;
	var x = uy * vz - uz * vy, y = uz * vx - ux * vz, z = ux * vy - uy * vx;
	var area2 = Math.sqrt(x * x + y * y + z * z);
	var longest = Math.max(Math.hypot(ux, uy, uz), Math.hypot(vx, vy, vz),
		Math.hypot(t.v2.x - t.v1.x, t.v2.y - t.v1.y, t.v2.z - t.v1.z));
	return longest > 0 ? area2 / longest : 0;
}

["auto", "hybrid", "heffalump"].forEach(function (classifier) {
	describe("open cutter through a closed solid (" + classifier + ")", function () {
		var A = soup(fx.A), B = soup(fx.B);
		var res = bmsBooleanOp(A, B, null, { classifier: classifier });

		it("finds the one closed intersection loop", function () {
			expect(res.segments.length).toBe(1190);
		});

		it("makes every intersection segment an edge (no hole in the barrier)", function () {
			expect(res.splitReport.lostSegments).toBe(0);
		});

		it("gives four surfaces, each a single connected region", function () {
			["aInside", "aOutside", "bInside", "bOutside"].forEach(function (g) {
				expect(res.groups[g].length, g + " is empty").toBeGreaterThan(0);
				expect(edgeRegions(res.groups[g]), g + " is fragmented").toBe(1);
			});
		});

		it("keeps every triangle: nothing lost, nothing invented", function () {
			var total = res.groups.aInside.length + res.groups.aOutside.length;
			expect(total).toBeGreaterThanOrEqual(A.length);
			var totalB = res.groups.bInside.length + res.groups.bOutside.length;
			expect(totalB).toBeGreaterThanOrEqual(B.length);
		});

		it("leaves no crossing points 1-5 mm apart", function () {
			var pts = res.pool.getAll();
			var cell = 0.005, grid = {};
			pts.forEach(function (p) {
				var k = Math.floor(p.x / cell) + "," + Math.floor(p.y / cell) + "," + Math.floor(p.z / cell);
				(grid[k] = grid[k] || []).push(p);
			});
			var close = 0;
			pts.forEach(function (p) {
				var cx = Math.floor(p.x / cell), cy = Math.floor(p.y / cell), cz = Math.floor(p.z / cell);
				for (var dx = -1; dx <= 1; dx++) for (var dy = -1; dy <= 1; dy++) for (var dz = -1; dz <= 1; dz++) {
					var l = grid[(cx + dx) + "," + (cy + dy) + "," + (cz + dz)];
					if (!l) continue;
					l.forEach(function (q) {
						if (q.id <= p.id) return;
						var d = Math.hypot(p.x - q.x, p.y - q.y, p.z - q.z);
						if (d >= 0.001 && d <= 0.005) close++;
					});
				}
			});
			expect(close).toBe(0);
		});

		it("does not shatter the cutter or the solid's inside into needles", function () {
			function slivers(g) { return res.groups[g].filter(function (t) { return altitude(t) < 0.005; }).length; }
			expect(slivers("bInside")).toBe(0);
			expect(slivers("bOutside")).toBe(0);
			expect(slivers("aInside")).toBeLessThan(10);
			// The solid itself carries 12 needle triangles on its bottom edge.
			expect(slivers("aOutside")).toBeLessThan(120);
		});
	});
});
