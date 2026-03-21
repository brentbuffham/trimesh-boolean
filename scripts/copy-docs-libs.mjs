/**
 * After vite build, copy Rollup library bundles into docs/ so GitHub Pages can serve
 * the same ESM/UMD files as npm (for bookmarked or inlined script tags).
 */
import { copyFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

var __dirname = dirname(fileURLToPath(import.meta.url));
var root = join(__dirname, "..");
var buildDir = join(root, "build");
var docsDir = join(root, "docs");

var pairs = [
	["trimesh-boolean.esm.js", "trimesh-boolean.esm.js"],
	["trimesh-boolean.min.js", "trimesh-boolean.min.js"],
	["trimesh-boolean-three.esm.js", "trimesh-boolean-three.esm.js"],
	["trimesh-boolean-three.min.js", "trimesh-boolean-three.min.js"]
];

for (var i = 0; i < pairs.length; i++) {
	var srcName = pairs[i][0];
	var destName = pairs[i][1];
	var from = join(buildDir, srcName);
	var to = join(docsDir, destName);
	if (!existsSync(from)) {
		console.warn("copy-docs-libs: missing " + from + " (run npm run build first)");
		continue;
	}
	copyFileSync(from, to);
	console.log("copy-docs-libs: " + destName);
}
