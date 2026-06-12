/**
 * @module boolean/sliverGuard
 *
 * Fan-sliver detection and interior Steiner lattice generation (KNOWN_ISSUES #21).
 *
 * Splitting a giant triangle (e.g. a 50 m extruded-prism wall face) against a
 * dense intersection chain makes fan triangulation emit dozens of needle
 * slivers per face — fans from the face's far corners to every chain point.
 * They tile the face correctly but per-triangle classification of needles is
 * coin-flip and they survive into results as visually obvious "spurs".
 *
 * The guard: when the parent triangle's edge length is extreme relative to the
 * chain point spacing, skip the corner fans and re-triangulate with a CDT
 * constrained by the chain, seeded with a hexagonal lattice of INTERIOR
 * Steiner points to bound the aspect ratio of the output.
 *
 * The lattice points are strictly interior — they never touch the parent
 * triangle's edges, so edge conformity with neighbouring (possibly uncrossed)
 * triangles is preserved: no T-junctions are introduced.
 */

import { dist3 } from "../util/math.js";

// A fan triangle's aspect ratio is roughly (corner-to-chain distance) /
// (chain point spacing). Guard only on genuinely extreme mismatches so
// ordinary splits keep the cheaper, segment-exact fan path.
var SLIVER_MIN_CHAIN_POINTS = 16;
var SLIVER_ASPECT_THRESHOLD = 32;

// Bound the lattice so a pathological face cannot generate unbounded points.
var MAX_LATTICE_POINTS = 1024;
var MIN_LATTICE_DIVISIONS = 24; // spacing never smaller than maxEdge / 24

/**
 * Average spacing between consecutive chain points (3D arc length / count).
 */
function chainSpacing(chain) {
	var len = 0;
	for (var i = 0; i < chain.length - 1; i++) {
		len += dist3(chain[i], chain[i + 1]);
	}
	return chain.length > 1 ? len / (chain.length - 1) : 0;
}

function maxEdgeLength(tri) {
	var a = dist3(tri.v0, tri.v1);
	var b = dist3(tri.v1, tri.v2);
	var c = dist3(tri.v2, tri.v0);
	return Math.max(a, Math.max(b, c));
}

/**
 * Decide whether fan triangulation of this triangle against this chain
 * would shatter into needle slivers.
 *
 * @param {{ v0, v1, v2 }} tri - Parent triangle
 * @param {Array<{x,y,z}>} chain - Ordered chain points crossing the triangle
 * @returns {boolean}
 */
export function needsSliverGuard(tri, chain) {
	if (!chain || chain.length < SLIVER_MIN_CHAIN_POINTS) return false;
	var spacing = chainSpacing(chain);
	if (spacing < 1e-12) return false;
	return maxEdgeLength(tri) / spacing >= SLIVER_ASPECT_THRESHOLD;
}

/**
 * Generate a hexagonal lattice of interior Steiner points for a triangle,
 * sized to the chain spacing, avoiding the chain itself and the triangle
 * edges. Points are plain {x,y,z} objects on the triangle's plane.
 *
 * @param {{ v0, v1, v2 }} tri - Parent triangle
 * @param {Array<{x,y,z}>} chain - Ordered chain points crossing the triangle
 * @returns {Array<{x,y,z}>} Interior lattice points (possibly empty)
 */
export function interiorLatticePoints(tri, chain) {
	// ── Local 2D frame on the triangle plane ──
	var e1x = tri.v1.x - tri.v0.x, e1y = tri.v1.y - tri.v0.y, e1z = tri.v1.z - tri.v0.z;
	var e2x = tri.v2.x - tri.v0.x, e2y = tri.v2.y - tri.v0.y, e2z = tri.v2.z - tri.v0.z;
	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return [];
	var lux = e1x / e1Len, luy = e1y / e1Len, luz = e1z / e1Len;
	var lnx = e1y * e2z - e1z * e2y;
	var lny = e1z * e2x - e1x * e2z;
	var lnz = e1x * e2y - e1y * e2x;
	var lnLen = Math.sqrt(lnx * lnx + lny * lny + lnz * lnz);
	if (lnLen < 1e-12) return [];
	var lvx = lny * luz - lnz * luy;
	var lvy = lnz * lux - lnx * luz;
	var lvz = lnx * luy - lny * lux;
	var lvLen = Math.sqrt(lvx * lvx + lvy * lvy + lvz * lvz);
	if (lvLen < 1e-12) return [];
	lvx /= lvLen; lvy /= lvLen; lvz /= lvLen;

	function toLocal(p) {
		var dx = p.x - tri.v0.x, dy = p.y - tri.v0.y, dz = p.z - tri.v0.z;
		return [dx * lux + dy * luy + dz * luz, dx * lvx + dy * lvy + dz * lvz];
	}

	var a2 = toLocal(tri.v0), b2 = toLocal(tri.v1), c2 = toLocal(tri.v2);

	// ── Spacing: a few chain spacings, but never finer than maxEdge / 24 ──
	var maxEdge = maxEdgeLength(tri);
	var spacing = chainSpacing(chain);
	var s = Math.max(spacing * 4, maxEdge / MIN_LATTICE_DIVISIONS);

	// Cap total points: triangle area / hex cell area, scale s up if needed
	var triArea = lnLen * 0.5;
	var expected = triArea / (s * s * 0.866);
	if (expected > MAX_LATTICE_POINTS) {
		s = s * Math.sqrt(expected / MAX_LATTICE_POINTS);
	}

	// ── 2D distance from point to segment ──
	function segDist2(px, py, ax, ay, bx, by) {
		var abx = bx - ax, aby = by - ay;
		var lenSq = abx * abx + aby * aby;
		var t = lenSq < 1e-20 ? 0 : ((px - ax) * abx + (py - ay) * aby) / lenSq;
		if (t < 0) t = 0; else if (t > 1) t = 1;
		var qx = ax + t * abx - px, qy = ay + t * aby - py;
		return Math.sqrt(qx * qx + qy * qy);
	}

	// ── Bucket chain points for fast proximity rejection ──
	var chainLocal = [];
	var buckets = {};
	var cell = s;
	for (var ci = 0; ci < chain.length; ci++) {
		var cl = toLocal(chain[ci]);
		chainLocal.push(cl);
		var bk = Math.floor(cl[0] / cell) + "|" + Math.floor(cl[1] / cell);
		(buckets[bk] = buckets[bk] || []).push(ci);
	}

	// Clearance from the chain scales with CHAIN spacing, not lattice spacing:
	// a wide corridor would leave the chain's 0.5 m points bridging to far
	// lattice points (wedge-apex mini-fans where the chain crosses a parent
	// edge). Letting the lattice approach the chain fills the corridor with
	// small, well-shaped triangles instead.
	var chainClear = Math.max(spacing * 1.2, s * 0.15);
	var chainClearSq = chainClear * chainClear;
	function nearChain(px, py) {
		var bx = Math.floor(px / cell), by = Math.floor(py / cell);
		for (var ox = -1; ox <= 1; ox++) {
			for (var oy = -1; oy <= 1; oy++) {
				var list = buckets[(bx + ox) + "|" + (by + oy)];
				if (!list) continue;
				for (var li = 0; li < list.length; li++) {
					var cp = chainLocal[list[li]];
					var ddx = cp[0] - px, ddy = cp[1] - py;
					if (ddx * ddx + ddy * ddy < chainClearSq) return true;
				}
			}
		}
		return false;
	}

	// ── Barycentric inside test (strict, with edge clearance via segDist2) ──
	var baryD = (b2[1] - c2[1]) * (a2[0] - c2[0]) + (c2[0] - b2[0]) * (a2[1] - c2[1]);
	if (Math.abs(baryD) < 1e-12) return [];
	function isInside(pu, pv) {
		var u = ((b2[1] - c2[1]) * (pu - c2[0]) + (c2[0] - b2[0]) * (pv - c2[1])) / baryD;
		var v = ((c2[1] - a2[1]) * (pu - c2[0]) + (a2[0] - c2[0]) * (pv - c2[1])) / baryD;
		var w = 1 - u - v;
		return u > 0 && v > 0 && w > 0;
	}

	var edgeClear = s * 0.45;

	var points = [];
	function accept(pu, pv) {
		if (!isInside(pu, pv)) return false;
		if (segDist2(pu, pv, a2[0], a2[1], b2[0], b2[1]) < edgeClear) return false;
		if (segDist2(pu, pv, b2[0], b2[1], c2[0], c2[1]) < edgeClear) return false;
		if (segDist2(pu, pv, c2[0], c2[1], a2[0], a2[1]) < edgeClear) return false;
		points.push({
			x: tri.v0.x + pu * lux + pv * lvx,
			y: tri.v0.y + pu * luy + pv * lvy,
			z: tri.v0.z + pu * luz + pv * lvz
		});
		return true;
	}

	// ── Graded offset rows along the chain ──
	// Rows parallel to the chain at doubling distances (1.5h, 3h, 6h, ... up
	// to the lattice spacing), subsampled so along-row spacing ≈ row distance.
	// These fill the corridor beside the chain AND the thin wedges where the
	// chain crosses a parent edge — a fixed lattice can't land points there,
	// which would leave chain points fanning to a single far vertex.
	for (var d = spacing * 1.5; d < s; d *= 2) {
		var stride = Math.max(1, Math.round(d / spacing));
		for (var oi = 0; oi < chainLocal.length - 1; oi += stride) {
			var c0 = chainLocal[oi];
			var c1 = chainLocal[Math.min(oi + stride, chainLocal.length - 1)];
			var tx = c1[0] - c0[0], ty = c1[1] - c0[1];
			var tl = Math.sqrt(tx * tx + ty * ty);
			if (tl < 1e-12) continue;
			var onx = -ty / tl, ony = tx / tl;
			accept(c0[0] + onx * d, c0[1] + ony * d);
			accept(c0[0] - onx * d, c0[1] - ony * d);
			if (points.length >= MAX_LATTICE_POINTS) return points;
		}
	}

	// ── Hexagonal lattice over the triangle's 2D bounding box ──
	var minU = Math.min(a2[0], b2[0], c2[0]);
	var maxU = Math.max(a2[0], b2[0], c2[0]);
	var minV = Math.min(a2[1], b2[1], c2[1]);
	var maxV = Math.max(a2[1], b2[1], c2[1]);

	var rowH = s * 0.866;
	var row = 0;
	for (var v = minV + rowH * 0.5; v < maxV; v += rowH, row++) {
		var offset = (row % 2) ? s * 0.5 : 0;
		for (var u = minU + offset + s * 0.5; u < maxU; u += s) {
			if (nearChain(u, v)) continue;
			accept(u, v);
			if (points.length >= MAX_LATTICE_POINTS) return points;
		}
	}

	return points;
}
