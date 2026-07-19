/**
 * Self-arrangement / exact fold resolver tests.
 *
 * STEP 1 (go/no-go): the coplanar-overlap primitive must emit overlap
 * segments through the SHARED pool such that bmsSplit produces a
 * CONFORMING cut — the sub-triangles of A and B along the overlap
 * boundary share the same PoolVertex objects (identity), no T-junctions,
 * no new open edges.
 */

import { describe, it, expect } from "vitest";
import { coplanarOverlap, emitCoplanarSegments } from "../src/intersect/coplanarOverlap.js";
import { createVertexPool } from "../src/bms/bmsVertexPool.js";
import { bmsSplit } from "../src/bms/bmsSplit.js";
import { bmsIntersect } from "../src/bms/bmsIntersect.js";
import { bmsSelfIntersect, bmsSelfArrange, bmsSelfResolve, buildEdgeSteinerMap, conditionArrangement } from "../src/bms/bmsSelfArrange.js";
import { bmsSelfResolveIndexed } from "../src/bms/bmsSelfResolveIndexed.js";
import { windingNumber, windingNumberIndexed, extractByWindingPatches } from "../src/classify/windingNumber.js";
import { extractByCellComplex } from "../src/classify/cellComplex.js";
import { orientSolid } from "../src/normals/orientSolid.js";
import { vKey, edgeKey, triangleArea3D, countOpenEdges } from "../src/util/math.js";
import { createCube } from "./fixtures/meshes.js";

// ── helpers ──────────────────────────────────────────────────────────

function soupArea(tris) {
	var a = 0;
	for (var i = 0; i < tris.length; i++) a += triangleArea3D(tris[i]);
	return a;
}

/** Edge usage map (vKey-based) → { edgeKey: count } */
function edgeUse(tris) {
	var map = {};
	for (var i = 0; i < tris.length; i++) {
		var t = tris[i];
		var ks = [vKey(t.v0), vKey(t.v1), vKey(t.v2)];
		for (var e = 0; e < 3; e++) {
			var ek = edgeKey(ks[e], ks[(e + 1) % 3]);
			map[ek] = (map[ek] || 0) + 1;
		}
	}
	return map;
}

/** Distance from point p to segment [a, b] in 3D. */
function distToSegment(p, a, b) {
	var abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
	var apx = p.x - a.x, apy = p.y - a.y, apz = p.z - a.z;
	var len2 = abx * abx + aby * aby + abz * abz;
	var t = len2 > 0 ? (apx * abx + apy * aby + apz * abz) / len2 : 0;
	if (t < 0) t = 0;
	if (t > 1) t = 1;
	var qx = a.x + t * abx - p.x, qy = a.y + t * aby - p.y, qz = a.z + t * abz - p.z;
	return Math.sqrt(qx * qx + qy * qy + qz * qz);
}

/** Is edge (p, q) collinear with (lying on) one of the parent triangle's edges? */
function edgeOnParentBoundary(p, q, tri, tol) {
	var edges = [[tri.v0, tri.v1], [tri.v1, tri.v2], [tri.v2, tri.v0]];
	for (var e = 0; e < 3; e++) {
		if (distToSegment(p, edges[e][0], edges[e][1]) < tol &&
			distToSegment(q, edges[e][0], edges[e][1]) < tol) return true;
	}
	return false;
}

/** Does the sub-soup contain edge (pv0, pv1) by OBJECT IDENTITY? */
function hasEdgeByIdentity(tris, pv0, pv1) {
	for (var i = 0; i < tris.length; i++) {
		var vs = [tris[i].v0, tris[i].v1, tris[i].v2];
		for (var e = 0; e < 3; e++) {
			var a = vs[e], b = vs[(e + 1) % 3];
			if ((a === pv0 && b === pv1) || (a === pv1 && b === pv0)) return true;
		}
	}
	return false;
}

/** Does the sub-soup contain edge (p0, p1) by vKey? */
function hasEdgeByKey(tris, p0, p1) {
	var want = edgeKey(vKey(p0), vKey(p1));
	var use = edgeUse(tris);
	return !!use[want];
}

/** Run the coplanar primitive through bmsSplit for one A/B pair. */
function splitCoplanarPair(triA, triB) {
	var cop = coplanarOverlap(triA, triB);
	expect(cop).not.toBeNull();

	var pool = createVertexPool(1e-6);
	var segments = emitCoplanarSegments(cop.polygon, pool,
		{ mesh: "A", triIdx: 0 }, { mesh: "B", triIdx: 0 });

	var crossedSetA = { 0: segments.slice() };
	var crossedSetB = { 0: segments.slice() };

	var mega = bmsSplit([triA], [triB], {
		segments: segments,
		crossedSetA: crossedSetA,
		crossedSetB: crossedSetB,
		pool: pool
	});

	var subA = mega.filter(function (t) { return t.mesh === "A"; });
	var subB = mega.filter(function (t) { return t.mesh === "B"; });
	return { cop: cop, pool: pool, segments: segments, subA: subA, subB: subB };
}

/** Conformance assertions shared by the Step-1 tests. */
function assertConforming(r, triA, triB, opts) {
	var byIdentity = opts && opts.identity;

	// (a) Area conservation — the split must tile each parent exactly.
	expect(Math.abs(soupArea(r.subA) - triangleArea3D(triA))).toBeLessThan(1e-6);
	expect(Math.abs(soupArea(r.subB) - triangleArea3D(triB))).toBeLessThan(1e-6);

	// (b) Every overlap segment appears as a sub-triangle edge on BOTH sides.
	for (var s = 0; s < r.segments.length; s++) {
		var seg = r.segments[s];
		if (byIdentity) {
			expect(hasEdgeByIdentity(r.subA, seg.p0, seg.p1),
				"A-side missing segment edge (identity) " + s).toBe(true);
			expect(hasEdgeByIdentity(r.subB, seg.p0, seg.p1),
				"B-side missing segment edge (identity) " + s).toBe(true);
		} else {
			expect(hasEdgeByKey(r.subA, seg.p0, seg.p1),
				"A-side missing segment edge " + s).toBe(true);
			expect(hasEdgeByKey(r.subB, seg.p0, seg.p1),
				"B-side missing segment edge " + s).toBe(true);
		}
	}

	// (c) No NEW open edges: every once-used edge of each side lies on the
	// parent triangle's own boundary (i.e. the interior cut is closed).
	var useA = edgeUse(r.subA);
	var coordOf = {};
	for (var i = 0; i < r.subA.length; i++) {
		coordOf[vKey(r.subA[i].v0)] = r.subA[i].v0;
		coordOf[vKey(r.subA[i].v1)] = r.subA[i].v1;
		coordOf[vKey(r.subA[i].v2)] = r.subA[i].v2;
	}
	for (var ekA in useA) {
		if (useA[ekA] !== 1) continue;
		var parts = ekA.split("|");
		expect(edgeOnParentBoundary(coordOf[parts[0]], coordOf[parts[1]], triA, 1e-7),
			"A-side interior open edge " + ekA).toBe(true);
	}
	var useB = edgeUse(r.subB);
	var coordOfB = {};
	for (var j = 0; j < r.subB.length; j++) {
		coordOfB[vKey(r.subB[j].v0)] = r.subB[j].v0;
		coordOfB[vKey(r.subB[j].v1)] = r.subB[j].v1;
		coordOfB[vKey(r.subB[j].v2)] = r.subB[j].v2;
	}
	for (var ekB in useB) {
		if (useB[ekB] !== 1) continue;
		var partsB = ekB.split("|");
		expect(edgeOnParentBoundary(coordOfB[partsB[0]], coordOfB[partsB[1]], triB, 1e-7),
			"B-side interior open edge " + ekB).toBe(true);
	}
}

// ── STEP 1: go/no-go — coplanar overlap primitive ────────────────────

describe("Step 1 — coplanar overlap primitive (go/no-go)", function () {

	// Partial overlap, opposite winding — the classic zero-thickness flap.
	// A = (0,0),(4,0),(0,4)  normal +Z
	// B = (1,-1),(3,3),(3,-1) normal -Z (opposite winding)
	// Overlap = quad (1.5,0) (3,0) (3,1) (7/3,5/3), area 19/12.
	var triA = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 4, y: 0, z: 0 }, v2: { x: 0, y: 4, z: 0 } };
	var triB = { v0: { x: 1, y: -1, z: 0 }, v1: { x: 3, y: 3, z: 0 }, v2: { x: 3, y: -1, z: 0 } };

	it("computes the overlap polygon with the correct area", function () {
		var cop = coplanarOverlap(triA, triB);
		expect(cop).not.toBeNull();
		expect(cop.polygon.length).toBe(4);
		expect(Math.abs(cop.area - 19 / 12)).toBeLessThan(1e-10);
		// Every polygon vertex on z = 0 plane
		for (var i = 0; i < cop.polygon.length; i++) {
			expect(Math.abs(cop.polygon[i].z)).toBeLessThan(1e-12);
		}
	});

	it("emits pool segments and bmsSplit produces a CONFORMING cut (identity)", function () {
		var r = splitCoplanarPair(triA, triB);
		expect(r.segments.length).toBe(4);
		// Generic position: no overlap corner coincides with a parent vertex,
		// so every constraint endpoint stays a shared PoolVertex — assert by
		// OBJECT IDENTITY (this is the anti-T-junction guarantee).
		assertConforming(r, triA, triB, { identity: true });
	});

	it("rejects coplanar neighbours that only share an edge (zero-area overlap)", function () {
		// Same plane, side by side across the shared edge — legitimate mesh
		// adjacency, NOT a fold.
		var triN = { v0: { x: 4, y: 0, z: 0 }, v1: { x: 4, y: 4, z: 0 }, v2: { x: 0, y: 4, z: 0 } };
		expect(coplanarOverlap(triA, triN)).toBeNull();
	});

	it("rejects non-coplanar near-parallel pairs (orient3d gate)", function () {
		var triP = {
			v0: { x: 1, y: -1, z: 0.01 },
			v1: { x: 3, y: 3, z: 0.01 },
			v2: { x: 3, y: -1, z: 0.01 }
		};
		expect(coplanarOverlap(triA, triP)).toBeNull();
	});

	it("containment fold: B fully inside A (constraint LOOP → donut cut) conforms", function () {
		// B strictly inside A, opposite winding — the overlap boundary is a
		// closed loop; A must CDT into an annulus + the patch.
		var triC = { v0: { x: 0.5, y: 0.5, z: 0 }, v1: { x: 0.5, y: 2.5, z: 0 }, v2: { x: 2.5, y: 0.5, z: 0 } };
		var cop = coplanarOverlap(triA, triC);
		expect(cop).not.toBeNull();
		expect(Math.abs(cop.area - 2.0)).toBeLessThan(1e-10); // B's own area

		var r = splitCoplanarPair(triA, triC);
		expect(r.segments.length).toBe(3);
		// Endpoints coincide with B's own corners → B side maps them to its
		// original vertex objects, so conformance is by exact coordinates.
		assertConforming(r, triA, triC, { identity: false });

		// The A-side must contain sub-triangles both inside and outside the
		// loop (donut-aware cut), tiling A's full area (checked above).
		expect(r.subA.length).toBeGreaterThanOrEqual(4);
	});

	it("full coincidence: duplicate triangle with opposite winding conforms", function () {
		var triD = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 0, y: 4, z: 0 }, v2: { x: 4, y: 0, z: 0 } };
		var cop = coplanarOverlap(triA, triD);
		expect(cop).not.toBeNull();
		expect(Math.abs(cop.area - 8)).toBeLessThan(1e-10);

		var r = splitCoplanarPair(triA, triD);
		// Overlap boundary == the triangle's own edges: the "cut" is the
		// identity tessellation; both sides stay single triangles or an
		// equivalent exact tiling.
		assertConforming(r, triA, triD, { identity: false });
	});
});

// ── shared fixtures for stages 2-4 ───────────────────────────────────

/** Euler characteristic of a welded soup (vKey vertices). */
function eulerCharacteristic(tris) {
	var vSet = {}, eSet = {};
	for (var i = 0; i < tris.length; i++) {
		var t = tris[i];
		var ks = [vKey(t.v0), vKey(t.v1), vKey(t.v2)];
		vSet[ks[0]] = 1; vSet[ks[1]] = 1; vSet[ks[2]] = 1;
		for (var e = 0; e < 3; e++) eSet[edgeKey(ks[e], ks[(e + 1) % 3])] = 1;
	}
	return Object.keys(vSet).length - Object.keys(eSet).length + tris.length;
}

/**
 * The pleated prism — a closed, manifold, IMMERSED surface with exactly
 * the target pathology: the top of the profile pleats back on itself so
 * the z=1 plane carries a triple coincident coplanar layer over
 * x in [0.4, 0.6], and both end caps contain edge-adjacent coplanar FOLD
 * triangles (the fan doubles back). Combinatorially a sphere; embedded,
 * its solid region is the box [0,1] x [0,2] x [0,1] with volume 2.
 *
 * Profile (x, z), CCW, extruded along y in [0, 2]:
 *   p0(0,0) p1(1,0) p2(1,1) p3(0.4,1) p4(0.6,1) p5(0,1)
 */
function buildPleatPrism() {
	var prof = [
		{ x: 0.0, z: 0.0 }, { x: 1.0, z: 0.0 }, { x: 1.0, z: 1.0 },
		{ x: 0.4, z: 1.0 }, { x: 0.6, z: 1.0 }, { x: 0.0, z: 1.0 }
	];
	var Y0 = 0, Y1 = 2;
	var soup = [];

	function P(p, y) { return { x: p.x, y: y, z: p.z }; }

	// Side quads — outward normal for a CCW profile: (dz, -dx) in xz.
	for (var e = 0; e < prof.length; e++) {
		var a = prof[e], b = prof[(e + 1) % prof.length];
		var A = P(a, Y0), B = P(b, Y0), A2 = P(a, Y1), B2 = P(b, Y1);
		soup.push({ v0: A, v1: B2, v2: B });
		soup.push({ v0: A, v1: A2, v2: B2 });
	}

	// Caps: fan from p0 in profile order. The (p0,p3,p4) fan triangle has
	// reversed 2D orientation — that IS the cap fold, kept deliberately.
	for (var k = 1; k <= 4; k++) {
		var pk = prof[k], pk1 = prof[k + 1];
		// y = 0 cap, outward -y for CCW pieces
		soup.push({ v0: P(prof[0], Y0), v1: P(pk, Y0), v2: P(pk1, Y0) });
		// y = 2 cap, mirrored
		soup.push({ v0: P(prof[0], Y1), v1: P(pk1, Y1), v2: P(pk, Y1) });
	}

	return soup;
}

/** Quantized soup → indexed typed arrays ({positions, index}). */
function soupToIndexedArrays(soup, tol) {
	tol = tol || 1e-9;
	var inv = 1 / tol;
	var map = new Map();
	var pts = [];
	var idx = new Uint32Array(soup.length * 3);
	var w = 0;
	for (var i = 0; i < soup.length; i++) {
		var vs = [soup[i].v0, soup[i].v1, soup[i].v2];
		for (var k = 0; k < 3; k++) {
			var v = vs[k];
			var key = Math.round(v.x * inv) + "," + Math.round(v.y * inv) + "," + Math.round(v.z * inv);
			var id = map.get(key);
			if (id === undefined) { id = pts.length; pts.push(v); map.set(key, id); }
			idx[w++] = id;
		}
	}
	var positions = new Float64Array(pts.length * 3);
	for (var p = 0; p < pts.length; p++) {
		positions[p * 3] = pts[p].x;
		positions[p * 3 + 1] = pts[p].y;
		positions[p * 3 + 2] = pts[p].z;
	}
	return { positions: positions, index: idx };
}

function indexedToSoupArrays(mesh) {
	var soup = [];
	for (var i = 0; i < mesh.index.length; i += 3) {
		var a = mesh.index[i] * 3, b = mesh.index[i + 1] * 3, c = mesh.index[i + 2] * 3;
		soup.push({
			v0: { x: mesh.positions[a], y: mesh.positions[a + 1], z: mesh.positions[a + 2] },
			v1: { x: mesh.positions[b], y: mesh.positions[b + 1], z: mesh.positions[b + 2] },
			v2: { x: mesh.positions[c], y: mesh.positions[c + 1], z: mesh.positions[c + 2] }
		});
	}
	return soup;
}

// ── STAGE 2: bmsSelfIntersect ────────────────────────────────────────

describe("Stage 2 — bmsSelfIntersect", function () {

	it("reproduces the A-vs-B arrangement when fed two disjoint meshes as one soup", function () {
		var cubeA = createCube(0, 0, 0, 2);
		var cubeB = createCube(0.9, 0.7, 0.6, 2);

		var ab = bmsIntersect(cubeA, cubeB);
		var self = bmsSelfIntersect(cubeA.concat(cubeB));

		expect(self.segments.length).toBe(ab.segments.length);
		expect(self.stats.coplanarPairs).toBe(0);
		expect(self.stats.refinementSplits).toBe(0);

		// Split both ways — total area must be conserved and identical.
		var abMega = bmsSplit(cubeA, cubeB, ab);
		var selfMega = bmsSplit(cubeA.concat(cubeB), [], {
			segments: self.segments, crossedSetA: self.crossedSet, crossedSetB: {}, pool: self.pool
		});
		var abArea = 0, selfArea = 0;
		for (var i = 0; i < abMega.length; i++) abArea += triangleArea3D(abMega[i]);
		for (var j = 0; j < selfMega.length; j++) selfArea += triangleArea3D(selfMega[j]);
		expect(Math.abs(abArea - selfArea)).toBeLessThan(1e-8);
	});

	it("excludes topological neighbours from the crossing path", function () {
		// A clean closed cube self-intersects nowhere: every candidate pair
		// shares a vertex or is parallel-disjoint.
		var cube = createCube(0, 0, 0, 2);
		var self = bmsSelfIntersect(cube);
		expect(self.segments.length).toBe(0);
	});

	it("conforming edge splits: a segment ENDING on a shared edge splits BOTH sides", function () {
		// T1 + T2 tile a square in z=0 sharing the diagonal edge (4,0,0)-(0,4,0).
		// T3 (vertical) crosses only T1; the crossing segment ENDS at (2,2,0),
		// which sits on the shared diagonal. Without edge-Steiner propagation T2
		// (uncrossed) keeps the diagonal whole → T-junction at (2,2,0). The
		// mechanism must make T2 split at the SAME point.
		var T1 = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 4, y: 0, z: 0 }, v2: { x: 0, y: 4, z: 0 } };
		var T2 = { v0: { x: 4, y: 0, z: 0 }, v1: { x: 4, y: 4, z: 0 }, v2: { x: 0, y: 4, z: 0 } };
		var T3 = { v0: { x: 1, y: 1, z: -1 }, v1: { x: 1, y: 1, z: 1 }, v2: { x: 2, y: 2, z: 0 } };

		var arr = bmsSelfArrange([T1, T2, T3], { noTranslate: true });
		expect(arr.stats.edgeSteinerPoints).toBeGreaterThan(0);

		// Both T1 (origIdx 0) and T2 (origIdx 1) must own a sub-triangle vertex
		// exactly at (2,2,0) — i.e. both split the shared edge there.
		function ownsPoint(origIdx, px, py, pz) {
			for (var i = 0; i < arr.megaSoup.length; i++) {
				var t = arr.megaSoup[i];
				if (t.origIdx !== origIdx) continue;
				var vs = [t.v0, t.v1, t.v2];
				for (var k = 0; k < 3; k++) {
					if (Math.abs(vs[k].x - px) < 1e-9 && Math.abs(vs[k].y - py) < 1e-9 && Math.abs(vs[k].z - pz) < 1e-9) return true;
				}
			}
			return false;
		}
		expect(ownsPoint(0, 2, 2, 0), "T1 splits at (2,2,0)").toBe(true);
		expect(ownsPoint(1, 2, 2, 0), "T2 (uncrossed neighbour) also splits at (2,2,0)").toBe(true);
	});

	it("buildEdgeSteinerMap finds on-edge endpoints and registers all edge owners", function () {
		var T1 = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 4, y: 0, z: 0 }, v2: { x: 0, y: 4, z: 0 } };
		var T2 = { v0: { x: 4, y: 0, z: 0 }, v1: { x: 4, y: 4, z: 0 }, v2: { x: 0, y: 4, z: 0 } };
		var soup = [T1, T2];
		// A pool-like vertex at (2,2,0) on the shared diagonal, as a fake segment
		// hosted by T1 (idxA) with a far interior endpoint.
		var V = { x: 2, y: 2, z: 0, id: 99 };
		var W = { x: 1, y: 1, z: 0, id: 98 };
		var seg = { p0: W, p1: V, idxA: 0, idxB: 0 };
		var map = buildEdgeSteinerMap(2, function (t) { return soup[t]; },
			function (t, c) { var v = soup[t][c === 0 ? "v0" : c === 1 ? "v1" : "v2"]; return v.x + "," + v.y + "," + v.z; },
			[seg], 1e-6);
		// V is on the shared edge → both T1 and T2 must carry it.
		expect(map[0] && map[0].indexOf(V) >= 0).toBe(true);
		expect(map[1] && map[1].indexOf(V) >= 0).toBe(true);
	});
});

// ── STAGE 4: winding number ──────────────────────────────────────────

describe("Stage 4 — generalized winding number", function () {

	it("is +1 inside / 0 outside a closed outward cube (soup and indexed)", function () {
		var cube = createCube(0, 0, 0, 2);
		expect(Math.abs(windingNumber({ x: 0, y: 0, z: 0 }, cube) - 1)).toBeLessThan(1e-9);
		expect(Math.abs(windingNumber({ x: 5, y: 0, z: 0 }, cube))).toBeLessThan(1e-9);

		var ind = soupToIndexedArrays(cube);
		expect(Math.abs(windingNumberIndexed(0, 0, 0, ind.positions, ind.index) - 1)).toBeLessThan(1e-9);
		expect(Math.abs(windingNumberIndexed(5, 0, 0, ind.positions, ind.index))).toBeLessThan(1e-9);
	});

	it("conditionArrangement: no-op on a watertight mesh", function () {
		var cube = createCube(0, 0, 0, 2);
		var res = conditionArrangement(cube, 0.05);
		expect(res.openBefore).toBe(0);
		expect(res.openAfter).toBe(0);
		expect(res.capsAdded).toBe(0);
		expect(res.soup).toBe(cube); // untouched by reference
	});

	it("conditionArrangement: fills an open hole (cube missing a face)", function () {
		var cube = createCube(0, 0, 0, 2);
		var holed = cube.slice(0, 10); // drop the last face (2 tris) → square hole
		expect(countOpenEdges(holed).openEdges).toBeGreaterThan(0);
		var res = conditionArrangement(holed, 0.05);
		expect(res.openAfter).toBe(0);       // hole filled → watertight
		expect(res.capsAdded).toBeGreaterThan(0);
		expect(countOpenEdges(res.soup).openEdges).toBe(0);
	});

	it("conditionArrangement: seam snap merges a hair-apart duplicate edge", function () {
		// Two triangles that SHOULD share an edge but one vertex sits 0.001 off →
		// the shared edge is two 1-count edges (open). Targeted snap merges them.
		var eps = 0.001;
		var a = { v0: { x: 0, y: 0, z: 0 }, v1: { x: 1, y: 0, z: 0 }, v2: { x: 0, y: 1, z: 0 } };
		var b = { v0: { x: 1, y: 0, z: 0 }, v1: { x: 1 + eps, y: 1, z: 0 }, v2: { x: 0, y: 1, z: 0 } };
		var c = { v0: { x: 1, y: 0, z: 0 }, v1: { x: 1, y: 1, z: 0 }, v2: { x: 1 + eps, y: 1, z: 0 } };
		var before = countOpenEdges([a, b, c]).openEdges;
		var res = conditionArrangement([a, b, c], 0.05);
		expect(res.openAfter).toBeLessThanOrEqual(before);
		expect(res.snaps).toBeGreaterThan(0);
	});

	it("cell complex: extracts the boundary of a closed cube (manifold, vol 8)", function () {
		var cube = createCube(0, 0, 0, 2);
		var wf = function (x, y, z) { return windingNumber({ x: x, y: y, z: z }, cube); };
		var res = extractByCellComplex(cube, wf, { threshold: 1 });
		expect(res.diagnostics.cells).toBe(2);           // inside + outside
		expect(res.diagnostics.propagationViolations).toBe(0);
		expect(res.diagnostics.leakedFaceFraction).toBe(0);
		expect(res.kept.length).toBe(12);
		expect(countOpenEdges(res.kept).openEdges).toBe(0);
		expect(Math.abs(orientSolid(res.kept).diagnostics.signedVolume - 8)).toBeLessThan(1e-6);
	});

	it("cell complex: nested shells — keeps only the OUTER (winding-nesting)", function () {
		// Inner cube fully inside outer; the gap is winding 1, inner is winding 2.
		// Only the outer boundary (0↔1) is kept; the inner (1↔2) is interior.
		var two = createCube(0, 0, 0, 2).concat(createCube(0, 0, 0, 6));
		var wf = function (x, y, z) { return windingNumber({ x: x, y: y, z: z }, two); };
		var res = extractByCellComplex(two, wf, { threshold: 1 });
		expect(res.diagnostics.windingMax).toBe(2);
		expect(res.kept.length).toBe(12);                 // outer cube only
		expect(countOpenEdges(res.kept).openEdges).toBe(0);
		expect(Math.abs(orientSolid(res.kept).diagnostics.signedVolume - 216)).toBeLessThan(1e-6);
	});

	it("cell complex: an extra coincident opposite PAIR cancels (jump 0)", function () {
		// Add BOTH orientations of a copy of face 0 as EXTRA facets. Face 0's
		// location now has net multiplicity +1 (original) +1 (copy) −1 (reverse) =
		// +1, so the cube stays closed and the redundant flap pair vanishes.
		var cube = createCube(0, 0, 0, 2);
		var f = cube[0];
		var copy = { v0: f.v0, v1: f.v1, v2: f.v2 };
		var rev = { v0: f.v0, v1: f.v2, v2: f.v1 };
		var wf = function (x, y, z) { return windingNumber({ x: x, y: y, z: z }, cube); };
		var res = extractByCellComplex(cube.concat([copy, rev]), wf, { threshold: 1 });
		expect(res.kept.length).toBe(12);
		expect(countOpenEdges(res.kept).openEdges).toBe(0);
		expect(Math.abs(orientSolid(res.kept).diagnostics.signedVolume - 8)).toBeLessThan(1e-6);
	});

	it("patch extraction: keeps a closed boundary, one decision per patch", function () {
		// A cube (no barriers) is a single patch straddling inside/outside → whole
		// patch kept, coherently oriented. Region-consistent = no per-triangle tears.
		var cube = createCube(0, 0, 0, 2);
		var ref = cube;
		var wf = function (x, y, z) { return windingNumber({ x: x, y: y, z: z }, ref); };
		var res = extractByWindingPatches(cube, {}, wf, {});
		expect(res.patches).toBe(1);
		expect(res.keptPatches).toBe(1);
		expect(res.kept.length).toBe(12);
		expect(countOpenEdges(res.kept).openEdges).toBe(0);
	});

	it("patch extraction: drops an interior double sheet (both sides inside)", function () {
		// Cube + a coincident inner membrane pair. The membrane patch has winding
		// ≥ threshold on BOTH sides (interior) → dropped. The cube patch kept.
		var cube = createCube(0, 0, 0, 4);
		var m0 = { v0: { x: -1, y: -1, z: 0 }, v1: { x: 1, y: -1, z: 0 }, v2: { x: 0, y: 1, z: 0 } };
		var m1 = { v0: { x: -1, y: -1, z: 0 }, v1: { x: 0, y: 1, z: 0 }, v2: { x: 1, y: -1, z: 0 } };
		var all = cube.concat([m0, m1]);
		var wf = function (x, y, z) { return windingNumber({ x: x, y: y, z: z }, cube); };
		var res = extractByWindingPatches(all, {}, wf, {});
		// The membrane triangles (interior, winding 1 both sides) are dropped.
		expect(res.kept.length).toBe(12);
		expect(countOpenEdges(res.kept).openEdges).toBe(0);
	});

	it("counts double sheets: w = 2 between nothing, 2x cover adds up", function () {
		var cube = createCube(0, 0, 0, 2);
		var double_ = cube.concat(createCube(0, 0, 0, 4));
		// Inside both cubes
		expect(Math.abs(windingNumber({ x: 0, y: 0, z: 0 }, double_) - 2)).toBeLessThan(1e-9);
		// Between the shells
		expect(Math.abs(windingNumber({ x: 1.5, y: 0, z: 0 }, double_) - 1)).toBeLessThan(1e-9);
	});
});

// ── END-TO-END: bmsSelfResolve ───────────────────────────────────────

describe("bmsSelfResolve — exact fold resolver (soup)", function () {

	it("drops an interior coincident double sheet (membrane in a cube)", function () {
		var cube = createCube(0, 0, 0, 4);
		var m0 = { v0: { x: -0.5, y: -0.5, z: 0.3 }, v1: { x: 0.5, y: -0.5, z: 0.3 }, v2: { x: 0, y: 0.5, z: 0.3 } };
		var m1 = { v0: { x: -0.5, y: -0.5, z: 0.3 }, v1: { x: 0, y: 0.5, z: 0.3 }, v2: { x: 0.5, y: -0.5, z: 0.3 } };
		var soup = cube.concat([m0, m1]);

		var res = bmsSelfResolve(soup);
		expect(res.changed).toBe(true);
		expect(res.diagnostics.coplanarPairs).toBeGreaterThan(0);
		expect(res.soup.length).toBe(12); // membrane gone, cube untouched

		var edges = countOpenEdges(res.soup);
		expect(edges.openEdges).toBe(0);
		expect(edges.overShared).toBe(0);
		expect(eulerCharacteristic(res.soup)).toBe(2);
		expect(res.diagnostics.orient.windingViolationsAfter).toBe(0);
		expect(Math.abs(res.diagnostics.orient.signedVolume - 64)).toBeLessThan(1e-6);
	});

	it("resolves the pleated prism to a clean orientable box (THE fold case)", function () {
		var soup = buildPleatPrism();

		// Input sanity: closed, manifold, immersed — winding 1 inside.
		var inEdges = countOpenEdges(soup);
		expect(inEdges.openEdges).toBe(0);
		expect(inEdges.overShared).toBe(0);
		expect(Math.abs(windingNumber({ x: 0.5, y: 1, z: 0.5 }, soup) - 1)).toBeLessThan(1e-9);
		// The immersion carries coplanar folds: naive signed volume ≠ 2.

		var res = bmsSelfResolve(soup);
		expect(res.changed).toBe(true);
		expect(res.diagnostics.coplanarPairs).toBeGreaterThan(0);

		// THE success metrics: watertight, chi even (=2), orientable
		// (0 winding violations), and the exact box volume.
		var edges = countOpenEdges(res.soup);
		expect(edges.openEdges).toBe(0);
		expect(edges.overShared).toBe(0);
		expect(eulerCharacteristic(res.soup)).toBe(2);
		expect(res.diagnostics.orient.windingViolationsAfter).toBe(0);
		expect(Math.abs(res.diagnostics.orient.signedVolume - 2.0)).toBeLessThan(1e-6);

		// Winding of the RESOLVED surface: clean 1/0
		expect(Math.abs(windingNumber({ x: 0.5, y: 1, z: 0.5 }, res.soup) - 1)).toBeLessThan(1e-6);
		expect(Math.abs(windingNumber({ x: 0.5, y: 1, z: 1.2 }, res.soup))).toBeLessThan(1e-6);
		// Point under the former triple-fold region — single clean cover now
		expect(Math.abs(windingNumber({ x: 0.5, y: 1, z: 0.99 }, res.soup) - 1)).toBeLessThan(1e-6);
	});

	it("returns the input unchanged when there is nothing to resolve", function () {
		var cube = createCube(0, 0, 0, 2);
		var res = bmsSelfResolve(cube);
		expect(res.changed).toBe(false);
		expect(res.soup).toBe(cube);
	});

	it("survives UTM-scale coordinates (translate-to-origin invariant)", function () {
		var soup = buildPleatPrism();
		var utm = [];
		for (var i = 0; i < soup.length; i++) {
			var t = soup[i];
			utm.push({
				v0: { x: t.v0.x + 476300, y: t.v0.y + 6771250, z: t.v0.z + 642 },
				v1: { x: t.v1.x + 476300, y: t.v1.y + 6771250, z: t.v1.z + 642 },
				v2: { x: t.v2.x + 476300, y: t.v2.y + 6771250, z: t.v2.z + 642 }
			});
		}
		var res = bmsSelfResolve(utm);
		expect(res.changed).toBe(true);
		var edges = countOpenEdges(res.soup);
		expect(edges.openEdges).toBe(0);
		expect(edges.overShared).toBe(0);
		expect(res.diagnostics.orient.windingViolationsAfter).toBe(0);
		expect(Math.abs(res.diagnostics.orient.signedVolume - 2.0)).toBeLessThan(1e-4);
		// Result is back in world coordinates
		expect(Math.abs(windingNumber({ x: 476300.5, y: 6771251, z: 642.5 }, res.soup) - 1)).toBeLessThan(1e-6);
	});

	it("tolerates incoherent input winding in the far field (survey-mesh reality)", function () {
		var soup = buildPleatPrism();
		// Flip two far-field triangles (bottom quad) — 3DFACE-style winding noise
		var flipped = soup.slice();
		flipped[0] = { v0: soup[0].v0, v1: soup[0].v2, v2: soup[0].v1 };
		flipped[1] = { v0: soup[1].v0, v1: soup[1].v2, v2: soup[1].v1 };

		// preOrient (default) must NOT let the flipped seed invert the winding
		// reference — full orientSolid direction step keeps the sign outward.
		var res = bmsSelfResolve(flipped);
		expect(res.changed).toBe(true);
		var edges = countOpenEdges(res.soup);
		expect(edges.openEdges).toBe(0);
		expect(edges.overShared).toBe(0);
		expect(eulerCharacteristic(res.soup)).toBe(2);
		expect(res.diagnostics.orient.windingViolationsAfter).toBe(0);
		expect(Math.abs(res.diagnostics.orient.signedVolume - 2.0)).toBeLessThan(1e-6);
	});
});

// ── NON-ORIENTABLE FOLD CASE (the real-mesh failure class) ───────────
//
// The real TEST-SOLID-SLICE mesh: bounds a solid (volume error 0.025%) yet
// its per-component Euler characteristic is ODD — a NON-ORIENTABLE
// triangulation. The non-orientability is NOT a true RP²: it comes from
// coincident coplanar double-sheets layered on an orientable solid, whose
// raw per-triangle winding is inconsistent near the folds. Without
// preOrient the generalized-winding STEP mis-classifies there and tears
// holes (open edges, χ flips odd, wrong volume, fragments). preOrient
// re-orients the winding REFERENCE (full orientSolid) so the field is
// consistent and correctly signed → clean solid.

/**
 * Incoherent-fold prism: geometrically the working pleated prism (bounds
 * the box [0,1]x[0,2]x[0,1], volume 2, coplanar folds), but every triangle
 * in the top fold band (centroid z > 0.5) has its winding FLIPPED. Geometry
 * (and the bounded solid) is unchanged; only the winding reference is now
 * inconsistent near the folds — the exact real-mesh pathology, made
 * checkable (the right answer is the box, volume 2).
 */
function buildIncoherentFoldPrism() {
	var soup = buildPleatPrism();
	return soup.map(function (t) {
		var cz = (t.v0.z + t.v1.z + t.v2.z) / 3;
		return cz > 0.5 ? { v0: t.v0, v1: t.v2, v2: t.v1 } : t;
	});
}

/** Tetrahemihexahedron: canonical RP² immersion, χ=1, genuinely non-orientable. */
function buildTetrahemihexahedron() {
	var A = { x: 1, y: 0, z: 0 }, B = { x: -1, y: 0, z: 0 }, C = { x: 0, y: 1, z: 0 };
	var D = { x: 0, y: -1, z: 0 }, E = { x: 0, y: 0, z: 1 }, F = { x: 0, y: 0, z: -1 };
	var T = []; function t(p, q, r) { T.push({ v0: p, v1: q, v2: r }); }
	t(A, C, E); t(A, D, F); t(B, C, F); t(B, D, E);   // 4 triangle faces
	t(A, C, B); t(A, B, D);                           // z=0 square, diag A-B
	t(E, B, F); t(E, F, A);                           // y=0 square, diag E-F
	t(C, E, D); t(C, D, F);                           // x=0 square, diag C-D
	return T;
}

describe("non-orientable fold resolution (preOrient)", function () {

	it("input is a valid reproduction: closed, bounds a solid, winding-incoherent", function () {
		var soup = buildIncoherentFoldPrism();
		// Closed (geometry is the box — unchanged, only winding flipped)
		expect(countOpenEdges(soup).openEdges).toBe(0);
		// The UNDERLYING geometry still bounds the box: coherently orient it,
		// then the winding is a clean 1 inside — proving the solid is real and
		// the pathology is purely the incoherent winding reference.
		var coherent = orientSolid(soup).soup;
		expect(Math.abs(windingNumber({ x: 0.5, y: 1, z: 0.5 }, coherent) - 1)).toBeLessThan(1e-9);
		// Raw winding reference is incoherent near the folds (the pathology)
		expect(orientSolid(soup).diagnostics.windingViolationsBefore).toBeGreaterThan(0);
	});

	it("WITHOUT preOrient the resolver TEARS the mesh (reproduces the failure)", function () {
		var soup = buildIncoherentFoldPrism();
		var res = bmsSelfResolve(soup, { preOrient: false });
		expect(res.changed).toBe(true);
		// The documented failure signature: opened / wrong volume.
		var edges = countOpenEdges(res.soup);
		var torn = edges.openEdges > 0
			|| Math.abs(res.diagnostics.orient.signedVolume - 2.0) > 1e-3
			|| (eulerCharacteristic(res.soup) % 2 !== 0);
		expect(torn).toBe(true);
	});

	it("WITH preOrient the resolver recovers a clean orientable solid (the fix)", function () {
		var soup = buildIncoherentFoldPrism();
		var res = bmsSelfResolve(soup, { preOrient: true });
		expect(res.changed).toBe(true);
		expect(res.diagnostics.preOrientFlips).toBeGreaterThan(0);

		var edges = countOpenEdges(res.soup);
		expect(edges.openEdges).toBe(0);          // no tearing
		expect(edges.overShared).toBe(0);          // no new non-manifold
		expect(eulerCharacteristic(res.soup)).toBe(2); // χ even
		expect(res.diagnostics.orient.windingViolationsAfter).toBe(0); // orientable
		expect(Math.abs(res.diagnostics.orient.signedVolume - 2.0)).toBeLessThan(1e-6); // volume preserved
	});

	it("preOrient is the default (matches explicit preOrient:true)", function () {
		var soup = buildIncoherentFoldPrism();
		var def = bmsSelfResolve(soup);
		expect(countOpenEdges(def.soup).openEdges).toBe(0);
		expect(Math.abs(def.diagnostics.orient.signedVolume - 2.0)).toBeLessThan(1e-6);
	});

	it("indexed path: WITHOUT preOrient tears, WITH preOrient recovers volume 2", function () {
		var mesh = soupToIndexedArrays(buildIncoherentFoldPrism());

		var off = bmsSelfResolveIndexed(mesh, { preOrient: false });
		var offSoup = indexedToSoupArrays(off);
		var offVol = orientSolid(offSoup).diagnostics.signedVolume;
		var offTorn = countOpenEdges(offSoup).openEdges > 0 || Math.abs(offVol - 2.0) > 1e-3;
		expect(offTorn).toBe(true);

		var on = bmsSelfResolveIndexed(mesh, { preOrient: true });
		var onSoup = indexedToSoupArrays(on);
		var onEdges = countOpenEdges(onSoup);
		expect(onEdges.openEdges).toBe(0);
		expect(onEdges.overShared).toBe(0);
		expect(eulerCharacteristic(onSoup)).toBe(2);
		var orient = orientSolid(onSoup);
		expect(orient.diagnostics.windingViolationsAfter).toBe(0);
		expect(Math.abs(orient.diagnostics.signedVolume - 2.0)).toBeLessThan(1e-6);
		expect(on.diagnostics.preOrient).toBe(true);
		expect(on.diagnostics.preOrientFlips).toBeGreaterThan(0);
	});

	it("detects the self-intersections of a vertex-sharing immersion (edge-exclusion fix)", function () {
		// Tetrahemihexahedron faces meet at shared VERTICES yet cross along the
		// axes. The old vertex-adjacency exclusion hid these (0 segments); the
		// edge-only exclusion now finds them.
		var thh = buildTetrahemihexahedron();
		var self = bmsSelfIntersect(thh);
		expect(self.stats.crossingPairs).toBeGreaterThan(0);
	});

	it("flags a genuinely non-orientable RP² (tetrahemihexahedron) via the seam", function () {
		// The THH bounds NO solid (winding is irreducibly half-integer), so the
		// resolver cannot force it into a clean solid — but preOrient must DETECT
		// the irreducible non-orientable seam rather than silently corrupting.
		var mesh = soupToIndexedArrays(buildTetrahemihexahedron());
		var res = bmsSelfResolveIndexed(mesh, { preOrient: true });
		expect(res.diagnostics.crossingPairs).toBeGreaterThan(0);
		expect(res.diagnostics.preOrientSeamViolations).toBeGreaterThan(0);
	});
});

// ── END-TO-END: bmsSelfResolveIndexed (narrow band) ──────────────────

describe("bmsSelfResolveIndexed — indexed narrow-band resolver", function () {

	it("resolves the pleated prism to a clean box (indexed → soup delegate)", function () {
		var soup = buildPleatPrism();
		var mesh = soupToIndexedArrays(soup);

		var res = bmsSelfResolveIndexed(mesh);
		expect(res.changed).toBe(true);
		expect(res.diagnostics.coplanarPairs).toBeGreaterThan(0);
		expect(res.diagnostics.outputTris).toBeGreaterThan(0);

		var outSoup = indexedToSoupArrays(res);
		var edges = countOpenEdges(outSoup);
		expect(edges.openEdges).toBe(0);
		expect(edges.overShared).toBe(0);
		expect(eulerCharacteristic(outSoup)).toBe(2);

		var orient = orientSolid(outSoup);
		expect(orient.diagnostics.windingViolationsAfter).toBe(0);
		expect(Math.abs(orient.diagnostics.signedVolume - 2.0)).toBeLessThan(1e-6);
	});

	it("returns the same arrays unchanged for a clean mesh", function () {
		var mesh = soupToIndexedArrays(createCube(0, 0, 0, 2));
		var res = bmsSelfResolveIndexed(mesh);
		expect(res.changed).toBe(false);
		expect(res.positions).toBe(mesh.positions);
		expect(res.index).toBe(mesh.index);
	});
});
