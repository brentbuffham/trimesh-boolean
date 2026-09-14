/**
 * @module booleanAuto
 *
 * One call: pick the inputs and the output type, get valid geometry back.
 *
 * `bmsBooleanOp` exposes every stage of the pipeline, which is the right shape
 * for tooling that wants to inspect or re-classify the splits. Most callers
 * want none of that — they want A minus B, correctly wound, with no duplicate
 * triangles and no T-junctions leaving open sleeves. This is that path:
 *
 *     booleanAuto(terrain, cutter, "subtract")   ->  { soup, ok, report }
 *
 * The quality properties are INVARIANTS, not options. There is no flag to turn
 * off "correctly wound", because a mode that emits invalid geometry is not a
 * feature. What IS exposed is `quality`, which chooses how hard to work:
 *
 *   "strict" (default)  run the finisher, gated — never returns geometry worse
 *                       than the raw boolean, because every stage is measured
 *                       before it is kept.
 *   "raw"               skip finishing entirely. The pre-0.7.1 result, for
 *                       debugging or when the caller finishes it themselves.
 *
 * Additive: `bmsBooleanOp` is unchanged and remains the full-control entry point.
 */

import { bmsBooleanOp } from "./bms/bmsBooleanOp.js";
import { mergeSplitGroups } from "./boolean/booleanOp.js";
import { finishMesh } from "./verify/finishMesh.js";
import { verifyOutput } from "./verify/verifyOutput.js";

/**
 * Run a boolean and return finished, valid geometry.
 *
 * @param {Array<{v0:Object,v1:Object,v2:Object}>} soupA
 * @param {Array<{v0:Object,v1:Object,v2:Object}>} soupB
 * @param {"subtract"|"union"|"intersect"} operation
 * @param {Object} [options]
 * @param {"strict"|"raw"} [options.quality="strict"] - How hard to work on the
 *        output. "strict" runs the gated finisher; "raw" returns the merged
 *        boolean untouched.
 * @param {"auto"|"hybrid"|"heffalump"} [options.classifier="auto"]
 * @param {number} [options.tolerance] - Shared by the boolean AND the finisher,
 *        so the two never disagree about what counts as the same vertex.
 * @param {boolean} [options.preRepair]
 * @param {boolean} [options.coplanar]
 * @param {boolean} [options.expectClosed] - Report closure in the verification.
 * @returns {{
 *   soup: Array,
 *   ok: boolean,
 *   operation: string,
 *   report: Object|null,
 *   verification: Object|null,
 *   classifier: Object|null,
 *   boolean: Object|null
 * }|null} Null when the boolean itself could not run.
 */
export function booleanAuto(soupA, soupB, operation, options) {
	var opts = options || {};
	var quality = opts.quality || "strict";

	if (!operation) {
		throw new Error(
			"booleanAuto requires an operation (\"subtract\", \"union\" or \"intersect\"). " +
			"To get the split groups without merging, call bmsBooleanOp directly."
		);
	}

	var res = bmsBooleanOp(soupA, soupB, operation, {
		classifier: opts.classifier,
		tolerance: opts.tolerance,
		preRepair: opts.preRepair,
		coplanar: opts.coplanar,
		minAreaRatio: opts.minAreaRatio
	});
	if (!res) return null;

	var merged = mergeSplitGroups(res.groups, operation);
	// A genuinely empty result (the meshes do not overlap, or the operation
	// selects nothing) is not an error — hand back an empty soup and let the
	// verification explain. res.verification already distinguishes "provably
	// apart" (null) from "suspiciously found nothing" (a failure).
	var soup = merged && merged.soup ? merged.soup : [];

	if (quality === "raw" || soup.length === 0) {
		return {
			soup: soup,
			ok: soup.length > 0 && verifyOutput(soup, { tolerance: opts.tolerance, expectClosed: opts.expectClosed }).ok,
			operation: operation,
			report: null,
			verification: res.verification,
			classifier: res.classifier,
			boolean: res
		};
	}

	var finished = finishMesh(soup, {
		tolerance: opts.tolerance,
		expectClosed: opts.expectClosed,
		minArea: opts.minArea,
		volumeTolPct: opts.volumeTolPct
	});

	return {
		soup: finished.soup,
		ok: finished.ok,
		operation: operation,
		report: finished,
		verification: res.verification,
		classifier: res.classifier,
		boolean: res
	};
}
