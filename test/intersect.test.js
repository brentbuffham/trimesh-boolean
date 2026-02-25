import { describe, it, expect } from "vitest";
import {
	triTriIntersection,
	triTriIntersectionDetailed,
	intersectMeshPair,
	intersectMeshPairTagged,
	chainSegments,
	simplifyPolyline,
	buildSpatialGrid,
	queryGrid,
	computeBBox,
	triBBox,
	bboxOverlap,
	estimateAvgEdge,
	triNormal,
	dist3
} from "../src/index.js";
import { createCube, createFlatPatch, createSingleTriangle } from "./fixtures/meshes.js";

describe("triNormal", function () {
	it("returns Z-up for horizontal triangle", function () {
		var tri = {
			v0: { x: 0, y: 0, z: 0 },
			v1: { x: 1, y: 0, z: 0 },
			v2: { x: 0, y: 1, z: 0 }
		};
		var n = triNormal(tri);
		expect(n.z).toBeCloseTo(1, 5);
		expect(Math.abs(n.x)).toBeLessThan(1e-10);
		expect(Math.abs(n.y)).toBeLessThan(1e-10);
	});

	it("returns unit-length normal", function () {
		var tri = {
			v0: { x: 0, y: 0, z: 0 },
			v1: { x: 3, y: 0, z: 0 },
			v2: { x: 0, y: 4, z: 0 }
		};
		var n = triNormal(tri);
		var len = Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z);
		expect(len).toBeCloseTo(1, 10);
	});
});

describe("triTriIntersection", function () {
	it("returns null for non-intersecting triangles", function () {
		var triA = {
			v0: { x: 0, y: 0, z: 0 },
			v1: { x: 1, y: 0, z: 0 },
			v2: { x: 0, y: 1, z: 0 }
		};
		var triB = {
			v0: { x: 0, y: 0, z: 5 },
			v1: { x: 1, y: 0, z: 5 },
			v2: { x: 0, y: 1, z: 5 }
		};
		expect(triTriIntersection(triA, triB)).toBeNull();
	});

	it("returns segment for intersecting triangles", function () {
		var triA = {
			v0: { x: 0, y: 0, z: 0 },
			v1: { x: 2, y: 0, z: 0 },
			v2: { x: 1, y: 2, z: 0 }
		};
		var triB = {
			v0: { x: 1, y: 1, z: -1 },
			v1: { x: 1, y: 1, z: 1 },
			v2: { x: 1, y: -1, z: 0 }
		};
		var seg = triTriIntersection(triA, triB);
		expect(seg).not.toBeNull();
		expect(seg.p0).toBeDefined();
		expect(seg.p1).toBeDefined();
		expect(dist3(seg.p0, seg.p1)).toBeGreaterThan(1e-8);
	});

	it("returns null for parallel triangles", function () {
		var triA = {
			v0: { x: 0, y: 0, z: 0 },
			v1: { x: 1, y: 0, z: 0 },
			v2: { x: 0, y: 1, z: 0 }
		};
		var triB = {
			v0: { x: 0, y: 0, z: 0.001 },
			v1: { x: 1, y: 0, z: 0.001 },
			v2: { x: 0, y: 1, z: 0.001 }
		};
		expect(triTriIntersection(triA, triB)).toBeNull();
	});
});

describe("triTriIntersectionDetailed", function () {
	it("returns signed distances and segment length", function () {
		var triA = {
			v0: { x: 0, y: 0, z: 0 },
			v1: { x: 2, y: 0, z: 0 },
			v2: { x: 1, y: 2, z: 0 }
		};
		var triB = {
			v0: { x: 1, y: 0.5, z: -1 },
			v1: { x: 1, y: 0.5, z: 1 },
			v2: { x: -1, y: 0.5, z: 0 }
		};
		var result = triTriIntersectionDetailed(triA, triB);
		expect(result).not.toBeNull();
		expect(result.dA).toHaveLength(3);
		expect(result.dB).toHaveLength(3);
		expect(result.segLen).toBeGreaterThan(0);
	});
});

describe("spatialGrid", function () {
	it("builds grid and queries correctly", function () {
		var soup = createCube(0, 0, 0, 2);
		var grid = buildSpatialGrid(soup, 1);
		var bb = { minX: -0.5, maxX: 0.5, minY: -0.5, maxY: 0.5 };
		var candidates = queryGrid(grid, bb, 1);
		expect(candidates.length).toBeGreaterThan(0);
	});

	it("computes bounding box", function () {
		var soup = createCube(5, 10, 15, 2);
		var bbox = computeBBox(soup);
		expect(bbox.minX).toBeCloseTo(4, 5);
		expect(bbox.maxX).toBeCloseTo(6, 5);
		expect(bbox.minY).toBeCloseTo(9, 5);
		expect(bbox.maxY).toBeCloseTo(11, 5);
		expect(bbox.minZ).toBeCloseTo(14, 5);
		expect(bbox.maxZ).toBeCloseTo(16, 5);
	});

	it("detects bbox overlap", function () {
		var a = { minX: 0, maxX: 2, minY: 0, maxY: 2, minZ: 0, maxZ: 2 };
		var b = { minX: 1, maxX: 3, minY: 1, maxY: 3, minZ: 1, maxZ: 3 };
		expect(bboxOverlap(a, b)).toBe(true);

		var c = { minX: 5, maxX: 6, minY: 5, maxY: 6, minZ: 5, maxZ: 6 };
		expect(bboxOverlap(a, c)).toBe(false);
	});

	it("estimates average edge length", function () {
		var soup = createCube(0, 0, 0, 2);
		var avg = estimateAvgEdge(soup);
		expect(avg).toBeGreaterThan(0);
		expect(avg).toBeLessThan(5);
	});
});

describe("intersectMeshPair", function () {
	it("finds intersections between overlapping cubes", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 0, 0, 2);
		var segments = intersectMeshPair(cubeA, cubeB);
		expect(segments.length).toBeGreaterThan(0);
	});

	it("returns empty for non-overlapping cubes", function () {
		var cubeA = createCube(0, 0, 0, 1);
		var cubeB = createCube(10, 10, 10, 1);
		var segments = intersectMeshPair(cubeA, cubeB);
		expect(segments.length).toBe(0);
	});
});

describe("intersectMeshPairTagged", function () {
	it("returns tagged segments with source indices", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 0, 0, 2);
		var segments = intersectMeshPairTagged(cubeA, cubeB);
		expect(segments.length).toBeGreaterThan(0);
		for (var i = 0; i < segments.length; i++) {
			expect(typeof segments[i].idxA).toBe("number");
			expect(typeof segments[i].idxB).toBe("number");
		}
	});
});

describe("chainSegments", function () {
	it("chains connected segments into polylines", function () {
		var segments = [
			{ p0: { x: 0, y: 0, z: 0 }, p1: { x: 1, y: 0, z: 0 } },
			{ p0: { x: 1, y: 0, z: 0 }, p1: { x: 2, y: 0, z: 0 } },
			{ p0: { x: 2, y: 0, z: 0 }, p1: { x: 3, y: 0, z: 0 } }
		];
		var polylines = chainSegments(segments, 0.01);
		expect(polylines.length).toBe(1);
		expect(polylines[0].length).toBe(4);
	});

	it("creates separate polylines for disconnected segments", function () {
		var segments = [
			{ p0: { x: 0, y: 0, z: 0 }, p1: { x: 1, y: 0, z: 0 } },
			{ p0: { x: 10, y: 10, z: 10 }, p1: { x: 11, y: 10, z: 10 } }
		];
		var polylines = chainSegments(segments, 0.01);
		expect(polylines.length).toBe(2);
	});
});

describe("simplifyPolyline", function () {
	it("reduces point count with spacing", function () {
		var points = [];
		for (var i = 0; i <= 100; i++) {
			points.push({ x: i * 0.1, y: 0, z: 0 });
		}
		var simplified = simplifyPolyline(points, 1.0);
		expect(simplified.length).toBeLessThan(points.length);
		expect(simplified.length).toBeGreaterThanOrEqual(2);
	});

	it("keeps all points when spacing is 0", function () {
		var points = [
			{ x: 0, y: 0, z: 0 },
			{ x: 1, y: 0, z: 0 },
			{ x: 2, y: 0, z: 0 }
		];
		var result = simplifyPolyline(points, 0);
		expect(result.length).toBe(3);
	});
});
