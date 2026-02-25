/**
 * trimesh-boolean/three — TypeScript declarations for the Three.js adapter
 */

import type { Object3D, Mesh } from "three";
import type { TriangleSoup, Triangle, BooleanResult, RepairConfig, RepairResult, TaggedSegment } from "./index";

export interface MeshOptions {
	color?: number | string;
	doubleSide?: boolean;
	wireframe?: boolean;
}

/**
 * Convert a THREE.Mesh or THREE.Group to triangle soup.
 */
export function meshToSoup(object: Object3D): TriangleSoup;

/**
 * Convert triangle soup to a THREE.Mesh with BufferGeometry.
 */
export function soupToMesh(soup: TriangleSoup, options?: MeshOptions): Mesh;

/**
 * Perform a boolean operation on two Three.js objects.
 */
export function booleanFromMeshes(
	meshA: Object3D,
	meshB: Object3D,
	operation: "subtract" | "union" | "intersect",
	options?: MeshOptions
): Mesh | null;

/**
 * Compute intersection segments between two Three.js objects.
 */
export function intersectFromMeshes(meshA: Object3D, meshB: Object3D): TaggedSegment[];

/**
 * Repair a Three.js mesh and return a new THREE.Mesh.
 */
export function repairFromMesh(
	mesh: Object3D,
	config?: RepairConfig,
	onProgress?: (msg: string) => void,
	meshOptions?: MeshOptions
): Promise<Mesh>;

// Re-exports from core
export { boolean, repair, intersect } from "./three.js";
