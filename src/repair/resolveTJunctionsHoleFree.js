/**
 * @module repair/resolveTJunctionsHoleFree
 *
 * Hole-free T-junction resolution.
 *
 * A T-junction is a vertex that lies on the interior of another triangle's edge
 * without splitting it — a crack that breaks watertightness and z-fights on render.
 *
 * The existing resolveTJunctions() keys vertices with toFixed(6) STRINGS and samples
 * each edge independently, so two triangles sharing an edge can disagree about that
 * edge's split points and the mesh tears open. This variant is HOLE-FREE by
 * construction:
 *
 *   1. Weld the soup to a shared neighbourhood-pool integer identity. Now an edge
 *      (a,b) is the SAME pair of ids for both triangles that share it.
 *   2. For every triangle, collect the interior vertices that lie on its three edges
 *      (from the single shared vertex set). Both triangles across a shared edge find
 *      the IDENTICAL set on that edge -> they split it the same way -> no crack.
 *   3. Re-triangulate each affected triangle with those on-edge vertices via a
 *      local-frame Delaunay triangulation (never a corner fan, which would emit
 *      collinear zero-area slivers), keeping only sub-triangles inside the parent
 *      and re-orienting each to the source normal.
 *
 * Only EXISTING vertices are inserted (no new points are minted), so the pass
 * converges in a couple of iterations; a small bounded loop mops up the rare case
 * where a fresh interior diagonal itself grazes a vertex.
 *
 * Identity is a neighbourhood weld, not toFixed and not exact rationals — welding is
 * a tolerance operation. The on-edge test is a distance-to-segment tolerance test;
 * exact rationals do not apply to "close enough to be a T-junction".
 */

import Delaunator from "delaunator";
import { makeWeldPool } from "./neighbourhoodPool.js";

/**
 * @param {Array<{ v0:{x,y,z}, v1:{x,y,z}, v2:{x,y,z} }>} soup - Triangle soup
 * @param {number} [tolerance=1e-4] - Weld + on-edge tolerance in metres. Pass the
 *                                    caller's own weld epsilon for predictable results.
 * @param {number} [maxPasses=4] - Safety bound on the convergence loop.
 * @returns {Array<{ v0:{x,y,z}, v1:{x,y,z}, v2:{x,y,z} }>} New soup, T-junctions resolved.
 */
export function resolveTJunctionsHoleFree(soup, tolerance, maxPasses) {
	if (!soup || soup.length === 0) return soup;
	var tol = tolerance > 0 ? tolerance : 1e-4;
	var passes = maxPasses > 0 ? maxPasses : 4;
	var tol2 = tol * tol;

	var work = soup;
	for (var pass = 0; pass < passes; pass++) {
		// (1) shared identity
		var pool = makeWeldPool(tol);
		var F = new Array(work.length);
		for (var i = 0; i < work.length; i++) {
			var t = work[i];
			F[i] = [
				pool.id(t.v0.x, t.v0.y, t.v0.z),
				pool.id(t.v1.x, t.v1.y, t.v1.z),
				pool.id(t.v2.x, t.v2.y, t.v2.z)
			];
		}
		var V = pool.points;

		// vertex grid for on-edge queries
		var gcell = Math.max(tol * 16, 1e-6);
		var ginv = 1 / gcell;
		var vgrid = new Map();
		for (var vi = 0; vi < V.length; vi++) {
			var gk = Math.floor(V[vi].x * ginv) + "," + Math.floor(V[vi].y * ginv) + "," + Math.floor(V[vi].z * ginv);
			var gb = vgrid.get(gk);
			if (!gb) { gb = []; vgrid.set(gk, gb); }
			gb.push(vi);
		}

		function interiorOnEdge(a, b) {
			var A = V[a], B = V[b];
			var dx = B.x - A.x, dy = B.y - A.y, dz = B.z - A.z;
			var L2 = dx * dx + dy * dy + dz * dz;
			if (L2 < 1e-20) return null;
			var hits = null;
			var mnx = Math.min(A.x, B.x) - tol, mxx = Math.max(A.x, B.x) + tol;
			var mny = Math.min(A.y, B.y) - tol, mxy = Math.max(A.y, B.y) + tol;
			var mnz = Math.min(A.z, B.z) - tol, mxz = Math.max(A.z, B.z) + tol;
			for (var cx = Math.floor(mnx * ginv); cx <= Math.floor(mxx * ginv); cx++) {
				for (var cy = Math.floor(mny * ginv); cy <= Math.floor(mxy * ginv); cy++) {
					for (var cz = Math.floor(mnz * ginv); cz <= Math.floor(mxz * ginv); cz++) {
						var arr = vgrid.get(cx + "," + cy + "," + cz);
						if (!arr) continue;
						for (var k = 0; k < arr.length; k++) {
							var v = arr[k];
							if (v === a || v === b) continue;
							var P = V[v];
							var s = ((P.x - A.x) * dx + (P.y - A.y) * dy + (P.z - A.z) * dz) / L2;
							if (s <= 1e-9 || s >= 1 - 1e-9) continue; // strictly interior
							var px = A.x + s * dx, py = A.y + s * dy, pz = A.z + s * dz;
							var ex = P.x - px, ey = P.y - py, ez = P.z - pz;
							if (ex * ex + ey * ey + ez * ez > tol2) continue;
							if (!hits) hits = [];
							hits.push({ v: v, s: s });
						}
					}
				}
			}
			if (hits) hits.sort(function (p, q) { return p.s - q.s; });
			return hits;
		}

		// (2)+(3)
		var out = [];
		var splits = 0;
		for (var fi = 0; fi < F.length; fi++) {
			var f = F[fi];
			if (f[0] === f[1] || f[1] === f[2] || f[2] === f[0]) continue; // drop welded-degenerate
			var e01 = interiorOnEdge(f[0], f[1]);
			var e12 = interiorOnEdge(f[1], f[2]);
			var e20 = interiorOnEdge(f[2], f[0]);
			if (!e01 && !e12 && !e20) {
				out.push({ v0: V[f[0]], v1: V[f[1]], v2: V[f[2]] });
				continue;
			}
			var steiner = [];
			collect(e01, V, steiner);
			collect(e12, V, steiner);
			collect(e20, V, steiner);
			var sub = retriangulate(V[f[0]], V[f[1]], V[f[2]], steiner);
			for (var si = 0; si < sub.length; si++) out.push(sub[si]);
			splits++;
		}

		work = out;
		if (splits === 0) break;
	}
	return work;
}

function collect(hits, V, into) {
	if (!hits) return;
	for (var i = 0; i < hits.length; i++) into.push(V[hits[i].v]);
}

/**
 * Re-triangulate one triangle with points that lie on its edges, via a local-frame
 * Delaunay triangulation. Keeps sub-triangles whose centroid is inside the parent,
 * drops sub-tolerance slivers, and orients each sub-triangle to the source normal.
 */
function retriangulate(v0, v1, v2, steiner) {
	if (!steiner || steiner.length === 0) return [{ v0: v0, v1: v1, v2: v2 }];

	var e1x = v1.x - v0.x, e1y = v1.y - v0.y, e1z = v1.z - v0.z;
	var e2x = v2.x - v0.x, e2y = v2.y - v0.y, e2z = v2.z - v0.z;
	var e1L = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1L < 1e-12) return [{ v0: v0, v1: v1, v2: v2 }];
	var ux = e1x / e1L, uy = e1y / e1L, uz = e1z / e1L;

	// source normal (unnormalised) for orientation
	var snx = e1y * e2z - e1z * e2y;
	var sny = e1z * e2x - e1x * e2z;
	var snz = e1x * e2y - e1y * e2x;
	var nL = Math.sqrt(snx * snx + sny * sny + snz * snz);
	if (nL < 1e-12) return [{ v0: v0, v1: v1, v2: v2 }];

	var vx = sny * uz - snz * uy, vy = snz * ux - snx * uz, vz = snx * uy - sny * ux;
	var vL = Math.sqrt(vx * vx + vy * vy + vz * vz);
	if (vL < 1e-12) return [{ v0: v0, v1: v1, v2: v2 }];
	vx /= vL; vy /= vL; vz /= vL;

	function toLocal(p) {
		var dx = p.x - v0.x, dy = p.y - v0.y, dz = p.z - v0.z;
		return [dx * ux + dy * uy + dz * uz, dx * vx + dy * vy + dz * vz];
	}
	var l0 = toLocal(v0), l1 = toLocal(v1), l2 = toLocal(v2);
	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return [{ v0: v0, v1: v1, v2: v2 }];
	function bary(pu, pv) {
		var a = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var b = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [a, b, 1 - a - b];
	}
	var triArea = Math.abs(baryD) * 0.5;

	var pts = [v0, v1, v2];
	for (var s = 0; s < steiner.length; s++) pts.push(steiner[s]);
	var n = pts.length;
	var coords = new Float64Array(n * 2);
	for (var j = 0; j < n; j++) {
		var lj = toLocal(pts[j]);
		coords[j * 2] = lj[0];
		coords[j * 2 + 1] = lj[1];
	}

	var del;
	try { del = new Delaunator(coords); }
	catch (e) { return [{ v0: v0, v1: v1, v2: v2 }]; }

	var res = [];
	var dt = del.triangles;
	for (var k = 0; k < dt.length; k += 3) {
		var a = dt[k], b = dt[k + 1], c = dt[k + 2];
		var cu = (coords[a * 2] + coords[b * 2] + coords[c * 2]) / 3;
		var cv = (coords[a * 2 + 1] + coords[b * 2 + 1] + coords[c * 2 + 1]) / 3;
		var cb = bary(cu, cv);
		if (cb[0] < -1e-6 || cb[1] < -1e-6 || cb[2] < -1e-6) continue; // outside parent
		var au = coords[a * 2], av = coords[a * 2 + 1];
		var bu = coords[b * 2], bv = coords[b * 2 + 1];
		var cuu = coords[c * 2], cvv = coords[c * 2 + 1];
		var subArea = Math.abs((bu - au) * (cvv - av) - (cuu - au) * (bv - av)) * 0.5;
		if (subArea < triArea * 1e-8) continue; // sliver
		res.push(orientToNormal(pts[a], pts[b], pts[c], snx, sny, snz));
	}
	return res.length ? res : [{ v0: v0, v1: v1, v2: v2 }];
}

// Coplanar fragment -> match the source outward normal (a sign flip is a v1<->v2 swap).
function orientToNormal(a, b, c, snx, sny, snz) {
	var fx = (b.y - a.y) * (c.z - a.z) - (b.z - a.z) * (c.y - a.y);
	var fy = (b.z - a.z) * (c.x - a.x) - (b.x - a.x) * (c.z - a.z);
	var fz = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
	if (fx * snx + fy * sny + fz * snz < 0) return { v0: a, v1: c, v2: b };
	return { v0: a, v1: b, v2: c };
}
