/**
 * @module repair/repairMesh
 *
 * High-level async mesh repair pipeline.
 * Runs a configurable sequence of:
 *   dedup -> T-junction resolution -> weld -> degenerate removal -> stitch -> cap -> force-close
 *
 * Each major step yields to the event loop via setTimeout(0) so the
 * caller's progress callback can update.
 */

import { countOpenEdges } from "../util/math.js";
import { deduplicateSeamVertices } from "./deduplicateVertices.js";
import { resolveTJunctions } from "./resolveTJunctions.js";
import { weldVertices, weldedToSoup } from "./weldVertices.js";
import { removeDegenerateTriangles } from "./removeDegenerates.js";
import { stitchByProximity } from "./stitchEdges.js";
import { capBoundaryLoopsSequential, extractBoundaryLoops } from "./boundaryLoops.js";
import { cleanCrossingTriangles } from "./cleanCrossing.js";
import { forceCloseIndexedMesh } from "./forceClose.js";

/**
 * High-level mesh repair entry point. Runs a configurable pipeline
 * of dedup, weld, degenerate removal, stitch, cap, and force-close.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup - Triangle soup
 * @param {Object} [config]
 * @param {string}  [config.closeMode="none"] - "none" | "weld" | "stitch"
 * @param {number}  [config.snapTolerance=0] - Weld tolerance in metres
 * @param {number}  [config.stitchTolerance=1.0] - Stitch tolerance
 * @param {boolean} [config.removeDegenerate=true] - Remove degenerate/sliver triangles
 * @param {Function} [onProgress] - Called with progress string, e.g. onProgress("Welding...")
 * @returns {Promise<{ points: Array<{x,y,z}>, triangles: Array<{vertices: Array}>, soup: Array }>}
 */
export async function repairMesh(soup, config, onProgress) {
	if (!config) config = {};
	var closeMode = config.closeMode || "none";
	var snapTol = config.snapTolerance || 0;
	var stitchTol = config.stitchTolerance || 1.0;
	var removeDegenerate = config.removeDegenerate !== false;

	function progress(msg) {
		if (typeof onProgress === "function") onProgress(msg);
	}

	// Yield to event loop so UI can update
	function yieldUI() {
		return new Promise(function (r) { setTimeout(r, 0); });
	}

	// Step 1: Deduplicate seam vertices
	progress("Deduplicating vertices...");
	await yieldUI();
	soup = deduplicateSeamVertices(soup, 1e-4);

	// Step 1.5: Resolve T-junctions
	progress("Resolving T-junctions...");
	await yieldUI();
	soup = resolveTJunctions(soup, 1e-4);

	// Step 2: Weld vertices
	progress("Welding vertices...");
	await yieldUI();
	var welded = weldVertices(soup, snapTol);
	soup = weldedToSoup(welded.triangles);

	// Step 3: Remove degenerates
	if (removeDegenerate) {
		progress("Removing degenerate triangles...");
		await yieldUI();
		soup = removeDegenerateTriangles(soup, 1e-6, 0.01);
	}

	// Step 4: Stitch + cap (if closeMode === "stitch")
	if (closeMode === "stitch") {
		progress("Stitching boundaries...");
		await yieldUI();
		var stitchTris = stitchByProximity(soup, stitchTol);
		if (stitchTris.length > 0) {
			for (var st = 0; st < stitchTris.length; st++) {
				soup.push(stitchTris[st]);
			}
		}

		// Final weld after stitch
		var finalWelded = weldVertices(soup, snapTol);
		var worldPoints = finalWelded.points;
		var triangles = finalWelded.triangles;

		// Sequential capping
		progress("Capping boundary loops...");
		await yieldUI();
		var postSoup = weldedToSoup(triangles);
		postSoup = capBoundaryLoopsSequential(postSoup, snapTol, 3);

		var cappedWeld = weldVertices(postSoup, snapTol);
		worldPoints = cappedWeld.points;
		triangles = cappedWeld.triangles;

		// Post-cap cleanup
		progress("Cleaning up post-cap mesh...");
		await yieldUI();
		var postCapSoup = weldedToSoup(triangles);
		var postCapChanged = false;

		var postCapStats = countOpenEdges(postCapSoup);
		if (postCapStats.overShared > 0) {
			postCapSoup = cleanCrossingTriangles(postCapSoup);
			postCapChanged = true;
		}

		if (removeDegenerate) {
			var preDegenCount = postCapSoup.length;
			postCapSoup = removeDegenerateTriangles(postCapSoup, 1e-6, 0.01);
			if (postCapSoup.length < preDegenCount) postCapChanged = true;
		}

		if (postCapChanged) {
			var postCapWeld = weldVertices(postCapSoup, snapTol);
			worldPoints = postCapWeld.points;
			triangles = postCapWeld.triangles;
		}

		// Safety net -- forceCloseIndexedMesh
		progress("Force-closing gaps...");
		await yieldUI();
		var safetyCheckSoup = weldedToSoup(triangles);
		var safetyStats = countOpenEdges(safetyCheckSoup);
		if (safetyStats.openEdges > 0) {
			var forceClosed = forceCloseIndexedMesh(worldPoints, triangles);
			worldPoints = forceClosed.points;
			triangles = forceClosed.triangles;
		}

		// Final result
		var finalSoup = weldedToSoup(triangles);
		soup = finalSoup;

		progress("Repair complete.");
		return { points: worldPoints, triangles: triangles, soup: soup };
	}

	// For non-stitch modes, just do a final weld and return
	var finalWeld = weldVertices(soup, snapTol);

	progress("Repair complete.");
	return { points: finalWeld.points, triangles: finalWeld.triangles, soup: soup };
}
