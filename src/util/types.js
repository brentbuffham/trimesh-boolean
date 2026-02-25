/**
 * @module types
 *
 * JSDoc type definitions for trimesh-boolean.
 * No runtime code — just documentation.
 */

/**
 * A 3D vertex.
 * @typedef {{ x: number, y: number, z: number }} Vertex
 */

/**
 * A triangle defined by three vertices.
 * @typedef {{ v0: Vertex, v1: Vertex, v2: Vertex }} Triangle
 */

/**
 * A triangle soup — an array of triangles with no shared vertex references.
 * @typedef {Triangle[]} TriangleSoup
 */

/**
 * A welded triangle using the {vertices: [v0, v1, v2]} storage format.
 * @typedef {{ vertices: [Vertex, Vertex, Vertex] }} WeldedTriangle
 */

/**
 * Result of a weld operation: shared vertex pool + indexed triangles.
 * @typedef {{ points: Vertex[], triangles: WeldedTriangle[] }} WeldedMesh
 */

/**
 * An axis-aligned bounding box.
 * @typedef {{ minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number }} AABB
 */

/**
 * An intersection segment between two triangles.
 * @typedef {{ p0: Vertex, p1: Vertex }} Segment
 */

/**
 * A tagged intersection segment with source triangle indices.
 * @typedef {{ p0: Vertex, p1: Vertex, idxA: number, idxB: number }} TaggedSegment
 */

/**
 * Result of a boolean operation.
 * @typedef {{ soup: TriangleSoup, points: Vertex[], triangles: WeldedTriangle[] }} BooleanResult
 */

/**
 * Configuration for mesh repair.
 * @typedef {Object} RepairConfig
 * @property {string}  [closeMode="none"]  - "none" | "weld" | "stitch"
 * @property {number}  [snapTolerance=0]   - Weld tolerance in metres
 * @property {number}  [stitchTolerance=1] - Stitch tolerance
 * @property {boolean} [removeDegenerate=true] - Remove degenerate/sliver triangles
 */

export {};
