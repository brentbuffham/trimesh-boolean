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
export { boolean, splitMeshPair, mergeSplitGroups, selectSplits, splitToComponents, mergeSmallComponents, mergeComponents } from "./boolean/booleanOp.js";

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

// ── Mesh format conversion aliases ──
export { weldVertices as soupToIndexed } from "./repair/weldVertices.js";
export { weldedToSoup as indexedToSoup } from "./repair/weldVertices.js";

// ── Indexed group output (shared pool + [i,j,k] triples) ──
// Also available directly on a bmsBooleanOp result via { indexed: true }.
export { indexGroups, indexGroupsToTypedArrays } from "./util/indexGroups.js";
export { removeDegenerateTriangles } from "./repair/removeDegenerates.js";
export { extractBoundaryLoops, triangulateLoop, capBoundaryLoops, capBoundaryLoopsSequential } from "./repair/boundaryLoops.js";
export { stitchByProximity } from "./repair/stitchEdges.js";
export { cleanCrossingTriangles } from "./repair/cleanCrossing.js";
export { removeOverlappingTriangles } from "./repair/removeOverlapping.js";
export { forceCloseIndexedMesh } from "./repair/forceClose.js";
export { fillOpenEdgeLoops } from "./repair/fillOpenLoops.js";
export { closeSolid } from "./repair/closeSolid.js";
export { weldBoundaryVertices } from "./repair/weldBoundary.js";

// ── Normals ──
export { triNormal } from "./normals/triNormal.js";
export { ensureZUpNormals, flipAllNormals } from "./normals/alignNormals.js";
export { orientSolid } from "./normals/orientSolid.js";
export {
	classifyNormalDirection,
	computeSignedVolume,
	computeProjectedArea,
	compute3DSurfaceArea
} from "./normals/classifyDirection.js";

// ── Boolean internals (advanced) ──
export { classifyPointMultiAxis, classifyByFloodFill } from "./boolean/classifyTriangles.js";
export { retriangulateWithSteinerPoints, fanTriangulate } from "./boolean/splitTriangles.js";
export { buildCurtainAndCap, generateClosingTriangles } from "./boolean/closeBoundary.js";

// ── BMS Pipeline (Brent's Mega Soup) ──
export { createVertexPool } from "./bms/bmsVertexPool.js";
export { bmsIntersect } from "./bms/bmsIntersect.js";
export { bmsSplit } from "./bms/bmsSplit.js";
export { bmsChain } from "./bms/bmsChain.js";
export { bmsClosePolylines, chainedOpenEdge } from "./bms/bmsClose.js";
export { bmsClassify } from "./bms/bmsClassify.js";
export { verifyBmsClassification } from "./bms/bmsVerify.js";
export { heffalumpClassify, shouldUseHeffalump, reclassifyTriangles, reclassifyAtPoint, reclassifyRegion } from "./bms/heffalumpClassify.js";
export { bmsBooleanOp } from "./bms/bmsBooleanOp.js";

// ── Self-intersection fold resolver (mesh arrangement + winding number) ──
export { coplanarOverlap, emitCoplanarSegments } from "./intersect/coplanarOverlap.js";
export { bmsSelfIntersect, bmsSelfArrange, bmsSelfResolve, buildEdgeSteinerMap, snapEndpointsToVertices, weldTaggedSoup, conditionArrangement, snapCoincidentSheets } from "./bms/bmsSelfArrange.js";
export { bmsSelfResolveIndexed } from "./bms/bmsSelfResolveIndexed.js";
export { solidAngle, solidAngleAt, windingNumber, windingNumberIndexed, extractByWinding, extractByWindingPatches } from "./classify/windingNumber.js";
export { extractByCellComplex } from "./classify/cellComplex.js";
export { dedupCoincidentTriangles } from "./classify/coincidentDedup.js";

// ── Utilities ──
export { dist3, distSq3, triangleArea3D, computeBounds, cross, lerpVert, vKey, edgeKey, countOpenEdges } from "./util/math.js";
export { findConnectedComponents, findConnectedComponentsPooled } from "./util/connectedComponents.js";

// ── Indexed connected components (integer-id, soup-free — opt-in scaling path) ──
export { connectedComponentsIndexed, decomposeIndexedGroups, mergeSmallIndexedComponents } from "./util/indexedComponents.js";
