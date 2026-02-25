/**
 * @module repair/resolveTJunctions
 *
 * Detect and resolve T-junctions in triangle soup.
 * A T-junction occurs when a vertex from one triangle lies on an edge of
 * another triangle but that edge hasn't been split.
 */

import Delaunator from "delaunator";
import { dist3 } from "../util/math.js";

/**
 * Split a triangle that has Steiner points inside it, using
 * local-frame + Delaunator + barycentric-filter.
 *
 * @param {Object} tri - {v0, v1, v2}
 * @param {Array} steinerPoints - Array of {x, y, z} points on edges of this triangle
 * @returns {Array} Sub-triangles [{v0, v1, v2}, ...]
 */
function splitTriangleWithSteinerPoints(tri, steinerPoints) {
	if (!steinerPoints || steinerPoints.length === 0) return [tri];

	var e1x = tri.v1.x - tri.v0.x;
	var e1y = tri.v1.y - tri.v0.y;
	var e1z = tri.v1.z - tri.v0.z;
	var e2x = tri.v2.x - tri.v0.x;
	var e2y = tri.v2.y - tri.v0.y;
	var e2z = tri.v2.z - tri.v0.z;

	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return [tri];
	var lux = e1x / e1Len, luy = e1y / e1Len, luz = e1z / e1Len;

	var lnx = e1y * e2z - e1z * e2y;
	var lny = e1z * e2x - e1x * e2z;
	var lnz = e1x * e2y - e1y * e2x;
	var lnLen = Math.sqrt(lnx * lnx + lny * lny + lnz * lnz);
	if (lnLen < 1e-12) return [tri];

	var lvx = lny * luz - lnz * luy;
	var lvy = lnz * lux - lnx * luz;
	var lvz = lnx * luy - lny * lux;
	var lvLen = Math.sqrt(lvx * lvx + lvy * lvy + lvz * lvz);
	if (lvLen < 1e-12) return [tri];
	lvx /= lvLen; lvy /= lvLen; lvz /= lvLen;

	var lox = tri.v0.x, loy = tri.v0.y, loz = tri.v0.z;

	function toLocal(p) {
		var dx = p.x - lox, dy = p.y - loy, dz = p.z - loz;
		return [dx * lux + dy * luy + dz * luz, dx * lvx + dy * lvy + dz * lvz];
	}

	var l0 = toLocal(tri.v0);
	var l1 = toLocal(tri.v1);
	var l2 = toLocal(tri.v2);

	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return [tri];

	function baryCoords(pu, pv) {
		var u = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var v = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [u, v, 1 - u - v];
	}

	var triArea2D = Math.abs(baryD) * 0.5;
	var MIN_AREA_RATIO = 1e-8;

	var pts = [
		{ x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
		{ x: tri.v1.x, y: tri.v1.y, z: tri.v1.z },
		{ x: tri.v2.x, y: tri.v2.y, z: tri.v2.z }
	];
	for (var si = 0; si < steinerPoints.length; si++) {
		pts.push(steinerPoints[si]);
	}

	var n = pts.length;
	var coords = new Float64Array(n * 2);
	for (var j = 0; j < n; j++) {
		var lj = toLocal(pts[j]);
		coords[j * 2] = lj[0];
		coords[j * 2 + 1] = lj[1];
	}

	var del;
	try {
		del = new Delaunator(coords);
	} catch (de) {
		return [tri];
	}

	var result = [];
	var delTris = del.triangles;
	for (var k = 0; k < delTris.length; k += 3) {
		var a = delTris[k], b = delTris[k + 1], c = delTris[k + 2];

		var cx2 = (coords[a * 2] + coords[b * 2] + coords[c * 2]) / 3;
		var cy2 = (coords[a * 2 + 1] + coords[b * 2 + 1] + coords[c * 2 + 1]) / 3;

		var cBary = baryCoords(cx2, cy2);
		if (cBary[0] < -1e-6 || cBary[1] < -1e-6 || cBary[2] < -1e-6) continue;

		var au = coords[a * 2], av = coords[a * 2 + 1];
		var bu = coords[b * 2], bv = coords[b * 2 + 1];
		var cu = coords[c * 2], cv = coords[c * 2 + 1];
		var subArea = Math.abs((bu - au) * (cv - av) - (cu - au) * (bv - av)) * 0.5;
		if (subArea < triArea2D * MIN_AREA_RATIO) continue;

		result.push({ v0: pts[a], v1: pts[b], v2: pts[c] });
	}

	if (result.length === 0) return [tri];
	return result;
}

/**
 * Detect and resolve T-junctions in triangle soup.
 *
 * @param {Array} soup - Triangle soup [{v0, v1, v2}, ...]
 * @param {number} [tolerance=1e-4] - Distance tolerance in metres
 * @param {number} [maxPasses=3] - Max iteration passes
 * @returns {Array} Triangle soup with T-junctions resolved
 */
export function resolveTJunctions(soup, tolerance, maxPasses) {
	if (!soup || soup.length === 0) return soup;
	if (!tolerance) tolerance = 1e-4;
	if (!maxPasses) maxPasses = 3;

	var PREC = 6;

	function localVKey(v) {
		return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC);
	}

	// Compute average edge length for grid cell size
	var edgeLenSum = 0;
	var edgeCount = 0;
	for (var ei0 = 0; ei0 < Math.min(soup.length, 200); ei0++) {
		var st = soup[ei0];
		edgeLenSum += dist3(st.v0, st.v1) + dist3(st.v1, st.v2) + dist3(st.v2, st.v0);
		edgeCount += 3;
	}
	var avgEdge = edgeCount > 0 ? edgeLenSum / edgeCount : 1.0;

	for (var pass = 0; pass < maxPasses; pass++) {
		var cellSize = Math.max(avgEdge, tolerance * 100, 0.1);
		var invCell = 1.0 / cellSize;
		var grid = {};

		var vertSeen = {};
		for (var i = 0; i < soup.length; i++) {
			var tri = soup[i];
			var verts = [tri.v0, tri.v1, tri.v2];
			for (var vi = 0; vi < 3; vi++) {
				var v = verts[vi];
				var key = localVKey(v);
				if (!vertSeen[key]) {
					vertSeen[key] = true;
					var gx = Math.floor(v.x * invCell);
					var gy = Math.floor(v.y * invCell);
					var gz = Math.floor(v.z * invCell);
					var gk = gx + "," + gy + "," + gz;
					if (!grid[gk]) grid[gk] = [];
					grid[gk].push(v);
				}
			}
		}

		var triSteiner = [];
		var splitCount = 0;
		var tolSq = tolerance * tolerance;

		for (var ti = 0; ti < soup.length; ti++) {
			var t = soup[ti];
			var tv = [t.v0, t.v1, t.v2];
			var tvKeys = [localVKey(tv[0]), localVKey(tv[1]), localVKey(tv[2])];
			var steiners = null;

			for (var ei = 0; ei < 3; ei++) {
				var eA = tv[ei];
				var eB = tv[(ei + 1) % 3];

				var abx = eB.x - eA.x;
				var aby = eB.y - eA.y;
				var abz = eB.z - eA.z;
				var abLenSq = abx * abx + aby * aby + abz * abz;
				if (abLenSq < 1e-20) continue;

				var abLen = Math.sqrt(abLenSq);
				var eps = tolerance / abLen;
				if (eps >= 0.5) continue;

				var visited = {};
				var steps = Math.ceil(abLen / cellSize) + 1;
				for (var si = 0; si <= steps; si++) {
					var frac = si / steps;
					var sx = eA.x + frac * abx;
					var sy = eA.y + frac * aby;
					var sz = eA.z + frac * abz;
					var sgx = Math.floor(sx * invCell);
					var sgy = Math.floor(sy * invCell);
					var sgz = Math.floor(sz * invCell);

					for (var dx = -1; dx <= 1; dx++) {
						for (var dy = -1; dy <= 1; dy++) {
							for (var dz = -1; dz <= 1; dz++) {
								var ck = (sgx + dx) + "," + (sgy + dy) + "," + (sgz + dz);
								if (visited[ck]) continue;
								visited[ck] = true;

								var cell = grid[ck];
								if (!cell) continue;

								for (var ci = 0; ci < cell.length; ci++) {
									var V = cell[ci];
									var vk = localVKey(V);
									if (vk === tvKeys[0] || vk === tvKeys[1] || vk === tvKeys[2]) continue;

									var apx = V.x - eA.x;
									var apy = V.y - eA.y;
									var apz = V.z - eA.z;
									var tp = (apx * abx + apy * aby + apz * abz) / abLenSq;

									if (tp <= eps || tp >= 1 - eps) continue;

									var projX = eA.x + tp * abx;
									var projY = eA.y + tp * aby;
									var projZ = eA.z + tp * abz;
									var ddx = V.x - projX;
									var ddy = V.y - projY;
									var ddz = V.z - projZ;
									var distSq = ddx * ddx + ddy * ddy + ddz * ddz;

									if (distSq < tolSq) {
										if (!steiners) steiners = [];
										steiners.push({ x: V.x, y: V.y, z: V.z });
									}
								}
							}
						}
					}
				}
			}

			if (steiners) {
				var seen2 = {};
				var unique = [];
				for (var su = 0; su < steiners.length; su++) {
					var sk = localVKey(steiners[su]);
					if (!seen2[sk]) {
						seen2[sk] = true;
						unique.push(steiners[su]);
					}
				}
				triSteiner[ti] = unique;
				splitCount++;
			}
		}

		if (splitCount === 0) break;

		var newSoup = [];
		for (var ri = 0; ri < soup.length; ri++) {
			if (triSteiner[ri]) {
				var subTris = splitTriangleWithSteinerPoints(soup[ri], triSteiner[ri]);
				for (var st2 = 0; st2 < subTris.length; st2++) {
					newSoup.push(subTris[st2]);
				}
			} else {
				newSoup.push(soup[ri]);
			}
		}

		soup = newSoup;
	}

	return soup;
}
