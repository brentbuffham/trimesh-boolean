/**
 * @module bms/bmsBooleanOp
 *
 * Main entry point for the BMS (Brent's Mega Soup) boolean pipeline.
 *
 * Pipeline:
 *   1. bmsIntersect  — shared vertex pool + spatial grid
 *   2. bmsSplit      — CDT with pool vertices → mega soup
 *   3. bmsChain      — identity-based segment chaining
 *   4. bmsClose      — close polylines along boundary edges
 *   5. bmsClassify   — barrier flood-fill, right=inside left=outside
 */

import { bmsIntersect } from "./bmsIntersect.js";
import { bmsSplit } from "./bmsSplit.js";
import { bmsChain } from "./bmsChain.js";
import { bmsClosePolylines } from "./bmsClose.js";
import { bmsClassify } from "./bmsClassify.js";
import { estimateAvgEdge } from "../intersect/spatialGrid.js";
import { resolveTJunctions } from "../repair/resolveTJunctions.js";
import { weldBoundaryVertices } from "../repair/weldBoundary.js";
import { weldVertices } from "../repair/weldVertices.js";
import { deduplicateSeamVertices } from "../repair/deduplicateVertices.js";

/**
 * Flip the winding order of all triangles in a soup.
 * @param {Array} tris
 * @returns {Array}
 */
function flipSoup(tris) {
	var result = [];
	for (var i = 0; i < tris.length; i++) {
		var t = tris[i];
		result.push({
			v0: { x: t.v0.x, y: t.v0.y, z: t.v0.z },
			v1: { x: t.v2.x, y: t.v2.y, z: t.v2.z },
			v2: { x: t.v1.x, y: t.v1.y, z: t.v1.z }
		});
	}
	return result;
}

/**
 * Run the full BMS boolean pipeline.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupA
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupB
 * @param {"subtract"|"union"|"intersect"} [operation] - If omitted, returns split groups only
 * @param {Object} [options]
 * @param {boolean} [options.preRepair] - Resolve T-junctions + weld boundary before splitting
 * @param {number} [options.tolerance] - Vertex pool tolerance
 * @returns {{
 *   groups: { aInside: Array, aOutside: Array, bInside: Array, bOutside: Array },
 *   segments: Array,
 *   polylines: Array,
 *   megaSoup: Array,
 *   pool: Object
 * }|null}
 */
export function bmsBooleanOp(soupA, soupB, operation, options) {
	if (!soupA || !soupB || soupA.length === 0 || soupB.length === 0) {
		return null;
	}

	var opts = options || {};

	// Step 1) Optional pre-repair
	if (opts.preRepair) {
		var tolA = opts.tolerance !== undefined ? opts.tolerance : estimateAvgEdge(soupA) * 0.01;
		var tolB = opts.tolerance !== undefined ? opts.tolerance : estimateAvgEdge(soupB) * 0.01;
		soupA = resolveTJunctions(soupA, tolA, 3);
		soupA = weldBoundaryVertices(soupA, tolA);
		soupB = resolveTJunctions(soupB, tolB, 3);
		soupB = weldBoundaryVertices(soupB, tolB);
	}

	// Step 2) Intersect with shared vertex pool
	var isect = bmsIntersect(soupA, soupB, { tolerance: opts.tolerance });

	if (isect.segments.length === 0) {
		// No intersection — everything is outside
		return {
			groups: {
				aInside: [],
				aOutside: soupA.slice(),
				bInside: [],
				bOutside: soupB.slice()
			},
			segments: [],
			polylines: [],
			megaSoup: null,
			pool: isect.pool
		};
	}

	// Step 3) Split both meshes into mega soup
	var megaSoup = bmsSplit(soupA, soupB, isect);

	// Step 4) Chain intersection segments
	var polylines = bmsChain(isect.segments);

	// Step 5) Close open polylines along boundary edges + build mesh edge polys
	var closeResult = bmsClosePolylines(polylines, soupA, soupB, megaSoup, isect.segments);
	var closedPolylines = closeResult.closedPolylines;
	var meshEdgePolys = closeResult.meshEdgePolys;

	// Step 6) Classify via barrier flood fill
	var groups = bmsClassify(megaSoup, closedPolylines, isect.segments, soupA, soupB);

	// Step 7) Deduplicate seam vertices in each group
	if (groups.aInside.length > 0) groups.aInside = deduplicateSeamVertices(groups.aInside, 1e-4);
	if (groups.aOutside.length > 0) groups.aOutside = deduplicateSeamVertices(groups.aOutside, 1e-4);
	if (groups.bInside.length > 0) groups.bInside = deduplicateSeamVertices(groups.bInside, 1e-4);
	if (groups.bOutside.length > 0) groups.bOutside = deduplicateSeamVertices(groups.bOutside, 1e-4);

	var result = {
		groups: groups,
		segments: isect.segments,
		polylines: closedPolylines,
		rawPolylines: polylines,
		meshEdgePolys: meshEdgePolys,
		megaSoup: megaSoup,
		pool: isect.pool
	};

	// Step 8) If operation specified, combine groups
	if (operation) {
		var combined = [];

		if (operation === "subtract") {
			combined = groups.aOutside.concat(flipSoup(groups.bInside));
		} else if (operation === "union") {
			combined = groups.aOutside.concat(groups.bOutside);
		} else if (operation === "intersect") {
			combined = groups.aInside.concat(groups.bInside);
		}

		if (combined.length > 0) {
			var welded = weldVertices(combined, 1e-4);
			result.result = {
				soup: combined,
				points: welded.points,
				triangles: welded.triangles
			};
		} else {
			result.result = null;
		}
	}

	return result;
}
