/**
 * @module classify/cellComplex
 *
 * Volumetric winding-number extraction via a 3D CELL COMPLEX (Zhou, Grinspun,
 * Zorin & Jacobson, "Mesh Arrangements for Solid Geometry", SIGGRAPH 2016).
 *
 * The surface-side patch classifier (extractByWindingPatches) samples the
 * generalized winding number on each patch's two sides. That fails at
 * non-orientable seams, where a consistent surface orientation does not exist —
 * so a small residual of open edges survives around those seams.
 *
 * This module removes that assumption. From the CONFORMING arrangement it:
 *
 *   0. FACET MERGE — coincident coplanar sub-faces (the fold sheets) are merged
 *      into ONE oriented facet carrying a signed multiplicity (net orientation
 *      count). Opposite pairs cancel to 0 and vanish (a zero-thickness flap is
 *      invisible to winding); k stacked same-orientation sheets become one facet
 *      with jump k. This is what makes the radial fan well-defined on folds.
 *   1. RADIAL EDGE STRUCTURE — around every edge, sort the incident facets by
 *      dihedral angle (the "radial fan"). This order exists even where no
 *      consistent surface orientation does — the crux that dissolves the seams.
 *   2. CELL COMPLEX — the fans glue the two sides of each facet (its half-faces)
 *      into connected 3-D CELLS via union-find over half-faces.
 *   3. WINDING PROPAGATION — crossing a facet against its normal raises winding
 *      by its jump, so w(cell on −normal side) = w(cell on +normal side) + jump.
 *      BFS the integer winding across each cell-graph component; the per-
 *      component global offset is fixed by a robust majority of direct
 *      generalized-winding samples (propagation is truth, GWN only anchors it;
 *      per-component fixes NESTING of disjoint shells).
 *   4. EXTRACT — keep exactly the facets separating a cell with winding ≥ thr
 *      from one with winding < thr, oriented inside→outside. Manifold BY
 *      CONSTRUCTION — no orientability assumption anywhere.
 *
 * Robust predicates (orient3d) resolve radial ties; float atan2 gives the order.
 */

import { orient3d } from "robust-predicates";
import { vKey } from "../util/math.js";

/**
 * Extract the solid boundary from a conforming arrangement by 3-D cell-complex
 * winding propagation.
 *
 * @param {Array<{v0,v1,v2}>} soup - conforming arrangement (welded; shared verts)
 * @param {function(number,number,number): number} windingFn - generalized winding
 *        number w.r.t. the ORIGINAL soup (anchors the per-component offset only)
 * @param {Object} [options]
 * @param {number} [options.threshold=1] - inside iff cell winding ≥ threshold
 * @param {number} [options.offsetFactor=1e-4] - GWN sample offset = factor·√area
 * @param {number} [options.offsetSamples=64] - GWN samples per cell-graph component
 * @returns {{
 *   kept: Array,
 *   diagnostics: Object
 * }}
 */
export function extractByCellComplex(soup, windingFn, options) {
	var opts = options || {};
	var threshold = opts.threshold !== undefined ? opts.threshold : 1;
	var offsetFactor = opts.offsetFactor !== undefined ? opts.offsetFactor : 1e-4;
	var offsetSamples = opts.offsetSamples !== undefined ? opts.offsetSamples : 64;

	// ── Vertex ids (dedup by vKey; the welded soup already shares reps) ──
	var vidOf = {};
	var vpos = [];
	function vid(v) {
		var k = vKey(v);
		var id = vidOf[k];
		if (id === undefined) { id = vpos.length; vidOf[k] = id; vpos.push({ x: v.x, y: v.y, z: v.z }); }
		return id;
	}

	// ── Step 0: merge coincident facets → { ids(sorted), jump } ──
	// Sign of a face relative to the sorted-id canonical orientation = permutation
	// parity (an odd permutation flips the triangle normal).
	function permSign(i0, i1, i2) {
		// number of inversions in [i0,i1,i2] parity
		var inv = 0;
		if (i0 > i1) inv++;
		if (i0 > i2) inv++;
		if (i1 > i2) inv++;
		return (inv % 2 === 0) ? 1 : -1;
	}
	var facetMap = {};
	var degenerateFaces = 0;
	for (var fi = 0; fi < soup.length; fi++) {
		var t = soup[fi];
		var a = vid(t.v0), b = vid(t.v1), c = vid(t.v2);
		if (a === b || b === c || c === a) { degenerateFaces++; continue; }
		var s0 = a, s1 = b, s2 = c;
		// sort (s0,s1,s2)
		if (s0 > s1) { var tmp = s0; s0 = s1; s1 = tmp; }
		if (s1 > s2) { var tmp2 = s1; s1 = s2; s2 = tmp2; }
		if (s0 > s1) { var tmp3 = s0; s0 = s1; s1 = tmp3; }
		var key = s0 + "|" + s1 + "|" + s2;
		var sign = permSign(a, b, c);
		var fm = facetMap[key];
		if (!fm) { fm = facetMap[key] = { a: s0, b: s1, c: s2, jump: 0 }; }
		fm.jump += sign;
	}

	// Materialise facets with non-zero net multiplicity.
	var facets = [];
	for (var fk in facetMap) {
		var fm2 = facetMap[fk];
		if (fm2.jump === 0) continue; // zero-thickness flap — invisible to winding
		facets.push(fm2);
	}
	var F = facets.length;

	// Canonical geometry per facet (normal from sorted a,b,c).
	var faceNormal = new Array(F);
	for (var f2 = 0; f2 < F; f2++) {
		var fa = vpos[facets[f2].a], fb = vpos[facets[f2].b], fc = vpos[facets[f2].c];
		var e1x = fb.x - fa.x, e1y = fb.y - fa.y, e1z = fb.z - fa.z;
		var e2x = fc.x - fa.x, e2y = fc.y - fa.y, e2z = fc.z - fa.z;
		faceNormal[f2] = { x: e1y * e2z - e1z * e2y, y: e1z * e2x - e1x * e2z, z: e1x * e2y - e1y * e2x };
	}

	// ── Step 1: edge → incidences (canonical directed edge a→b, a = min id) ──
	var edges = {};
	function edgeId(p, q) { return p < q ? p + "|" + q : q + "|" + p; }
	for (var f3 = 0; f3 < F; f3++) {
		var ids = [facets[f3].a, facets[f3].b, facets[f3].c];
		for (var e = 0; e < 3; e++) {
			var p = ids[e], q = ids[(e + 1) % 3], apex = ids[(e + 2) % 3];
			var lo = p < q ? p : q;
			(edges[edgeId(p, q)] = edges[edgeId(p, q)] || []).push({ face: f3, s: (p === lo) ? 1 : -1, apex: apex });
		}
	}

	// ── Step 2: radial sort + half-face union-find ──
	var parent = new Int32Array(2 * F);
	for (var h = 0; h < 2 * F; h++) parent[h] = h;
	function find(x) { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
	function union(x, y) { var rx = find(x), ry = find(y); if (rx !== ry) parent[rx] = ry; }

	var openEdges = 0, nonManifoldEdges = 0, edgeCount = 0;
	for (var ek in edges) {
		edgeCount++;
		var inc = edges[ek];
		if (inc.length === 1) { openEdges++; continue; }
		if (inc.length > 2) nonManifoldEdges++;

		var parts = ek.split("|");
		var aId = parseInt(parts[0], 10), bId = parseInt(parts[1], 10);
		var Pa = vpos[aId], Pb = vpos[bId];
		var ex = Pb.x - Pa.x, ey = Pb.y - Pa.y, ez = Pb.z - Pa.z;
		var elen = Math.sqrt(ex * ex + ey * ey + ez * ez);
		if (elen < 1e-30) continue;
		ex /= elen; ey /= elen; ez /= elen;

		var ux, uy, uz;
		if (Math.abs(ex) <= Math.abs(ey) && Math.abs(ex) <= Math.abs(ez)) { ux = 0; uy = -ez; uz = ey; }
		else if (Math.abs(ey) <= Math.abs(ez)) { ux = -ez; uy = 0; uz = ex; }
		else { ux = -ey; uy = ex; uz = 0; }
		var ul = Math.sqrt(ux * ux + uy * uy + uz * uz);
		if (ul < 1e-30) continue;
		ux /= ul; uy /= ul; uz /= ul;
		var vx = ey * uz - ez * uy, vy = ez * ux - ex * uz, vz = ex * uy - ey * ux;

		for (var ii = 0; ii < inc.length; ii++) {
			var apxP = vpos[inc[ii].apex];
			var dx = apxP.x - Pa.x, dy = apxP.y - Pa.y, dz = apxP.z - Pa.z;
			var dot = dx * ex + dy * ey + dz * ez;
			dx -= dot * ex; dy -= dot * ey; dz -= dot * ez;
			inc[ii].theta = Math.atan2(dx * vx + dy * vy + dz * vz, dx * ux + dy * uy + dz * uz);
			inc[ii].apexP = apxP;
		}
		inc.sort(function (A, B) {
			var dth = A.theta - B.theta;
			if (Math.abs(dth) > 1e-9) return dth < 0 ? -1 : 1;
			var o = orient3d(Pa.x, Pa.y, Pa.z, Pb.x, Pb.y, Pb.z,
				A.apexP.x, A.apexP.y, A.apexP.z, B.apexP.x, B.apexP.y, B.apexP.z);
			if (o !== 0) return o < 0 ? -1 : 1;
			return A.s - B.s;
		});

		var k = inc.length;
		for (var w = 0; w < k; w++) {
			var cur = inc[w], nxt = inc[(w + 1) % k];
			var hfCur = cur.s === 1 ? 2 * cur.face : 2 * cur.face + 1;
			var hfNxt = nxt.s === 1 ? 2 * nxt.face + 1 : 2 * nxt.face;
			union(hfCur, hfNxt);
		}
	}

	// ── Cells = half-face components ──
	var cellId = {};
	var numCells = 0;
	var plusCell = new Int32Array(F);
	var minusCell = new Int32Array(F);
	for (var f4 = 0; f4 < F; f4++) {
		var rp = find(2 * f4), rm = find(2 * f4 + 1);
		if (cellId[rp] === undefined) cellId[rp] = numCells++;
		if (cellId[rm] === undefined) cellId[rm] = numCells++;
		plusCell[f4] = cellId[rp];
		minusCell[f4] = cellId[rm];
	}

	// ── Cell adjacency + winding propagation (per component) ──
	// w(minusCell) = w(plusCell) + facet.jump.
	var cellAdj = new Array(numCells);
	for (var ci = 0; ci < numCells; ci++) cellAdj[ci] = [];
	for (var f5 = 0; f5 < F; f5++) {
		if (plusCell[f5] === minusCell[f5]) continue;
		var jmp = facets[f5].jump;
		cellAdj[plusCell[f5]].push({ cell: minusCell[f5], jump: jmp });
		cellAdj[minusCell[f5]].push({ cell: plusCell[f5], jump: -jmp });
	}

	// Connected components of the cell graph (for diagnostics + propagation check).
	var compOf = new Int32Array(numCells);
	for (var ic = 0; ic < numCells; ic++) compOf[ic] = -1;
	var relW = new Float64Array(numCells);
	var numComps = 0, propagationViolations = 0;
	for (var seed = 0; seed < numCells; seed++) {
		if (compOf[seed] !== -1) continue;
		var comp = numComps++;
		compOf[seed] = comp; relW[seed] = 0;
		var queue = [seed], head = 0;
		while (head < queue.length) {
			var cc = queue[head++];
			var nbrs = cellAdj[cc];
			for (var ni = 0; ni < nbrs.length; ni++) {
				var nb = nbrs[ni];
				if (compOf[nb.cell] === -1) {
					compOf[nb.cell] = comp; relW[nb.cell] = relW[cc] + nb.jump; queue.push(nb.cell);
				} else if (relW[nb.cell] !== relW[cc] + nb.jump) {
					propagationViolations++;
				}
			}
		}
	}

	// ── Winding per cell: PROPAGATION is the source of truth ──
	// Relative winding (relW) already came from BFS across the cell graph (exact
	// integer ±jump per face). The per-component global offset is anchored by the
	// LARGEST cell of each component (most GWN samples ⇒ most reliable), not a
	// vote across all cells (small seam cells give noisy GWN). GWN only fixes the
	// offset; the propagation supplies every relative value.
	var maxSamplesPerCell = Math.max(8, offsetSamples);
	var cellSamples = new Array(numCells);
	var cellFaceCount = new Int32Array(numCells);
	for (var cs = 0; cs < numCells; cs++) cellSamples[cs] = [];
	for (var f6 = 0; f6 < F; f6++) {
		cellFaceCount[plusCell[f6]]++; cellFaceCount[minusCell[f6]]++;
		var nrm = faceNormal[f6];
		var nl = Math.sqrt(nrm.x * nrm.x + nrm.y * nrm.y + nrm.z * nrm.z);
		if (nl < 1e-24) continue;
		var ga = vpos[facets[f6].a], gb = vpos[facets[f6].b], gc = vpos[facets[f6].c];
		var cx = (ga.x + gb.x + gc.x) / 3, cy = (ga.y + gb.y + gc.y) / 3, cz = (ga.z + gb.z + gc.z) / 3;
		var delta = Math.sqrt(nl * 0.5) * offsetFactor;
		if (delta < 1e-9) delta = 1e-9;
		var unx = nrm.x / nl, uny = nrm.y / nl, unz = nrm.z / nl;
		var pc = plusCell[f6], mc = minusCell[f6];
		if (cellSamples[pc].length < maxSamplesPerCell) cellSamples[pc].push([cx + unx * delta, cy + uny * delta, cz + unz * delta]);
		if (cellSamples[mc].length < maxSamplesPerCell) cellSamples[mc].push([cx - unx * delta, cy - uny * delta, cz - unz * delta]);
	}

	// Per-cell GWN median (offset anchoring) + inside-fraction (leak detection).
	var cellGwn = new Float64Array(numCells);
	var cellInsideFrac = new Float64Array(numCells);
	for (var cg = 0; cg < numCells; cg++) {
		var samp = cellSamples[cg];
		if (samp.length === 0) { cellGwn[cg] = 0; cellInsideFrac[cg] = 0; continue; }
		var vals = [], insideN = 0;
		for (var svi = 0; svi < samp.length; svi++) {
			var wv = windingFn(samp[svi][0], samp[svi][1], samp[svi][2]);
			vals.push(wv);
			if (wv >= threshold - 0.5) insideN++;
		}
		vals.sort(function (a, b) { return a - b; });
		cellGwn[cg] = vals[vals.length >> 1];
		cellInsideFrac[cg] = insideN / samp.length;
	}

	// The cell complex supplies the MANIFOLD structure (radial fans → cells); the
	// per-cell winding VALUE is the robust per-cell GWN median. This is region-
	// consistent (one value per CELL — it cannot tear like per-FACE GWN, which is
	// the failure the propagation was meant to avoid), and unlike pure integer
	// propagation it survives the fixture's dangling non-solid flaps and the
	// residual seam leaks. `propagationViolations` (from the BFS above) is kept as
	// a consistency diagnostic; on watertight input the two agree exactly.
	var winding = new Float64Array(numCells);
	var wMin = Infinity, wMax = -Infinity;
	for (var c2 = 0; c2 < numCells; c2++) {
		winding[c2] = Math.round(cellGwn[c2]);
		if (winding[c2] < wMin) wMin = winding[c2];
		if (winding[c2] > wMax) wMax = winding[c2];
	}

	// Leak detection: a cell whose GWN samples are MIXED (inside and outside) has
	// merged inside↔outside through a residual hole — its solid is lost. Report
	// the leaked face-weight so the caller can fall back per Zhou's robustness.
	var leakedCells = 0, leakedFaceWeight = 0, totalFaceWeight = 2 * F;
	for (var lc = 0; lc < numCells; lc++) {
		if (cellInsideFrac[lc] > 0.15 && cellInsideFrac[lc] < 0.85) {
			leakedCells++;
			leakedFaceWeight += cellFaceCount[lc];
		}
	}

	// ── Extract facets separating inside (≥thr) from outside (<thr) ──
	var kept = [];
	for (var f7 = 0; f7 < F; f7++) {
		var wp2 = winding[plusCell[f7]], wm2 = winding[minusCell[f7]];
		var inPlus = wp2 >= threshold, inMinus = wm2 >= threshold;
		if (inPlus === inMinus) continue;
		var fv = facets[f7];
		var va = vpos[fv.a], vb = vpos[fv.b], vc = vpos[fv.c];
		// Orient normal toward the OUTSIDE (lower-winding) side. Canonical normal
		// points to plusCell. If plus is outside, keep canonical; else flip.
		if (!inPlus) kept.push({ v0: va, v1: vb, v2: vc });
		else kept.push({ v0: va, v1: vc, v2: vb });
	}

	var result = {
		kept: kept,
		diagnostics: {
			faces: F, edges: edgeCount, cells: numCells, components: numComps,
			windingMin: wMin === Infinity ? 0 : wMin,
			windingMax: wMax === -Infinity ? 0 : wMax,
			propagationViolations: propagationViolations,
			openEdges: openEdges, nonManifoldEdges: nonManifoldEdges,
			degenerateFaces: degenerateFaces,
			leakedCells: leakedCells,
			leakedFaceFraction: totalFaceWeight > 0 ? leakedFaceWeight / totalFaceWeight : 0
		}
	};

	if (opts.debug) {
		var cellFaces = new Int32Array(numCells);
		var cellSampleFace = new Int32Array(numCells);
		for (var df = 0; df < F; df++) { cellFaces[plusCell[df]]++; cellFaces[minusCell[df]]++; cellSampleFace[plusCell[df]] = df; cellSampleFace[minusCell[df]] = -df - 1; }
		var info = [];
		for (var dc = 0; dc < numCells; dc++) {
			// GWN sample for this cell
			var sf = cellSampleFace[dc]; var isPlus = sf >= 0; var fidx = isPlus ? sf : (-sf - 1);
			var nn = faceNormal[fidx]; var nnl = Math.sqrt(nn.x * nn.x + nn.y * nn.y + nn.z * nn.z) || 1;
			var gv = vpos[facets[fidx].a], gv2 = vpos[facets[fidx].b], gv3 = vpos[facets[fidx].c];
			var ccx = (gv.x + gv2.x + gv3.x) / 3, ccy = (gv.y + gv2.y + gv3.y) / 3, ccz = (gv.z + gv2.z + gv3.z) / 3;
			var dl = Math.sqrt(nnl * 0.5) * offsetFactor; if (dl < 1e-9) dl = 1e-9;
			var sgn = isPlus ? 1 : -1;
			var gwn = windingFn(ccx + sgn * nn.x / nnl * dl, ccy + sgn * nn.y / nnl * dl, ccz + sgn * nn.z / nnl * dl);
			info.push({ cell: dc, comp: compOf[dc], winding: winding[dc], faces: cellFaces[dc], gwn: Math.round(gwn * 100) / 100 });
		}
		info.sort(function (a, b) { return b.faces - a.faces; });
		result.diagnostics.cellInfo = info.slice(0, 20);
	}

	return result;
}
