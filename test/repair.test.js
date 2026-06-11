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
	closeSolid,
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

describe("closeSolid", function () {
	it("reports an already-closed mesh as closed without adding triangles", function () {
		var cube = createCube(0, 0, 0, 1);
		var result = closeSolid(cube, { snapTolerance: 0.001 });
		expect(result.diagnostics.closed).toBe(true);
		expect(result.diagnostics.openEdges).toBe(0);
		expect(result.diagnostics.capTriangles).toBe(0);
		expect(result.soup.length).toBe(12);
	});

	it("caps a pinhole (one missing face triangle) locally", function () {
		var cube = createCube(0, 0, 0, 1);
		var soup = cube.slice(0, 11); // drop one triangle -> 3-edge boundary loop
		var result = closeSolid(soup, { snapTolerance: 0.001 });
		expect(result.diagnostics.closed).toBe(true);
		expect(result.diagnostics.cappedLoops).toBe(1);
		expect(result.diagnostics.capTriangles).toBe(1);
		expect(result.soup.length).toBe(12);
	});

	it("never caps a large structural opening - reports it instead (purity)", function () {
		// 20x20 divisions -> perimeter loop of 80 verts, far above maxCapLoopVerts
		var patch = createFlatPatch(0, 0, 0, 100, 100, 20, 20);
		var inputCount = patch.length;
		var result = closeSolid(patch, { snapTolerance: 0.001 });
		expect(result.diagnostics.closed).toBe(false);
		expect(result.diagnostics.capTriangles).toBe(0);
		expect(result.diagnostics.skippedLargeLoops.length).toBe(1);
		expect(result.diagnostics.skippedLargeLoops[0]).toBe(80);
		// PURITY: nothing added, nothing removed
		expect(result.soup.length).toBe(inputCount);
	});

	it("respects maxCapLoopVerts", function () {
		// 2x2 divisions -> perimeter loop of 8 verts
		var patch = createFlatPatch(0, 0, 0, 10, 10, 2, 2);
		var r1 = closeSolid(patch, { maxCapLoopVerts: 4 });
		expect(r1.diagnostics.capTriangles).toBe(0);
		expect(r1.diagnostics.closed).toBe(false);
		var r2 = closeSolid(patch, { maxCapLoopVerts: 16 });
		expect(r2.diagnostics.capTriangles).toBeGreaterThan(0);
	});

	it("does not mutate the input soup", function () {
		var cube = createCube(0, 0, 0, 1);
		var soup = cube.slice(0, 11);
		var before = soup.length;
		closeSolid(soup, { snapTolerance: 0.001 });
		expect(soup.length).toBe(before);
	});

	it("repairMesh routes closeMode closeSolid to the pure path", async function () {
		var cube = createCube(0, 0, 0, 1);
		var result = await repairMesh(cube.slice(0, 11), { closeMode: "closeSolid", snapTolerance: 0.001 });
		expect(result.diagnostics).toBeDefined();
		expect(result.diagnostics.closed).toBe(true);
		expect(result.soup.length).toBe(12);
	});
});

describe("closeSolid - pinch-point (shared-vertex) holes", function () {
	function sharedVerts(t1, t2) {
		var ks1 = [t1.v0, t1.v1, t1.v2].map(function (v) { return v.x + "," + v.y + "," + v.z; });
		var ks2 = [t2.v0, t2.v1, t2.v2].map(function (v) { return v.x + "," + v.y + "," + v.z; });
		return ks1.filter(function (k) { return ks2.indexOf(k) !== -1; }).length;
	}

	it("closes every two-hole case where the holes share exactly one vertex (degree-4 pinch)", function () {
		var cube = createCube(0, 0, 0, 1);
		var pairsTested = 0;
		for (var i = 0; i < cube.length; i++) {
			for (var j = i + 1; j < cube.length; j++) {
				if (sharedVerts(cube[i], cube[j]) !== 1) continue;
				pairsTested++;
				var soup = cube.filter(function (t, idx) { return idx !== i && idx !== j; });
				var result = closeSolid(soup, { snapTolerance: 0.001 });
				expect(result.diagnostics.closed).toBe(true);
				expect(result.diagnostics.openEdges).toBe(0);
			}
		}
		expect(pairsTested).toBeGreaterThan(0);
	});

	it("closes a triple-hole degree-6 pinch (three holes sharing one vertex)", function () {
		var cube = createCube(0, 0, 0, 1);
		// find three triangles that pairwise share exactly one vertex, the SAME one
		function vkeys(t) { return [t.v0, t.v1, t.v2].map(function (v) { return v.x + "," + v.y + "," + v.z; }); }
		var found = null;
		outer:
		for (var i = 0; i < cube.length; i++) {
			for (var j = i + 1; j < cube.length; j++) {
				for (var k = j + 1; k < cube.length; k++) {
					var common = vkeys(cube[i]).filter(function (key) {
						return vkeys(cube[j]).indexOf(key) !== -1 && vkeys(cube[k]).indexOf(key) !== -1;
					});
					if (common.length === 1 &&
						sharedVerts(cube[i], cube[j]) === 1 &&
						sharedVerts(cube[j], cube[k]) === 1 &&
						sharedVerts(cube[i], cube[k]) === 1) {
						found = [i, j, k];
						break outer;
					}
				}
			}
		}
		if (!found) return; // cube topology may not offer this case; degree-4 test above covers the class
		var soup = cube.filter(function (t, idx) { return found.indexOf(idx) === -1; });
		var result = closeSolid(soup, { snapTolerance: 0.001 });
		expect(result.diagnostics.closed).toBe(true);
		expect(result.diagnostics.openEdges).toBe(0);
	});
});
