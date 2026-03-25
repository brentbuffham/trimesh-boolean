/**
 * @module bms/heffalumpClassify
 *
 * "The Heffalump is elusive and hard to pin down, but once caught,
 *  it turns out to be exactly what you needed."
 *
 * Barrier-only classification for meshes with defective topology
 * (non-manifold edges, fragmented boundaries, cracks, holes).
 *
 * Instead of asking "does this component touch the boundary?" (which
 * breaks when the boundary is fragmented into 411 pieces), the
 * heffalump asks a simpler question:
 *
 *   "Does this component touch the intersection?"
 *
 *   YES → classify by barrier-normal (which side of the cut?)
 *   NO  → outside (disconnected from the intersection = untouched)
 *
 * That's it. No boundary walk. No mesh edge polygon. No fan walk
 * through non-manifold edges. Just barriers and normals.
 * One bite at a time.
 */

import { vKey, edgeKey, countOpenEdges } from "../util/math.js";

// ── The Heffalump's nose: barrier-normal classification ──
//
// For each barrier edge in a component, check which direction the
// component's triangles point relative to the OTHER mesh's surface
// normal at the cut. Positive dot = facing same way = outside.
// Negative dot = facing opposite = inside the other mesh.

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

			// Vector from edge midpoint INTO the component (toward third vertex)
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

			// Find the OTHER mesh's triangle sharing this barrier edge
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

// ── The Heffalump's trunk: ray casting for closed mesh classification ──
//
// When one mesh is a closed solid, we can definitively test if a point
// is inside it by casting a ray and counting crossings. Odd = inside.
// This works even when barriers don't form closed loops.

function isPointInsideClosedMesh(px, py, pz, tris) {
	// Cast ray along +Z from point, count crossings with triangles
	var crossings = 0;
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var ax = tri.v0.x, ay = tri.v0.y, az = tri.v0.z;
		var bx = tri.v1.x, by = tri.v1.y, bz = tri.v1.z;
		var cx = tri.v2.x, cy = tri.v2.y, cz = tri.v2.z;

		// Check if (px, py) is inside the triangle's 2D projection (XY plane)
		var d1 = (px - bx) * (ay - by) - (ax - bx) * (py - by);
		var d2 = (px - cx) * (by - cy) - (bx - cx) * (py - cy);
		var d3 = (px - ax) * (cy - ay) - (cx - ax) * (py - ay);

		var hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
		var hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);
		if (hasNeg && hasPos) continue; // point outside triangle in XY

		// Compute Z at intersection using barycentric coords
		var det = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
		if (Math.abs(det) < 1e-20) continue;
		var invDet = 1.0 / det;
		var u = ((by - cy) * (px - cx) + (cx - bx) * (py - cy)) * invDet;
		var v = ((cy - ay) * (px - cx) + (ax - cx) * (py - cy)) * invDet;
		var w = 1.0 - u - v;
		var zHit = u * az + v * bz + w * cz;

		if (zHit > pz) crossings++;
	}
	return (crossings % 2) === 1;
}

/**
 * Classify a component by ray casting its centroid through the other mesh.
 * Only works when the other mesh is a closed solid.
 */
function classifyByRayCast(comp, megaSoup, otherMeshTris) {
	// Compute centroid of a representative triangle (use the first one)
	var tri = megaSoup[comp.triIndices[0]];
	var px = (tri.v0.x + tri.v1.x + tri.v2.x) / 3;
	var py = (tri.v0.y + tri.v1.y + tri.v2.y) / 3;
	var pz = (tri.v0.z + tri.v1.z + tri.v2.z) / 3;
	return isPointInsideClosedMesh(px, py, pz, otherMeshTris);
}

// ── The Heffalump's tail: nearest-surface classification for open meshes ──
//
// When the other mesh is OPEN, we can't ray cast (no closed volume).
// Instead, find the nearest triangle on the open surface and check
// which side the point is on. Normal direction = outside.

function isPointInsideOpenSurface(px, py, pz, tris) {
	var bestDist = Infinity;
	var bestDot = 0;

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var tcx = (tri.v0.x + tri.v1.x + tri.v2.x) / 3;
		var tcy = (tri.v0.y + tri.v1.y + tri.v2.y) / 3;
		var tcz = (tri.v0.z + tri.v1.z + tri.v2.z) / 3;
		var dx = px - tcx, dy = py - tcy, dz = pz - tcz;
		var d = dx * dx + dy * dy + dz * dz;

		if (d < bestDist) {
			bestDist = d;
			// Triangle normal (unnormalized is fine — we only care about sign)
			var e1x = tri.v1.x - tri.v0.x, e1y = tri.v1.y - tri.v0.y, e1z = tri.v1.z - tri.v0.z;
			var e2x = tri.v2.x - tri.v0.x, e2y = tri.v2.y - tri.v0.y, e2z = tri.v2.z - tri.v0.z;
			var nx = e1y * e2z - e1z * e2y;
			var ny = e1z * e2x - e1x * e2z;
			var nz = e1x * e2y - e1y * e2x;
			bestDot = dx * nx + dy * ny + dz * nz;
		}
	}
	// Opposite to normal direction = inside (below the surface)
	return bestDot < 0;
}

// ── The Heffalump's ears: does a component hear the intersection? ──

function componentHasBarriers(comp, megaSoup, barrierEdges) {
	for (var ti = 0; ti < comp.triIndices.length; ti++) {
		var tri = megaSoup[comp.triIndices[ti]];
		var ks = [vKey(tri.v0), vKey(tri.v1), vKey(tri.v2)];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			if (barrierEdges[edgeKey(ks[e], ks[ne])]) return true;
		}
	}
	return false;
}

// ── The Heffalump's feet: per-component boundary walk extraction ──

function extractBoundaryWalk(comp, megaSoup, barrierEdges) {
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

	var outgoing = {};
	for (var hi = 0; hi < halfEdges.length; hi++) {
		var fk = halfEdges[hi].from;
		if (!outgoing[fk]) outgoing[fk] = [];
		outgoing[fk].push(hi);
	}

	var used = new Array(halfEdges.length);
	for (var u = 0; u < used.length; u++) used[u] = false;

	var allSegments = [];

	for (var start = 0; start < halfEdges.length; start++) {
		if (used[start]) continue;

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

// ── The Heffalump itself ──

/**
 * Barrier-only classification for meshes with defective topology.
 *
 * @param {Array} megaSoup - Split triangles with mesh tags
 * @param {Array} segments - Intersection segments with pool vertex endpoints
 * @param {Array} trisA - Original mesh A triangles (unused — heffalump doesn't need boundaries)
 * @param {Array} trisB - Original mesh B triangles (unused — heffalump doesn't need boundaries)
 * @returns {{
 *   aInside: Array, aOutside: Array, bInside: Array, bOutside: Array,
 *   componentWalks: Array
 * }}
 */
export function heffalumpClassify(megaSoup, segments, trisA, trisB, opts) {
	var n = megaSoup.length;

	// ── Step 1: Build barrier edges from intersection segments ──
	var barrierEdges = {};
	for (var si = 0; si < segments.length; si++) {
		var seg = segments[si];
		if (seg.p0 === seg.p1) continue;
		var k0 = vKey(seg.p0), k1 = vKey(seg.p1);
		if (k0 === k1) continue;
		barrierEdges[edgeKey(k0, k1)] = true;
	}

	// ── Step 2: Build edge adjacency ──
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

	// ── Step 3: Build neighbors excluding barriers ──
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

	// ── Step 4: Flood fill components ──
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

	// ── Step 5: Detect open/closed per mesh ──
	// Use a practical "closed enough" threshold — meshes with a few
	// defect edges are still functionally closed for ray casting.
	var statsA = countOpenEdges(trisA);
	var statsB = countOpenEdges(trisB);
	var isClosedA = statsA.openEdges < Math.max(10, statsA.total * 0.02);
	var isClosedB = statsB.openEdges < Math.max(10, statsB.total * 0.02);

	// ── Step 6: The Heffalump's question — one bite at a time ──
	//
	// When the other mesh is CLOSED, classify each triangle individually
	// by ray casting. This is the radial neighbourhood taken to its
	// logical conclusion: every triangle gets its own answer.
	// No flood fill, no barriers, no components — just geometry.
	//
	// When the other mesh is OPEN, fall back to barrier flood fill +
	// barrier-normal for components that touch the intersection.

	var aInside = [], aOutside = [];
	var bInside = [], bOutside = [];
	var componentWalks = [];

	for (var gi = 0; gi < components.length; gi++) {
		var comp = components[gi];
		if (comp.triCount === 0) continue;

		var otherIsClosed = comp.mesh === "A" ? isClosedB : isClosedA;
		var otherTris = comp.mesh === "A" ? trisB : trisA;
		var insideArr = comp.mesh === "A" ? aInside : bInside;
		var outsideArr = comp.mesh === "A" ? aOutside : bOutside;

		if (otherIsClosed) {
			// ── The Heffalump's trunk: per-triangle ray casting ──
			// Other mesh is closed → ray cast EACH triangle's centroid
			// through the closed mesh. One bite at a time.
			for (var ri = 0; ri < comp.triIndices.length; ri++) {
				var rt = megaSoup[comp.triIndices[ri]];
				var px = (rt.v0.x + rt.v1.x + rt.v2.x) / 3;
				var py = (rt.v0.y + rt.v1.y + rt.v2.y) / 3;
				var pz = (rt.v0.z + rt.v1.z + rt.v2.z) / 3;
				if (isPointInsideClosedMesh(px, py, pz, otherTris)) {
					insideArr.push({ v0: rt.v0, v1: rt.v1, v2: rt.v2 });
				} else {
					outsideArr.push({ v0: rt.v0, v1: rt.v1, v2: rt.v2 });
				}
			}
			// Component walk — still useful for visualization
			var walkSegs1 = extractBoundaryWalk(comp, megaSoup, barrierEdges);
			componentWalks.push({
				mesh: comp.mesh, side: "mixed", triCount: comp.triCount,
				segments: walkSegs1
			});
		} else {
			// ── The Heffalump's tail: per-triangle nearest-surface test ──
			// Other mesh is open → find nearest surface triangle for each
			// of our triangles and check which side we're on.
			// One bite at a time, same as the closed-mesh path.
			for (var oi = 0; oi < comp.triIndices.length; oi++) {
				var ot = megaSoup[comp.triIndices[oi]];
				var opx = (ot.v0.x + ot.v1.x + ot.v2.x) / 3;
				var opy = (ot.v0.y + ot.v1.y + ot.v2.y) / 3;
				var opz = (ot.v0.z + ot.v1.z + ot.v2.z) / 3;
				if (isPointInsideOpenSurface(opx, opy, opz, otherTris)) {
					insideArr.push({ v0: ot.v0, v1: ot.v1, v2: ot.v2 });
				} else {
					outsideArr.push({ v0: ot.v0, v1: ot.v1, v2: ot.v2 });
				}
			}

			var walkSegs2 = extractBoundaryWalk(comp, megaSoup, barrierEdges);
			componentWalks.push({
				mesh: comp.mesh, side: "mixed",
				triCount: comp.triCount, segments: walkSegs2
			});
		}
	}

	console.log("[heffalump] Classification: A: " + aInside.length + " inside, " +
		aOutside.length + " outside. B: " + bInside.length + " inside, " +
		bOutside.length + " outside. Components: " + components.length + ".");

	return {
		aInside: aInside, aOutside: aOutside, bInside: bInside, bOutside: bOutside,
		componentWalks: componentWalks
	};
}

// ── The Heffalump's eraser: reclassify misplaced triangles ──

/**
 * Move triangles between inside/outside groups by index.
 * Sometimes the heffalump gets a few wrong — this lets you fix them.
 *
 * @param {Object} groups - { aInside, aOutside, bInside, bOutside }
 * @param {string} mesh - "A" or "B"
 * @param {string} fromSide - "inside" or "outside"
 * @param {Array<number>} triIndices - Indices within the source array to move
 * @returns {Object} Updated groups (mutated in place)
 */
export function reclassifyTriangles(groups, mesh, fromSide, triIndices) {
	var srcKey = mesh.toLowerCase() + (fromSide === "inside" ? "Inside" : "Outside");
	var dstKey = mesh.toLowerCase() + (fromSide === "inside" ? "Outside" : "Inside");
	var src = groups[srcKey];
	var dst = groups[dstKey];
	if (!src || !dst) return groups;

	// Sort descending so splicing doesn't shift later indices
	var sorted = triIndices.slice().sort(function(a, b) { return b - a; });
	for (var i = 0; i < sorted.length; i++) {
		var idx = sorted[i];
		if (idx >= 0 && idx < src.length) {
			dst.push(src[idx]);
			src.splice(idx, 1);
		}
	}
	return groups;
}

/**
 * Reclassify a single triangle identified by its centroid coordinates.
 * Useful for click-to-toggle in a 3D viewer.
 *
 * @param {Object} groups - { aInside, aOutside, bInside, bOutside }
 * @param {number} cx - Centroid X
 * @param {number} cy - Centroid Y
 * @param {number} cz - Centroid Z
 * @param {number} [tolerance=0.01] - Match tolerance
 * @returns {{ moved: boolean, mesh: string, from: string, to: string }}
 */
export function reclassifyAtPoint(groups, cx, cy, cz, tolerance) {
	var tol2 = (tolerance || 0.01) * (tolerance || 0.01);
	var keys = [
		{ src: "aInside", dst: "aOutside", mesh: "A", from: "inside", to: "outside" },
		{ src: "aOutside", dst: "aInside", mesh: "A", from: "outside", to: "inside" },
		{ src: "bInside", dst: "bOutside", mesh: "B", from: "inside", to: "outside" },
		{ src: "bOutside", dst: "bInside", mesh: "B", from: "outside", to: "inside" }
	];
	for (var ki = 0; ki < keys.length; ki++) {
		var k = keys[ki];
		var arr = groups[k.src];
		if (!arr) continue;
		for (var ti = 0; ti < arr.length; ti++) {
			var tri = arr[ti];
			var tx = (tri.v0.x + tri.v1.x + tri.v2.x) / 3;
			var ty = (tri.v0.y + tri.v1.y + tri.v2.y) / 3;
			var tz = (tri.v0.z + tri.v1.z + tri.v2.z) / 3;
			var dx = tx - cx, dy = ty - cy, dz = tz - cz;
			if (dx * dx + dy * dy + dz * dz < tol2) {
				groups[k.dst].push(arr.splice(ti, 1)[0]);
				return { moved: true, mesh: k.mesh, from: k.from, to: k.to };
			}
		}
	}
	return { moved: false };
}

/**
 * Reclassify a connected region — flood fill from a seed triangle
 * to move all connected same-side triangles together.
 *
 * @param {Object} groups - { aInside, aOutside, bInside, bOutside }
 * @param {string} mesh - "A" or "B"
 * @param {string} fromSide - "inside" or "outside"
 * @param {number} seedIdx - Index of the seed triangle in the source array
 * @returns {number} Count of triangles moved
 */
export function reclassifyRegion(groups, mesh, fromSide, seedIdx) {
	var srcKey = mesh.toLowerCase() + (fromSide === "inside" ? "Inside" : "Outside");
	var dstKey = mesh.toLowerCase() + (fromSide === "inside" ? "Outside" : "Inside");
	var src = groups[srcKey];
	var dst = groups[dstKey];
	if (!src || !dst || seedIdx < 0 || seedIdx >= src.length) return 0;

	// Build edge adjacency within the source array
	var PREC = 6;
	function vk(v) { return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC); }
	function ek(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

	var edgeToIdx = {};
	for (var i = 0; i < src.length; i++) {
		var tri = src[i];
		var ks = [vk(tri.v0), vk(tri.v1), vk(tri.v2)];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var key = ek(ks[e], ks[ne]);
			if (!edgeToIdx[key]) edgeToIdx[key] = [];
			edgeToIdx[key].push(i);
		}
	}

	// Flood fill from seed
	var visited = {};
	visited[seedIdx] = true;
	var queue = [seedIdx];
	var head = 0;
	while (head < queue.length) {
		var curr = queue[head++];
		var ct = src[curr];
		var cks = [vk(ct.v0), vk(ct.v1), vk(ct.v2)];
		for (var ce = 0; ce < 3; ce++) {
			var cne = (ce + 1) % 3;
			var cek = ek(cks[ce], cks[cne]);
			var nbrs = edgeToIdx[cek];
			if (!nbrs) continue;
			for (var ni = 0; ni < nbrs.length; ni++) {
				if (!visited[nbrs[ni]]) {
					visited[nbrs[ni]] = true;
					queue.push(nbrs[ni]);
				}
			}
		}
	}

	// Move all visited triangles (descending order for safe splicing)
	var toMove = Object.keys(visited).map(Number).sort(function(a, b) { return b - a; });
	for (var mi = 0; mi < toMove.length; mi++) {
		dst.push(src.splice(toMove[mi], 1)[0]);
	}
	return toMove.length;
}

// ── Decision tree: should we send the heffalump? ──

/**
 * Detect whether a mesh pair needs the heffalump classifier.
 * Non-manifold edges = defective boundary = heffalump territory.
 *
 * @param {Array} trisA
 * @param {Array} trisB
 * @returns {boolean}
 */
export function shouldUseHeffalump(trisA, trisB) {
	var statsA = countOpenEdges(trisA);
	var statsB = countOpenEdges(trisB);
	return statsA.overShared > 0 || statsB.overShared > 0;
}
