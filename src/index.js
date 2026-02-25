/**
 * trimesh-boolean
 *
 * Triangle mesh boolean operations — supports open surfaces, terrain
 * intersection, and mesh repair. Unlike BSP-based packages, these
 * algorithms work on open (non-watertight) meshes.
 *
 * @module trimesh-boolean
 */

// ── Core Boolean API ──
export { boolean } from "./boolean/booleanOp.js";

// ── Intersection ──
export { intersectMeshPair, intersectMeshPairTagged } from "./intersect/intersectMeshPair.js";
export { triTriIntersection, triTriIntersectionDetailed } from "./intersect/triTriIntersection.js";
export { chainSegments, simplifyPolyline } from "./intersect/chainSegments.js";
export {
	buildSpatialGrid,
	buildSpatialGridOnAxes,
	queryGrid,
	queryGridOnAxes,
	computeBBox,
	triBBox,
	bboxOverlap,
	estimateAvgEdge
} from "./intersect/spatialGrid.js";

// ── Repair ──
export { repairMesh } from "./repair/repairMesh.js";
export { deduplicateSeamVertices } from "./repair/deduplicateVertices.js";
export { resolveTJunctions } from "./repair/resolveTJunctions.js";
export { weldVertices, weldedToSoup } from "./repair/weldVertices.js";
export { removeDegenerateTriangles } from "./repair/removeDegenerates.js";
export { extractBoundaryLoops, triangulateLoop, capBoundaryLoops, capBoundaryLoopsSequential } from "./repair/boundaryLoops.js";
export { stitchByProximity } from "./repair/stitchEdges.js";
export { cleanCrossingTriangles } from "./repair/cleanCrossing.js";
export { removeOverlappingTriangles } from "./repair/removeOverlapping.js";
export { forceCloseIndexedMesh } from "./repair/forceClose.js";
export { weldBoundaryVertices } from "./repair/weldBoundary.js";

// ── Normals ──
export { triNormal } from "./normals/triNormal.js";
export { ensureZUpNormals, flipAllNormals } from "./normals/alignNormals.js";
export {
	classifyNormalDirection,
	computeSignedVolume,
	computeProjectedArea,
	compute3DSurfaceArea
} from "./normals/classifyDirection.js";

// ── Boolean internals (advanced) ──
export { classifyPointMultiAxis, classifyByFloodFill } from "./boolean/classifyTriangles.js";
export { retriangulateWithSteinerPoints } from "./boolean/splitTriangles.js";
export { buildCurtainAndCap, generateClosingTriangles } from "./boolean/closeBoundary.js";

// ── Utilities ──
export { dist3, distSq3, triangleArea3D, computeBounds, cross, lerpVert, vKey, edgeKey, countOpenEdges } from "./util/math.js";
