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
 *   5. bmsClassify   — per-region boundary walk, winding = inside/outside
 */

import { bmsIntersect } from "./bmsIntersect.js";
import { bmsSplit } from "./bmsSplit.js";
import { bmsChain } from "./bmsChain.js";
import { bmsClosePolylines } from "./bmsClose.js";
import { bmsClassify } from "./bmsClassify.js";
import { verifyBmsClassification } from "./bmsVerify.js";
import { heffalumpClassify, shouldUseHeffalump } from "./heffalumpClassify.js";
import { estimateAvgEdge } from "../intersect/spatialGrid.js";
import { soupCentroid, translateSoup } from "../util/math.js";
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
 * @param {"auto"|"hybrid"|"heffalump"} [options.classifier="auto"] - Classification strategy.
 *        "auto" (default): census the inputs (messy → heffalump + auto pre-repair),
 *        run the hybrid classifier, verify partition / chain-closure / barrier
 *        post-conditions, and on any failure re-run ONLY the classification stage
 *        with the heffalump on the existing mega soup (milliseconds, no re-split).
 *        "hybrid": always hybrid, no verification (legacy behaviour).
 *        "heffalump": always heffalump.
 * @param {boolean} [options.forceHeffalump] - Deprecated alias for classifier: "heffalump"
 * @param {boolean} [options.preRepair] - Resolve T-junctions + weld boundary before
 *        splitting. Default: auto-enabled when classifier is "auto" and the census
 *        finds non-manifold edges.
 * @param {number} [options.tolerance] - Vertex pool tolerance
 * @returns {{
 *   groups: { aInside: Array, aOutside: Array, bInside: Array, bOutside: Array },
 *   segments: Array,
 *   polylines: Array,
 *   megaSoup: Array,
 *   pool: Object,
 *   classifier: { A: string, B: string },
 *   verification: { ok: boolean, failures: Array }|null
 * }|null}
 */
export function bmsBooleanOp(soupA, soupB, operation, options) {
	if (!soupA || !soupB || soupA.length === 0 || soupB.length === 0) {
		return null;
	}

	var opts = options || {};
	var classifierMode = opts.classifier || (opts.forceHeffalump ? "heffalump" : "auto");

	// Step 0) Translate to origin for floating-point precision (UTM, mine coords)
	var centroid = soupCentroid(soupA, soupB);
	var cx = centroid.x, cy = centroid.y, cz = centroid.z;
	soupA = translateSoup(soupA, -cx, -cy, -cz);
	soupB = translateSoup(soupB, -cx, -cy, -cz);

	// Census: messy inputs (non-manifold edges) go straight to the heffalump,
	// and in auto mode they also get pre-repair unless the caller said otherwise.
	var censusMessy = classifierMode !== "hybrid" && shouldUseHeffalump(soupA, soupB);
	var doPreRepair = opts.preRepair !== undefined
		? !!opts.preRepair
		: (classifierMode === "auto" && censusMessy);

	// Step 1) Pre-repair (explicit, or auto-enabled by the census)
	if (doPreRepair) {
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
		// No intersection — everything is outside, translate back
		return {
			groups: {
				aInside: [],
				aOutside: translateSoup(soupA, cx, cy, cz),
				bInside: [],
				bOutside: translateSoup(soupB, cx, cy, cz)
			},
			segments: [],
			polylines: [],
			megaSoup: null,
			pool: isect.pool,
			classifier: { A: "none (no intersection)", B: "none (no intersection)" },
			verification: null
		};
	}

	// Step 3) Split both meshes into mega soup
	var megaSoup = bmsSplit(soupA, soupB, isect);

	// Step 4) Chain intersection segments
	var polylines = bmsChain(isect.segments);

	// Step 5) Choose classification path.
	// Clean meshes → ige walk (boundary topology + barrier-normal hybrid)
	// Defective meshes → heffalump (barrier-only, no boundary needed)
	// Auto mode runs hybrid, verifies post-conditions, and falls back to the
	// heffalump on the EXISTING mega soup if any check fails — intersection,
	// pool, and split are classifier-independent, so this is cheap.
	var useHeffalump = classifierMode === "heffalump" ||
		(classifierMode === "auto" && censusMessy);

	var classifierReport = { A: "hybrid", B: "hybrid" };
	var verification = null;
	var closedPolylines, meshEdgePolys, classifyResult;

	// meshEdgePolys built from raw chains — used by the heffalump path (it
	// doesn't need boundary walks, but visualization toggles still work).
	function buildHeffalumpEdgePolys() {
		var hefEpA = { segments: [], closed: false };
		var hefEpB = { segments: [], closed: false };
		for (var hpi = 0; hpi < polylines.length; hpi++) {
			hefEpA.segments.push({ verts: polylines[hpi].slice(), type: "intersection" });
			hefEpB.segments.push({ verts: polylines[hpi].slice(), type: "intersection" });
		}
		return { A: hefEpA, B: hefEpB };
	}

	if (useHeffalump) {
		var hefReason = classifierMode === "heffalump"
			? "heffalump (forced)"
			: "heffalump (census: non-manifold edges)";
		classifierReport.A = hefReason;
		classifierReport.B = hefReason;
		closedPolylines = polylines;
		meshEdgePolys = buildHeffalumpEdgePolys();
		classifyResult = heffalumpClassify(megaSoup, isect.segments, soupA, soupB);
	} else {
		// Clean mesh path — close polylines along boundary + ige walk classification
		var closeResult = bmsClosePolylines(polylines, soupA, soupB, megaSoup, isect.segments);
		closedPolylines = closeResult.closedPolylines;
		meshEdgePolys = closeResult.meshEdgePolys;
		classifyResult = bmsClassify(megaSoup, closedPolylines, isect.segments, soupA, soupB, meshEdgePolys);

		// Auto mode: verify the hybrid's post-conditions
		if (classifierMode === "auto") {
			verification = verifyBmsClassification(
				megaSoup, classifyResult.triSides, isect.segments, polylines, soupA, soupB);

			if (!verification.ok) {
				// Decide which meshes need the fallback
				var fallbackA = false, fallbackB = false;
				var reasonsA = [], reasonsB = [];
				for (var fi = 0; fi < verification.failures.length; fi++) {
					var f = verification.failures[fi];
					if (f.mesh === "A" || f.mesh === "both") { fallbackA = true; reasonsA.push(f.check); }
					if (f.mesh === "B" || f.mesh === "both") { fallbackB = true; reasonsB.push(f.check); }
				}

				// Re-run ONLY the classification stage on the existing mega soup
				var hefResult = heffalumpClassify(megaSoup, isect.segments, soupA, soupB);

				var mergedWalks = [];
				var cwi2;
				if (fallbackA) {
					classifyResult.aInside = hefResult.aInside;
					classifyResult.aOutside = hefResult.aOutside;
					classifierReport.A = "heffalump (" + reasonsA.join(", ") + ")";
				}
				if (fallbackB) {
					classifyResult.bInside = hefResult.bInside;
					classifyResult.bOutside = hefResult.bOutside;
					classifierReport.B = "heffalump (" + reasonsB.join(", ") + ")";
				}
				// Component walks: take each mesh's walks from the classifier that won
				for (cwi2 = 0; cwi2 < classifyResult.componentWalks.length; cwi2++) {
					var hw = classifyResult.componentWalks[cwi2];
					if ((hw.mesh === "A" && !fallbackA) || (hw.mesh === "B" && !fallbackB)) mergedWalks.push(hw);
				}
				for (cwi2 = 0; cwi2 < hefResult.componentWalks.length; cwi2++) {
					var fw = hefResult.componentWalks[cwi2];
					if ((fw.mesh === "A" && fallbackA) || (fw.mesh === "B" && fallbackB)) mergedWalks.push(fw);
				}
				classifyResult.componentWalks = mergedWalks;
			}
		}
	}

	var groups = {
		aInside: classifyResult.aInside,
		aOutside: classifyResult.aOutside,
		bInside: classifyResult.bInside,
		bOutside: classifyResult.bOutside
	};

	// Step 7) Deduplicate seam vertices, then translate back to original coordinates
	if (groups.aInside.length > 0) groups.aInside = translateSoup(deduplicateSeamVertices(groups.aInside, 1e-4), cx, cy, cz);
	if (groups.aOutside.length > 0) groups.aOutside = translateSoup(deduplicateSeamVertices(groups.aOutside, 1e-4), cx, cy, cz);
	if (groups.bInside.length > 0) groups.bInside = translateSoup(deduplicateSeamVertices(groups.bInside, 1e-4), cx, cy, cz);
	if (groups.bOutside.length > 0) groups.bOutside = translateSoup(deduplicateSeamVertices(groups.bOutside, 1e-4), cx, cy, cz);

	// Translate meshEdgePolys and componentWalks verts back to original coordinates
	function translatePolyVerts(meshEps) {
		if (!meshEps) return;
		var keys = ["A", "B"];
		for (var ki = 0; ki < keys.length; ki++) {
			var ep = meshEps[keys[ki]];
			if (!ep || !ep.segments) continue;
			for (var si2 = 0; si2 < ep.segments.length; si2++) {
				var vs = ep.segments[si2].verts;
				if (!vs) continue;
				for (var vi = 0; vi < vs.length; vi++) {
					vs[vi] = { x: vs[vi].x + cx, y: vs[vi].y + cy, z: vs[vi].z + cz };
				}
			}
		}
	}
	translatePolyVerts(meshEdgePolys);

	// Translate componentWalk verts back
	if (classifyResult.componentWalks) {
		for (var cwi = 0; cwi < classifyResult.componentWalks.length; cwi++) {
			var segs = classifyResult.componentWalks[cwi].segments;
			for (var csi = 0; csi < segs.length; csi++) {
				var cvs = segs[csi].verts;
				if (!cvs) continue;
				for (var cvi = 0; cvi < cvs.length; cvi++) {
					cvs[cvi] = { x: cvs[cvi].x + cx, y: cvs[cvi].y + cy, z: cvs[cvi].z + cz };
				}
			}
		}
	}

	// Translate intersection segments and polylines back to original coordinates
	for (var tsi = 0; tsi < isect.segments.length; tsi++) {
		var tseg = isect.segments[tsi];
		tseg.p0 = { x: tseg.p0.x + cx, y: tseg.p0.y + cy, z: tseg.p0.z + cz, id: tseg.p0.id };
		tseg.p1 = { x: tseg.p1.x + cx, y: tseg.p1.y + cy, z: tseg.p1.z + cz, id: tseg.p1.id };
	}
	if (polylines) {
		for (var tpi = 0; tpi < polylines.length; tpi++) {
			var tpl = polylines[tpi];
			for (var tpj = 0; tpj < tpl.length; tpj++) {
				tpl[tpj] = { x: tpl[tpj].x + cx, y: tpl[tpj].y + cy, z: tpl[tpj].z + cz, id: tpl[tpj].id };
			}
		}
	}

	var result = {
		groups: groups,
		segments: isect.segments,
		polylines: closedPolylines,
		rawPolylines: polylines,
		meshEdgePolys: meshEdgePolys,
		componentWalks: classifyResult.componentWalks,
		megaSoup: megaSoup,
		pool: isect.pool,
		classifier: classifierReport,
		verification: verification
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
