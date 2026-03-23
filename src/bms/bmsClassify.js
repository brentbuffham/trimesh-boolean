/**
 * @module bms/bmsClassify
 *
 * Hybrid classification:
 * - Open meshes with a walk polygon: point-in-polygon (PIP) classification
 * - Closed meshes / no walk polygon: barrier flood fill + boundary topology
 *
 * The IGE-walk creates a closed boundary polygon for open meshes.
 * Triangles OUTSIDE the walk polygon = inside the intersection region.
 * (The walk encapsulates the outside — boundary + graph-walks to intersection.)
 */

import { vKey, edgeKey } from "../util/math.js";

// ── Point-in-polygon helpers ──

/**
 * Flatten mesh edge poly segments into a single 2D polygon.
 */
function flattenMeshEdgePoly(meshEdgePoly) {
	if (!meshEdgePoly || !meshEdgePoly.segments || meshEdgePoly.segments.length === 0 || !meshEdgePoly.closed) {
		return null;
	}

	var allVerts = [];
	for (var si = 0; si < meshEdgePoly.segments.length; si++) {
		var segVerts = meshEdgePoly.segments[si].verts;
		if (!segVerts) continue;
		for (var vi = 0; vi < segVerts.length; vi++) {
			if (allVerts.length > 0 && vi === 0) {
				var last = allVerts[allVerts.length - 1];
				var curr = segVerts[vi];
				var dx = last.x - curr.x, dy = last.y - curr.y, dz = last.z - curr.z;
				if (dx * dx + dy * dy + dz * dz < 1e-8) continue;
			}
			allVerts.push(segVerts[vi]);
		}
	}

	if (allVerts.length < 3) return null;

	var areaXY = 0, areaYZ = 0, areaXZ = 0;
	for (var i = 0; i < allVerts.length; i++) {
		var a = allVerts[i];
		var b = allVerts[(i + 1) % allVerts.length];
		areaXY += (a.x * b.y - b.x * a.y);
		areaYZ += (a.y * b.z - b.y * a.z);
		areaXZ += (a.x * b.z - b.x * a.z);
	}

	var absXY = Math.abs(areaXY), absYZ = Math.abs(areaYZ), absXZ = Math.abs(areaXZ);
	var polygon = [];
	var axis;
	if (absXY >= absYZ && absXY >= absXZ) {
		axis = "XY";
		for (var pi = 0; pi < allVerts.length; pi++) polygon.push([allVerts[pi].x, allVerts[pi].y]);
	} else if (absYZ >= absXZ) {
		axis = "YZ";
		for (var pi2 = 0; pi2 < allVerts.length; pi2++) polygon.push([allVerts[pi2].y, allVerts[pi2].z]);
	} else {
		axis = "XZ";
		for (var pi3 = 0; pi3 < allVerts.length; pi3++) polygon.push([allVerts[pi3].x, allVerts[pi3].z]);
	}

	return { polygon: polygon, axis: axis };
}

/**
 * Point-in-polygon (even-odd ray cast).
 */
function pointInPolygon(px, py, polygon) {
	var n = polygon.length;
	var inside = false;
	for (var i = 0, j = n - 1; i < n; j = i++) {
		var xi = polygon[i][0], yi = polygon[i][1];
		var xj = polygon[j][0], yj = polygon[j][1];
		if (((yi > py) !== (yj > py)) &&
			(px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
			inside = !inside;
		}
	}
	return inside;
}

function projectPoint(v, axis) {
	if (axis === "XY") return [v.x, v.y];
	if (axis === "YZ") return [v.y, v.z];
	return [v.x, v.z];
}

// ── Boundary topology helpers ──

function buildBoundaryVertexSet(tris) {
	var edgeCount = {};
	var edgeVerts = {};
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = ks[e] < ks[ne] ? ks[e] + "|" + ks[ne] : ks[ne] + "|" + ks[e];
			if (!edgeCount[ek]) { edgeCount[ek] = 0; edgeVerts[ek] = [ks[e], ks[ne]]; }
			edgeCount[ek]++;
		}
	}
	var boundaryVerts = {};
	for (var ek2 in edgeCount) {
		if (edgeCount[ek2] === 1) {
			var verts = edgeVerts[ek2];
			boundaryVerts[verts[0]] = true;
			boundaryVerts[verts[1]] = true;
		}
	}
	return boundaryVerts;
}

/**
 * Classify components via boundary topology.
 * Component touching boundary = outside, not touching = inside.
 * For closed meshes: largest = outside.
 */
function classifyMeshComponents(comps, megaSoup, boundaryVerts, insideOut, outsideOut) {
	if (comps.length === 0) return;

	if (comps.length === 1) {
		var tris1 = comps[0].triIndices;
		for (var i1 = 0; i1 < tris1.length; i1++) {
			var t1 = megaSoup[tris1[i1]];
			outsideOut.push({ v0: t1.v0, v1: t1.v1, v2: t1.v2 });
		}
		return;
	}

	if (boundaryVerts) {
		for (var ci = 0; ci < comps.length; ci++) {
			var comp = comps[ci];
			var touchesBoundary = false;
			for (var ti = 0; ti < comp.triIndices.length; ti++) {
				var tri = megaSoup[comp.triIndices[ti]];
				var vs = [vKey(tri.v0), vKey(tri.v1), vKey(tri.v2)];
				for (var vi = 0; vi < 3; vi++) {
					if (boundaryVerts[vs[vi]]) { touchesBoundary = true; break; }
				}
				if (touchesBoundary) break;
			}
			var target = touchesBoundary ? outsideOut : insideOut;
			for (var oi = 0; oi < comp.triIndices.length; oi++) {
				var ot = megaSoup[comp.triIndices[oi]];
				target.push({ v0: ot.v0, v1: ot.v1, v2: ot.v2 });
			}
		}
	} else {
		// Closed mesh: largest = outside
		var maxIdx = 0;
		for (var mi = 1; mi < comps.length; mi++) {
			if (comps[mi].triCount > comps[maxIdx].triCount) maxIdx = mi;
		}
		for (var ci2 = 0; ci2 < comps.length; ci2++) {
			var target2 = (ci2 === maxIdx) ? outsideOut : insideOut;
			var tris2 = comps[ci2].triIndices;
			for (var ti2 = 0; ti2 < tris2.length; ti2++) {
				var t2 = megaSoup[tris2[ti2]];
				target2.push({ v0: t2.v0, v1: t2.v1, v2: t2.v2 });
			}
		}
	}
}

// ── Main classify ──

/**
 * Hybrid classification:
 * - Open meshes with closed walk polygon → PIP
 * - Others → barrier flood fill + boundary topology
 */
export function bmsClassify(megaSoup, closedPolylines, segments, trisA, trisB, meshEdgePolys) {
	var n = megaSoup.length;

	// Check which meshes have a closed walk polygon for PIP
	var polyA = meshEdgePolys ? flattenMeshEdgePoly(meshEdgePolys.A) : null;
	var polyB = meshEdgePolys ? flattenMeshEdgePoly(meshEdgePolys.B) : null;

	// ── PIP classification for meshes with walk polygons ──
	var aInside = [], aOutside = [];
	var bInside = [], bOutside = [];
	var aPipDone = false, bPipDone = false;

	if (polyA) {
		aPipDone = true;
		for (var i = 0; i < n; i++) {
			if (megaSoup[i].mesh !== "A") continue;
			var tri = megaSoup[i];
			var cx = (tri.v0.x + tri.v1.x + tri.v2.x) / 3;
			var cy = (tri.v0.y + tri.v1.y + tri.v2.y) / 3;
			var cz = (tri.v0.z + tri.v1.z + tri.v2.z) / 3;
			var pt = projectPoint({ x: cx, y: cy, z: cz }, polyA.axis);
			var inPoly = pointInPolygon(pt[0], pt[1], polyA.polygon);
			var plainTri = { v0: tri.v0, v1: tri.v1, v2: tri.v2 };
			// Walk polygon encapsulates the outside region.
			// Inside the polygon = outside the intersection.
			if (inPoly) aOutside.push(plainTri);
			else aInside.push(plainTri);
		}
	}

	if (polyB) {
		bPipDone = true;
		for (var i2 = 0; i2 < n; i2++) {
			if (megaSoup[i2].mesh !== "B") continue;
			var tri2 = megaSoup[i2];
			var cx2 = (tri2.v0.x + tri2.v1.x + tri2.v2.x) / 3;
			var cy2 = (tri2.v0.y + tri2.v1.y + tri2.v2.y) / 3;
			var cz2 = (tri2.v0.z + tri2.v1.z + tri2.v2.z) / 3;
			var pt2 = projectPoint({ x: cx2, y: cy2, z: cz2 }, polyB.axis);
			var inPoly2 = pointInPolygon(pt2[0], pt2[1], polyB.polygon);
			var plainTri2 = { v0: tri2.v0, v1: tri2.v1, v2: tri2.v2 };
			if (inPoly2) bOutside.push(plainTri2);
			else bInside.push(plainTri2);
		}
	}

	// ── Barrier flood fill for meshes without walk polygons ──
	if (!aPipDone || !bPipDone) {
		// Build barriers
		var barrierEdges = {};
		var steinerVertKeys = {};
		for (var si = 0; si < segments.length; si++) {
			var seg = segments[si];
			if (seg.p0 === seg.p1) continue;
			var k0 = vKey(seg.p0), k1 = vKey(seg.p1);
			if (k0 === k1) continue;
			var ek = edgeKey(k0, k1);
			barrierEdges[ek] = true;
			steinerVertKeys[k0] = true;
			steinerVertKeys[k1] = true;
		}

		// Build edge adjacency
		var edgeToTris = {};
		for (var ei = 0; ei < n; ei++) {
			var eTri = megaSoup[ei];
			var eKs = [vKey(eTri.v0), vKey(eTri.v1), vKey(eTri.v2)];
			for (var ee = 0; ee < 3; ee++) {
				var ene = (ee + 1) % 3;
				var eek = edgeKey(eKs[ee], eKs[ene]);
				if (!edgeToTris[eek]) edgeToTris[eek] = [];
				edgeToTris[eek].push(ei);
			}
		}

		// Build neighbors excluding barriers
		var neighbors = new Array(n);
		for (var ni = 0; ni < n; ni++) neighbors[ni] = [];
		for (var ek3 in edgeToTris) {
			if (barrierEdges[ek3]) continue;
			var triList = edgeToTris[ek3];
			for (var a = 0; a < triList.length; a++) {
				for (var b = a + 1; b < triList.length; b++) {
					neighbors[triList[a]].push(triList[b]);
					neighbors[triList[b]].push(triList[a]);
				}
			}
		}

		// Flood fill for remaining meshes
		var componentId = new Int32Array(n);
		for (var ci = 0; ci < n; ci++) componentId[ci] = -1;

		var components = [];
		var nextCompId = 0;

		// Only flood meshes that need barrier classification
		var needBarrierA = !aPipDone;
		var needBarrierB = !bPipDone;

		for (var seed = 0; seed < n; seed++) {
			if (componentId[seed] >= 0) continue;
			var meshTag = megaSoup[seed].mesh;
			if (meshTag === "A" && !needBarrierA) continue;
			if (meshTag === "B" && !needBarrierB) continue;

			var compId = nextCompId++;
			var triIndices = [];
			var queue = [seed];
			componentId[seed] = compId;
			var head = 0;

			while (head < queue.length) {
				var curr = queue[head++];
				triIndices.push(curr);
				var nbrs = neighbors[curr];
				for (var nbi = 0; nbi < nbrs.length; nbi++) {
					var nb = nbrs[nbi];
					if (componentId[nb] >= 0) continue;
					if (megaSoup[nb].mesh !== meshTag) continue;
					componentId[nb] = compId;
					queue.push(nb);
				}
			}

			components.push({ id: compId, mesh: meshTag, triIndices: triIndices, triCount: triIndices.length });
		}

		// Classify barrier components
		var boundaryVertsA = needBarrierA ? buildBoundaryVertexSet(trisA) : null;
		var boundaryVertsB = needBarrierB ? buildBoundaryVertexSet(trisB) : null;
		var hasBoundaryA = boundaryVertsA && Object.keys(boundaryVertsA).length > 0;
		var hasBoundaryB = boundaryVertsB && Object.keys(boundaryVertsB).length > 0;

		if (needBarrierA) {
			var aComps = [];
			for (var gi = 0; gi < components.length; gi++) {
				if (components[gi].mesh === "A") aComps.push(components[gi]);
			}
			classifyMeshComponents(aComps, megaSoup, hasBoundaryA ? boundaryVertsA : null, aInside, aOutside);
		}

		if (needBarrierB) {
			var bComps = [];
			for (var gi2 = 0; gi2 < components.length; gi2++) {
				if (components[gi2].mesh === "B") bComps.push(components[gi2]);
			}
			classifyMeshComponents(bComps, megaSoup, hasBoundaryB ? boundaryVertsB : null, bInside, bOutside);
		}
	}

	console.log("[BMS] Classification: A: " + aInside.length + " inside, " +
		aOutside.length + " outside" + (aPipDone ? " (PIP)" : " (barrier)") +
		". B: " + bInside.length + " inside, " +
		bOutside.length + " outside" + (bPipDone ? " (PIP)" : " (barrier)") + ".");

	return { aInside: aInside, aOutside: aOutside, bInside: bInside, bOutside: bOutside };
}
