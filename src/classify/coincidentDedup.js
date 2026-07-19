/**
 * @module classify/coincidentDedup
 *
 * Coincident-sheet deduplication — the last stage of the self-intersection
 * fold resolver.
 *
 * When a fold's sheets are EXACTLY coincident (the target pathology:
 * coplanar coincident overlaps), the winding number steps across the
 * WHOLE coincident stack at once, so every sheet of the stack passes the
 * keep test — the result would carry the boundary 2x or 3x. Zhou et al.
 * (Mesh Arrangements, 2016) merge coincident facets into a single
 * arrangement cell; this module is the practical equivalent:
 *
 *  1. Exact duplicates (same three vertex keys) → keep ONE per group.
 *  2. Residual coplanar-overlapping pairs (different tessellations of the
 *     same region — Delaunay tie-breaks can differ between sheets) →
 *     union-find them into clusters and re-CDT each cluster ONCE with the
 *     union of all member edges as constraints; emit each region once.
 *
 * All kept triangles arrive ALREADY oriented outward by the winding
 * extraction, so a cluster's members agree in orientation; the re-CDT
 * output copies the orientation of the first member.
 */

import Delaunator from "delaunator";
import Constrainautor from "@kninnug/constrainautor";
import { vKey, edgeKey } from "../util/math.js";
import { buildSpatialGrid, queryGrid, triBBox, bboxOverlap } from "../intersect/spatialGrid.js";
import { estimateAvgEdge } from "../intersect/spatialGrid.js";
import { coplanarOverlap } from "../intersect/coplanarOverlap.js";
import { triNormal } from "../normals/triNormal.js";

/**
 * Remove coincident duplicate sheets from a triangle soup.
 *
 * @param {Array<{ v0, v1, v2 }>} tris - Kept, outward-oriented soup
 * @param {Object} [options]
 * @param {number} [options.minAreaRatio=1e-4] - Overlap gate for residual
 *        pair detection (fraction of the smaller triangle's area)
 * @returns {{
 *   soup: Array,
 *   duplicateGroups: number,
 *   duplicatesRemoved: number,
 *   clusters: number,
 *   clusterTrisIn: number,
 *   clusterTrisOut: number
 * }}
 */
export function dedupCoincidentTriangles(tris, options) {
	var opts = options || {};

	// ── Pass 1: exact duplicates by sorted vertex-key triple ──
	var groupsByKey = {};
	var order = [];
	for (var i = 0; i < tris.length; i++) {
		var t = tris[i];
		var ks = [vKey(t.v0), vKey(t.v1), vKey(t.v2)].sort();
		var gk = ks[0] + "#" + ks[1] + "#" + ks[2];
		if (!groupsByKey[gk]) { groupsByKey[gk] = []; order.push(gk); }
		groupsByKey[gk].push(i);
	}

	var afterExact = [];
	var duplicateGroups = 0;
	var duplicatesRemoved = 0;
	for (var g = 0; g < order.length; g++) {
		var members = groupsByKey[order[g]];
		afterExact.push(tris[members[0]]); // keep first (all outward already)
		if (members.length > 1) {
			duplicateGroups++;
			duplicatesRemoved += members.length - 1;
		}
	}

	// ── Pass 2: residual coplanar-overlapping pairs → clusters ──
	var n = afterExact.length;
	if (n === 0) {
		return { soup: afterExact, duplicateGroups: duplicateGroups, duplicatesRemoved: duplicatesRemoved, clusters: 0, clusterTrisIn: 0, clusterTrisOut: 0 };
	}

	var avgEdge = estimateAvgEdge(afterExact);
	var cellSize = Math.max(avgEdge * 2, 0.1);
	var grid = buildSpatialGrid(afterExact, cellSize);

	var minAreaRatio = opts.minAreaRatio !== undefined ? opts.minAreaRatio : 1e-4;

	// Union-find
	var parent = new Int32Array(n);
	for (var pi = 0; pi < n; pi++) parent[pi] = pi;
	function find(x) { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
	function union(a, b) { var ra = find(a), rb = find(b); if (ra !== rb) parent[rb] = ra; }

	var anyOverlap = false;
	for (var ia = 0; ia < n; ia++) {
		var bbA = triBBox(afterExact[ia]);
		var cands = queryGrid(grid, bbA, cellSize);
		for (var ci = 0; ci < cands.length; ci++) {
			var ib = cands[ci];
			if (ib <= ia) continue;
			if (!bboxOverlap(bbA, triBBox(afterExact[ib]))) continue;
			var cop = coplanarOverlap(afterExact[ia], afterExact[ib], { minAreaRatio: minAreaRatio });
			if (cop) { union(ia, ib); anyOverlap = true; }
		}
	}

	if (!anyOverlap) {
		return { soup: afterExact, duplicateGroups: duplicateGroups, duplicatesRemoved: duplicatesRemoved, clusters: 0, clusterTrisIn: 0, clusterTrisOut: 0 };
	}

	// Gather clusters (size >= 2)
	var clusterMap = {};
	for (var mi = 0; mi < n; mi++) {
		var root = find(mi);
		if (!clusterMap[root]) clusterMap[root] = [];
		clusterMap[root].push(mi);
	}

	var inCluster = new Uint8Array(n);
	var clusterList = [];
	for (var rk in clusterMap) {
		if (clusterMap[rk].length >= 2) {
			clusterList.push(clusterMap[rk]);
			for (var cm = 0; cm < clusterMap[rk].length; cm++) inCluster[clusterMap[rk][cm]] = 1;
		}
	}

	var out = [];
	for (var oi = 0; oi < n; oi++) {
		if (!inCluster[oi]) out.push(afterExact[oi]);
	}

	var clusterTrisIn = 0, clusterTrisOut = 0;
	for (var cl = 0; cl < clusterList.length; cl++) {
		var memberIdx = clusterList[cl];
		var memberTris = [];
		for (var mt = 0; mt < memberIdx.length; mt++) memberTris.push(afterExact[memberIdx[mt]]);
		clusterTrisIn += memberTris.length;

		var replaced = retessellateCluster(memberTris);
		clusterTrisOut += replaced.length;
		for (var rt = 0; rt < replaced.length; rt++) out.push(replaced[rt]);
	}

	return {
		soup: out,
		duplicateGroups: duplicateGroups,
		duplicatesRemoved: duplicatesRemoved,
		clusters: clusterList.length,
		clusterTrisIn: clusterTrisIn,
		clusterTrisOut: clusterTrisOut
	};
}

/**
 * Re-tessellate one coincident cluster: CDT of the union of all member
 * vertices with the union of all member edges as constraints, keeping
 * each output region ONCE (centroid covered by >= 1 member).
 *
 * @param {Array<{ v0, v1, v2 }>} memberTris - Coplanar, mutually overlapping
 * @returns {Array<{ v0, v1, v2 }>}
 */
function retessellateCluster(memberTris) {
	var refTri = memberTris[0];
	var nRef = triNormal(refTri);

	// Local 2D frame on the cluster plane
	var e1x = refTri.v1.x - refTri.v0.x, e1y = refTri.v1.y - refTri.v0.y, e1z = refTri.v1.z - refTri.v0.z;
	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return memberTris;
	var ux = e1x / e1Len, uy = e1y / e1Len, uz = e1z / e1Len;
	var vx = nRef.y * uz - nRef.z * uy;
	var vy = nRef.z * ux - nRef.x * uz;
	var vz = nRef.x * uy - nRef.y * ux;
	var ox = refTri.v0.x, oy = refTri.v0.y, oz = refTri.v0.z;

	function toLocal(p) {
		var dx = p.x - ox, dy = p.y - oy, dz = p.z - oz;
		return [dx * ux + dy * uy + dz * uz, dx * vx + dy * vy + dz * vz];
	}

	// Unique vertices by vKey — keep FIRST object reference
	var keyToIdx = {};
	var pts = [];
	var constraints = {};

	function addVert(p) {
		var k = vKey(p);
		var idx = keyToIdx[k];
		if (idx === undefined) {
			idx = pts.length;
			keyToIdx[k] = idx;
			pts.push(p);
		}
		return idx;
	}

	var memberIdxTriples = [];
	for (var m = 0; m < memberTris.length; m++) {
		var mt = memberTris[m];
		var i0 = addVert(mt.v0), i1 = addVert(mt.v1), i2 = addVert(mt.v2);
		memberIdxTriples.push([i0, i1, i2]);
		var edges = [[i0, i1], [i1, i2], [i2, i0]];
		for (var e = 0; e < 3; e++) {
			var a = edges[e][0], b = edges[e][1];
			if (a === b) continue;
			var ek = a < b ? a + "|" + b : b + "|" + a;
			constraints[ek] = [a, b];
		}
	}

	var np = pts.length;
	var coords = new Float64Array(np * 2);
	var local = new Array(np);
	for (var p = 0; p < np; p++) {
		var lp = toLocal(pts[p]);
		local[p] = lp;
		coords[p * 2] = lp[0];
		coords[p * 2 + 1] = lp[1];
	}

	var del;
	try {
		del = new Delaunator(coords);
	} catch (de) {
		return [memberTris[0]]; // degenerate — best effort: keep one sheet
	}

	try {
		var con = new Constrainautor(del);
		for (var ck in constraints) {
			try { con.constrainOne(constraints[ck][0], constraints[ck][1]); } catch (ce) { /* skip */ }
		}
	} catch (ce2) { /* unconstrained still usable */ }

	// Coverage test: keep an output triangle once if its centroid lies
	// inside at least one member (2D barycentric, small tolerance).
	function insideMember(cx, cy, triple) {
		var a = local[triple[0]], b = local[triple[1]], c = local[triple[2]];
		var d = (b[1] - c[1]) * (a[0] - c[0]) + (c[0] - b[0]) * (a[1] - c[1]);
		if (Math.abs(d) < 1e-30) return false;
		var w0 = ((b[1] - c[1]) * (cx - c[0]) + (c[0] - b[0]) * (cy - c[1])) / d;
		var w1 = ((c[1] - a[1]) * (cx - c[0]) + (a[0] - c[0]) * (cy - c[1])) / d;
		var w2 = 1 - w0 - w1;
		var tol = -1e-9;
		return w0 >= tol && w1 >= tol && w2 >= tol;
	}

	var result = [];
	var delTris = del.triangles;
	for (var k = 0; k < delTris.length; k += 3) {
		var ta = delTris[k], tb = delTris[k + 1], tc = delTris[k + 2];
		var ccx = (coords[ta * 2] + coords[tb * 2] + coords[tc * 2]) / 3;
		var ccy = (coords[ta * 2 + 1] + coords[tb * 2 + 1] + coords[tc * 2 + 1]) / 3;

		var covered = false;
		for (var mi = 0; mi < memberIdxTriples.length; mi++) {
			if (insideMember(ccx, ccy, memberIdxTriples[mi])) { covered = true; break; }
		}
		if (!covered) continue;

		// Orient to the cluster normal (members are all outward already)
		var pa = pts[ta], pb = pts[tb], pc = pts[tc];
		var s1x = pb.x - pa.x, s1y = pb.y - pa.y, s1z = pb.z - pa.z;
		var s2x = pc.x - pa.x, s2y = pc.y - pa.y, s2z = pc.z - pa.z;
		var snx = s1y * s2z - s1z * s2y;
		var sny = s1z * s2x - s1x * s2z;
		var snz = s1x * s2y - s1y * s2x;
		var dot = snx * nRef.x + sny * nRef.y + snz * nRef.z;

		if (dot < 0) {
			result.push({ v0: pa, v1: pc, v2: pb });
		} else {
			result.push({ v0: pa, v1: pb, v2: pc });
		}
	}

	return result.length > 0 ? result : [memberTris[0]];
}
