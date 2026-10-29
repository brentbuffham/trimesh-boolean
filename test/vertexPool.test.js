import { describe, it, expect } from "vitest";
import { createVertexPool } from "../src/bms/bmsVertexPool.js";

describe("createVertexPool", function () {
	it("merges a point within tolerance across a cell border", function () {
		var pool = createVertexPool(0.01);           // cells of 0.02
		var a = pool.getOrCreate(0.0199, 0, 0);     // just below a border
		var b = pool.getOrCreate(0.0201, 0, 0);     // just above it, 0.0002 away
		expect(b).toBe(a);
		expect(pool.size()).toBe(1);
	});

	it("keeps points further apart than tolerance", function () {
		var pool = createVertexPool(0.01);
		var a = pool.getOrCreate(0, 0, 0);
		var b = pool.getOrCreate(0.0101, 0, 0);
		expect(b).not.toBe(a);
		expect(pool.size()).toBe(2);
		expect(b.id).toBe(1);
	});

	it("returns the nearest of several candidates", function () {
		var pool = createVertexPool(0.01);
		var a = pool.getOrCreate(0, 0, 0);
		var b = pool.getOrCreate(0.015, 0, 0);
		expect(pool.getOrCreate(0.009, 0, 0)).toBe(b);
		expect(pool.getOrCreate(0.006, 0, 0)).toBe(a);
	});

	it("works at UTM coordinates with millimetre tolerance", function () {
		var pool = createVertexPool(0.001);
		var x = 478123.4567, y = 6771234.5678, z = 301.25;
		var a = pool.getOrCreate(x, y, z);
		expect(pool.getOrCreate(x + 0.0005, y - 0.0005, z)).toBe(a);
		expect(pool.getOrCreate(x + 0.0015, y, z)).not.toBe(a);
		// many points on a 2 mm grid stay distinct
		var p2 = createVertexPool(0.001);
		for (var i = 0; i < 50; i++) for (var j = 0; j < 50; j++) p2.getOrCreate(x + i * 0.002, y + j * 0.002, z);
		expect(p2.size()).toBe(2500);
	});

	it("records triRefs once per triangle", function () {
		var pool = createVertexPool(0.01);
		var v = pool.getOrCreate(1, 2, 3, { mesh: "A", triIdx: 4 });
		pool.getOrCreate(1, 2, 3, { mesh: "A", triIdx: 4 });
		pool.getOrCreate(1.001, 2, 3, { mesh: "B", triIdx: 9 });
		expect(v.triRefs).toEqual([{ mesh: "A", triIdx: 4 }, { mesh: "B", triIdx: 9 }]);
		expect(pool.getAll()).toEqual([v]);
	});
});

// The pool before it searched only the cells a tolerance ball can touch: the 27 around the
// point's own cell. getOrCreate must answer exactly as this does.
function referencePool(tolerance) {
	var cellSize = tolerance * 2;
	if (cellSize < 1e-12) cellSize = 1e-6;
	var grid = new Map(), all = [], nextId = 0, tolSq = tolerance * tolerance;
	function cellHash(cx, cy, cz) {
		var h = Math.imul(cx | 0, 0x9E3779B1) ^ Math.imul(cy | 0, 0x85EBCA6B) ^ Math.imul(cz | 0, 0xC2B2AE35);
		h ^= h >>> 15;
		return Math.imul(h, 0x2C1B3C6D) >>> 0;
	}
	function findNearest(x, y, z) {
		var cx = Math.floor(x / cellSize), cy = Math.floor(y / cellSize), cz = Math.floor(z / cellSize);
		var best = tolSq, found = null;
		for (var dx = -1; dx <= 1; dx++) for (var dy = -1; dy <= 1; dy++) for (var dz = -1; dz <= 1; dz++) {
			var bucket = grid.get(cellHash(cx + dx, cy + dy, cz + dz));
			if (!bucket) continue;
			for (var i = 0; i < bucket.length; i++) {
				var v = bucket[i], ex = v.x - x, ey = v.y - y, ez = v.z - z, d2 = ex * ex + ey * ey + ez * ez;
				if (d2 < best) { best = d2; found = v; }
			}
		}
		return found;
	}
	return {
		getOrCreate: function (x, y, z) {
			var e = findNearest(x, y, z);
			if (e) return e;
			var v = { x: x, y: y, z: z, id: nextId++, triRefs: [] };
			var key = cellHash(Math.floor(x / cellSize), Math.floor(y / cellSize), Math.floor(z / cellSize));
			var cell = grid.get(key);
			if (cell) cell.push(v); else grid.set(key, [v]);
			all.push(v);
			return v;
		},
		size: function () { return all.length; }
	};
}

function rng(seed) {
	return function () { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
}

// both pools see the same points; every answer (which vertex, or a new one) must agree
function sameAnswers(tol, points) {
	var a = createVertexPool(tol), b = referencePool(tol), differ = 0;
	for (var i = 0; i < points.length; i += 3) {
		var u = a.getOrCreate(points[i], points[i + 1], points[i + 2]);
		var w = b.getOrCreate(points[i], points[i + 1], points[i + 2]);
		if (u.id !== w.id || u.x !== w.x || u.y !== w.y || u.z !== w.z) differ++;
	}
	return { differ: differ, sizeA: a.size(), sizeB: b.size() };
}

describe("createVertexPool answers as the 27-cell search did", function () {
	function expectSame(r) { expect(r).toEqual({ differ: 0, sizeA: r.sizeB, sizeB: r.sizeB }); }

	it("random points with near-duplicates inside and just outside the tolerance", function () {
		var r = rng(1), tol = 0.05, pts = [];
		for (var i = 0; i < 20000; i++) {
			if (i > 10 && r() < 0.5) {
				var j = Math.floor(r() * i), f = r() < 0.5 ? 0.9 : 1.1;     // inside / just outside
				pts.push(pts[3 * j] + (r() - 0.5) * 2 * tol * f, pts[3 * j + 1] + (r() - 0.5) * 2 * tol * f, pts[3 * j + 2] + (r() - 0.5) * 2 * tol * f);
			} else pts.push(r() * 10, r() * 10, r() * 10);
		}
		var res = sameAnswers(tol, pts);
		expectSame(res);
		expect(res.sizeA).toBeLessThan(pts.length / 3);   // it did merge
	});

	it("UTM coordinates at millimetre tolerance", function () {
		var r = rng(2), tol = 0.001, pts = [], X = 478123.4567, Y = 6771234.5678, Z = 301.25;
		for (var i = 0; i < 20000; i++) {
			if (i > 10 && r() < 0.5) {
				var j = Math.floor(r() * i);
				pts.push(pts[3 * j] + (r() - 0.5) * 0.003, pts[3 * j + 1] + (r() - 0.5) * 0.003, pts[3 * j + 2] + (r() - 0.5) * 0.003);
			} else pts.push(X + r() * 2, Y + r() * 2, Z + r() * 2);
		}
		expectSame(sameAnswers(tol, pts));
	});

	it("lattices spaced at fractions and multiples of the tolerance, and their midpoints", function () {
		[0.5, 1, 1.5, 2, 3].forEach(function (mult) {
			var tol = 0.01, step = tol * mult, pts = [];
			for (var i = 0; i < 24; i++) for (var j = 0; j < 24; j++) for (var k = 0; k < 4; k++) pts.push(i * step, j * step, k * step);
			for (var i2 = 0; i2 < 23; i2++) for (var j2 = 0; j2 < 23; j2++) pts.push((i2 + 0.5) * step, (j2 + 0.5) * step, 0);
			expectSame(sameAnswers(tol, pts));
		});
	});

	it("points on cell borders, a hair either side (floating-point rounding)", function () {
		var r = rng(3), tol = 0.01, cell = 0.02, pts = [];
		[1, 2, 3, 47, 1000, 250000].forEach(function (c) {
			var edge = c * cell;
			[-2, -1, 0, 1, 2].forEach(function (ulps) {
				var e = edge + ulps * Math.abs(edge) * 2.220446049250313e-16;
				pts.push(e, r(), r());
				pts.push(r(), e, r());
				pts.push(e + tol * 0.999, e, 0.5);
				pts.push(e - tol * 0.999, e, 0.5);
				pts.push(e + tol * 1.001, e, 0.5);
			});
		});
		for (var i = 0; i < 3000; i++) pts.push(Math.round(r() * 200) * cell, Math.round(r() * 200) * cell, Math.round(r() * 3) * cell);
		expectSame(sameAnswers(tol, pts));
	});

	it("a flat sheet and a tiny tolerance", function () {
		var r = rng(4), pts = [];
		for (var i = 0; i < 20000; i++) pts.push(r() * 5, r() * 5, 2);
		expectSame(sameAnswers(1e-6, pts));
		expectSame(sameAnswers(0.07, pts));
	});
});
