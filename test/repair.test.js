import { describe, it, expect } from "vitest";
import {
	deduplicateSeamVertices,
	resolveTJunctions,
	weldVertices,
	weldedToSoup,
	removeDegenerateTriangles,
	extractBoundaryLoops,
	triangulateLoop,
	cleanCrossingTriangles,
	removeOverlappingTriangles,
	stitchByProximity,
	weldBoundaryVertices,
	countOpenEdges,
	repairMesh,
	dist3
} from "../src/index.js";
import { createCube, createFlatPatch } from "./fixtures/meshes.js";

describe("deduplicateSeamVertices", function () {
	it("merges duplicate vertices within tolerance", function () {
		var soup = [
			{ v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 } },
			{ v0: { x: 1.00005, y: 0, z: 0 }, v1: { x: 1, y: 1, z: 0 }, v2: { x: 0.00005, y: 1, z: 0 } }
		];
		var result = deduplicateSeamVertices(soup, 1e-4);
		expect(result.length).toBe(2);
	});

	it("removes degenerate triangles from merging", function () {
		var soup = [
			{ v0: { x: 0, y: 0, z: 0 }, v1: { x: 0.00001, y: 0, z: 0 }, v2: { x: 0, y: 0.00001, z: 0 } }
		];
		var result = deduplicateSeamVertices(soup, 1e-4);
		expect(result.length).toBe(0);
	});

	it("returns empty for empty input", function () {
		expect(deduplicateSeamVertices([], 1e-4)).toEqual([]);
	});
});

describe("weldVertices", function () {
	it("welds coincident vertices", function () {
		var cube = createCube(0, 0, 0, 1);
		var result = weldVertices(cube, 0.001);
		expect(result.points.length).toBe(8);
		expect(result.triangles.length).toBe(12);
	});

	it("preserves topology with zero tolerance", function () {
		var cube = createCube(0, 0, 0, 1);
		var result = weldVertices(cube, 0);
		expect(result.triangles.length).toBe(12);
		expect(result.points.length).toBe(36); // 12 tris * 3 verts
	});
});

describe("weldedToSoup", function () {
	it("converts back to soup format", function () {
		var welded = [
			{ vertices: [{ x: 0, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }, { x: 0, y: 1, z: 0 }] }
		];
		var soup = weldedToSoup(welded);
		expect(soup.length).toBe(1);
		expect(soup[0].v0.x).toBe(0);
		expect(soup[0].v1.x).toBe(1);
		expect(soup[0].v2.y).toBe(1);
	});
});

describe("removeDegenerateTriangles", function () {
	it("removes zero-area triangles", function () {
		var soup = [
			{ v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 } },
			{ v0: { x: 0, y: 0, z: 0 }, v1: { x: 0, y: 0, z: 0 }, v2: { x: 0, y: 0, z: 0 } }
		];
		var result = removeDegenerateTriangles(soup, 1e-6, 0.01);
		expect(result.length).toBe(1);
	});

	it("removes sliver triangles", function () {
		var soup = [
			{ v0: { x: 0, y: 0, z: 0 }, v1: { x: 100, y: 0, z: 0 }, v2: { x: 50, y: 0.001, z: 0 } }
		];
		var result = removeDegenerateTriangles(soup, 1e-6, 0.01);
		expect(result.length).toBe(0);
	});

	it("keeps valid triangles", function () {
		var cube = createCube(0, 0, 0, 1);
		var result = removeDegenerateTriangles(cube, 1e-6, 0.01);
		expect(result.length).toBe(12);
	});
});

describe("extractBoundaryLoops", function () {
	it("finds no boundary on closed cube", function () {
		var cube = createCube(0, 0, 0, 1);
		var welded = weldVertices(cube, 0.001);
		var soup = weldedToSoup(welded.triangles);
		var result = extractBoundaryLoops(soup);
		expect(result.boundaryEdgeCount).toBe(0);
	});

	it("finds boundary on open patch", function () {
		var patch = createFlatPatch(0, 0, 0, 10, 10, 2, 2);
		var result = extractBoundaryLoops(patch);
		expect(result.boundaryEdgeCount).toBeGreaterThan(0);
		expect(result.loops.length).toBeGreaterThan(0);
	});
});

describe("triangulateLoop", function () {
	it("triangulates a square loop", function () {
		var loop = [
			{ x: 0, y: 0, z: 0 },
			{ x: 1, y: 0, z: 0 },
			{ x: 1, y: 1, z: 0 },
			{ x: 0, y: 1, z: 0 }
		];
		var tris = triangulateLoop(loop);
		expect(tris.length).toBe(2);
	});

	it("returns empty for less than 3 points", function () {
		expect(triangulateLoop([{ x: 0, y: 0, z: 0 }])).toEqual([]);
		expect(triangulateLoop([{ x: 0, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }])).toEqual([]);
	});

	it("handles a triangle directly", function () {
		var loop = [
			{ x: 0, y: 0, z: 0 },
			{ x: 1, y: 0, z: 0 },
			{ x: 0, y: 1, z: 0 }
		];
		var tris = triangulateLoop(loop);
		expect(tris.length).toBe(1);
	});
});

describe("countOpenEdges", function () {
	it("reports zero open edges for closed cube", function () {
		var cube = createCube(0, 0, 0, 1);
		var welded = weldVertices(cube, 0.001);
		var soup = weldedToSoup(welded.triangles);
		var stats = countOpenEdges(soup);
		expect(stats.openEdges).toBe(0);
		expect(stats.overShared).toBe(0);
	});

	it("reports open edges for open patch", function () {
		var patch = createFlatPatch(0, 0, 0, 10, 10, 2, 2);
		var stats = countOpenEdges(patch);
		expect(stats.openEdges).toBeGreaterThan(0);
	});
});

describe("cleanCrossingTriangles", function () {
	it("handles clean mesh without changes", function () {
		var cube = createCube(0, 0, 0, 1);
		var result = cleanCrossingTriangles(cube);
		expect(result.length).toBe(cube.length);
	});
});

describe("repairMesh", function () {
	it("repairs a simple mesh with stitch mode", async function () {
		var cube = createCube(0, 0, 0, 2);
		var result = await repairMesh(cube, { closeMode: "stitch", snapTolerance: 0.01 });
		expect(result.points.length).toBeGreaterThan(0);
		expect(result.triangles.length).toBeGreaterThan(0);
		expect(result.soup.length).toBeGreaterThan(0);
	});

	it("repairs with none mode (no closing)", async function () {
		var patch = createFlatPatch(0, 0, 0, 10, 10, 2, 2);
		var result = await repairMesh(patch, { closeMode: "none", snapTolerance: 0.001 });
		expect(result.soup.length).toBeGreaterThan(0);
	});
});
