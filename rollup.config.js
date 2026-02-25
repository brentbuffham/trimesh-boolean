import resolve from "@rollup/plugin-node-resolve";

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
			}
		],
		plugins: [resolve()],
		external: ["three"]
	}
];
