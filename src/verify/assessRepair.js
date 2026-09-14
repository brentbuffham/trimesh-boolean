/**
 * @module verify/assessRepair
 *
 * Run a repair on a COPY, measure it, and report benefit or damage.
 *
 * Repairs do not all behave alike, and the destructive ones look exactly like
 * the free ones from the outside. Measured in Kirra on a real solid (25,566
 * triangles, clean: 0 open / 0 non-manifold), 2026-07-16:
 *
 *   Weld @ 0.001 (the default) ....... removes 0 triangles. Does nothing.
 *   Weld @ 0.0012 .................... removes 126. 0 open. Volume identical. FREE.
 *   Weld @ 0.002 ..................... removes 354. 0 open. Volume identical. FREE.
 *   Weld @ 0.005 ..................... 2 non-manifold edges appear. HARM.
 *   Remove zero-area degenerates ..... removes 75  -> 221 OPEN EDGES. DESTRUCTIVE.
 *   ...with sliverRatio 0.01 ......... removes 1827 -> 3567 open, 90 components. RUIN.
 *
 * The rule that encodes: DELETING geometry that is stitched into a mesh tears it
 * open; WELDING dissolves the same junk for free. Prefer weld.
 *
 * That last row matters here, because `repairMesh` defaults to
 * `sliverRatio: 0.01` — the setting measured as ruinous. Assess before trusting it.
 *
 * This module is the general form: diff two {@link module:verify/verifyOutput}
 * reports and say whether the change helped. It is the gate a finisher needs,
 * because "repair" is not always an improvement — measured on the real Kirra
 * shell x presplit-a boolean, hole-free T-junction resolution turns 4 violations
 * into 6 by trading T-junctions for degenerates and non-manifold edges.
 *
 * Ported from Kirra's helpers/MeshRepairAssessment.js, which carries the original
 * measurements. Rebuilt on verifyOutput so there is one measurement path, and so
 * winding and T-junction violations count too (the original tracked only open
 * edges, non-manifold edges, components and volume).
 */

import { verifyOutput } from "./verifyOutput.js";

/**
 * Total invariant violations in a verifyOutput report.
 * @param {Object} report - from verifyOutput
 * @returns {number}
 */
export function violationCount(report) {
	if (!report || !report.checks) return 0;
	var n = 0;
	for (var i = 0; i < report.checks.length; i++) n += report.checks[i].count || 0;
	return n;
}

function byName(report) {
	var m = Object.create(null);
	for (var i = 0; i < report.checks.length; i++) m[report.checks[i].check] = report.checks[i].count || 0;
	return m;
}

/**
 * Assess a candidate repair by diffing BEFORE against AFTER.
 *
 * Run the repair on a copy, pass both soups here, and use `harmful` /
 * `recommend` to decide whether to keep the result.
 *
 * @param {Array} before - the current soup
 * @param {Array} after - what the repair WOULD produce
 * @param {Object} [options]
 * @param {number} [options.volumeTolPct=0.5] - volume drift beyond this counts as damage
 * @param {number} [options.tolerance] - weld epsilon, passed to verifyOutput for BOTH
 *        soups so the two measurements are comparable
 * @param {boolean} [options.expectClosed] - require closure, passed through
 * @returns {{
 *   harmful: boolean,
 *   recommend: "keep"|"discard",
 *   benefits: Array<string>,
 *   damage: Array<string>,
 *   before: Object, after: Object,
 *   violationsBefore: number, violationsAfter: number,
 *   trisDelta: number, volumeDeltaPct: number
 * }}
 */
export function assessRepair(before, after, options) {
	var opts = options || {};
	var volTol = opts.volumeTolPct != null ? opts.volumeTolPct : 0.5;

	// Measure BOTH at the same tolerance, or the comparison is meaningless.
	var vopts = {
		tolerance: opts.tolerance,
		expectClosed: opts.expectClosed,
		minArea: opts.minArea
	};
	var b = verifyOutput(before || [], vopts);
	var a = verifyOutput(after || [], vopts);

	var bs = b.stats, as = a.stats;
	var bc = byName(b), ac = byName(a);

	var volDeltaPct = bs.volume > 0 ? (100 * (as.volume - bs.volume) / bs.volume) : 0;

	var damage = [];
	var benefits = [];

	// ── Damage: the signals that mean "this tore the mesh" ──
	if (as.openEdges > bs.openEdges) {
		damage.push("Opens the mesh: open edges " + bs.openEdges + " -> " + as.openEdges);
	}
	if (as.components > bs.components) {
		damage.push("Breaks it apart: " + bs.components + " -> " + as.components + " components");
	}
	var names = Object.keys(ac);
	for (var i = 0; i < names.length; i++) {
		var n = names[i];
		var wasCount = bc[n] || 0;
		if (ac[n] > wasCount) {
			damage.push("Worsens " + n + ": " + wasCount + " -> " + ac[n]);
		}
	}

	// Volume is only MEANINGFUL between two sound meshes. Against a baseline that
	// is already open or non-manifold the figure is garbage — Kirra measured Clean
	// Mesh confidently reporting 57,630 m3 for a non-orientable band whose true
	// volume was 55,226. Junk geometry also contributes its own signed volume, so
	// deleting a duplicate face moves the number while the real volume is untouched.
	var baselineIsSound = bs.openEdges === 0 && bs.nonManifoldEdges === 0;
	if (baselineIsSound && Math.abs(volDeltaPct) > volTol) {
		damage.push("Changes the volume by " + volDeltaPct.toFixed(2) + "% (" +
			Math.round(bs.volume) + " -> " + Math.round(as.volume) + ")");
	}

	// ── Benefit: what it actually buys ──
	if (as.openEdges < bs.openEdges) {
		benefits.push("Closes open edges: " + bs.openEdges + " -> " + as.openEdges);
	}
	if (as.components < bs.components) {
		benefits.push("Merges components: " + bs.components + " -> " + as.components);
	}
	for (i = 0; i < names.length; i++) {
		var nn = names[i];
		var had = bc[nn] || 0;
		if (ac[nn] < had) benefits.push("Fixes " + nn + ": " + had + " -> " + ac[nn]);
	}
	if (as.triangles < bs.triangles) {
		benefits.push("Removes " + (bs.triangles - as.triangles) + " junk triangle(s)");
	}
	if (baselineIsSound && Math.abs(volDeltaPct) <= volTol) {
		benefits.push("Volume unchanged (" + Math.round(as.volume) + ")");
	}

	var vb = violationCount(b), va = violationCount(a);

	return {
		harmful: damage.length > 0,
		// A repair earns its place only by reducing the total. A trade that swaps
		// one violation class for another nets zero and is not worth the churn.
		recommend: va < vb ? "keep" : "discard",
		benefits: benefits,
		damage: damage,
		before: b,
		after: a,
		violationsBefore: vb,
		violationsAfter: va,
		trisDelta: as.triangles - bs.triangles,
		volumeDeltaPct: volDeltaPct
	};
}

/**
 * Render an assessment as plain text — one line per benefit or damage item.
 * @param {Object} assessment - from assessRepair
 * @returns {string}
 */
export function describeAssessment(assessment) {
	if (!assessment) return "No assessment.";
	var lines = [];
	if (assessment.damage.length) {
		lines.push("This would damage the mesh:");
		for (var i = 0; i < assessment.damage.length; i++) lines.push("  - " + assessment.damage[i]);
	}
	if (assessment.benefits.length) {
		lines.push(assessment.damage.length ? "It would also:" : "This would:");
		for (var j = 0; j < assessment.benefits.length; j++) lines.push("  - " + assessment.benefits[j]);
	}
	if (!lines.length) return "No change.";
	lines.push("Violations " + assessment.violationsBefore + " -> " + assessment.violationsAfter +
		" (" + assessment.recommend + ")");
	return lines.join("\n");
}
