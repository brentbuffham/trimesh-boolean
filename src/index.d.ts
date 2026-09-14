/**
 * trimesh-boolean — TypeScript declarations
 */

// ── Core Types ──

export interface Vertex {
	x: number;
	y: number;
	z: number;
}

export interface Triangle {
	v0: Vertex;
	v1: Vertex;
	v2: Vertex;
}

export type TriangleSoup = Triangle[];

export interface WeldedTriangle {
	vertices: [Vertex, Vertex, Vertex];
}

export interface WeldedMesh {
	points: Vertex[];
	triangles: WeldedTriangle[];
}

export interface AABB {
	minX: number;
	maxX: number;
	minY: number;
	maxY: number;
	minZ: number;
	maxZ: number;
}

export interface Segment {
	p0: Vertex;
	p1: Vertex;
}

export interface TaggedSegment extends Segment {
	idxA: number;
	idxB: number;
}

export interface BooleanResult {
	soup: TriangleSoup;
	points: Vertex[];
	triangles: WeldedTriangle[];
}

export interface RepairConfig {
	closeMode?: "none" | "weld" | "stitch" | "closeSolid";
	snapTolerance?: number;
	stitchTolerance?: number;
	removeDegenerate?: boolean;
	sliverRatio?: number;
	cleanCrossings?: boolean;
	removeOverlapping?: boolean;
	overlapTolerance?: number;
	/** closeSolid only: loops larger than this are reported, never capped */
	maxCapLoopVerts?: number;
}

export interface RepairResult {
	soup: TriangleSoup;
	points: Vertex[];
	triangles: WeldedTriangle[];
	/** Present when closeMode === "closeSolid" */
	diagnostics?: CloseSolidDiagnostics;
}

export interface CloseSolidDiagnostics {
	closed: boolean;
	openEdges: number;
	openLoops: number;
	loopSizes: number[];
	skippedLargeLoops: number[];
	cappedLoops: number;
	capTriangles: number;
	nonManifoldEdges: number;
}

export interface CloseSolidOptions {
	snapTolerance?: number;
	maxCapLoopVerts?: number;
	maxPasses?: number;
}

export interface CloseSolidResult {
	soup: TriangleSoup;
	points: Vertex[];
	triangles: WeldedTriangle[];
	diagnostics: CloseSolidDiagnostics;
}

export interface EdgeStats {
	openEdges: number;
	overShared: number;
	total: number;
}

export interface BoundaryLoopResult {
	loops: Vertex[][];
	boundaryEdgeCount: number;
	overSharedEdgeCount: number;
}

// ── Core Boolean API ──

export interface SplitResult {
	groups: {
		aInside: TriangleSoup;
		aOutside: TriangleSoup;
		bInside: TriangleSoup;
		bOutside: TriangleSoup;
	};
	segments: TaggedSegment[];
}

export interface BooleanOptions {
	/** Resolve T-junctions and weld boundary vertices on inputs before splitting */
	preRepair?: boolean;
	/** Fill closed open-edge loops with fan triangles after the boolean */
	fillGaps?: boolean;
	/** Force-close via spatial-proximity indexed fill after the boolean */
	forceClose?: boolean;
	/** Vertex snapping tolerance for pre-repair / fill (default: avgEdge * 0.01) */
	tolerance?: number;
	/** Max T-junction resolution passes (default: 3) */
	tjunctionPasses?: number;
}

export function boolean(
	soupA: TriangleSoup,
	soupB: TriangleSoup,
	operation: "subtract" | "union" | "intersect",
	options?: BooleanOptions
): BooleanResult | null;

export function splitMeshPair(
	soupA: TriangleSoup,
	soupB: TriangleSoup
): SplitResult | null;

export function mergeSplitGroups(
	groups: SplitResult["groups"],
	operation: "subtract" | "union" | "intersect"
): BooleanResult | null;

export interface SplitSelection {
	/** Include A-inside-B triangles; "flip" reverses normals */
	aInside?: boolean | "flip";
	/** Include A-outside-B triangles; "flip" reverses normals */
	aOutside?: boolean | "flip";
	/** Include B-inside-A triangles; "flip" reverses normals */
	bInside?: boolean | "flip";
	/** Include B-outside-A triangles; "flip" reverses normals */
	bOutside?: boolean | "flip";
}

export function selectSplits(
	groups: SplitResult["groups"],
	selection: SplitSelection
): BooleanResult | null;

export interface SplitComponent {
	/** Which input mesh: "A" or "B" */
	mesh: "A" | "B";
	/** Classification relative to the other mesh */
	side: "inside" | "outside";
	/** Component index within its group (0 = largest) */
	index: number;
	/** The triangles in this component */
	soup: TriangleSoup;
	/** Number of triangles */
	triCount: number;
}

export function splitToComponents(
	groups: SplitResult["groups"],
	options?: { pooled?: boolean; tolerance?: number }
): SplitComponent[];

export function mergeSmallComponents(
	comps: SplitComponent[],
	threshold?: number
): SplitComponent[];

export function mergeComponents(
	picks: Array<{ soup: TriangleSoup; flip?: boolean }>
): BooleanResult | null;

// ── Intersection ──

export function intersectMeshPair(trisA: TriangleSoup, trisB: TriangleSoup): Segment[];
export function intersectMeshPairTagged(trisA: TriangleSoup, trisB: TriangleSoup): TaggedSegment[];
export function triTriIntersection(triA: Triangle, triB: Triangle): Segment | null;
export function triTriIntersectionDetailed(triA: Triangle, triB: Triangle): { dA: [number, number, number]; dB: [number, number, number]; segLen: number } | null;
export function chainSegments(segments: Segment[], threshold: number): Vertex[][];
export function simplifyPolyline(points: Vertex[], spacing: number): Vertex[];
export function buildSpatialGrid(tris: TriangleSoup, cellSize: number): Record<string, number[]>;
export function buildSpatialGridOnAxes(tris: TriangleSoup, cellSize: number, getA: (v: Vertex) => number, getB: (v: Vertex) => number): Record<string, number[]>;
export function queryGrid(grid: Record<string, number[]>, bb: { minX: number; maxX: number; minY: number; maxY: number }, cellSize: number): number[];
export function queryGridOnAxes(grid: Record<string, number[]>, a: number, b: number, cellSize: number): number[];
export function computeBBox(tris: TriangleSoup): AABB;
export function triBBox(tri: Triangle): AABB;
export function bboxOverlap(a: AABB, b: AABB): boolean;
export function estimateAvgEdge(tris: TriangleSoup): number;

// ── Repair ──

export function repairMesh(soup: TriangleSoup, config?: RepairConfig, onProgress?: (msg: string) => void): Promise<RepairResult>;
export function deduplicateSeamVertices(tris: TriangleSoup, tolerance?: number): TriangleSoup;
export function resolveTJunctions(soup: TriangleSoup, tolerance?: number, maxPasses?: number): TriangleSoup;
/** Hole-free T-junction resolution: shared welded identity so triangles across an edge split it identically (no cracks). */
export function resolveTJunctionsHoleFree(soup: TriangleSoup, tolerance?: number, maxPasses?: number): TriangleSoup;
/** Cancel opposite-winding coincident triangle pairs (zero-thickness membranes). Stricter/safer than removeOverlappingTriangles. */
export function cancelCoincidentFaces(soup: TriangleSoup, tolerance?: number): TriangleSoup;
export function weldVertices(tris: TriangleSoup, tolerance: number): WeldedMesh;
export function weldedToSoup(weldedTriangles: WeldedTriangle[]): TriangleSoup;
export function removeDegenerateTriangles(tris: TriangleSoup, minArea?: number, sliverRatio?: number): TriangleSoup;
export function extractBoundaryLoops(tris: TriangleSoup): BoundaryLoopResult;
export function triangulateLoop(loop: Vertex[]): TriangleSoup;
export function capBoundaryLoops(tris: TriangleSoup): TriangleSoup;
export function capBoundaryLoopsSequential(soup: TriangleSoup, snapTol: number, maxPasses?: number): TriangleSoup;
export function stitchByProximity(tris: TriangleSoup, stitchTolerance?: number): TriangleSoup;
export function cleanCrossingTriangles(tris: TriangleSoup): TriangleSoup;
export function removeOverlappingTriangles(tris: TriangleSoup, tolerance?: number): TriangleSoup;
export function forceCloseIndexedMesh(points: Vertex[], triangles: WeldedTriangle[]): WeldedMesh;
export function fillOpenEdgeLoops(soup: TriangleSoup, tolerance?: number): TriangleSoup;
export function closeSolid(soup: TriangleSoup, options?: CloseSolidOptions): CloseSolidResult;

export interface OrientSolidDiagnostics {
	components: number;
	flippedForCoherence: number;
	componentsFlippedForDirection: number;
	windingViolationsBefore: number;
	windingViolationsAfter: number;
	signedVolume: number;
	closedComponents: number;
	openComponents: number;
}

export interface OrientSolidResult {
	soup: TriangleSoup;
	diagnostics: OrientSolidDiagnostics;
}

export function orientSolid(soup: TriangleSoup, options?: { outward?: boolean; coherenceOnly?: boolean }): OrientSolidResult;
export function weldBoundaryVertices(tris: TriangleSoup, tolerance: number): TriangleSoup;

// ── Mesh format conversion aliases ──
/** Alias for weldVertices — converts triangle soup to indexed mesh */
export function soupToIndexed(tris: TriangleSoup, tolerance: number): WeldedMesh;
/** Alias for weldedToSoup — converts indexed triangles back to triangle soup */
export function indexedToSoup(weldedTriangles: WeldedTriangle[]): TriangleSoup;

// ── Indexed group output ──

export interface SoupGroups {
	aInside?: TriangleSoup;
	aOutside?: TriangleSoup;
	bInside?: TriangleSoup;
	bOutside?: TriangleSoup;
}

/** Per-group triangles as [i,j,k] index triples into a shared points pool. */
export interface IndexedGroups {
	points: Vertex[];
	groups: {
		aInside: number[][];
		aOutside: number[][];
		bInside: number[][];
		bOutside: number[][];
	};
}

/**
 * Convert soup split groups into a compact indexed representation: one shared
 * vertex pool + per-group [i,j,k] triples. Also available directly on a
 * bmsBooleanOp result via `{ indexed: true }`.
 */
export function indexGroups(groups: SoupGroups, tolerance?: number): IndexedGroups;

/** Flatten indexed groups into a shared Float64Array of positions + per-group Uint32Array indices. */
export function indexGroupsToTypedArrays(indexed: IndexedGroups): {
	positions: Float64Array;
	index: { aInside: Uint32Array; aOutside: Uint32Array; bInside: Uint32Array; bOutside: Uint32Array };
};

// ── Normals ──

export function triNormal(tri: Triangle): Vertex;
export function ensureZUpNormals(tris: TriangleSoup): TriangleSoup;
export function flipAllNormals(tris: TriangleSoup): TriangleSoup;
export function classifyNormalDirection(tris: TriangleSoup, isClosed: boolean, signedVolume: number): string;
export function computeSignedVolume(tris: TriangleSoup): number;
export function computeProjectedArea(tris: TriangleSoup, plane: "xy" | "yz" | "xz"): number;
export function compute3DSurfaceArea(tris: TriangleSoup): number;

// ── Boolean internals (advanced) ──

export interface MultiAxisGrids {
	xy: { grid: Record<string, number[]>; cellSize: number };
	yz: { grid: Record<string, number[]>; cellSize: number };
	xz: { grid: Record<string, number[]>; cellSize: number };
}

export function classifyPointMultiAxis(point: Vertex, otherTris: TriangleSoup, grids: MultiAxisGrids): 1 | -1;
export function classifyByFloodFill(tris: TriangleSoup, crossedMap: Record<number, TaggedSegment[]>, otherTris: TriangleSoup, otherGrids: MultiAxisGrids): Int8Array;
export function retriangulateWithSteinerPoints(tri: Triangle, segments: Segment[]): TriangleSoup;
export function buildCurtainAndCap(tris: TriangleSoup, floorOffset?: number): TriangleSoup;
export function generateClosingTriangles(tris: TriangleSoup, maxDist: number): TriangleSoup;

// ── Utilities ──

export function dist3(a: Vertex, b: Vertex): number;
export function distSq3(a: Vertex, b: Vertex): number;
export function triangleArea3D(tri: Triangle): number;
export function computeBounds(points: Vertex[]): AABB;
export function cross(a: Vertex, b: Vertex): Vertex;
export function lerpVert(a: Vertex, b: Vertex, t: number): Vertex;
export function vKey(v: Vertex): string;
export function edgeKey(ka: string, kb: string): string;
export function countOpenEdges(tris: TriangleSoup): EdgeStats;
export function findConnectedComponents(soup: TriangleSoup): TriangleSoup[];

/**
 * Integer-id ("pooled") twin of findConnectedComponents — an opt-in fast path for large
 * soups. Same shared-edge adjacency and largest-first ordering, but vertices are hashed to
 * integer ids so the edge map avoids toFixed string keys. Identical result on clean input.
 */
export function findConnectedComponentsPooled(
	soup: TriangleSoup,
	options?: { tolerance?: number }
): TriangleSoup[];

// ── Indexed connected components (integer-id, soup-free) ──

/** A triangle as an [i, j, k] triple of indices into a shared points pool. */
export type IndexedTri = [number, number, number];

/**
 * Connected components of an already-indexed mesh via shared-vertex union-find.
 * O(N·α(N)), no soup, no string keys. Connectivity is shared-vertex (see module note);
 * for an exact edge-based equivalent on soup use findConnectedComponentsPooled.
 */
export function connectedComponentsIndexed(tris: IndexedTri[]): IndexedTri[][];

export interface IndexedComponent {
	/** "A" | "B" — which input mesh it came from */
	mesh: string;
	/** "inside" | "outside" — relative to the other mesh */
	side: string;
	/** Source group key: "aInside" | "aOutside" | "bInside" | "bOutside" */
	group: string;
	/** Component index within its group (0 = largest) */
	index: number;
	/** Shared vertex pool (same reference across all components) */
	points: Vertex[];
	/** This component's triangles as [i,j,k] triples into `points` */
	triangles: IndexedTri[];
	/** Number of triangles */
	triCount: number;
}

/**
 * Decompose the four indexed groups (from indexGroups or bmsBooleanOp({ indexed: true }))
 * into connected components, mirroring splitToComponents but keeping the indexed form.
 */
export function decomposeIndexedGroups(indexed: IndexedGroups, smallThreshold?: number): IndexedComponent[];

/** Fold indexed components below `threshold` triangles into the largest component. */
export function mergeSmallIndexedComponents(comps: IndexedTri[][], threshold: number): IndexedTri[][];

// ── Self-intersection fold resolver (mesh arrangement + winding number) ──

/** Shared-pool vertex — deduplicated by tolerance, identity-comparable. */
export interface PoolVertex extends Vertex {
	id: number;
	triRefs: Array<{ mesh: string; triIdx: number }>;
}

/** Shared vertex pool (createVertexPool). */
export interface VertexPool {
	getOrCreate(x: number, y: number, z: number, triRef?: { mesh: string; triIdx: number }): PoolVertex;
	getAll(): PoolVertex[];
	size(): number;
}

/** Mega-soup triangle: split output tagged with source mesh + original index. */
export interface MegaSoupTriangle extends Triangle {
	mesh: string;
	origIdx: number;
}

/** Convex coplanar overlap polygon of two triangles (the fold primitive). */
export function coplanarOverlap(
	triA: Triangle,
	triB: Triangle,
	options?: { nearParallel?: number; distTolerance?: number; weldTolerance?: number; minAreaRatio?: number }
): { polygon: Vertex[]; area: number; areaRatio: number } | null;

/** Emit overlap-polygon edges as pool-shared intersection segments. */
export function emitCoplanarSegments(
	polygon: Vertex[],
	pool: VertexPool,
	refA: { mesh: string; triIdx: number },
	refB: { mesh: string; triIdx: number }
): TaggedSegment[];

export interface SelfIntersectStats {
	candidatePairs: number;
	coplanarPairs: number;
	crossingPairs: number;
	refinementSplits: number;
	edgeSteinerPoints?: number;
	edgeSteinerTris?: number;
}

/**
 * Build the edge-Steiner map: intersection-segment endpoints lying ON triangle
 * edges, registered against every triangle owning that edge, so all sides split
 * the edge at the same shared PoolVertex (conforming, no T-junction).
 */
export function buildEdgeSteinerMap(
	triCount: number,
	triOf: (t: number) => Triangle,
	keyOf: (t: number, cornerIdx: number) => string | number,
	segments: TaggedSegment[],
	tol: number
): Record<number, PoolVertex[]>;

/** Self-intersect one soup: Moller crossings + coplanar folds through one shared pool. */
export function bmsSelfIntersect(
	soup: TriangleSoup,
	options?: { tolerance?: number; minAreaRatio?: number; coplanarDistTolerance?: number }
): { segments: TaggedSegment[]; crossedSet: Record<number, TaggedSegment[]>; pool: VertexPool; stats: SelfIntersectStats };

/** Self-arrangement: intersect + conforming split into a mega soup. */
export function bmsSelfArrange(
	soup: TriangleSoup,
	options?: { tolerance?: number; minAreaRatio?: number; noTranslate?: boolean }
): { megaSoup: MegaSoupTriangle[]; segments: TaggedSegment[]; crossedSet: Record<number, TaggedSegment[]>; pool: VertexPool; stats: SelfIntersectStats };

export interface SelfResolveDiagnostics {
	inputTris: number;
	segments: number;
	coplanarPairs: number;
	crossingPairs: number;
	refinementSplits: number;
	crossedTris: number;
	subTris: number;
	classified: number;
	kept: number;
	dropped: number;
	flipped: number;
	duplicateGroups?: number;
	duplicatesRemoved: number;
	dedupClusters?: number;
	preOrient: boolean;
	preOrientFlips: number;
	preOrientSeamViolations: number;
	/** Open edges of the CONFORMING arrangement (welded), before winding drop. */
	arrangementOpenEdges?: number;
	/** Region-consistent (patch) classification stats (when the patch path runs). */
	patches?: number;
	keptPatches?: number;
	droppedPatches?: number;
	/** "cell-complex" or "patch" — which classifier produced the result. */
	classifier?: string;
	/** cell-complex stats (always computed unless classifier:"patch"). */
	cellComplex?: CellComplexDiagnostics;
	orient: OrientSolidDiagnostics | null;
}

/**
 * One-call exact fold resolver (soup in, soup out): self-arrange →
 * winding-number extraction → coincident dedup → orientSolid.
 */
export function bmsSelfResolve(
	soup: TriangleSoup,
	options?: {
		tolerance?: number;
		minAreaRatio?: number;
		farField?: "keep" | "classify";
		threshold?: number;
		offsetFactor?: number;
		samplesPerPatch?: number;
		weldTolerance?: number;
		classifier?: "cell" | "patch";
		leakTolerance?: number;
		seamTolerance?: number;
		/** Opt-in (default false): EXACT coincident-sheet snap in the leak-recovery. */
		exactSeamSnap?: boolean;
		exactSeamTolerance?: number;
		orient?: boolean;
		preOrient?: boolean;
	}
): { soup: TriangleSoup; changed: boolean; diagnostics: SelfResolveDiagnostics };

/** Snap intersection-segment endpoints within snapTol of an original vertex onto it. */
export function snapEndpointsToVertices(soup: TriangleSoup, segments: TaggedSegment[], snapTol: number): number;

/**
 * Condition a nearly-conforming arrangement toward watertight — targeted seam
 * snap-round (open-edge vertices only) + seam-loop hole-fill, iterated. No-op on
 * a watertight input. Preserves volume by touching only the seam region.
 */
export function conditionArrangement(
	soup: TriangleSoup,
	seamTol: number,
	maxPasses?: number
): { soup: TriangleSoup; openBefore: number; openAfter: number; capsAdded: number; snaps: number };

/**
 * EXACT coincident-sheet snapping: snap near-coincident coplanar face pairs
 * (coplanarity via robust orient3d) to TRUE coincidence so the cell-complex
 * facet-merge cancels opposite coplanar sub-faces and the radial fan becomes
 * unambiguous. Only coincident-pair vertices move (≤ tol) → volume preserved.
 */
export function snapCoincidentSheets(
	soup: TriangleSoup,
	tol: number
): { soup: TriangleSoup; snappedVertices: number; coincidentPairs: number };

/** Weld a tagged soup to shared representative vertices (mesh/origIdx preserved). */
export function weldTaggedSoup(
	soup: Array<Triangle & { mesh?: string; origIdx?: number }>,
	tol: number,
	seedVertices?: Vertex[]
): { soup: Array<Triangle & { mesh?: string; origIdx?: number }>; repOf: (x: number, y: number, z: number) => Vertex | null };

/** Region-consistent (patch) winding classification — one decision per patch. */
export function extractByWindingPatches(
	subTris: TriangleSoup,
	barrierKeys: Record<string, boolean>,
	windingFn: (px: number, py: number, pz: number) => number,
	options?: { threshold?: number; offsetFactor?: number; samplesPerPatch?: number }
): { kept: TriangleSoup; patches: number; keptPatches: number; droppedPatches: number };

export interface CellComplexDiagnostics {
	faces: number; edges: number; cells: number; components: number;
	windingMin: number; windingMax: number;
	propagationViolations: number;
	openEdges: number; nonManifoldEdges: number; degenerateFaces: number;
	/** cells whose interior GWN samples are mixed (inside↔outside merged via a hole) */
	leakedCells: number;
	/** face-weight fraction in leaked cells — caller falls back above ~0.02 */
	leakedFaceFraction: number;
}

/**
 * Volumetric winding extraction via a 3-D cell complex (Zhou et al. 2016):
 * radial edge fans → cells → per-cell winding → keep faces between inside
 * (≥threshold) and outside cells. Manifold by construction. Needs a watertight
 * arrangement; where a residual hole leaks inside↔outside, `leakedFaceFraction`
 * flags it so the caller can fall back to the patch classifier.
 */
export function extractByCellComplex(
	soup: TriangleSoup,
	windingFn: (px: number, py: number, pz: number) => number,
	options?: { threshold?: number; offsetFactor?: number; offsetSamples?: number; debug?: boolean }
): { kept: TriangleSoup; diagnostics: CellComplexDiagnostics };

export interface SelfResolveIndexedDiagnostics {
	inputTris: number;
	bandTris: number;
	segments: number;
	coplanarPairs: number;
	crossingPairs: number;
	refinementSplits: number;
	subTris: number;
	kept: number;
	dropped: number;
	flipped: number;
	duplicateGroups: number;
	duplicatesRemoved: number;
	dedupClusters: number;
	preOrient: boolean;
	preOrientFlips: number;
	preOrientSeamViolations: number;
	edgeSteinerPoints?: number;
	edgeSteinerTris?: number;
	newVertices: number;
	outputTris: number;
}

/**
 * INDEXED, narrow-band fold resolver: candidate detection on raw typed
 * arrays, arrangement + winding classification on the band only, far
 * triangles pass through by index. Cost scales with fold count, not mesh size.
 */
export function bmsSelfResolveIndexed(
	mesh: { positions: Float64Array | number[]; index: Uint32Array | number[] },
	options?: { tolerance?: number; minAreaRatio?: number; threshold?: number; offsetFactor?: number; preOrient?: boolean }
): { positions: Float64Array; index: Uint32Array; changed: boolean; diagnostics: SelfResolveIndexedDiagnostics };

/** Signed solid angle (Van Oosterom & Strackee) of triangle abc from point p. */
export function solidAngleAt(
	px: number, py: number, pz: number,
	ax: number, ay: number, az: number,
	bx: number, by: number, bz: number,
	cx: number, cy: number, cz: number
): number;

/** Signed solid angle of a soup triangle from point p. */
export function solidAngle(p: Vertex, tri: Triangle): number;

/** Generalized winding number (Jacobson 2013) of p w.r.t. a soup. */
export function windingNumber(p: Vertex, soup: TriangleSoup): number;

/** Generalized winding number over raw typed arrays (no soup). */
export function windingNumberIndexed(
	px: number, py: number, pz: number,
	positions: Float64Array | number[],
	index: Uint32Array | number[]
): number;

/** Winding-number STEP extraction — keep sub-triangles on the solid boundary. */
export function extractByWinding(
	subTris: TriangleSoup,
	windingFn: (px: number, py: number, pz: number) => number,
	options?: { threshold?: number; offsetFactor?: number }
): { kept: TriangleSoup; dropped: number; flipped: number; keptFlags: Uint8Array; flipFlags: Uint8Array };

/** Remove coincident duplicate sheets (exact triples + cluster re-CDT). */
export function dedupCoincidentTriangles(
	tris: TriangleSoup,
	options?: { minAreaRatio?: number }
): { soup: TriangleSoup; duplicateGroups: number; duplicatesRemoved: number; clusters: number; clusterTrisIn: number; clusterTrisOut: number };

// ── Output invariant verification ────────────────────────────────────────────

/** One invariant checked by {@link verifyOutput}. */
export interface OutputCheck {
	/** Invariant name, e.g. "consistentWinding", "noTJunctions". */
	check: string;
	/** Did it hold? */
	ok: boolean;
	/** Number of violations; 0 when ok. */
	count: number;
	/** Human-readable summary. */
	detail: string;
}

export interface VerifyOutputResult {
	/** True only when every check held. */
	ok: boolean;
	checks: OutputCheck[];
	stats: {
		triangles: number;
		vertices: number;
		openEdges: number;
		nonManifoldEdges: number;
		area: number;
	};
}

/**
 * Read-only invariant check on a finished triangle soup: degenerates,
 * duplicate triangles, winding consistency across shared edges, non-manifold
 * edges, T-junctions, and (optionally) closure. Mutates nothing.
 */
export function verifyOutput(
	soup: TriangleSoup,
	options?: {
		/** Weld epsilon. Default: estimateWeldEps(soup). */
		tolerance?: number;
		/** Require a closed solid (no open edges). Open surfaces pass by default. */
		expectClosed?: boolean;
		/** Area below which a triangle counts as degenerate. Default: tolerance^2 / 2. */
		minArea?: number;
	}
): VerifyOutputResult;

// ── Repair assessment and finishing ──────────────────────────────────────────

export interface RepairAssessment {
	/** True when the candidate would damage the mesh in any measured way. */
	harmful: boolean;
	/** "keep" only when the candidate strictly reduces total violations. */
	recommend: "keep" | "discard";
	benefits: string[];
	damage: string[];
	before: VerifyOutputResult;
	after: VerifyOutputResult;
	violationsBefore: number;
	violationsAfter: number;
	trisDelta: number;
	volumeDeltaPct: number;
}

/** Total invariant violations across a verifyOutput report. */
export function violationCount(report: VerifyOutputResult): number;

/**
 * Diff two soups and report whether a candidate repair helps or harms.
 * Run the repair on a copy, then pass both here.
 */
export function assessRepair(
	before: TriangleSoup,
	after: TriangleSoup,
	options?: {
		/** Volume drift beyond this percentage counts as damage. Default 0.5. */
		volumeTolPct?: number;
		/** Weld epsilon, applied to BOTH measurements so they are comparable. */
		tolerance?: number;
		expectClosed?: boolean;
		minArea?: number;
	}
): RepairAssessment;

/** Render an assessment as plain text. */
export function describeAssessment(assessment: RepairAssessment): string;

export interface FinishStage {
	name: string;
	run: (soup: TriangleSoup, ctx: { tolerance: number; options: object }) => TriangleSoup;
}

export interface FinishMeshResult {
	soup: TriangleSoup;
	ok: boolean;
	before: VerifyOutputResult;
	after: VerifyOutputResult;
	applied: string[];
	skipped: Array<{ stage: string; reason: string; violations: string }>;
	stages: Array<{ stage: string; assessment: RepairAssessment }>;
}

/** The default finishing stages: dedupCoincident, resolveTJunctionsHoleFree, orientWinding. */
export const DEFAULT_STAGES: FinishStage[];

/**
 * Bring a soup up to the output contract — no duplicates, no degenerates,
 * consistent winding, no T-junctions — applying each stage ONLY where it
 * measurably reduces violations. Never returns geometry worse than its input.
 */
export function finishMesh(
	soup: TriangleSoup,
	options?: {
		tolerance?: number;
		expectClosed?: boolean;
		minArea?: number;
		volumeTolPct?: number;
		/** Override the stage list (advanced). */
		stages?: FinishStage[];
		/** Skip the gate entirely. Debugging only — this lets damage through. */
		force?: boolean;
	}
): FinishMeshResult;

// ── BMS pipeline ─────────────────────────────────────────────────────────────
// The BMS path targets OPEN, non-watertight, often non-manifold surfaces
// (terrain, DTMs, mining shells). These declarations were missing entirely
// until 0.7.1, so the README's BMS examples were untyped.

/** One post-condition checked by verifyBmsClassification. */
export interface BmsVerificationFailure {
	/** "partition" | "chainClosure" | "barrierConstraint" */
	check: string;
	mesh: "A" | "B" | "both";
	detail: string;
}

export interface BmsVerification {
	ok: boolean;
	failures: BmsVerificationFailure[];
	counts: {
		A: { inside: number; outside: number };
		B: { inside: number; outside: number };
	};
}

export interface BmsBooleanOptions {
	/**
	 * Classification strategy.
	 * - "auto" (default): census the inputs, run the hybrid classifier, verify the
	 *   post-conditions, and on any failure re-run ONLY classification with the
	 *   heffalump on the existing mega soup (no re-split).
	 * - "hybrid": always hybrid, no verification (legacy behaviour).
	 * - "heffalump": always heffalump.
	 */
	classifier?: "auto" | "hybrid" | "heffalump";
	/** Deprecated alias for classifier: "heffalump". */
	forceHeffalump?: boolean;
	/**
	 * Resolve T-junctions and weld boundaries before splitting. Defaults to on
	 * when classifier is "auto" AND the census finds non-manifold edges — note
	 * that census inspects the INPUT and can report clean on meshes that do
	 * contain T-junctions, so pass it explicitly if you need it.
	 */
	preRepair?: boolean;
	/** Vertex pool tolerance. */
	tolerance?: number;
	/**
	 * Emit barrier segments for exactly-coplanar A-vs-B pairs (coincident sheets,
	 * shared faces). Default true; set false for pre-0.6.6 behaviour.
	 */
	coplanar?: boolean;
	/** Coplanar overlap area gate. */
	minAreaRatio?: number;
	/** Also attach `result.indexed`, a compact indexed twin of the groups. */
	indexed?: boolean;
}

export interface BmsBooleanResult {
	groups: SoupGroups;
	segments: TaggedSegment[];
	polylines: unknown[];
	/** Null when the inputs did not intersect. */
	megaSoup: MegaSoupTriangle[] | null;
	pool: VertexPool;
	classifier: { A: string; B: string };
	/**
	 * Null when classification was not verified, OR when the meshes are provably
	 * apart. Since 0.6.6 a zero-segment result whose bounding boxes interpenetrate
	 * returns a "no-segments-but-bboxes-overlap" failure instead of null, so an
	 * empty result is never silently reported as confirmed.
	 */
	verification: BmsVerification | null;
	/** Present when `{ indexed: true }` was passed. */
	indexed?: IndexedGroups;
}

/**
 * Run the full BMS boolean pipeline — shared Steiner vertex pool, hybrid
 * classification with auto heffalump fallback, and post-condition verification.
 * Omit `operation` to get the split groups only.
 */
export function bmsBooleanOp(
	soupA: TriangleSoup,
	soupB: TriangleSoup,
	operation?: "subtract" | "union" | "intersect" | null,
	options?: BmsBooleanOptions
): BmsBooleanResult | null;

/** Verify the hybrid classification's partition / chain-closure / barrier post-conditions. */
export function verifyBmsClassification(
	megaSoup: MegaSoupTriangle[],
	triSides: Int8Array | number[],
	segments: TaggedSegment[],
	polylines: unknown[],
	trisA: TriangleSoup,
	trisB: TriangleSoup
): BmsVerification;

/**
 * Census two inputs for non-manifold edges — the signal that the hybrid
 * classifier's boundary topology cannot be trusted and the heffalump should run.
 */
export function shouldUseHeffalump(trisA: TriangleSoup, trisB: TriangleSoup): boolean;

/** Barrier-only classification that needs no boundary topology. */
export function heffalumpClassify(
	megaSoup: MegaSoupTriangle[],
	segments: TaggedSegment[],
	trisA: TriangleSoup,
	trisB: TriangleSoup,
	options?: {
		snapThreshold?: number;
		maxSnapStragglers?: number;
		[key: string]: unknown;
	}
): { triSides: Int8Array; report?: { A: string; B: string }; [key: string]: unknown };

/**
 * Triangle-triangle intersection across two meshes with a shared vertex pool, so
 * both meshes receive the SAME PoolVertex object at each intersection location.
 */
export function bmsIntersect(
	trisA: TriangleSoup,
	trisB: TriangleSoup,
	options?: {
		tolerance?: number;
		/** Emit overlap-polygon segments for coplanar pairs. Default true. */
		coplanar?: boolean;
		minAreaRatio?: number;
	}
): {
	segments: TaggedSegment[];
	crossedSetA: Record<number, TaggedSegment[]>;
	crossedSetB: Record<number, TaggedSegment[]>;
	pool: VertexPool;
	/** Segments contributed by the coplanar fallback. */
	coplanarPairs: number;
};

/**
 * Create a shared vertex pool. Identity is object `===` plus an integer `id`,
 * not a quantised string key.
 */
export function createVertexPool(tolerance?: number): VertexPool;

/** Fan-triangulate a triangle against constraint segments. */
export function fanTriangulate(tri: Triangle, segments: Segment[]): TriangleSoup;

/**
 * Near-parallel reject gate for triTriIntersection, as |nA . nB|.
 * Lowered from 0.9999 to 1 - 1e-14 in 0.6.6: the old value discarded every
 * crossing shallower than ~0.81 degrees even though the orient3d sign tests had
 * already proven the triangles straddle each other.
 */
export const NEAR_PARALLEL: number;

// ── BMS pipeline stages (individually usable) ────────────────────────────────

/** A mega-soup polyline: a chain of pool vertices. */
export type PoolPolyline = PoolVertex[];

export interface MeshEdgePolySide {
	segments: Array<{ verts: unknown[]; type: string }>;
	closed: boolean;
}

/** Split both meshes against the intersection segments into one tagged mega soup. */
export function bmsSplit(
	trisA: TriangleSoup,
	trisB: TriangleSoup,
	intersectResult: {
		segments: TaggedSegment[];
		crossedSetA: Record<number, TaggedSegment[]>;
		crossedSetB: Record<number, TaggedSegment[]>;
		pool: VertexPool;
	}
): MegaSoupTriangle[];

/** Chain intersection segments into polylines, on pool vertex identity. */
export function bmsChain(segments: TaggedSegment[]): PoolPolyline[];

/** Close chained polylines against the mesh boundaries into usable barriers. */
export function bmsClosePolylines(
	polylines: PoolPolyline[],
	trisA: TriangleSoup,
	trisB: TriangleSoup,
	megaSoup: MegaSoupTriangle[],
	segments: TaggedSegment[]
): {
	closedPolylines: PoolPolyline[];
	meshEdgePolys: { A: MeshEdgePolySide; B: MeshEdgePolySide };
};

/** Walk the complete open boundary of a mesh as a closed polygon. */
export function chainedOpenEdge(tris: TriangleSoup): unknown[];

/** Hybrid classification: boundary topology for open meshes, barrier-normal for closed. */
export function bmsClassify(
	megaSoup: MegaSoupTriangle[],
	closedPolylines: PoolPolyline[],
	segments: TaggedSegment[],
	trisA: TriangleSoup,
	trisB: TriangleSoup,
	meshEdgePolys: { A: MeshEdgePolySide; B: MeshEdgePolySide }
): SoupGroups & {
	componentWalks: Array<{
		mesh: string;
		side: string;
		triCount: number;
		segments: Array<{ verts: unknown[]; type: string }>;
	}>;
};

/** Move specific triangles between inside and outside. Mutates `groups` in place. */
export function reclassifyTriangles(
	groups: SoupGroups,
	mesh: "A" | "B",
	fromSide: "inside" | "outside",
	triIndices: number[]
): SoupGroups;

/** Flip whichever triangle sits at the given centroid. */
export function reclassifyAtPoint(
	groups: SoupGroups,
	cx: number,
	cy: number,
	cz: number,
	tolerance?: number
): { moved: boolean; mesh: string; from: string; to: string };

/** Flood-fill from a seed triangle and flip the whole connected region. */
export function reclassifyRegion(
	groups: SoupGroups,
	mesh: "A" | "B",
	fromSide: "inside" | "outside",
	seedIdx: number
): number;

// ── One-call entry point ─────────────────────────────────────────────────────

export interface BooleanAutoResult {
	/** The finished result soup. Empty when the operation selects nothing. */
	soup: TriangleSoup;
	/** True when the output satisfies every invariant. */
	ok: boolean;
	operation: string;
	/** finishMesh report — null when quality is "raw" or the result is empty. */
	report: FinishMeshResult | null;
	/** Classification verification from the boolean stage. */
	verification: BmsVerification | null;
	classifier: { A: string; B: string } | null;
	/** The full bmsBooleanOp result, for callers that want the stages. */
	boolean: BmsBooleanResult | null;
}

/**
 * Run a boolean and return finished, valid geometry in one call.
 *
 * Output quality is an invariant, not an option — there is no flag to disable
 * correct winding. `quality` chooses how hard to work: "strict" (default) runs
 * the gated finisher, "raw" returns the merged boolean untouched.
 */
export function booleanAuto(
	soupA: TriangleSoup,
	soupB: TriangleSoup,
	operation: "subtract" | "union" | "intersect",
	options?: {
		quality?: "strict" | "raw";
		classifier?: "auto" | "hybrid" | "heffalump";
		tolerance?: number;
		preRepair?: boolean;
		coplanar?: boolean;
		minAreaRatio?: number;
		expectClosed?: boolean;
		minArea?: number;
		volumeTolPct?: number;
	}
): BooleanAutoResult | null;
