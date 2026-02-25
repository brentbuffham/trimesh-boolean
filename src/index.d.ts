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
	closeMode?: "none" | "weld" | "stitch";
	snapTolerance?: number;
	stitchTolerance?: number;
	removeDegenerate?: boolean;
}

export interface RepairResult {
	soup: TriangleSoup;
	points: Vertex[];
	triangles: WeldedTriangle[];
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

export function boolean(
	soupA: TriangleSoup,
	soupB: TriangleSoup,
	operation: "subtract" | "union" | "intersect"
): BooleanResult | null;

// ── Intersection ──

export function intersectMeshPair(trisA: TriangleSoup, trisB: TriangleSoup): Segment[];
export function intersectMeshPairTagged(trisA: TriangleSoup, trisB: TriangleSoup): TaggedSegment[];
export function triTriIntersection(triA: Triangle, triB: Triangle): Segment | null;
export function triTriIntersectionDetailed(triA: Triangle, triB: Triangle): { dA: [number, number, number]; dB: [number, number, number]; segLen: number } | null;
export function chainSegments(segments: Segment[], threshold: number): Vertex[][];
export function simplifyPolyline(points: Vertex[], spacing: number): Vertex[];
export function buildSpatialGrid(tris: TriangleSoup, cellSize: number): Record<string, number[]>;
export function queryGrid(grid: Record<string, number[]>, bb: { minX: number; maxX: number; minY: number; maxY: number }, cellSize: number): number[];
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
export function weldBoundaryVertices(tris: TriangleSoup, tolerance: number): TriangleSoup;

// ── Normals ──

export function triNormal(tri: Triangle): Vertex;
export function ensureZUpNormals(tris: TriangleSoup): TriangleSoup;
export function flipAllNormals(tris: TriangleSoup): TriangleSoup;
export function classifyNormalDirection(tris: TriangleSoup, isClosed: boolean, signedVolume: number): string;
export function computeSignedVolume(tris: TriangleSoup): number;
export function computeProjectedArea(tris: TriangleSoup, plane: "xy" | "yz" | "xz"): number;
export function compute3DSurfaceArea(tris: TriangleSoup): number;

// ── Boolean internals (advanced) ──

export function classifyPointByRayCast(point: Vertex, otherTris: TriangleSoup, otherGrid: Record<string, number[]>, otherCellSize: number): 1 | -1;
export function classifyByFloodFill(tris: TriangleSoup, crossedMap: Record<number, TaggedSegment[]>, otherTris: TriangleSoup, otherGrid: Record<string, number[]>, otherCellSize: number): Int8Array;
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
