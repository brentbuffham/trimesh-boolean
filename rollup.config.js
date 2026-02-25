import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default [
	// Core library (no Three.js)
	{
		input: "src/index.js",
		output: [
			{
				file: "build/trimesh-boolean.esm.js",
				format: "es",
				sourcemap: true
			},
			{
				file: "build/trimesh-boolean.umd.cjs",
				format: "umd",
				name: "TrimeshBoolean",
				sourcemap: true
			},
			{
				file: "build/trimesh-boolean.min.js",
				format: "umd",
				name: "TrimeshBoolean",
				sourcemap: true,
				plugins: [terser()]
			}
		],
		plugins: [resolve()],
		external: []
	},
	// Three.js adapter
	{
		input: "src/three.js",
		output: [
			{
				file: "build/trimesh-boolean-three.esm.js",
				format: "es",
				sourcemap: true
			},
			{
				file: "build/trimesh-boolean-three.umd.cjs",
				format: "umd",
				name: "TrimeshBooleanThree",
				sourcemap: true,
				globals: { three: "THREE" }
			},
			{
				file: "build/trimesh-boolean-three.min.js",
				format: "umd",
				name: "TrimeshBooleanThree",
				sourcemap: true,
				globals: { three: "THREE" },
				plugins: [terser()]
			}
		],
		plugins: [resolve()],
		external: ["three"]
	}
];
