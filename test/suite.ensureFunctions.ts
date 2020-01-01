import { Apparatus } from "@ao-framework/acumen";

import * as gates from "../src";

export class SuiteEnsureFunctions {

    public controller({ testAll }: Apparatus) {
        return testAll();
    }

    public ensureObject({ expect, spotlight }: Apparatus) {
        const defaultObject = { name: "default" }
        const passingObject = { name: "passing" }
        const defaultOnly = gates.ensureObject(null, defaultObject, false);
        const defaultOnlyWithMerge = gates.ensureObject(null, defaultObject, true)
        const passing = gates.ensureObject(passingObject, defaultObject, false);
        const passingWithMerge = gates.ensureObject(passingObject, defaultObject, true)
        expect(defaultObject).equals(defaultOnly);
        expect(defaultOnlyWithMerge).equals(defaultOnly);
        expect(passingObject).equals(passing)
        expect(passingWithMerge).not.equals(passing)
        expect(typeof passingWithMerge === "object" && passingWithMerge !== null).equals(true)
    }

    public ensureArray({ expect }: Apparatus) {
        const defaultArray = ["default"]
        const passingArray = ["passing"]
        const defaultOnly = gates.ensureArray(null, defaultArray, false);
        const defaultOnlyWithMerge = gates.ensureArray(null, defaultArray, true)
        const passing = gates.ensureArray(passingArray, defaultArray, false);
        const passingWithMerge = gates.ensureArray(passingArray, defaultArray, true)
        expect(defaultArray).equals(defaultOnly);
        expect(defaultOnlyWithMerge).equals(defaultOnly);
        expect(passingArray).equals(passing)
        expect(passingWithMerge).not.equals(passing)
        expect(Array.isArray(passingWithMerge)).equals(true)
    }

    public ensureFunction({ expect, tagger }: Apparatus) {
        const tags = tagger();
        const handler = (name: string) => tags.add(name);
        gates.ensureFunction(null)("bad")
        gates.ensureFunction(handler)("good")
        expect(tags.hasOnly("good"))
    }
}
