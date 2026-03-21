import { defineConfig } from "vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

var __dirname = dirname(fileURLToPath(import.meta.url));

// GitHub Pages project site: https://<user>.github.io/<repo>/
var GH_PAGES_BASE = "/trimesh-boolean/";

export default defineConfig(function (ctx) {
	var isBuild = ctx.command === "build";
	return {
		root: resolve(__dirname, "examples"),
		publicDir: resolve(__dirname, "examples/public"),
		base: isBuild ? GH_PAGES_BASE : "/",
		build: {
			outDir: resolve(__dirname, "docs"),
			emptyOutDir: true,
			rollupOptions: {
				input: {
					index: resolve(__dirname, "examples/index.html"),
					"2d": resolve(__dirname, "examples/2d.html")
				}
			}
		}
	};
});
