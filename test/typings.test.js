import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import * as api from "../src/index.js";

// ─────────────────────────────────────────────────────────────────────────────
// index.d.ts and index.js must agree.
//
// They drifted badly: as of 0.6.5 the entire BMS public surface — bmsBooleanOp,
// heffalumpClassify, shouldUseHeffalump, verifyBmsClassification, bmsIntersect,
// createVertexPool, fanTriangulate — was exported from the JS and declared
// nowhere, so every documented BMS example was untyped. Nothing caught it
// because nothing compared the two files.
//
// This does. It is deliberately bidirectional: a declaration with no runtime
// export is a lie to TypeScript consumers, and a runtime export with no
// declaration is the drift that caused the original problem.
// ─────────────────────────────────────────────────────────────────────────────

var here = dirname(fileURLToPath(import.meta.url));
var dts = readFileSync(resolve(here, "../src/index.d.ts"), "utf8");

/** Names declared as callable/value exports in index.d.ts. */
function declaredValueExports(src) {
	var names = [];
	var re = /^export\s+(?:declare\s+)?(?:function|const)\s+([A-Za-z_$][\w$]*)/gm;
	var m;
	while ((m = re.exec(src)) !== null) names.push(m[1]);
	return names;
}

/** Type-only exports — these have no runtime counterpart by design. */
function declaredTypeExports(src) {
	var names = [];
	var re = /^export\s+(?:interface|type)\s+([A-Za-z_$][\w$]*)/gm;
	var m;
	while ((m = re.exec(src)) !== null) names.push(m[1]);
	return names;
}

describe("index.d.ts matches index.js", function () {
	var declared = declaredValueExports(dts);
	var runtime = Object.keys(api);

	it("declares a meaningful number of value exports", function () {
		// Guards the regex itself: if it silently matched nothing, every other
		// assertion here would pass vacuously.
		expect(declared.length).toBeGreaterThan(50);
	});

	it("every declared value export exists at runtime", function () {
		var missing = declared.filter(function (n) { return !(n in api); });
		expect(missing).toEqual([]);
	});

	it("every runtime export is declared", function () {
		var typeNames = declaredTypeExports(dts);
		var undeclared = runtime.filter(function (n) {
			return declared.indexOf(n) === -1 && typeNames.indexOf(n) === -1;
		});
		expect(undeclared).toEqual([]);
	});

	it("declares the BMS surface that was missing through 0.6.5", function () {
		// Named explicitly so a future refactor cannot quietly drop them again.
		[
			"bmsBooleanOp", "bmsIntersect", "heffalumpClassify", "shouldUseHeffalump",
			"verifyBmsClassification", "createVertexPool", "fanTriangulate"
		].forEach(function (n) {
			expect(declared, n + " must be declared in index.d.ts").toContain(n);
			expect(typeof api[n], n + " must exist at runtime").toBe("function");
		});
	});

	it("declares the verification and finishing surface", function () {
		["verifyOutput", "assessRepair", "describeAssessment", "violationCount", "finishMesh"]
			.forEach(function (n) {
				expect(declared, n + " must be declared").toContain(n);
				expect(typeof api[n]).toBe("function");
			});
	});
});
