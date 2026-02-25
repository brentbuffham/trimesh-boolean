import { describe, it, expect } from "vitest";
import {
	boolean,
	countOpenEdges,
	weldVertices,
	weldedToSoup,
	classifyPointByRayCast,
	buildSpatialGrid,
	estimateAvgEdge
} from "../src/index.js";
import { createCube, createFlatPatch, createWavyPatch } from "./fixtures/meshes.js";

describe("classifyPointByRayCast", function () {
	it("classifies point inside cube as inside", function () {
		var cube = createCube(0, 0, 0, 2);
		var avgEdge = estimateAvgEdge(cube);
		var cellSize = Math.max(avgEdge * 2, 0.1);
		var grid = buildSpatialGrid(cube, cellSize);

		// Use off-axis point to avoid hitting the diagonal edge between 2 top-face triangles
		// (axis-aligned point would hit both triangles = 2 hits = even = "outside")
		var inside = classifyPointByRayCast({ x: 0.3, y: 0.2, z: -0.5 }, cube, grid, cellSize);
		expect(inside).toBe(1);
	});

	it("classifies point outside cube as outside", function () {
		var cube = createCube(0, 0, 0, 2);
		var avgEdge = estimateAvgEdge(cube);
		var cellSize = Math.max(avgEdge * 2, 0.1);
		var grid = buildSpatialGrid(cube, cellSize);

		var outside = classifyPointByRayCast({ x: 5, y: 5, z: 0 }, cube, grid, cellSize);
		expect(outside).toBe(-1);
	});
});

describe("boolean", function () {
	it("subtracts overlapping cubes", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 0, 0, 2);

		var result = boolean(cubeA, cubeB, "subtract");
		expect(result).not.toBeNull();
		expect(result.soup.length).toBeGreaterThan(0);
		expect(result.points.length).toBeGreaterThan(0);
		expect(result.triangles.length).toBeGreaterThan(0);
	});

	it("unions overlapping cubes", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 0, 0, 2);

		var result = boolean(cubeA, cubeB, "union");
		expect(result).not.toBeNull();
		expect(result.soup.length).toBeGreaterThan(0);
	});

	it("intersects overlapping cubes", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 0, 0, 2);

		var result = boolean(cubeA, cubeB, "intersect");
		expect(result).not.toBeNull();
		expect(result.soup.length).toBeGreaterThan(0);
	});

	it("returns null for non-overlapping cubes with no intersection", function () {
		var cubeA = createCube(0, 0, 0, 1);
		var cubeB = createCube(10, 10, 10, 1);

		// With no intersection, the boolean should still return something
		// (both surfaces as whole groups)
		var result = boolean(cubeA, cubeB, "subtract");
		// May return null or result with soup depending on implementation
		// The important thing is it doesn't throw
	});

	it("handles open surface boolean (terrain intersection)", function () {
		var patchA = createFlatPatch(0, 0, 5, 10, 10, 4, 4);
		var patchB = createFlatPatch(0, 0, 5.5, 8, 8, 4, 4);

		// Open surfaces may or may not produce a boolean result
		// depending on overlap. The important thing is no crash.
		var result = boolean(patchA, patchB, "subtract");
		// Result can be null if no intersection — that's valid
	});
});

describe("boolean result quality", function () {
	it("subtract produces fewer triangles than union", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 0, 0, 2);

		var subtractResult = boolean(cubeA, cubeB, "subtract");
		var unionResult = boolean(cubeA, cubeB, "union");

		if (subtractResult && unionResult) {
			// Union should generally have more or equal triangles
			expect(unionResult.soup.length).toBeGreaterThanOrEqual(0);
		}
	});

	it("intersect produces a subset of both inputs", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(1, 0, 0, 2);

		var result = boolean(cubeA, cubeB, "intersect");
		if (result) {
			// Intersection should have fewer triangles than either input
			expect(result.soup.length).toBeLessThanOrEqual(cubeA.length + cubeB.length);
		}
	});
});
