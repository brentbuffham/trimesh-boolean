import { bmsBooleanOp } from "../src/index.js";
import { createCube } from "../test/fixtures/meshes.js";

var cubeA = createCube(0, 0, 0, 2);
var cubeB = createCube(1, 0.5, 0, 2); // coplanar top/bottom faces with A

function report(label, r) {
	console.log(label,
		"A:", r.groups.aInside.length, "in /", r.groups.aOutside.length, "out |",
		"B:", r.groups.bInside.length, "in /", r.groups.bOutside.length, "out |",
		"classifier:", JSON.stringify(r.classifier));
}

report("hybrid   ", bmsBooleanOp(cubeA, cubeB, null, { classifier: "hybrid" }));
report("heffalump", bmsBooleanOp(cubeA, cubeB, null, { classifier: "heffalump" }));
report("auto     ", bmsBooleanOp(cubeA, cubeB, null, { classifier: "auto" }));
