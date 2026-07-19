/**
 * @module intersect/coplanarOverlap
 *
 * Coplanar triangle-triangle overlap — the case the Moller path
 * ({@link module:intersect/triTriIntersection}) deliberately rejects with
 * its near-parallel gate (|dotN| > 0.9999). Two coplanar triangles that
 * overlap in AREA are a coincident fold: the intersection is not a segment
 * but a convex polygon (A ∩ B).
 *
 * This module computes that overlap polygon and (optionally) emits its
 * boundary edges as intersection segments through the shared BMS vertex
 * pool, so both triangles get the SAME PoolVertex objects and the
 * subsequent split is conforming (no T-junctions across the fold).
 *
 * Coplanarity is decided with robust orient3d (Shewchuk adaptive
 * predicates) — the sign/zero of the 6x-tet-volume determinant — never
 * with an n·v + d epsilon test.
 *
 * Exports:
 *  - coplanarOverlap(triA, triB, options)          — overlap polygon or null
 *  - emitCoplanarSegments(polygon, pool, refA, refB) — polygon edges → pool segments
 */

import { orient2d, orient3d } from "robust-predicates";
import { triNormal } from "../normals/triNormal.js";

/** Same near-parallel threshold as triTriIntersection's reject gate. */
var NEAR_PARALLEL = 0.9999;

/**
 * Compute the convex overlap polygon of two coplanar triangles.
 *
 * Steps:
 *  1. Near-parallel gate: |nA · nB| must exceed `nearParallel` (default
 *     0.9999 — the exact complement of the Moller reject).
 *  2. Coplanarity: each vertex of B must lie on plane(A). The signed
 *     distance is derived from robust orient3d (6x signed tet volume)
 *     divided by |2A| of triangle A — exact sign, float magnitude.
 *  3. Project both triangles to the dominant-axis 2D plane of A's normal.
 *  4. Sutherland-Hodgman clip B against A (both convex) — intersection
 *     points are lerped in full 3D so the polygon stays on the plane.
 *  5. Area gate: the overlap must have real area (relative to the smaller
 *     triangle) — this naturally excludes legitimate coplanar neighbours
 *     that merely touch along a shared edge or vertex.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} triA
 * @param {{ v0: Object, v1: Object, v2: Object }} triB
 * @param {Object} [options]
 * @param {number} [options.nearParallel=0.9999] - |dotN| gate
 * @param {number} [options.distTolerance] - Max |distance| of B's vertices
 *        from plane(A). Default: 1e-7 x longest edge of A/B.
 * @param {number} [options.minAreaRatio=1e-6] - Overlap area must exceed
 *        this fraction of the smaller projected triangle area.
 * @returns {{ polygon: Array<{x,y,z}>, area: number, areaRatio: number } | null}
 *          Overlap polygon (3+ vertices, on the shared plane), projected
 *          2D area, and area / min(areaA, areaB). Null when not coplanar
 *          or no positive-area overlap.
 */
export function coplanarOverlap(triA, triB, options) {
	var opts = options || {};
	var nearParallel = opts.nearParallel !== undefined ? opts.nearParallel : NEAR_PARALLEL;

	// ── 1. Near-parallel gate ──
	var nA = triNormal(triA);
	var nB = triNormal(triB);
	var dotN = nA.x * nB.x + nA.y * nB.y + nA.z * nB.z;
	if (Math.abs(dotN) < nearParallel) return null;

	// ── 2. Coplanarity via robust orient3d ──
	// |2A| of triangle A (cross product magnitude) converts the orient3d
	// determinant (6x tet volume) into a true point-plane distance.
	var e1x = triA.v1.x - triA.v0.x, e1y = triA.v1.y - triA.v0.y, e1z = triA.v1.z - triA.v0.z;
	var e2x = triA.v2.x - triA.v0.x, e2y = triA.v2.y - triA.v0.y, e2z = triA.v2.z - triA.v0.z;
	var cxA = e1y * e2z - e1z * e2y;
	var cyA = e1z * e2x - e1x * e2z;
	var czA = e1x * e2y - e1y * e2x;
	var lenCrossA = Math.sqrt(cxA * cxA + cyA * cyA + czA * czA);
	if (lenCrossA < 1e-30) return null; // degenerate A

	var distTol = opts.distTolerance;
	if (distTol === undefined) {
		var maxEdge = 0;
		var pairs = [
			[triA.v0, triA.v1], [triA.v1, triA.v2], [triA.v2, triA.v0],
			[triB.v0, triB.v1], [triB.v1, triB.v2], [triB.v2, triB.v0]
		];
		for (var pe = 0; pe < pairs.length; pe++) {
			var dx = pairs[pe][0].x - pairs[pe][1].x;
			var dy = pairs[pe][0].y - pairs[pe][1].y;
			var dz = pairs[pe][0].z - pairs[pe][1].z;
			var el = Math.sqrt(dx * dx + dy * dy + dz * dz);
			if (el > maxEdge) maxEdge = el;
		}
		distTol = maxEdge * 1e-7;
	}

	var bVerts = [triB.v0, triB.v1, triB.v2];
	for (var bi = 0; bi < 3; bi++) {
		var bv = bVerts[bi];
		var det = orient3d(
			triA.v0.x, triA.v0.y, triA.v0.z,
			triA.v1.x, triA.v1.y, triA.v1.z,
			triA.v2.x, triA.v2.y, triA.v2.z,
			bv.x, bv.y, bv.z
		);
		if (det !== 0) {
			// Exact sign says off-plane; magnitude / |2A| is the distance.
			var dist = det / lenCrossA;
			if (Math.abs(dist) > distTol) return null;
		}
	}

	// ── 3. Dominant-axis 2D projection (of A's normal) ──
	var anx = Math.abs(nA.x), any = Math.abs(nA.y), anz = Math.abs(nA.z);
	var getU, getV;
	if (anz >= anx && anz >= any) {
		getU = function (p) { return p.x; };
		getV = function (p) { return p.y; };
	} else if (any >= anx) {
		getU = function (p) { return p.x; };
		getV = function (p) { return p.z; };
	} else {
		getU = function (p) { return p.y; };
		getV = function (p) { return p.z; };
	}

	function proj(p) {
		return { x: p.x, y: p.y, z: p.z, u: getU(p), v: getV(p) };
	}

	var clipPoly = [proj(triA.v0), proj(triA.v1), proj(triA.v2)];
	var subject = [proj(triB.v0), proj(triB.v1), proj(triB.v2)];

	function shoelace(poly) {
		var s = 0;
		for (var i = 0; i < poly.length; i++) {
			var j = (i + 1) % poly.length;
			s += poly[i].u * poly[j].v - poly[j].u * poly[i].v;
		}
		return s * 0.5;
	}

	var areaA2 = shoelace(clipPoly);
	var areaB2 = shoelace(subject);
	if (Math.abs(areaA2) < 1e-30 || Math.abs(areaB2) < 1e-30) return null;

	// Sutherland-Hodgman needs a CCW clip polygon in the projection.
	if (areaA2 < 0) clipPoly.reverse();

	// ── 4. Sutherland-Hodgman clip: subject (B) against convex clip (A) ──
	// Inside test uses robust orient2d; intersection points are lerped in
	// full 3D so they remain on the shared plane.
	function intersectEdge(p, q, dp, dq) {
		var t = dp / (dp - dq);
		return {
			x: p.x + t * (q.x - p.x),
			y: p.y + t * (q.y - p.y),
			z: p.z + t * (q.z - p.z),
			u: p.u + t * (q.u - p.u),
			v: p.v + t * (q.v - p.v)
		};
	}

	var output = subject;
	for (var ce = 0; ce < 3 && output.length > 0; ce++) {
		var c1 = clipPoly[ce];
		var c2 = clipPoly[(ce + 1) % 3];
		var input = output;
		output = [];

		for (var ii = 0; ii < input.length; ii++) {
			var cur = input[ii];
			var prev = input[(ii + input.length - 1) % input.length];
			// robust-predicates orient2d is POSITIVE for CLOCKWISE order, so
			// negate: d > 0 → left of c1→c2 (inside for a CCW clip polygon).
			var dCur = -orient2d(c1.u, c1.v, c2.u, c2.v, cur.u, cur.v);
			var dPrev = -orient2d(c1.u, c1.v, c2.u, c2.v, prev.u, prev.v);
			var curIn = dCur >= 0;
			var prevIn = dPrev >= 0;

			if (curIn) {
				if (!prevIn) output.push(intersectEdge(prev, cur, dPrev, dCur));
				output.push(cur);
			} else if (prevIn) {
				output.push(intersectEdge(prev, cur, dPrev, dCur));
			}
		}
	}

	if (output.length < 3) return null;

	// ── Deduplicate near-coincident consecutive vertices ──
	var weldTol = opts.weldTolerance !== undefined ? opts.weldTolerance : distTol;
	var weldTolSq = weldTol * weldTol;
	var polygon = [];
	for (var oi = 0; oi < output.length; oi++) {
		var op = output[oi];
		var last = polygon.length > 0 ? polygon[polygon.length - 1] : null;
		if (last) {
			var ddx = op.x - last.x, ddy = op.y - last.y, ddz = op.z - last.z;
			if (ddx * ddx + ddy * ddy + ddz * ddz <= weldTolSq) continue;
		}
		polygon.push(op);
	}
	// Closing duplicate
	if (polygon.length >= 2) {
		var first = polygon[0], lastP = polygon[polygon.length - 1];
		var cdx = first.x - lastP.x, cdy = first.y - lastP.y, cdz = first.z - lastP.z;
		if (cdx * cdx + cdy * cdy + cdz * cdz <= weldTolSq) polygon.pop();
	}
	if (polygon.length < 3) return null;

	// ── 5. Area gate ──
	var overlapArea = Math.abs(shoelace(polygon));
	var minParent = Math.min(Math.abs(areaA2), Math.abs(areaB2));
	var minAreaRatio = opts.minAreaRatio !== undefined ? opts.minAreaRatio : 1e-6;
	if (overlapArea < minParent * minAreaRatio) return null;

	// Strip the projection scratch fields from the result
	var out = new Array(polygon.length);
	for (var ri = 0; ri < polygon.length; ri++) {
		out[ri] = { x: polygon[ri].x, y: polygon[ri].y, z: polygon[ri].z };
	}

	return { polygon: out, area: overlapArea, areaRatio: overlapArea / minParent };
}

/**
 * Emit the edges of a coplanar overlap polygon as intersection segments
 * through the shared vertex pool — the exact call pattern of
 * bmsIntersect: both endpoints are registered for BOTH triangles, so the
 * two folds share the SAME PoolVertex objects and the split conforms.
 *
 * The caller pushes the returned segments into its crossed sets.
 *
 * @param {Array<{x,y,z}>} polygon - Overlap polygon from {@link coplanarOverlap}
 * @param {Object} pool - Shared vertex pool (createVertexPool)
 * @param {{mesh: string, triIdx: number}} refA - Triangle ref for side A
 * @param {{mesh: string, triIdx: number}} refB - Triangle ref for side B
 * @returns {Array<{ p0: Object, p1: Object, idxA: number, idxB: number }>}
 */
export function emitCoplanarSegments(polygon, pool, refA, refB) {
	var segs = [];
	var n = polygon.length;
	for (var k = 0; k < n; k++) {
		var a = polygon[k];
		var b = polygon[(k + 1) % n];

		var pv0 = pool.getOrCreate(a.x, a.y, a.z, refA);
		pool.getOrCreate(a.x, a.y, a.z, refB);

		var pv1 = pool.getOrCreate(b.x, b.y, b.z, refA);
		pool.getOrCreate(b.x, b.y, b.z, refB);

		// Pool dedup merged both endpoints — degenerate edge
		if (pv0 === pv1) continue;

		segs.push({ p0: pv0, p1: pv1, idxA: refA.triIdx, idxB: refB.triIdx });
	}
	return segs;
}
