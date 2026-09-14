/**
 * @module verify/finishMesh
 *
 * Bring a boolean result up to the output contract — or leave it alone and say why.
 *
 * The contract: no duplicate triangles, no degenerate slivers, consistent winding
 * across shared edges, no T-junctions leaving open sleeves. Those are invariants,
 * not options: a switch that turns off "correctly wound" is a mode that produces
 * invalid output, so this exposes no flags for them.
 *
 * WHY EVERY STAGE IS GATED. "Repair" is not always an improvement. Measured on
 * the real Kirra surfaces:
 *
 *   terrain x cylinder    consistentWinding:40                  -> clean
 *   terrain x cup         consistentWinding:46                  -> clean
 *   terrain x convoluted  consistentWinding:107 noTJunctions:1  -> manifoldEdges:1
 *   shell x presplit-a    noTJunctions:4                        -> 6 violations. WORSE.
 *
 * That last row is the whole reason this module measures instead of assuming. On
 * a badly defective input (shell carries 1186 open edges and 18 non-manifold
 * edges at source) hole-free T-junction resolution trades 4 T-junctions for 2
 * degenerates, 3 non-manifold edges and 1 remaining T-junction. An ungated
 * pipeline would ship that as "repaired".
 *
 * So each stage runs on a copy, is measured with {@link module:verify/assessRepair},
 * and is kept only if it reduces the total violation count. A stage that trades
 * one violation class for another nets zero and is discarded.
 *
 * Stage order does not matter — verified across all three permutations on four
 * real pairs, identical results — so the order here is simply cheapest first.
 */

import { verifyOutput } from "./verifyOutput.js";
import { assessRepair } from "./assessRepair.js";
import { estimateWeldEps } from "../repair/neighbourhoodPool.js";
import { resolveTJunctionsHoleFree } from "../repair/resolveTJunctionsHoleFree.js";
import { dedupCoincidentTriangles } from "../classify/coincidentDedup.js";
import { orientSolid } from "../normals/orientSolid.js";

function asSoup(x, fallback) {
	if (!x) return fallback;
	if (Array.isArray(x)) return x;
	if (Array.isArray(x.soup)) return x.soup;
	if (Array.isArray(x.triangles)) return x.triangles;
	return fallback;
}

/**
 * The default stages. Each is { name, run(soup, ctx) -> soup }.
 *
 * Deliberately all NON-DELETING except the dedup, which removes exact coincident
 * duplicates only. Kirra measured that deleting geometry stitched into a mesh
 * tears it open (removing 1827 slivers produced 3567 open edges and 90
 * components), while welding dissolves the same junk for free — so no
 * sliver-removal stage is included here. See assessRepair for the numbers.
 */
export var DEFAULT_STAGES = [
	{
		name: "dedupCoincident",
		run: function (soup) {
			return asSoup(dedupCoincidentTriangles(soup), soup);
		}
	},
	{
		// Named for what it RUNS, not the family it belongs to. The legacy
		// resolveTJunctions corrupts winding (see 0.6.7) and is deliberately
		// not used anywhere in this pipeline.
		name: "resolveTJunctionsHoleFree",
		run: function (soup, ctx) {
			return asSoup(resolveTJunctionsHoleFree(soup, ctx.tolerance, 4), soup);
		}
	},
	{
		name: "orientWinding",
		run: function (soup) {
			return asSoup(orientSolid(soup, { coherenceOnly: true }), soup);
		}
	}
];

/**
 * Finish a triangle soup: apply each repair stage only where it measurably helps.
 *
 * @param {Array<{v0:Object, v1:Object, v2:Object}>} soup
 * @param {Object} [options]
 * @param {number} [options.tolerance] - Weld epsilon. Default: estimateWeldEps(soup).
 *        Used for every measurement AND every stage, so they agree.
 * @param {boolean} [options.expectClosed] - Require a closed solid in the report.
 * @param {Array} [options.stages] - Override the stage list (advanced).
 * @param {boolean} [options.force] - Apply every stage without gating. For
 *        debugging only: this is how you reproduce the shell x presplit-a
 *        regression documented above.
 * @returns {{
 *   soup: Array,
 *   ok: boolean,
 *   before: Object,
 *   after: Object,
 *   applied: Array<string>,
 *   skipped: Array<{ stage: string, reason: string, violations: string }>,
 *   stages: Array<Object>
 * }}
 */
export function finishMesh(soup, options) {
	var opts = options || {};
	if (!soup || soup.length === 0) {
		var empty = verifyOutput(soup || [], opts);
		return { soup: soup || [], ok: false, before: empty, after: empty, applied: [], skipped: [], stages: [] };
	}

	var tolerance = opts.tolerance !== undefined ? opts.tolerance : estimateWeldEps(soup);
	if (!(tolerance > 0)) tolerance = 1e-6;

	var vopts = { tolerance: tolerance, expectClosed: opts.expectClosed, minArea: opts.minArea };
	var before = verifyOutput(soup, vopts);

	var stages = opts.stages || DEFAULT_STAGES;
	var ctx = { tolerance: tolerance, options: opts };

	var current = soup;
	var applied = [];
	var skipped = [];
	var reports = [];

	for (var i = 0; i < stages.length; i++) {
		var stage = stages[i];
		var candidate;
		try {
			candidate = stage.run(current, ctx);
		} catch (e) {
			skipped.push({ stage: stage.name, reason: "threw", violations: e.message });
			continue;
		}
		if (!candidate || candidate.length === 0) {
			skipped.push({ stage: stage.name, reason: "produced nothing", violations: "" });
			continue;
		}

		// Measure on a copy before committing — the whole point of the gate.
		var assessment = assessRepair(current, candidate, {
			tolerance: tolerance,
			expectClosed: opts.expectClosed,
			minArea: opts.minArea,
			volumeTolPct: opts.volumeTolPct
		});
		reports.push({ stage: stage.name, assessment: assessment });

		if (opts.force || assessment.recommend === "keep") {
			current = candidate;
			applied.push(stage.name);
		} else {
			skipped.push({
				stage: stage.name,
				reason: assessment.harmful ? "would damage the mesh" : "no net improvement",
				violations: assessment.violationsBefore + " -> " + assessment.violationsAfter
			});
		}
	}

	var after = verifyOutput(current, vopts);

	return {
		soup: current,
		ok: after.ok,
		before: before,
		after: after,
		applied: applied,
		skipped: skipped,
		stages: reports
	};
}
