"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const gates = tslib_1.__importStar(require("../src"));
class SuiteEnsureFunctions {
    controller({ testAll }) {
        return testAll();
    }
    ensureObject({ expect, spotlight }) {
        const defaultObject = { name: "default" };
        const passingObject = { name: "passing" };
        const defaultOnly = gates.ensureObject(null, defaultObject, false);
        const defaultOnlyWithMerge = gates.ensureObject(null, defaultObject, true);
        const passing = gates.ensureObject(passingObject, defaultObject, false);
        const passingWithMerge = gates.ensureObject(passingObject, defaultObject, true);
        expect(defaultObject).equals(defaultOnly);
        expect(defaultOnlyWithMerge).equals(defaultOnly);
        expect(passingObject).equals(passing);
        expect(passingWithMerge).not.equals(passing);
        expect(typeof passingWithMerge === "object" && passingWithMerge !== null).equals(true);
    }
    ensureArray({ expect }) {
        const defaultArray = ["default"];
        const passingArray = ["passing"];
        const defaultOnly = gates.ensureArray(null, defaultArray, false);
        const defaultOnlyWithMerge = gates.ensureArray(null, defaultArray, true);
        const passing = gates.ensureArray(passingArray, defaultArray, false);
        const passingWithMerge = gates.ensureArray(passingArray, defaultArray, true);
        expect(defaultArray).equals(defaultOnly);
        expect(defaultOnlyWithMerge).equals(defaultOnly);
        expect(passingArray).equals(passing);
        expect(passingWithMerge).not.equals(passing);
        expect(Array.isArray(passingWithMerge)).equals(true);
    }
    ensureFunction({ expect, tagger }) {
        const tags = tagger();
        const handler = (name) => tags.add(name);
        gates.ensureFunction(null)("bad");
        gates.ensureFunction(handler)("good");
        expect(tags.hasOnly("good"));
    }
}
exports.SuiteEnsureFunctions = SuiteEnsureFunctions;
//# sourceMappingURL=suite.ensureFunctions.js.map