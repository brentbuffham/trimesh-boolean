/**
 * @module bms/bmsSelfArrange
 *
 * SELF-arrangement — the exact fold resolver entry (Zhou et al. "Mesh
 * Arrangements for Solid Geometry", 2016, adapted to the BMS pipeline).
 *
 * A closed mesh with coincident COPLANAR overlaps (folds) is
 * non-orientable: no consistent winding exists, so orientSolid can never
 * fix it. The exact fix is to re-cut ALL self-intersections — including
 * the coplanar overlaps that the Moller near-parallel gate rejects —
 * into a conforming arrangement, then classify sub-triangles by the
 * generalized winding number and keep only the solid boundary.
 *
 * Stages (all through the SHARED vertex pool — the anti-T-junction
 * guarantee):
 *   1. bmsSelfIntersect — every non-adjacent triangle pair of ONE mesh
 *      against itself: Moller crossings PLUS coplanar-overlap polygons.
 *   2. refineSelfSegments — per-triangle constraint arrangement: split
 *      segments at T-points and at proper crossings so no triangle ends
 *      up with crossing CDT constraints (3+ overlapping sheets).
 *   3. bmsSplit (unchanged) — conforming re-triangulation.
 *   4. extractByWinding + dedupCoincidentTriangles + orientSolid —
 *      keep the solid boundary once, outward.
 *
 * The A-vs-B boolean path (bmsBooleanOp) is untouched.
 */

import { orient3d } from "robust-predicates";
import { triTriIntersection } from "../intersect/triTriIntersection.js";
import { coplanarOverlap, emitCoplanarSegments } from "../intersect/coplanarOverlap.js";
import { buildSpatialGrid, queryGrid, triBBox, bboxOverlap, estimateAvgEdge } from "../intersect/spatialGrid.js";
import { createVertexPool } from "./bmsVertexPool.js";
import { bmsSplit } from "./bmsSplit.js";
import { soupCentroid, translateSoup, vKey, edgeKey, countOpenEdges } from "../util/math.js";
import { extractByWinding, extractByWindingPatches, windingNumber } from "../classify/windingNumber.js";
import { extractByCellComplex } from "../classify/cellComplex.js";
import { dedupCoincidentTriangles } from "../classify/coincidentDedup.js";
import { orientSolid } from "../normals/orientSolid.js";
import { extractBoundaryLoops, triangulateLoop } from "../repair/boundaryLoops.js";

/**
 * Self-intersect one triangle soup: every non-adjacent pair is tested
 * with Moller (crossings) AND the coplanar-overlap path (folds). All
 * segment endpoints go through ONE shared vertex pool; both triangles of
 * a pair register the same PoolVertex objects.
 *
 * Adjacency exclusion: pairs sharing a vertex (by exact coordinate key)
 * are legitimate mesh neighbours, NOT self-intersections — they are
 * excluded from the crossing path. The coplanar path is gated by overlap
 * AREA instead, because a fold ACROSS a shared crease edge is a genuine
 * self-overlap while side-by-side coplanar neighbours clip to zero area.
 *
 * @param {Array<{ v0, v1, v2 }>} soup
 * @param {Object} [options]
 * @param {number} [options.tolerance] - Pool merge tolerance (default: avgEdge x 0.001)
 * @param {number} [options.minAreaRatio=1e-6] - Coplanar overlap area gate
 * @returns {{
 *   segments: Array, crossedSet: Object.<number, Array>, pool: Object,
 *   stats: { candidatePairs: number, coplanarPairs: number, crossingPairs: number,
 *            refinementSplits: number }
 * }}
 */
export function bmsSelfIntersect(soup, options) {
	var opts = options || {};

	var avgEdge = estimateAvgEdge(soup);
	var tolerance = opts.tolerance !== undefined ? opts.tolerance : avgEdge * 0.001;
	var pool = createVertexPool(tolerance);

	var cellSize = Math.max(avgEdge * 2, 0.1);
	var grid = buildSpatialGrid(soup, cellSize);

	// Vertex-share adjacency by exact coordinate key
	var vertIds = new Array(soup.length);
	var keyMap = {};
	var nextVid = 0;
	for (var vi = 0; vi < soup.length; vi++) {
		var tv = soup[vi];
		var ids = new Array(3);
		var vs = [tv.v0, tv.v1, tv.v2];
		for (var k = 0; k < 3; k++) {
			var vk = vKey(vs[k]);
			if (keyMap[vk] === undefined) keyMap[vk] = nextVid++;
			ids[k] = keyMap[vk];
		}
		vertIds[vi] = ids;
	}

	// EDGE adjacency (2 shared vertices), NOT vertex adjacency. Edge-sharing
	// triangles are genuine manifold neighbours and would report their shared
	// edge as a false crossing segment, so they are excluded from the crossing
	// path. Triangles sharing only ONE vertex can still transversally cross
	// (e.g. two hemi faces of a tetrahemihexahedron meeting at a corner but
	// overlapping along an axis) — they MUST be tested; a legitimate
	// vertex-touch yields a degenerate segment that triTriIntersection rejects.
	function sharesEdge(i, j) {
		var a = vertIds[i], b = vertIds[j];
		var shared = 0;
		for (var s = 0; s < 3; s++) {
			if (a[s] === b[0] || a[s] === b[1] || a[s] === b[2]) shared++;
		}
		return shared >= 2;
	}

	// Snap tolerance for near-vertex rounding (kills ~pool-tolerance T-junctions
	// where an intersection endpoint lands just off an ORIGINAL vertex).
	var snapTol = opts.snapTolerance !== undefined ? opts.snapTolerance : avgEdge * 0.003;

	var segments = [];
	var crossedSet = {};
	var stats = { candidatePairs: 0, coplanarPairs: 0, crossingPairs: 0, refinementSplits: 0 };

	var copOpts = {
		minAreaRatio: opts.minAreaRatio !== undefined ? opts.minAreaRatio : 1e-6,
		distTolerance: opts.coplanarDistTolerance
	};

	function pushSeg(seg) {
		segments.push(seg);
		if (!crossedSet[seg.idxA]) crossedSet[seg.idxA] = [];
		crossedSet[seg.idxA].push(seg);
		if (!crossedSet[seg.idxB]) crossedSet[seg.idxB] = [];
		crossedSet[seg.idxB].push(seg);
	}

	for (var i = 0; i < soup.length; i++) {
		var triI = soup[i];
		var bbI = triBBox(triI);
		var candidates = queryGrid(grid, bbI, cellSize);

		for (var c = 0; c < candidates.length; c++) {
			var j = candidates[c];
			if (j <= i) continue; // each unordered pair once
			var triJ = soup[j];
			if (!bboxOverlap(bbI, triBBox(triJ))) continue;
			stats.candidatePairs++;

			var adjacent = sharesEdge(i, j);

			// ── Coplanar fold path (area-gated, adjacency-agnostic) ──
			var cop = coplanarOverlap(triI, triJ, copOpts);
			if (cop) {
				var copSegs = emitCoplanarSegments(cop.polygon, pool,
					{ mesh: "A", triIdx: i }, { mesh: "A", triIdx: j });
				if (copSegs.length > 0) {
					stats.coplanarPairs++;
					for (var cs = 0; cs < copSegs.length; cs++) pushSeg(copSegs[cs]);
				}
				continue; // coplanar pair — Moller would near-parallel reject anyway
			}

			// ── Transversal crossing path (neighbours excluded) ──
			if (adjacent) continue;

			var seg = triTriIntersection(triI, triJ);
			if (!seg) continue;

			var pv0 = pool.getOrCreate(seg.p0.x, seg.p0.y, seg.p0.z, { mesh: "A", triIdx: i });
			pool.getOrCreate(seg.p0.x, seg.p0.y, seg.p0.z, { mesh: "A", triIdx: j });
			var pv1 = pool.getOrCreate(seg.p1.x, seg.p1.y, seg.p1.z, { mesh: "A", triIdx: i });
			pool.getOrCreate(seg.p1.x, seg.p1.y, seg.p1.z, { mesh: "A", triIdx: j });
			if (pv0 === pv1) continue;

			stats.crossingPairs++;
			pushSeg({ p0: pv0, p1: pv1, idxA: i, idxB: j });
		}
	}

	// Near-vertex T-junctions (intersection endpoint ~snapTol off an original
	// vertex) are closed AFTER the split by weldTaggedSoup, seeded with the
	// original vertices so they win as representatives (snap-to-vertex). Snapping
	// BEFORE the split destabilises the per-triangle CDT (degenerate/duplicate
	// points), so we do not mutate endpoints here.
	stats.vertexSnaps = 0;

	// ── Per-triangle constraint arrangement ──
	var refined = refineSelfSegments(segments, soup, pool, tolerance, stats);

	// Rebuild crossed sets from the refined segment list
	var crossedSet2 = {};
	for (var rs = 0; rs < refined.length; rs++) {
		var rseg = refined[rs];
		if (!crossedSet2[rseg.idxA]) crossedSet2[rseg.idxA] = [];
		crossedSet2[rseg.idxA].push(rseg);
		if (rseg.idxB !== rseg.idxA) {
			if (!crossedSet2[rseg.idxB]) crossedSet2[rseg.idxB] = [];
			crossedSet2[rseg.idxB].push(rseg);
		}
	}

	// ── Conforming edge splits (T-junction elimination) ──
	// A self-intersection segment endpoint frequently lands ON a manifold edge
	// of its host, shared with a NON-crossed neighbour. bmsSplit re-triangulates
	// the host (splitting that edge) but not the neighbour → T-junction. Register
	// each such endpoint as an edge Steiner point on EVERY triangle owning that
	// edge; bmsSplit then splits both sides at the SAME PoolVertex → conforming.
	var edgePoints = buildEdgeSteinerMap(
		soup.length,
		function (t) { return soup[t]; },
		function (t, c) { return vKey(soup[t][c === 0 ? "v0" : c === 1 ? "v1" : "v2"]); },
		refined, tolerance
	);
	stats.edgeSteinerPoints = 0;
	stats.edgeSteinerTris = 0;
	for (var ek in edgePoints) { stats.edgeSteinerTris++; stats.edgeSteinerPoints += edgePoints[ek].length; }

	return { segments: refined, crossedSet: crossedSet2, edgePoints: edgePoints, pool: pool, stats: stats };
}

/**
 * Near-vertex snap-rounding: snap each intersection-segment endpoint that lies
 * within `snapTol` of an ORIGINAL triangle vertex exactly onto that vertex.
 *
 * The endpoint is a shared PoolVertex, so moving its coordinates snaps every
 * segment that references it at once. After the snap its vKey matches the
 * triangle corner, so bmsRetriangulate treats it as the existing corner on
 * BOTH the host and its neighbour — the ~pool-tolerance T-junction disappears.
 *
 * @param {Array<{v0,v1,v2}>} soup
 * @param {Array<{p0,p1}>} segments
 * @param {number} snapTol
 * @returns {number} count of endpoints snapped
 */
export function snapEndpointsToVertices(soup, segments, snapTol) {
	if (!(snapTol > 0) || segments.length === 0) return 0;

	var cell = snapTol * 2;
	if (cell < 1e-9) cell = 1e-6;
	var grid = {};
	function key(x, y, z) { return Math.floor(x / cell) + "," + Math.floor(y / cell) + "," + Math.floor(z / cell); }

	var seenV = {};
	function addV(v) {
		var vk = vKey(v);
		if (seenV[vk]) return;
		seenV[vk] = 1;
		var k = key(v.x, v.y, v.z);
		(grid[k] = grid[k] || []).push(v);
	}
	for (var i = 0; i < soup.length; i++) { addV(soup[i].v0); addV(soup[i].v1); addV(soup[i].v2); }

	var snapTolSq = snapTol * snapTol;
	function nearest(p) {
		var cx = Math.floor(p.x / cell), cy = Math.floor(p.y / cell), cz = Math.floor(p.z / cell);
		var best = snapTolSq, bv = null;
		for (var dx = -1; dx <= 1; dx++) for (var dy = -1; dy <= 1; dy++) for (var dz = -1; dz <= 1; dz++) {
			var b = grid[(cx + dx) + "," + (cy + dy) + "," + (cz + dz)];
			if (!b) continue;
			for (var q = 0; q < b.length; q++) {
				var v = b[q], ex = v.x - p.x, ey = v.y - p.y, ez = v.z - p.z, d2 = ex * ex + ey * ey + ez * ez;
				if (d2 < best) { best = d2; bv = v; }
			}
		}
		return bv;
	}

	var snapped = {}, count = 0;
	for (var s = 0; s < segments.length; s++) {
		var ends = [segments[s].p0, segments[s].p1];
		for (var e = 0; e < 2; e++) {
			var V = ends[e];
			if (V.id !== undefined && snapped[V.id]) continue;
			if (V.id !== undefined) snapped[V.id] = 1;
			var A = nearest(V);
			if (A) { V.x = A.x; V.y = A.y; V.z = A.z; count++; }
		}
	}
	return count;
}

/**
 * Weld a TAGGED soup (mesh/origIdx carried) to shared representative vertex
 * objects within `tol`, dropping triangles that collapse. Unlike weldVertices
 * this preserves the mesh/origIdx tags AND returns a `repOf(x,y,z)` lookup so
 * callers can map segment endpoints to the same representatives (for barrier
 * detection). Reps are shared objects, so identity-based adjacency also holds.
 *
 * @param {Array<{v0,v1,v2,mesh?,origIdx?}>} soup
 * @param {number} tol
 * @param {Array<{x,y,z}>} [seedVertices] - canonical vertices pre-seeded so they
 *        WIN as representatives (snap-to-vertex: intersection points near an
 *        original vertex round onto it instead of an arbitrary neighbour).
 * @returns {{ soup: Array, repOf: function(number,number,number): (Object|null) }}
 */
export function weldTaggedSoup(soup, tol, seedVertices) {
	var cell = tol * 2;
	if (cell < 1e-9) cell = 1e-6;
	var grid = {};
	function key(x, y, z) { return Math.floor(x / cell) + "," + Math.floor(y / cell) + "," + Math.floor(z / cell); }
	var tolSq = tol * tol;

	function query(x, y, z) {
		var cx = Math.floor(x / cell), cy = Math.floor(y / cell), cz = Math.floor(z / cell);
		var best = tolSq, bv = null;
		for (var dx = -1; dx <= 1; dx++) for (var dy = -1; dy <= 1; dy++) for (var dz = -1; dz <= 1; dz++) {
			var b = grid[(cx + dx) + "," + (cy + dy) + "," + (cz + dz)];
			if (!b) continue;
			for (var q = 0; q < b.length; q++) {
				var w = b[q], ex = w.x - x, ey = w.y - y, ez = w.z - z, d2 = ex * ex + ey * ey + ez * ez;
				if (d2 < best) { best = d2; bv = w; }
			}
		}
		return bv;
	}

	function insert(x, y, z) {
		var nv = { x: x, y: y, z: z };
		(grid[key(x, y, z)] = grid[key(x, y, z)] || []).push(nv);
		return nv;
	}

	// Pre-seed canonical original vertices so they always win as the rep.
	if (seedVertices) {
		var seen = {};
		for (var sv = 0; sv < seedVertices.length; sv++) {
			var s = seedVertices[sv];
			var sk = vKey(s);
			if (seen[sk]) continue;
			seen[sk] = 1;
			if (!query(s.x, s.y, s.z)) insert(s.x, s.y, s.z);
		}
	}

	function rep(v) {
		var found = query(v.x, v.y, v.z);
		if (found) return found;
		return insert(v.x, v.y, v.z);
	}

	var out = [];
	for (var i = 0; i < soup.length; i++) {
		var t = soup[i];
		var a = rep(t.v0), b = rep(t.v1), c = rep(t.v2);
		if (a === b || b === c || c === a) continue; // collapsed
		var nt = { v0: a, v1: b, v2: c };
		if (t.mesh !== undefined) nt.mesh = t.mesh;
		if (t.origIdx !== undefined) nt.origIdx = t.origIdx;
		out.push(nt);
	}

	return { soup: out, repOf: query };
}

/**
 * EXACT coincident-sheet snapping (opt-in seam repair for the cell complex).
 *
 * At a fold seam two coplanar sub-faces are often NEAR-coincident — a hair apart,
 * within weld tolerance but not exactly equal — so they sit at nearly-equal
 * dihedral angle and the cell-complex radial fan can glue an inside half-face to
 * an outside half-face (one cell then spans inside+outside → leak). The fix is
 * upstream: snap those near-coincident face pairs to TRUE coincidence so the
 * facet-merge cancels the opposite coplanar sub-faces and the fan is unambiguous.
 *
 * Coincidence is decided with the robust orient3d predicate (coplanarity) plus a
 * vertex-match within `tol`; matched vertices are unioned and collapsed onto one
 * shared representative position, making coincident faces BIT-IDENTICAL. Only
 * vertices that participate in a coincident pair move (≤ tol), so volume is
 * essentially preserved — a zero-thickness coincident pair encloses no volume.
 *
 * @param {Array<{v0,v1,v2}>} soup
 * @param {number} tol - max gap for a coincident vertex/face match
 * @returns {{ soup: Array, snappedVertices: number, coincidentPairs: number }}
 */
export function snapCoincidentSheets(soup, tol) {
	if (soup.length === 0) return { soup: soup, snappedVertices: 0, coincidentPairs: 0 };
	var avg = estimateAvgEdge(soup);
	var cell = Math.max(avg * 0.5, tol * 2);
	if (cell < 1e-9) cell = 1e-6;
	var grid = buildSpatialGrid(soup, cell);

	// Vertex ids by vKey.
	var vidMap = {}, vlist = [];
	function vidOf(v) { var k = vKey(v); var i = vidMap[k]; if (i === undefined) { i = vlist.length; vidMap[k] = i; vlist.push(v); } return i; }
	var faceIds = new Array(soup.length);
	for (var fi = 0; fi < soup.length; fi++) faceIds[fi] = [vidOf(soup[fi].v0), vidOf(soup[fi].v1), vidOf(soup[fi].v2)];

	var parent = new Int32Array(vlist.length);
	for (var p = 0; p < vlist.length; p++) parent[p] = p;
	function find(x) { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
	function uni(a, b) { var ra = find(a), rb = find(b); if (ra !== rb) parent[ra > rb ? ra : rb] = ra > rb ? rb : ra; }

	var tolSq = tol * tol;
	function near(a, b) { var dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z; return dx * dx + dy * dy + dz * dz <= tolSq; }

	var coincidentPairs = 0;
	for (var i = 0; i < soup.length; i++) {
		var A = soup[i];
		var bbA = triBBox(A);
		var cand = queryGrid(grid, bbA, cell);
		var av = [A.v0, A.v1, A.v2];
		// A's twice-area (scale for the coplanarity gate)
		var ae1x = A.v1.x - A.v0.x, ae1y = A.v1.y - A.v0.y, ae1z = A.v1.z - A.v0.z;
		var ae2x = A.v2.x - A.v0.x, ae2y = A.v2.y - A.v0.y, ae2z = A.v2.z - A.v0.z;
		var anx = ae1y * ae2z - ae1z * ae2y, any = ae1z * ae2x - ae1x * ae2z, anz = ae1x * ae2y - ae1y * ae2x;
		var area2 = Math.sqrt(anx * anx + any * any + anz * anz);
		if (area2 < 1e-24) continue;
		var planeTol = area2 * tol;

		for (var c = 0; c < cand.length; c++) {
			var j = cand[c];
			if (j <= i) continue;
			var B = soup[j];
			var bv = [B.v0, B.v1, B.v2];
			// Coplanar: each B vertex within planeTol of A's plane (robust orient3d).
			var o0 = orient3d(A.v0.x, A.v0.y, A.v0.z, A.v1.x, A.v1.y, A.v1.z, A.v2.x, A.v2.y, A.v2.z, B.v0.x, B.v0.y, B.v0.z);
			if (Math.abs(o0) > planeTol) continue;
			var o1 = orient3d(A.v0.x, A.v0.y, A.v0.z, A.v1.x, A.v1.y, A.v1.z, A.v2.x, A.v2.y, A.v2.z, B.v1.x, B.v1.y, B.v1.z);
			if (Math.abs(o1) > planeTol) continue;
			var o2 = orient3d(A.v0.x, A.v0.y, A.v0.z, A.v1.x, A.v1.y, A.v1.z, A.v2.x, A.v2.y, A.v2.z, B.v2.x, B.v2.y, B.v2.z);
			if (Math.abs(o2) > planeTol) continue;

			// Vertex match (each B vertex to a distinct A vertex within tol).
			var used = [false, false, false];
			var pairs = [];
			var ok = true;
			for (var bi = 0; bi < 3; bi++) {
				var m = -1;
				for (var ai = 0; ai < 3; ai++) { if (!used[ai] && near(bv[bi], av[ai])) { m = ai; break; } }
				if (m < 0) { ok = false; break; }
				used[m] = true;
				pairs.push([bi, m]);
			}
			if (!ok) continue;

			coincidentPairs++;
			for (var pp = 0; pp < 3; pp++) uni(faceIds[j][pairs[pp][0]], faceIds[i][pairs[pp][1]]);
		}
	}

	if (coincidentPairs === 0) return { soup: soup, snappedVertices: 0, coincidentPairs: 0 };

	// Canonical position per cluster = the representative (min-id) vertex's coords.
	var repPos = {};
	for (var v = 0; v < vlist.length; v++) { var r = find(v); if (!repPos[r]) repPos[r] = vlist[r]; }
	var snappedVertices = 0;
	for (var v2 = 0; v2 < vlist.length; v2++) if (find(v2) !== v2) snappedVertices++;

	var out = [];
	for (var fj = 0; fj < soup.length; fj++) {
		var f = faceIds[fj];
		var a = repPos[find(f[0])], b = repPos[find(f[1])], c = repPos[find(f[2])];
		if (a === b || b === c || c === a) continue; // collapsed
		out.push({ v0: a, v1: b, v2: c });
	}
	return { soup: out, snappedVertices: snappedVertices, coincidentPairs: coincidentPairs };
}

/**
 * Condition a nearly-conforming arrangement toward WATERTIGHT, targeting ONLY
 * the seam region so clean geometry (and volume) is untouched:
 *
 *   1. TARGETED seam snap-round — merge the genuinely-coincident duplicate
 *      vertices that sit on OPEN edges (the near-coincident fold seams that
 *      welded a hair apart), onto a shared representative. Only open-edge
 *      vertices move; interior/manifold geometry is left exactly as-is, so
 *      volume is preserved far better than a global weld.
 *   2. SEAM-LOOP HOLE-FILL — chain the residual open edges into loops and
 *      triangulate them (Newell-normal cap orientation), iterating snap↔fill to
 *      a fixpoint so scattered edges that only chain after a snap still close.
 *
 * Runs to a fixpoint or until no further progress. Additive and idempotent on a
 * watertight input (no open edges → immediate no-op).
 *
 * @param {Array<{v0,v1,v2}>} soup - welded arrangement (may have a few open edges)
 * @param {number} seamTol - max gap to merge on open-edge vertices
 * @param {number} [maxPasses=4]
 * @returns {{ soup: Array, openBefore: number, openAfter: number, capsAdded: number, snaps: number }}
 */
export function conditionArrangement(soup, seamTol, maxPasses) {
	maxPasses = maxPasses || 4;
	var openBefore = countOpenEdges(soup).openEdges;
	if (openBefore === 0) return { soup: soup, openBefore: 0, openAfter: 0, capsAdded: 0, snaps: 0 };

	var cur = soup;
	var totalCaps = 0, totalSnaps = 0;

	for (var pass = 0; pass < maxPasses; pass++) {
		var open0 = countOpenEdges(cur).openEdges;
		if (open0 === 0) break;

		// ── (1) Targeted seam snap — only open-edge vertices ──
		var edgeUse = {}, vmap = {};
		for (var i = 0; i < cur.length; i++) {
			var t = cur[i];
			var vs = [t.v0, t.v1, t.v2];
			var ks = [vKey(t.v0), vKey(t.v1), vKey(t.v2)];
			for (var e = 0; e < 3; e++) {
				vmap[ks[e]] = vs[e];
				var ek = edgeKey(ks[e], ks[(e + 1) % 3]);
				edgeUse[ek] = (edgeUse[ek] || 0) + 1;
			}
		}
		var openVertKeys = {};
		for (var ekk in edgeUse) {
			if (edgeUse[ekk] === 1) { var pp = ekk.split("|"); openVertKeys[pp[0]] = 1; openVertKeys[pp[1]] = 1; }
		}

		var cell = seamTol * 2; if (cell < 1e-9) cell = 1e-6;
		var grid = {};
		var tolSq = seamTol * seamTol;
		function gkey(x, y, z) { return Math.floor(x / cell) + "," + Math.floor(y / cell) + "," + Math.floor(z / cell); }
		function repFor(v) {
			var cx = Math.floor(v.x / cell), cy = Math.floor(v.y / cell), cz = Math.floor(v.z / cell);
			var best = tolSq, bv = null;
			for (var dx = -1; dx <= 1; dx++) for (var dy = -1; dy <= 1; dy++) for (var dz = -1; dz <= 1; dz++) {
				var b = grid[(cx + dx) + "," + (cy + dy) + "," + (cz + dz)];
				if (!b) continue;
				for (var q = 0; q < b.length; q++) {
					var w = b[q], ex = w.x - v.x, ey = w.y - v.y, ez = w.z - v.z, dd = ex * ex + ey * ey + ez * ez;
					if (dd < best) { best = dd; bv = w; }
				}
			}
			if (bv) return bv;
			var nv = { x: v.x, y: v.y, z: v.z };
			(grid[gkey(v.x, v.y, v.z)] = grid[gkey(v.x, v.y, v.z)] || []).push(nv);
			return nv;
		}
		var repMap = {};
		for (var ovk in openVertKeys) repMap[ovk] = repFor(vmap[ovk]);
		var snapCount = 0;
		var snapped = [];
		for (var s = 0; s < cur.length; s++) {
			var st = cur[s];
			var a = repMap[vKey(st.v0)] || st.v0;
			var b2 = repMap[vKey(st.v1)] || st.v1;
			var c = repMap[vKey(st.v2)] || st.v2;
			if (a !== st.v0 || b2 !== st.v1 || c !== st.v2) snapCount++;
			var ka = vKey(a), kb = vKey(b2), kc = vKey(c);
			if (ka === kb || kb === kc || kc === ka) continue; // collapsed
			snapped.push({ v0: a, v1: b2, v2: c });
		}
		totalSnaps += snapCount;
		cur = snapped;

		// ── (2) Fill whatever chains into loops now ──
		var lr = extractBoundaryLoops(cur);
		var caps = [];
		for (var li = 0; li < lr.loops.length; li++) {
			var lt = triangulateLoop(lr.loops[li]);
			for (var lj = 0; lj < lt.length; lj++) caps.push(lt[lj]);
		}
		totalCaps += caps.length;
		if (caps.length > 0) cur = cur.concat(caps);

		var open1 = countOpenEdges(cur).openEdges;
		if (open1 >= open0 && caps.length === 0 && snapCount === 0) break; // no progress
	}

	return { soup: cur, openBefore: openBefore, openAfter: countOpenEdges(cur).openEdges, capsAdded: totalCaps, snaps: totalSnaps };
}

/**
 * Build the edge-Steiner map: for each intersection-segment endpoint that lies
 * on a triangle EDGE, record it against EVERY triangle owning that edge, so all
 * sides split the edge at the same shared PoolVertex (conforming, no T-junction).
 *
 * Generic over representation: `triOf(t)` yields the host geometry (only the
 * segment hosts are dereferenced), `keyOf(t, cornerIdx)` yields the vertex
 * identity used for edge adjacency (vKey for soup, original index for indexed).
 *
 * @param {number} triCount
 * @param {function(number): {v0,v1,v2}} triOf
 * @param {function(number, number): (string|number)} keyOf
 * @param {Array<{ p0, p1, idxA, idxB }>} segments
 * @param {number} tol
 * @returns {Object.<number, Array<PoolVertex>>} triIdx -> edge pool vertices
 */
export function buildEdgeSteinerMap(triCount, triOf, keyOf, segments, tol) {
	var tolSq = tol * tol;

	// Edge -> owning triangles (over the whole mesh)
	var owners = {};
	function ekey(a, b) { return a < b ? a + "|" + b : b + "|" + a; }
	for (var t = 0; t < triCount; t++) {
		var k0 = keyOf(t, 0), k1 = keyOf(t, 1), k2 = keyOf(t, 2);
		var es = [ekey(k0, k1), ekey(k1, k2), ekey(k2, k0)];
		for (var e = 0; e < 3; e++) (owners[es[e]] = owners[es[e]] || []).push(t);
	}

	function onEdge(p, a, b) {
		var abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
		var l2 = abx * abx + aby * aby + abz * abz;
		if (l2 < 1e-30) return false;
		var tt = ((p.x - a.x) * abx + (p.y - a.y) * aby + (p.z - a.z) * abz) / l2;
		if (tt <= 1e-7 || tt >= 1 - 1e-7) return false; // at/near a corner, not on-edge
		var qx = a.x + tt * abx - p.x, qy = a.y + tt * aby - p.y, qz = a.z + tt * abz - p.z;
		return qx * qx + qy * qy + qz * qz <= tolSq;
	}

	var edgePoints = {};
	function add(k, V) {
		var lst = edgePoints[k] || (edgePoints[k] = []);
		for (var i = 0; i < lst.length; i++) if (lst[i] === V) return;
		lst.push(V);
	}

	for (var s = 0; s < segments.length; s++) {
		var seg = segments[s];
		var hosts = [seg.idxA, seg.idxB];
		var ends = [seg.p0, seg.p1];
		for (var h = 0; h < 2; h++) {
			var ht = hosts[h];
			var tri = triOf(ht);
			var corners = [tri.v0, tri.v1, tri.v2];
			var ckeys = [keyOf(ht, 0), keyOf(ht, 1), keyOf(ht, 2)];
			for (var en = 0; en < 2; en++) {
				var V = ends[en];
				for (var c = 0; c < 3; c++) {
					if (onEdge(V, corners[c], corners[(c + 1) % 3])) {
						var own = owners[ekey(ckeys[c], ckeys[(c + 1) % 3])];
						if (own) for (var o = 0; o < own.length; o++) add(own[o], V);
						break; // an endpoint lies on at most one edge of a given host
					}
				}
			}
		}
	}

	return edgePoints;
}

/**
 * Per-triangle segment arrangement: when 3+ sheets pass through one
 * triangle, constraint segments from DIFFERENT pairs can cross or
 * T-touch inside it — Constrainautor cannot constrain crossing edges,
 * which would break conformance. Split every segment at
 *   (a) other segments' endpoints lying in its interior, and
 *   (b) proper pairwise crossings (new shared pool vertex),
 * iterating to a fixpoint. Segments are shared objects between their two
 * host triangles, so a split made for one triangle conforms in both.
 *
 * @returns {Array} Refined segment list
 */
function refineSelfSegments(segments, soup, pool, tolerance, stats) {
	if (segments.length < 2) return segments;

	var tol = tolerance;
	var tolSq = tol * tol;
	var current = segments;

	for (var pass = 0; pass < 8; pass++) {
		// Group segment indices per host triangle
		var triSegs = {};
		for (var s = 0; s < current.length; s++) {
			var seg = current[s];
			if (!triSegs[seg.idxA]) triSegs[seg.idxA] = [];
			triSegs[seg.idxA].push(s);
			if (seg.idxB !== seg.idxA) {
				if (!triSegs[seg.idxB]) triSegs[seg.idxB] = [];
				triSegs[seg.idxB].push(s);
			}
		}

		// splitPoints[segIdx] = [PoolVertex, ...]
		var splitPoints = {};
		var anySplit = false;

		function paramOnSeg(seg, q) {
			var dx = seg.p1.x - seg.p0.x, dy = seg.p1.y - seg.p0.y, dz = seg.p1.z - seg.p0.z;
			var len2 = dx * dx + dy * dy + dz * dz;
			if (len2 < 1e-30) return null;
			var t = ((q.x - seg.p0.x) * dx + (q.y - seg.p0.y) * dy + (q.z - seg.p0.z) * dz) / len2;
			if (t <= 1e-9 || t >= 1 - 1e-9) return null;
			// perpendicular distance
			var px = seg.p0.x + t * dx - q.x;
			var py = seg.p0.y + t * dy - q.y;
			var pz = seg.p0.z + t * dz - q.z;
			if (px * px + py * py + pz * pz > tolSq) return null;
			return t;
		}

		function addSplit(si, pv) {
			if (!splitPoints[si]) splitPoints[si] = [];
			var list = splitPoints[si];
			for (var li = 0; li < list.length; li++) {
				if (list[li] === pv) return;
			}
			list.push(pv);
			anySplit = true;
		}

		for (var tk in triSegs) {
			var list = triSegs[tk];
			if (list.length < 2) continue;

			// Local 2D frame on the host triangle for crossing tests
			var hostTri = soup[tk];
			var e1x = hostTri.v1.x - hostTri.v0.x, e1y = hostTri.v1.y - hostTri.v0.y, e1z = hostTri.v1.z - hostTri.v0.z;
			var e2x = hostTri.v2.x - hostTri.v0.x, e2y = hostTri.v2.y - hostTri.v0.y, e2z = hostTri.v2.z - hostTri.v0.z;
			var nx = e1y * e2z - e1z * e2y, ny = e1z * e2x - e1x * e2z, nz = e1x * e2y - e1y * e2x;
			var nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
			if (nLen < 1e-30) continue;
			var anx = Math.abs(nx), any = Math.abs(ny), anz = Math.abs(nz);
			var getU, getV;
			if (anz >= anx && anz >= any) { getU = function (p) { return p.x; }; getV = function (p) { return p.y; }; }
			else if (any >= anx) { getU = function (p) { return p.x; }; getV = function (p) { return p.z; }; }
			else { getU = function (p) { return p.y; }; getV = function (p) { return p.z; }; }

			for (var a = 0; a < list.length; a++) {
				var sa = current[list[a]];
				for (var b = a + 1; b < list.length; b++) {
					var sb = current[list[b]];
					if (sa === sb) continue;

					// (a) T-points: endpoint of one interior to the other
					var t0 = (sb.p0 !== sa.p0 && sb.p0 !== sa.p1) ? paramOnSeg(sa, sb.p0) : null;
					if (t0 !== null) addSplit(list[a], sb.p0);
					var t1 = (sb.p1 !== sa.p0 && sb.p1 !== sa.p1) ? paramOnSeg(sa, sb.p1) : null;
					if (t1 !== null) addSplit(list[a], sb.p1);
					var t2 = (sa.p0 !== sb.p0 && sa.p0 !== sb.p1) ? paramOnSeg(sb, sa.p0) : null;
					if (t2 !== null) addSplit(list[b], sa.p0);
					var t3 = (sa.p1 !== sb.p0 && sa.p1 !== sb.p1) ? paramOnSeg(sb, sa.p1) : null;
					if (t3 !== null) addSplit(list[b], sa.p1);

					// (b) proper crossing (no shared endpoints)
					if (sa.p0 === sb.p0 || sa.p0 === sb.p1 || sa.p1 === sb.p0 || sa.p1 === sb.p1) continue;

					var a0u = getU(sa.p0), a0v = getV(sa.p0);
					var a1u = getU(sa.p1), a1v = getV(sa.p1);
					var b0u = getU(sb.p0), b0v = getV(sb.p0);
					var b1u = getU(sb.p1), b1v = getV(sb.p1);

					var d1 = (a1u - a0u) * (b0v - a0v) - (a1v - a0v) * (b0u - a0u);
					var d2 = (a1u - a0u) * (b1v - a0v) - (a1v - a0v) * (b1u - a0u);
					var d3 = (b1u - b0u) * (a0v - b0v) - (b1v - b0v) * (a0u - b0u);
					var d4 = (b1u - b0u) * (a1v - b0v) - (b1v - b0v) * (a1u - b0u);

					if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
						((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
						var tc = d1 / (d1 - d2); // param along sb? No — along sb from b0: d1,d2 are b endpoints vs line a
						// d1/(d1-d2) is the crossing parameter along segment B
						var qx = sb.p0.x + tc * (sb.p1.x - sb.p0.x);
						var qy = sb.p0.y + tc * (sb.p1.y - sb.p0.y);
						var qz = sb.p0.z + tc * (sb.p1.z - sb.p0.z);
						var pvc = pool.getOrCreate(qx, qy, qz,
							{ mesh: "A", triIdx: sa.idxA });
						pool.getOrCreate(qx, qy, qz, { mesh: "A", triIdx: sa.idxB });
						pool.getOrCreate(qx, qy, qz, { mesh: "A", triIdx: sb.idxA });
						pool.getOrCreate(qx, qy, qz, { mesh: "A", triIdx: sb.idxB });
						// Guard: pool may snap to an existing endpoint
						if (pvc !== sa.p0 && pvc !== sa.p1) addSplit(list[a], pvc);
						if (pvc !== sb.p0 && pvc !== sb.p1) addSplit(list[b], pvc);
					}
				}
			}
		}

		if (!anySplit) break;

		// Apply the splits: replace each split segment by its param-ordered chain
		var next = [];
		for (var s2 = 0; s2 < current.length; s2++) {
			var seg2 = current[s2];
			var pts = splitPoints[s2];
			if (!pts || pts.length === 0) { next.push(seg2); continue; }

			stats.refinementSplits += pts.length;

			var dx2 = seg2.p1.x - seg2.p0.x, dy2 = seg2.p1.y - seg2.p0.y, dz2 = seg2.p1.z - seg2.p0.z;
			var len22 = dx2 * dx2 + dy2 * dy2 + dz2 * dz2;
			var withT = [];
			for (var pp = 0; pp < pts.length; pp++) {
				var q2 = pts[pp];
				var tq = ((q2.x - seg2.p0.x) * dx2 + (q2.y - seg2.p0.y) * dy2 + (q2.z - seg2.p0.z) * dz2) / len22;
				withT.push({ t: tq, pv: q2 });
			}
			withT.sort(function (u, w) { return u.t - w.t; });

			var chainPrev = seg2.p0;
			for (var w2 = 0; w2 < withT.length; w2++) {
				var pvW = withT[w2].pv;
				if (pvW === chainPrev) continue;
				next.push({ p0: chainPrev, p1: pvW, idxA: seg2.idxA, idxB: seg2.idxB });
				chainPrev = pvW;
			}
			if (chainPrev !== seg2.p1) {
				next.push({ p0: chainPrev, p1: seg2.p1, idxA: seg2.idxA, idxB: seg2.idxB });
			}
		}

		current = next;
	}

	return current;
}

/**
 * Full self-arrangement: intersect + split into a conforming mega soup.
 *
 * Translates to a local origin internally (UTM/mine coordinates destroy
 * float precision) and translates the result back, unless
 * options.noTranslate is set (used by bmsSelfResolve, which keeps
 * everything local until the very end).
 *
 * @param {Array<{ v0, v1, v2 }>} soup
 * @param {Object} [options] - See bmsSelfIntersect, plus:
 * @param {boolean} [options.noTranslate] - Input is already near origin;
 *        skip the translate/untranslate and keep pool identity intact.
 * @returns {{
 *   megaSoup: Array<{ v0, v1, v2, mesh: "A", origIdx: number }>,
 *   segments: Array, crossedSet: Object, pool: Object, stats: Object
 * }}
 */
export function bmsSelfArrange(soup, options) {
	var opts = options || {};

	var cx = 0, cy = 0, cz = 0;
	var local = soup;
	if (!opts.noTranslate) {
		var centroid = soupCentroid(soup, []);
		cx = centroid.x; cy = centroid.y; cz = centroid.z;
		local = translateSoup(soup, -cx, -cy, -cz);
	}

	var isect = bmsSelfIntersect(local, opts);

	var megaSoup = bmsSplit(local, [], {
		segments: isect.segments,
		crossedSetA: isect.crossedSet,
		crossedSetB: {},
		edgePointsA: isect.edgePoints,
		pool: isect.pool
	});

	if (!opts.noTranslate && (cx !== 0 || cy !== 0 || cz !== 0)) {
		// NOTE: translating back copies vertices — pool identity survives
		// only in the local frame. Callers needing identity (bmsSelfResolve)
		// pass noTranslate and handle the offset themselves.
		var translated = new Array(megaSoup.length);
		for (var i = 0; i < megaSoup.length; i++) {
			var t = megaSoup[i];
			translated[i] = {
				v0: { x: t.v0.x + cx, y: t.v0.y + cy, z: t.v0.z + cz },
				v1: { x: t.v1.x + cx, y: t.v1.y + cy, z: t.v1.z + cz },
				v2: { x: t.v2.x + cx, y: t.v2.y + cy, z: t.v2.z + cz },
				mesh: t.mesh,
				origIdx: t.origIdx
			};
		}
		megaSoup = translated;
	}

	return {
		megaSoup: megaSoup,
		segments: isect.segments,
		crossedSet: isect.crossedSet,
		edgePoints: isect.edgePoints,
		pool: isect.pool,
		stats: isect.stats
	};
}

/**
 * One-call exact fold resolver (soup in, soup out):
 * self-arrange → winding-number extraction → coincident dedup → orient.
 *
 * @param {Array<{ v0, v1, v2 }>} soup - Closed (or nearly closed) triangle soup
 * @param {Object} [options] - bmsSelfIntersect options, plus:
 * @param {"keep"|"classify"} [options.farField="keep"] - Triangles not
 *        touched by any self-intersection: "keep" passes them through
 *        with their input orientation (folds are local — the 47k-tri
 *        target case); "classify" runs the winding test on every
 *        sub-triangle (exact, O(N x M)).
 * @param {number} [options.threshold=0.5] - Winding inside/outside cut
 * @param {boolean} [options.orient=true] - Run orientSolid on the result
 * @param {boolean} [options.preOrient=true] - Coherence-orient the winding
 *        REFERENCE soup (orientSolid step 1) before the generalized-winding
 *        queries. Self-intersection input is non-orientable by definition,
 *        so its raw per-triangle winding is inconsistent near the folds and
 *        the winding-number STEP mis-classifies there (tears holes). The
 *        coherence flood-fill makes the winding field consistent per manifold
 *        patch. Default ON; set false to reproduce the raw failure.
 * @returns {{
 *   soup: Array, changed: boolean,
 *   diagnostics: {
 *     inputTris, segments, coplanarPairs, crossingPairs, refinementSplits,
 *     crossedTris, subTris, classified, kept, dropped, flipped,
 *     duplicateGroups, duplicatesRemoved, dedupClusters,
 *     preOrient, preOrientFlips, preOrientSeamViolations,
 *     orient: Object|null
 *   }
 * }}
 */
export function bmsSelfResolve(soup, options) {
	var opts = options || {};
	var farField = opts.farField || "keep";
	var preOrient = opts.preOrient !== false; // default ON

	// Local origin for the whole pipeline (UTM precision)
	var centroid = soupCentroid(soup, []);
	var cx = centroid.x, cy = centroid.y, cz = centroid.z;
	var local = translateSoup(soup, -cx, -cy, -cz);

	var arr = bmsSelfArrange(local, Object.assign({}, opts, { noTranslate: true }));

	var diagnostics = {
		inputTris: soup.length,
		segments: arr.segments.length,
		coplanarPairs: arr.stats.coplanarPairs,
		crossingPairs: arr.stats.crossingPairs,
		refinementSplits: arr.stats.refinementSplits,
		crossedTris: Object.keys(arr.crossedSet).length,
		subTris: arr.megaSoup.length,
		classified: 0, kept: 0, dropped: 0, flipped: 0,
		duplicateGroups: 0, duplicatesRemoved: 0, dedupClusters: 0,
		preOrient: preOrient, preOrientFlips: 0, preOrientSeamViolations: 0,
		orient: null
	};

	if (arr.segments.length === 0) {
		// Nothing to resolve
		return { soup: soup, changed: false, diagnostics: diagnostics };
	}

	// Orient the winding REFERENCE (not the geometry being cut) so the
	// generalized-winding field is consistent AND correctly signed across the
	// non-orientable fold region — the fix for the "tears holes on
	// non-orientable input" case. Full orientSolid (coherence flood-fill +
	// per-component outward signed-volume direction) is required: coherence
	// alone leaves the global sign arbitrary (a BFS seed that happens to face
	// inward would negate the whole winding field and invert the classify).
	var refSoup = local;
	if (preOrient) {
		var co = orientSolid(local);
		refSoup = co.soup;
		diagnostics.preOrientFlips = co.diagnostics.flippedForCoherence;
		diagnostics.preOrientSeamViolations = co.diagnostics.windingViolationsAfter;
	}
	var windingFn = function (px, py, pz) { return windingNumber({ x: px, y: py, z: pz }, refSoup); };

	// ── Conform the arrangement: near-vertex snap-round + seam weld ──
	// Seed the ORIGINAL vertices so intersection points round onto them
	// (snap-to-vertex), closing the ~pool-tolerance T-junctions the edge-Steiner
	// pass can't reach.
	var weldTol = opts.weldTolerance !== undefined ? opts.weldTolerance : estimateAvgEdge(local) * 0.012;
	var seedVerts = [];
	for (var sv = 0; sv < local.length; sv++) { seedVerts.push(local[sv].v0, local[sv].v1, local[sv].v2); }
	var welded = weldTaggedSoup(arr.megaSoup, weldTol, seedVerts);
	diagnostics.arrangementOpenEdges = countOpenEdges(welded.soup).openEdges;

	// Barrier edges = intersection segments (mapped through the weld reps).
	var barrierKeys = {};
	for (var bs = 0; bs < arr.segments.length; bs++) {
		var seg = arr.segments[bs];
		var r0 = welded.repOf(seg.p0.x, seg.p0.y, seg.p0.z);
		var r1 = welded.repOf(seg.p1.x, seg.p1.y, seg.p1.z);
		if (r0 && r1 && r0 !== r1) barrierKeys[edgeKey(vKey(r0), vKey(r1))] = true;
	}

	// ── Classification ──
	// PRIMARY: 3-D cell-complex winding propagation (Zhou 2016) — manifold by
	// construction, dissolves non-orientable seams. It needs a WATERTIGHT
	// arrangement; where a residual hole leaks inside↔outside (a cell spanning
	// both), it is detected and we FALL BACK to the region-consistent patch
	// classifier, which preserves volume through such holes. `classifier`
	// reports which path produced the result.
	diagnostics.classified = welded.soup.length;
	var ext = null;
	var usedCellComplex = false;
	var leakLimit = opts.leakTolerance !== undefined ? opts.leakTolerance : 0.02;
	var threshold = opts.threshold !== undefined ? opts.threshold : 1;
	if (opts.classifier !== "patch") {
		// Attempt 1: cell complex on the welded arrangement as-is.
		var cellRes = extractByCellComplex(welded.soup, windingFn, { threshold: threshold, offsetSamples: opts.samplesPerPatch });
		diagnostics.cellComplex = cellRes.diagnostics;

		// Attempt 2: if it leaks (residual seam hole), CONDITION the arrangement
		// toward watertight (targeted seam snap-round + seam-loop hole-fill) and
		// retry. This is the added arrangement-fill stage; it only touches the
		// seam region, so the 15 already-watertight meshes are untouched (no open
		// edges → no-op) and volume is preserved.
		if (opts.classifier !== "cell" && cellRes.diagnostics.leakedFaceFraction > leakLimit && diagnostics.arrangementOpenEdges > 0) {
			var seamTol = opts.seamTolerance !== undefined ? opts.seamTolerance : estimateAvgEdge(local) * 0.1;
			var condInput = welded.soup;

			// Opt-in: EXACT coincident-sheet snap first (near-coincident coplanar
			// seam faces → true coincidence so facet-merge cancels them). Default
			// off ⇒ 0.6.0 path is byte-unchanged; enable for the degenerate meshes.
			if (opts.exactSeamSnap) {
				var snapTolE = opts.exactSeamTolerance !== undefined ? opts.exactSeamTolerance : seamTol;
				var snapRes = snapCoincidentSheets(welded.soup, snapTolE);
				diagnostics.exactSeamSnap = { coincidentPairs: snapRes.coincidentPairs, snappedVertices: snapRes.snappedVertices };
				condInput = snapRes.soup;
			}

			var cond = conditionArrangement(condInput, seamTol);
			diagnostics.seamOpenBefore = cond.openBefore;
			diagnostics.seamOpenAfter = cond.openAfter;
			diagnostics.seamCapsAdded = cond.capsAdded;
			var cellRes2 = extractByCellComplex(cond.soup, windingFn, { threshold: threshold, offsetSamples: opts.samplesPerPatch });
			diagnostics.cellComplexConditioned = cellRes2.diagnostics;
			if (cellRes2.diagnostics.leakedFaceFraction < cellRes.diagnostics.leakedFaceFraction) {
				cellRes = cellRes2; // conditioning / exact-snap helped
				diagnostics.cellComplex = cellRes2.diagnostics;
			}
			// NOTE: the patch fallback deliberately stays on the ORIGINAL welded
			// arrangement + barrierKeys (proven volume-safe), so a leak that the
			// exact-snap could not close never regresses the shipped patch result.
		}

		if (opts.classifier === "cell" || cellRes.diagnostics.leakedFaceFraction <= leakLimit) {
			ext = { kept: cellRes.kept };
			usedCellComplex = true;
		}
	}
	if (!usedCellComplex) {
		// Volume-safe fallback: patch classifier on the ORIGINAL welded arrangement
		// (unconditioned), so a genuinely-degenerate seam that could not close never
		// regresses the shipped patch result.
		var patchOpts = { threshold: opts.threshold, offsetFactor: opts.offsetFactor, samplesPerPatch: opts.samplesPerPatch };
		var pext = extractByWindingPatches(welded.soup, barrierKeys, windingFn, patchOpts);
		ext = { kept: pext.kept };
		diagnostics.patches = pext.patches;
		diagnostics.keptPatches = pext.keptPatches;
		diagnostics.droppedPatches = pext.droppedPatches;
	}
	diagnostics.classifier = usedCellComplex ? "cell-complex" : "patch";
	diagnostics.dropped = welded.soup.length - ext.kept.length;

	// Drop exact coincident duplicates (both sheets of a boundary double get kept
	// and oriented outward → identical → keep one). Non-destructive (no re-CDT).
	var combined = exactCoincidentDedup(ext.kept);
	diagnostics.duplicatesRemoved = ext.kept.length - combined.length;
	diagnostics.kept = combined.length;

	// Coherent outward orientation — possible now that the folds are resolved.
	var finalLocal = combined;
	if (opts.orient !== false) {
		var orientRes = orientSolid(combined);
		finalLocal = orientRes.soup;
		diagnostics.orient = orientRes.diagnostics;
	}
	// Final seam weld (snap-to-vertex) to settle the kept boundary.
	finalLocal = weldTaggedSoup(finalLocal, weldTol, seedVerts).soup;

	var out = translateSoup(finalLocal, cx, cy, cz);
	return { soup: out, changed: true, diagnostics: diagnostics };
}

/**
 * Remove EXACT coincident duplicate triangles (same three vertices by vKey,
 * any winding) — keeps one. Non-destructive: no re-triangulation, so it never
 * opens the mesh (unlike the cluster re-CDT dedup).
 * @param {Array} soup
 * @returns {Array}
 */
function exactCoincidentDedup(soup) {
	var seen = {};
	var out = [];
	for (var i = 0; i < soup.length; i++) {
		var t = soup[i];
		var ks = [vKey(t.v0), vKey(t.v1), vKey(t.v2)].sort();
		var k = ks[0] + "#" + ks[1] + "#" + ks[2];
		if (seen[k]) continue;
		seen[k] = 1;
		out.push(t);
	}
	return out;
}
