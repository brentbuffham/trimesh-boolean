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

export function orientSolid(soup: TriangleSoup, options?: { outward?: boolean }): OrientSolidResult;
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
