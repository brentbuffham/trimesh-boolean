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
