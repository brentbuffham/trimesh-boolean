import { describe, it, expect } from "vitest";
import { orientSolid } from "../src/index.js";
import { createCube, createFlatPatch } from "./fixtures/meshes.js";

function flipTri(t) {
	return { v0: t.v0, v1: t.v2, v2: t.v1 };
}

describe("orientSolid", function () {
	it("repairs a checkerboard-flipped cube to coherent outward winding", function () {
		var cube = createCube(0, 0, 0, 1);
		// deterministically flip a scattering of triangles (the survey-DXF case)
		var messy = cube.map(function (t, i) { return (i % 3 === 1) ? flipTri(t) : t; });
		var r = orientSolid(messy);
		expect(r.diagnostics.windingViolationsBefore).toBeGreaterThan(0);
		expect(r.diagnostics.windingViolationsAfter).toBe(0);
		expect(r.diagnostics.components).toBe(1);
		expect(r.diagnostics.closedComponents).toBe(1);
		expect(r.diagnostics.signedVolume).toBeCloseTo(1.0, 6); // unit cube, outward
	});

	it("flips a fully inverted (coherent inward) cube outward in one move", function () {
		var cube = createCube(0, 0, 0, 1);
		var inward = cube.map(flipTri);
		var r = orientSolid(inward);
		expect(r.diagnostics.windingViolationsBefore).toBe(0); // coherent, just inward
		expect(r.diagnostics.flippedForCoherence).toBe(0);
		expect(r.diagnostics.componentsFlippedForDirection).toBe(1);
		expect(r.diagnostics.signedVolume).toBeCloseTo(1.0, 6);
	});

	it("is idempotent on an already-correct solid", function () {
		var cube = createCube(0, 0, 0, 2);
		var r1 = orientSolid(cube);
		var r2 = orientSolid(r1.soup);
		expect(r2.diagnostics.flippedForCoherence).toBe(0);
		expect(r2.diagnostics.componentsFlippedForDirection).toBe(0);
		expect(r2.diagnostics.signedVolume).toBeCloseTo(8.0, 6); // 2^3
	});

	it("makes an open sheet coherent without forcing a direction", function () {
		var patch = createFlatPatch(0, 0, 0, 10, 10, 3, 3);
		var messy = patch.map(function (t, i) { return (i % 2 === 0) ? flipTri(t) : t; });
		var r = orientSolid(messy);
		expect(r.diagnostics.windingViolationsAfter).toBe(0);
		expect(r.diagnostics.openComponents).toBe(1);
		expect(r.diagnostics.componentsFlippedForDirection).toBe(0);
	});

	it("handles multiple components independently", function () {
		var a = createCube(0, 0, 0, 1);
		var b = createCube(10, 0, 0, 1).map(flipTri); // second cube inverted
		var r = orientSolid(a.concat(b));
		expect(r.diagnostics.components).toBe(2);
		expect(r.diagnostics.closedComponents).toBe(2);
		expect(r.diagnostics.componentsFlippedForDirection).toBe(1);
		expect(r.diagnostics.signedVolume).toBeCloseTo(2.0, 6);
		expect(r.diagnostics.windingViolationsAfter).toBe(0);
	});

	it("does not mutate the input soup", function () {
		var cube = createCube(0, 0, 0, 1);
		var messy = cube.map(function (t, i) { return (i % 3 === 1) ? flipTri(t) : t; });
		var snapshot = JSON.stringify(messy);
		orientSolid(messy);
		expect(JSON.stringify(messy)).toBe(snapshot);
	});
});
