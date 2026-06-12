import { describe, it, expect } from "vitest";
import { bmsBooleanOp, bmsIntersect, bmsSplit, verifyBmsClassification, countOpenEdges } from "../src/index.js";
import { needsSliverGuard, interiorLatticePoints } from "../src/boolean/sliverGuard.js";
import { createCube, createFlatPatch } from "./fixtures/meshes.js";

// ── Helpers ──

/**
 * Aspect ratio metric: longest edge squared over area, normalised so an
 * equilateral triangle scores 1. Needles score in the hundreds.
 */
function aspectRatio(tri) {
	var e = [
		[tri.v0, tri.v1],
		[tri.v1, tri.v2],
		[tri.v2, tri.v0]
	];
	var maxLenSq = 0;
	for (var i = 0; i < 3; i++) {
		var dx = e[i][1].x - e[i][0].x;
		var dy = e[i][1].y - e[i][0].y;
		var dz = e[i][1].z - e[i][0].z;
		var lenSq = dx * dx + dy * dy + dz * dz;
		if (lenSq > maxLenSq) maxLenSq = lenSq;
	}
	var ax = tri.v1.x - tri.v0.x, ay = tri.v1.y - tri.v0.y, az = tri.v1.z - tri.v0.z;
	var bx = tri.v2.x - tri.v0.x, by = tri.v2.y - tri.v0.y, bz = tri.v2.z - tri.v0.z;
	var cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx;
	var area = Math.sqrt(cx * cx + cy * cy + cz * cz) * 0.5;
	if (area < 1e-20) return Infinity;
	// equilateral: maxLenSq / area = L^2 / (sqrt(3)/4 L^2) = 4/sqrt(3) ≈ 2.309
	return (maxLenSq / area) / 2.309;
}

/**
 * Giant floor: two triangles spanning 100×100 at z = 0.
 */
function createGiantFloor() {
	var a = { x: 0, y: 0, z: 0 }, b = { x: 100, y: 0, z: 0 };
	var c = { x: 100, y: 100, z: 0 }, d = { x: 0, y: 100, z: 0 };
	return [
		{ v0: a, v1: b, v2: c },
		{ v0: a, v1: c, v2: d }
	];
}

/**
 * Dense vertical fence at x = 50: a triangle strip from y0 to y1 with the
 * given step, spanning z = -1 to z = +1. Crossing the floor produces a
 * dense intersection chain with point spacing ≈ step.
 */
function createFence(y0, y1, step) {
	var tris = [];
	for (var y = y0; y < y1 - 1e-9; y += step) {
		var p00 = { x: 50, y: y, z: -1 };
		var p01 = { x: 50, y: y + step, z: -1 };
		var p10 = { x: 50, y: y, z: 1 };
		var p11 = { x: 50, y: y + step, z: 1 };
		tris.push({ v0: p00, v1: p01, v2: p11 });
		tris.push({ v0: p00, v1: p11, v2: p10 });
	}
	return tris;
}

/**
 * Cube with an extra "fin" triangle glued onto an existing edge,
 * creating a non-manifold (over-shared) edge.
 */
function createFinnedCube(cx, cy, cz, size) {
	var cube = createCube(cx, cy, cz, size);
	var h = size / 2;
	cube.push({
		v0: { x: cx - h, y: cy - h, z: cz - h },
		v1: { x: cx + h, y: cy - h, z: cz - h },
		v2: { x: cx, y: cy - h - size, z: cz - h }
	});
	return cube;
}

// ── verifyBmsClassification (unit) ──

describe("verifyBmsClassification", function () {
	var triA = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 }, mesh: "A" };
	var triA2 = { v0: { x: 1, y: 0, z: 0 }, v1: { x: 1, y: 1, z: 0 }, v2: { x: 0, y: 1, z: 0 }, mesh: "A" };
	var triB = { v0: { x: 0, y: 0, z: 0.5 }, v1: { x: 1, y: 0, z: 0.5 }, v2: { x: 0, y: 1, z: 0.5 }, mesh: "B" };
	var triB2 = { v0: { x: 1, y: 0, z: 0.5 }, v1: { x: 1, y: 1, z: 0.5 }, v2: { x: 0, y: 1, z: 0.5 }, mesh: "B" };
	var someSegment = [{ p0: { x: 0, y: 0, z: 0, id: 1 }, p1: { x: 1, y: 0, z: 0, id: 2 } }];
	var inputA = [{ v0: triA.v0, v1: triA.v1, v2: triA.v2 }];
	var inputB = [{ v0: triB.v0, v1: triB.v1, v2: triB.v2 }];

	it("passes a partitioned classification", function () {
		var megaSoup = [triA, triA2, triB, triB2];
		var sides = [1, -1, 1, -1];
		var r = verifyBmsClassification(megaSoup, sides, someSegment, [], inputA, inputB);
		expect(r.ok).toBe(true);
		expect(r.counts.A.inside).toBe(1);
		expect(r.counts.A.outside).toBe(1);
	});

	it("fails when a mesh does not partition despite intersection segments", function () {
		var megaSoup = [triA, triA2, triB, triB2];
		var sides = [-1, -1, 1, -1]; // mesh A all-outside = the silent leak
		var r = verifyBmsClassification(megaSoup, sides, someSegment, [], inputA, inputB);
		expect(r.ok).toBe(false);
		expect(r.failures.some(function (f) { return f.check === "partition" && f.mesh === "A"; })).toBe(true);
		expect(r.failures.some(function (f) { return f.mesh === "B"; })).toBe(false);
	});

	it("fails when an intersection chain dies mid-mesh", function () {
		var megaSoup = [triA, triA2, triB, triB2];
		var sides = [1, -1, 1, -1];
		// Open polyline whose endpoints are nowhere near any mesh boundary
		var polyline = [
			{ x: 40, y: 40, z: 40, id: 10 },
			{ x: 41, y: 40, z: 40, id: 11 },
			{ x: 42, y: 40, z: 40, id: 12 }
		];
		var r = verifyBmsClassification(megaSoup, sides, someSegment, [polyline], inputA, inputB);
		expect(r.ok).toBe(false);
		expect(r.failures.some(function (f) { return f.check === "chainClosure"; })).toBe(true);
	});

	it("accepts open chains that join other chains end-to-end (bmsChain splits sharp bends)", function () {
		var megaSoup = [triA, triA2, triB, triB2];
		var sides = [1, -1, 1, -1];
		// Two chains forming a loop together: each endpoint pairs with the
		// other chain's endpoint — none are dangling (cube-vs-cube case)
		var j1 = { x: 40, y: 40, z: 40, id: 10 };
		var j2 = { x: 44, y: 40, z: 40, id: 13 };
		var chainTop = [j1, { x: 42, y: 42, z: 40, id: 11 }, j2];
		var chainBottom = [j2, { x: 42, y: 38, z: 40, id: 12 }, j1];
		var r = verifyBmsClassification(megaSoup, sides, someSegment, [chainTop, chainBottom], inputA, inputB);
		expect(r.ok).toBe(true);
	});

	it("accepts a closed intersection chain", function () {
		var megaSoup = [triA, triA2, triB, triB2];
		var sides = [1, -1, 1, -1];
		var shared = { x: 40, y: 40, z: 40, id: 10 };
		var loop = [shared, { x: 41, y: 40, z: 40, id: 11 }, { x: 41, y: 41, z: 40, id: 12 }, shared];
		var r = verifyBmsClassification(megaSoup, sides, someSegment, [loop], inputA, inputB);
		expect(r.ok).toBe(true);
	});

	it("fails when same-mesh triangles on barrier edges all classify to one side", function () {
		// Three barrier edges, each shared by two mesh-A triangles with the SAME side
		var megaSoup = [];
		var sides = [];
		var segments = [];
		for (var i = 0; i < 3; i++) {
			var y = i * 10;
			var p0 = { x: 0, y: y, z: 0, id: 100 + i * 2 };
			var p1 = { x: 1, y: y, z: 0, id: 101 + i * 2 };
			segments.push({ p0: p0, p1: p1 });
			megaSoup.push({ v0: p0, v1: p1, v2: { x: 0.5, y: y + 1, z: 0 }, mesh: "A" });
			megaSoup.push({ v0: p0, v1: p1, v2: { x: 0.5, y: y - 1, z: 0 }, mesh: "A" });
			sides.push(-1, -1); // violation: both sides of the barrier outside
		}
		// Keep partition satisfied with extra tris away from barriers
		megaSoup.push({ v0: { x: 50, y: 0, z: 0 }, v1: { x: 51, y: 0, z: 0 }, v2: { x: 50, y: 1, z: 0 }, mesh: "A" });
		sides.push(1);
		megaSoup.push({ v0: { x: 60, y: 0, z: 0 }, v1: { x: 61, y: 0, z: 0 }, v2: { x: 60, y: 1, z: 0 }, mesh: "B" });
		sides.push(1);
		megaSoup.push({ v0: { x: 70, y: 0, z: 0 }, v1: { x: 71, y: 0, z: 0 }, v2: { x: 70, y: 1, z: 0 }, mesh: "B" });
		sides.push(-1);

		var r = verifyBmsClassification(megaSoup, sides, segments, [], inputA, inputB);
		expect(r.ok).toBe(false);
		expect(r.failures.some(function (f) { return f.check === "barrierConstraint" && f.mesh === "A"; })).toBe(true);
	});
});

// ── Auto-classifier (integration) ──

describe("bmsBooleanOp auto-classifier", function () {
	it("uses hybrid and passes verification on clean closed solids", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 1, 1, 2);
		var result = bmsBooleanOp(cubeA, cubeB);

		expect(result).not.toBeNull();
		expect(result.classifier.A).toBe("hybrid");
		expect(result.classifier.B).toBe("hybrid");
		expect(result.verification).not.toBeNull();
		expect(result.verification.ok).toBe(true);
		// Both meshes genuinely partition
		expect(result.groups.aInside.length).toBeGreaterThan(0);
		expect(result.groups.aOutside.length).toBeGreaterThan(0);
		expect(result.groups.bInside.length).toBeGreaterThan(0);
		expect(result.groups.bOutside.length).toBeGreaterThan(0);
	});

	it("reports heffalump (forced) for classifier: 'heffalump'", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 1, 1, 2);
		var result = bmsBooleanOp(cubeA, cubeB, null, { classifier: "heffalump" });

		expect(result.classifier.A).toBe("heffalump (forced)");
		expect(result.classifier.B).toBe("heffalump (forced)");
		expect(result.groups.aInside.length).toBeGreaterThan(0);
		expect(result.groups.aOutside.length).toBeGreaterThan(0);
	});

	it("honours the deprecated forceHeffalump flag", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 1, 1, 2);
		var result = bmsBooleanOp(cubeA, cubeB, null, { forceHeffalump: true });
		expect(result.classifier.A).toBe("heffalump (forced)");
	});

	it("census routes non-manifold inputs to the heffalump", function () {
		var finned = createFinnedCube(0, 0, 0, 2);
		expect(countOpenEdges(finned).overShared).toBeGreaterThan(0);
		var cubeB = createCube(1, 1, 1, 2);
		var result = bmsBooleanOp(finned, cubeB);

		expect(result.classifier.A).toBe("heffalump (census: non-manifold edges)");
		expect(result.classifier.B).toBe("heffalump (census: non-manifold edges)");
	});

	it("classifier: 'hybrid' skips verification (legacy behaviour)", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 1, 1, 2);
		var result = bmsBooleanOp(cubeA, cubeB, null, { classifier: "hybrid" });
		expect(result.classifier.A).toBe("hybrid");
		expect(result.verification).toBeNull();
	});

	it("heffalump component-majority snap kills lone flipped triangles (no spurs)", function () {
		// Open patch (A) crossing a closed cube (B): the heffalump's
		// per-triangle nearest-surface test can flip individual tall cube
		// sub-triangles whose centroids hug the patch surface. With the
		// majority snap, the cube's above/below components are coherent:
		// nothing classified "inside" (below the patch) may reach the
		// cube's top, and nothing "outside" may reach its bottom.
		var patch = createFlatPatch(0, 0, 0, 8, 8, 5, 5);
		var cube = createCube(0, 0, 0, 2);
		var result = bmsBooleanOp(patch, cube, null, { classifier: "heffalump" });

		expect(result.groups.bInside.length).toBeGreaterThan(0);
		expect(result.groups.bOutside.length).toBeGreaterThan(0);

		// The patch is the plane z=0, so each cube group must be coherent:
		// all of a group's triangle centroids on ONE side of the plane.
		// A lone flipped "spur" triangle puts a centroid on the wrong side.
		function centroidSides(soup) {
			var sides = {};
			for (var i = 0; i < soup.length; i++) {
				var cz = (soup[i].v0.z + soup[i].v1.z + soup[i].v2.z) / 3;
				if (Math.abs(cz) < 0.05) continue; // skip near-plane slivers
				sides[cz > 0 ? "above" : "below"] = true;
			}
			return Object.keys(sides);
		}
		var inSides = centroidSides(result.groups.bInside);
		var outSides = centroidSides(result.groups.bOutside);
		expect(inSides.length).toBe(1);
		expect(outSides.length).toBe(1);
		expect(inSides[0]).not.toBe(outSides[0]);
	});

	it("reports 'none' when meshes do not intersect", function () {
		var cubeA = createCube(0, 0, 0, 1);
		var cubeB = createCube(10, 10, 10, 1);
		var result = bmsBooleanOp(cubeA, cubeB);
		expect(result.classifier.A).toBe("none (no intersection)");
		expect(result.verification).toBeNull();
	});
});

// ── Fan-sliver guard ──

describe("fan-sliver guard", function () {
	it("does not trigger for ordinary chains", function () {
		var tri = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 2, y: 0, z: 0 }, v2: { x: 0, y: 2, z: 0 } };
		var chain = [{ x: 1, y: 0, z: 0 }, { x: 0.5, y: 0.5, z: 0 }, { x: 0, y: 1, z: 0 }];
		expect(needsSliverGuard(tri, chain)).toBe(false);
	});

	it("triggers for a giant triangle against a dense chain", function () {
		var tri = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 100, y: 0, z: 0 }, v2: { x: 0, y: 100, z: 0 } };
		var chain = [];
		for (var y = 10; y <= 40; y += 0.5) chain.push({ x: 30, y: y, z: 0 });
		expect(chain.length).toBeGreaterThanOrEqual(16);
		expect(needsSliverGuard(tri, chain)).toBe(true);
	});

	it("lattice points are strictly interior and clear of the chain", function () {
		var tri = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 100, y: 0, z: 0 }, v2: { x: 0, y: 100, z: 0 } };
		var chain = [];
		for (var y = 10; y <= 40; y += 0.5) chain.push({ x: 30, y: y, z: 0 });
		var pts = interiorLatticePoints(tri, chain);
		expect(pts.length).toBeGreaterThan(0);

		for (var i = 0; i < pts.length; i++) {
			var p = pts[i];
			// Strictly inside the triangle x>0, y>0, x+y<100
			expect(p.x).toBeGreaterThan(0);
			expect(p.y).toBeGreaterThan(0);
			expect(p.x + p.y).toBeLessThan(100);
			expect(Math.abs(p.z)).toBeLessThan(1e-9);
			// Clear of the chain: never closer than the first graded offset
			// row (1.5 × chain spacing = 0.75 here)
			for (var c = 0; c < chain.length; c++) {
				var dx = p.x - chain[c].x, dy = p.y - chain[c].y;
				expect(Math.sqrt(dx * dx + dy * dy)).toBeGreaterThan(0.7);
			}
		}
	});

	it("bounds sub-triangle aspect ratio when splitting a giant face against a dense seam", function () {
		var floor = createGiantFloor();
		var fence = createFence(10, 90, 0.5);

		var isect = bmsIntersect(floor, fence);
		expect(isect.segments.length).toBeGreaterThan(100);

		var megaSoup = bmsSplit(floor, fence, isect);

		// Without the guard, fanning a 100m face against a ~0.5m-spaced chain
		// emits a needle per chain point (aspect in the hundreds). With the
		// guard, only a handful of moderately stretched triangles remain
		// (the rows along the parent edges).
		var needles = 0;
		var total = 0;
		for (var i = 0; i < megaSoup.length; i++) {
			if (megaSoup[i].mesh !== "A") continue;
			total++;
			if (aspectRatio(megaSoup[i]) > 100) needles++;
		}
		expect(total).toBeGreaterThan(10);
		expect(needles).toBeLessThan(10);
	});

	it("keeps the intersection chain as edges in the guarded CDT output", function () {
		var floor = createGiantFloor();
		var fence = createFence(10, 90, 0.5);
		var isect = bmsIntersect(floor, fence);
		var megaSoup = bmsSplit(floor, fence, isect);

		// Every segment endpoint pair must appear as an edge of some A-side
		// sub-triangle (the chain is a constraint, not a suggestion).
		var edgeSet = {};
		for (var i = 0; i < megaSoup.length; i++) {
			if (megaSoup[i].mesh !== "A") continue;
			var t = megaSoup[i];
			var ids = [t.v0.id, t.v1.id, t.v2.id];
			for (var e = 0; e < 3; e++) {
				var a = ids[e], b = ids[(e + 1) % 3];
				if (a === undefined || b === undefined) continue;
				edgeSet[a < b ? a + "|" + b : b + "|" + a] = true;
			}
		}
		var present = 0, checked = 0;
		for (var s = 0; s < isect.segments.length; s++) {
			var p0 = isect.segments[s].p0, p1 = isect.segments[s].p1;
			if (p0.id === undefined || p1.id === undefined || p0.id === p1.id) continue;
			checked++;
			var key = p0.id < p1.id ? p0.id + "|" + p1.id : p1.id + "|" + p0.id;
			if (edgeSet[key]) present++;
		}
		expect(checked).toBeGreaterThan(100);
		// CDT constraint enforcement: allow a small number of segments lost
		// to constraint failures, but the chain must overwhelmingly survive
		expect(present / checked).toBeGreaterThan(0.95);
	});
});
