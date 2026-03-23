/**
 * @module bms/bmsClassify
 *
 * Hybrid classification (v0.5.0):
 * - Open meshes: boundary topology (touches mesh boundary = outside)
 * - Closed meshes: barrier-normal dot product (other mesh's normal at barrier)
 * Also extracts per-component boundary walks for visualization.
 */

import { vKey, edgeKey } from "../util/math.js";

// ── Mesh boundary detection ──

/**
 * Build a set of vertex keys that lie on the mesh's open boundary.
 */
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

// ── Boundary topology classification (open meshes) ──

function classifyByBoundaryTopology(comp, megaSoup, boundaryVerts) {
	for (var ti = 0; ti < comp.triIndices.length; ti++) {
		var tri = megaSoup[comp.triIndices[ti]];
		var ks = [vKey(tri.v0), vKey(tri.v1), vKey(tri.v2)];
		for (var vi = 0; vi < 3; vi++) {
			if (boundaryVerts[ks[vi]]) return false;
		}
	}
	return true;
}

// ── Barrier-normal classification (closed meshes) ──

function classifyByBarrierNormal(comp, megaSoup, barrierEdges, edgeToTris) {
	var compMesh = comp.mesh;
	var dotSum = 0;
	var sampleCount = 0;
	var seenEdges = {};

	for (var ti = 0; ti < comp.triIndices.length; ti++) {
		var triIdx = comp.triIndices[ti];
		var tri = megaSoup[triIdx];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(ks[e], ks[ne]);

			if (!barrierEdges[ek]) continue;
			if (seenEdges[ek]) continue;
			seenEdges[ek] = true;

			var otherIdx = 3 - e - ne;
			var thirdVert = vs[otherIdx];
			var edgeV0 = vs[e];
			var edgeV1 = vs[ne];

			var midX = (edgeV0.x + edgeV1.x) * 0.5;
			var midY = (edgeV0.y + edgeV1.y) * 0.5;
			var midZ = (edgeV0.z + edgeV1.z) * 0.5;
			var intoX = thirdVert.x - midX;
			var intoY = thirdVert.y - midY;
			var intoZ = thirdVert.z - midZ;

			var intoLen = Math.sqrt(intoX * intoX + intoY * intoY + intoZ * intoZ);
			if (intoLen < 1e-12) continue;
			intoX /= intoLen; intoY /= intoLen; intoZ /= intoLen;

			var sharedTris = edgeToTris[ek];
			if (!sharedTris) continue;

			var otherNx = 0, otherNy = 0, otherNz = 0;
			var foundOther = false;

			for (var si = 0; si < sharedTris.length; si++) {
				var sTri = megaSoup[sharedTris[si]];
				if (sTri.mesh === compMesh) continue;
				var e1x = sTri.v1.x - sTri.v0.x, e1y = sTri.v1.y - sTri.v0.y, e1z = sTri.v1.z - sTri.v0.z;
				var e2x = sTri.v2.x - sTri.v0.x, e2y = sTri.v2.y - sTri.v0.y, e2z = sTri.v2.z - sTri.v0.z;
				otherNx = e1y * e2z - e1z * e2y;
				otherNy = e1z * e2x - e1x * e2z;
				otherNz = e1x * e2y - e1y * e2x;
				foundOther = true;
				break;
			}
			if (!foundOther) continue;

			var otherLen = Math.sqrt(otherNx * otherNx + otherNy * otherNy + otherNz * otherNz);
			if (otherLen < 1e-12) continue;
			otherNx /= otherLen; otherNy /= otherLen; otherNz /= otherLen;

			dotSum += intoX * otherNx + intoY * otherNy + intoZ * otherNz;
			sampleCount++;
		}
	}

	if (sampleCount === 0) return false;
	return (dotSum / sampleCount) < 0;
}

// ── Per-component boundary walk extraction ──

/**
 * Extract boundary walk segments for a component.
 * Returns segments grouped by type: "intersection" (barrier) or "walk" (mesh boundary).
 *
 * @returns {Array<{ verts: Array<{x,y,z}>, type: string }>}
 */
function extractBoundaryWalk(comp, megaSoup, barrierEdges) {
	// Collect directed boundary half-edges
	var directedCount = {};
	var directedVerts = {};

	for (var i = 0; i < comp.triIndices.length; i++) {
		var tri = megaSoup[comp.triIndices[i]];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var dk = ks[e] + "|" + ks[ne];
			if (!directedCount[dk]) {
				directedCount[dk] = 0;
				directedVerts[dk] = { fromVert: vs[e], toVert: vs[ne] };
			}
			directedCount[dk]++;
		}
	}

	// Collect boundary half-edges with type
	var halfEdges = [];
	for (var dk2 in directedCount) {
		var parts = dk2.split("|");
		var fromK = parts[0];
		var toK = parts[1];
		var reverseK = toK + "|" + fromK;
		var ek = edgeKey(fromK, toK);

		var isBarrier = !!barrierEdges[ek];
		var reverseExists = !!directedCount[reverseK];

		if (!reverseExists || isBarrier) {
			var verts = directedVerts[dk2];
			halfEdges.push({
				from: fromK, to: toK,
				fromVert: verts.fromVert, toVert: verts.toVert,
				type: isBarrier ? "intersection" : "walk"
			});
		}
	}

	if (halfEdges.length === 0) return [];

	// Build adjacency: fromVertex -> [halfEdge indices]
	var outgoing = {};
	for (var hi = 0; hi < halfEdges.length; hi++) {
		var fk = halfEdges[hi].from;
		if (!outgoing[fk]) outgoing[fk] = [];
		outgoing[fk].push(hi);
	}

	// Chain into loops, grouping consecutive same-type edges into segments
	var used = new Array(halfEdges.length);
	for (var u = 0; u < used.length; u++) used[u] = false;

	var allSegments = [];

	for (var start = 0; start < halfEdges.length; start++) {
		if (used[start]) continue;

		// Walk this loop
		var loopEdges = [];
		var currIdx = start;
		used[currIdx] = true;
		loopEdges.push(currIdx);

		var currVert = halfEdges[currIdx].to;
		var maxIter = halfEdges.length + 1;
		var iter = 0;

		while (currVert !== halfEdges[start].from && iter < maxIter) {
			iter++;
			var candidates = outgoing[currVert];
			if (!candidates || candidates.length === 0) break;

			var bestIdx = -1;
			for (var ci = 0; ci < candidates.length; ci++) {
				if (!used[candidates[ci]]) { bestIdx = candidates[ci]; break; }
			}
			if (bestIdx === -1) break;

			used[bestIdx] = true;
			loopEdges.push(bestIdx);
			currVert = halfEdges[bestIdx].to;
		}

		if (loopEdges.length < 2) continue;

		// Group consecutive same-type edges into segments
		var segType = halfEdges[loopEdges[0]].type;
		var segVerts = [halfEdges[loopEdges[0]].fromVert, halfEdges[loopEdges[0]].toVert];

		for (var li = 1; li < loopEdges.length; li++) {
			var he = halfEdges[loopEdges[li]];
			if (he.type === segType) {
				segVerts.push(he.toVert);
			} else {
				allSegments.push({ verts: segVerts, type: segType });
				segType = he.type;
				segVerts = [he.fromVert, he.toVert];
			}
		}
		allSegments.push({ verts: segVerts, type: segType });
	}

	return allSegments;
}

// ── Main classify ──

/**
 * Hybrid classification with per-component boundary walk extraction.
 *
 * @returns {{
 *   aInside: Array, aOutside: Array, bInside: Array, bOutside: Array,
 *   componentWalks: Array<{ mesh: string, side: string, triCount: number,
 *     segments: Array<{ verts: Array, type: string }> }>
 * }}
 */
export function bmsClassify(megaSoup, closedPolylines, segments, trisA, trisB, meshEdgePolys) {
	var n = megaSoup.length;

	// ── Build barriers ──
	var barrierEdges = {};
	for (var si = 0; si < segments.length; si++) {
		var seg = segments[si];
		if (seg.p0 === seg.p1) continue;
		var k0 = vKey(seg.p0), k1 = vKey(seg.p1);
		if (k0 === k1) continue;
		barrierEdges[edgeKey(k0, k1)] = true;
	}

	// ── Build edge adjacency ──
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

	// ── Build neighbors excluding barriers ──
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

	// ── Barrier flood fill ──
	var componentId = new Int32Array(n);
	for (var ci = 0; ci < n; ci++) componentId[ci] = -1;

	var components = [];
	var nextCompId = 0;

	for (var seed = 0; seed < n; seed++) {
		if (componentId[seed] >= 0) continue;
		var meshTag = megaSoup[seed].mesh;

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

	// ── Detect open/closed per mesh ──
	var boundaryVertsA = buildBoundaryVertexSet(trisA);
	var boundaryVertsB = buildBoundaryVertexSet(trisB);
	var isOpenA = Object.keys(boundaryVertsA).length > 0;
	var isOpenB = Object.keys(boundaryVertsB).length > 0;

	// ── Classify each component + extract boundary walks ──
	var aInside = [], aOutside = [];
	var bInside = [], bOutside = [];
	var componentWalks = [];

	for (var gi = 0; gi < components.length; gi++) {
		var comp = components[gi];
		var isInside;

		if (comp.triCount === 0) continue;

		var meshComps = 0;
		for (var mc = 0; mc < components.length; mc++) {
			if (components[mc].mesh === comp.mesh) meshComps++;
		}

		if (meshComps === 1) {
			isInside = false;
		} else {
			var isOpen = comp.mesh === "A" ? isOpenA : isOpenB;
			var bverts = comp.mesh === "A" ? boundaryVertsA : boundaryVertsB;

			if (isOpen) {
				isInside = classifyByBoundaryTopology(comp, megaSoup, bverts);
			} else {
				isInside = classifyByBarrierNormal(comp, megaSoup, barrierEdges, edgeToTris);
			}
		}

		var side = isInside ? "inside" : "outside";

		var insideArr = comp.mesh === "A" ? aInside : bInside;
		var outsideArr = comp.mesh === "A" ? aOutside : bOutside;
		var target = isInside ? insideArr : outsideArr;

		for (var oi = 0; oi < comp.triIndices.length; oi++) {
			var ot = megaSoup[comp.triIndices[oi]];
			target.push({ v0: ot.v0, v1: ot.v1, v2: ot.v2 });
		}

		// Extract boundary walk for this component
		var walkSegments = extractBoundaryWalk(comp, megaSoup, barrierEdges);
		componentWalks.push({
			mesh: comp.mesh,
			side: side,
			triCount: comp.triCount,
			segments: walkSegments
		});
	}

	console.log("[BMS] Classification (hybrid): A: " + aInside.length + " inside, " +
		aOutside.length + " outside" + (isOpenA ? " (topo)" : " (dot)") +
		". B: " + bInside.length + " inside, " +
		bOutside.length + " outside" + (isOpenB ? " (topo)" : " (dot)") +
		". Components: " + components.length + ".");

	return {
		aInside: aInside, aOutside: aOutside, bInside: bInside, bOutside: bOutside,
		componentWalks: componentWalks
	};
}
