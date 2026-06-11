/**
 * @module repair/closeSolid
 *
 * Honest, conservative solid closing — the antidote to "smart" closing.
 *
 * Philosophy (born from a real failure: KNOWN_ISSUES #14 and the 2026-06-11
 * Kirra session where stitch+cap+forceClose draped ~3,350 invented panels
 * across a terrain floor):
 *
 *   1. A boolean result built on a shared vertex pool (BMS) already has
 *      coincident seam vertices. WELDING ALONE should close it. No bridging,
 *      no proximity stitching, no force-closing.
 *   2. Small boundary loops (pinholes) are capped LOCALLY — triangles whose
 *      vertices all lie ON that loop. Nothing is ever drawn across the mesh.
 *   3. Large boundary loops indicate a REAL upstream problem (classification,
 *      missing region, intentional open boundary). They are NEVER capped —
 *      they are reported in the diagnostics so the caller can see the truth.
 *   4. The result always carries diagnostics: the caller can display
 *      "Closed: 0 open edges" or "NOT closed: N edges in M loops" instead of
 *      trusting the operation blind.
 *
 * This function never deletes input triangles and never adds a triangle whose
 * vertices are not all on a single small boundary loop.
 */

import { countOpenEdges } from "../util/math.js";
import { weldVertices, weldedToSoup } from "./weldVertices.js";
import { extractBoundaryLoops, triangulateLoop } from "./boundaryLoops.js";

/**
 * Close a triangle soup into a solid by welding and capping pinhole loops only.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup - Triangle soup
 * @param {Object} [options]
 * @param {number} [options.snapTolerance=0.001] - Weld tolerance in metres
 * @param {number} [options.maxCapLoopVerts=32] - Loops with more vertices than
 *        this are considered structural problems and are reported, not capped
 * @param {number} [options.maxPasses=3] - Re-extract/cap passes (capping one
 *        loop can reveal another after re-welding)
 * @returns {{
 *   points: Array<{x,y,z}>,
 *   triangles: Array,
 *   soup: Array,
 *   diagnostics: {
 *     closed: boolean,
 *     openEdges: number,
 *     openLoops: number,
 *     loopSizes: number[],
 *     skippedLargeLoops: number[],
 *     cappedLoops: number,
 *     capTriangles: number,
 *     nonManifoldEdges: number
 *   }
 * }}
 */
export function closeSolid(soup, options) {
	var opts = options || {};
	var snapTol = opts.snapTolerance !== undefined ? opts.snapTolerance : 0.001;
	var maxCapLoopVerts = opts.maxCapLoopVerts !== undefined ? opts.maxCapLoopVerts : 32;
	var maxPasses = opts.maxPasses !== undefined ? opts.maxPasses : 3;

	// Step 1) Weld. With shared-pool (BMS) seams this alone closes the mesh.
	var welded = weldVertices(soup, snapTol);
	soup = weldedToSoup(welded.triangles);

	var cappedLoops = 0;
	var capTriangles = 0;
	var skippedLargeLoops = [];

	// Step 2) Cap pinhole loops only. Never bridge, never force-close.
	for (var pass = 0; pass < maxPasses; pass++) {
		var loopResult = extractBoundaryLoops(soup);
		if (loopResult.loops.length === 0) break;

		var addedThisPass = 0;
		skippedLargeLoops = [];

		for (var li = 0; li < loopResult.loops.length; li++) {
			var loop = loopResult.loops[li];
			if (loop.length < 3) continue;
			if (loop.length > maxCapLoopVerts) {
				// Structural opening — report, never drape a lid across it.
				skippedLargeLoops.push(loop.length);
				continue;
			}
			var caps = triangulateLoop(loop);
			if (caps.length === 0) continue;
			for (var ct = 0; ct < caps.length; ct++) soup.push(caps[ct]);
			cappedLoops++;
			addedThisPass += caps.length;
		}

		capTriangles += addedThisPass;
		if (addedThisPass === 0) break;

		// Re-weld so cap triangles fuse with the loop edges before re-checking.
		var rewelded = weldVertices(soup, snapTol);
		soup = weldedToSoup(rewelded.triangles);
	}

	// Step 3) Final state + honest diagnostics.
	var finalWeld = weldVertices(soup, snapTol);
	var finalSoup = weldedToSoup(finalWeld.triangles);
	var stats = countOpenEdges(finalSoup);
	var finalLoops = extractBoundaryLoops(finalSoup);

	return {
		points: finalWeld.points,
		triangles: finalWeld.triangles,
		soup: finalSoup,
		diagnostics: {
			closed: stats.openEdges === 0,
			openEdges: stats.openEdges,
			openLoops: finalLoops.loops.length,
			loopSizes: finalLoops.loops.map(function (l) { return l.length; }),
			skippedLargeLoops: skippedLargeLoops,
			cappedLoops: cappedLoops,
			capTriangles: capTriangles,
			nonManifoldEdges: stats.overShared
		}
	};
}
