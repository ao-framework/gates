import { Apparatus, suiteFromClass } from "@ao-framework/acumen";

import { SuiteEnsureFunctions } from "./suite.ensureFunctions";
import { SuiteIsFunctions } from "./suite.isFunctions";
import { SuiteIsNotFunctions } from "./suite.isNotFunctions";
import { SuiteReturnFunctions } from "./suite.returnFunctions";
import { SuiteThrowWhenFunctions } from "./suite.throwWhenFunctions";
import { SuiteWhenFunctions } from "./suite.whenFunctions";
import { SuiteWhenNotFunctions } from "./suite.whenNotFunctions";

export class Main {

    public suites = [
        SuiteIsFunctions,
        SuiteIsNotFunctions,
        SuiteReturnFunctions,
        SuiteThrowWhenFunctions,
        SuiteWhenFunctions,
        SuiteWhenNotFunctions,
        SuiteEnsureFunctions
    ]

    public async controller({ suite }: Apparatus) {
        return Promise.resolve()
            .then(() => suite(SuiteIsFunctions))
            .then(() => suite(SuiteIsNotFunctions))
            .then(() => suite(SuiteReturnFunctions))
            .then(() => suite(SuiteThrowWhenFunctions))
            .then(() => suite(SuiteWhenFunctions))
            .then(() => suite(SuiteWhenNotFunctions))
            .then(() => suite(SuiteEnsureFunctions))
    }
}

suiteFromClass(Main).listen();
