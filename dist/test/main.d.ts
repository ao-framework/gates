import { Apparatus } from "@ao-framework/acumen";
import { SuiteEnsureFunctions } from "./suite.ensureFunctions";
import { SuiteIsFunctions } from "./suite.isFunctions";
import { SuiteIsNotFunctions } from "./suite.isNotFunctions";
import { SuiteReturnFunctions } from "./suite.returnFunctions";
import { SuiteThrowWhenFunctions } from "./suite.throwWhenFunctions";
import { SuiteWhenFunctions } from "./suite.whenFunctions";
import { SuiteWhenNotFunctions } from "./suite.whenNotFunctions";
export declare class Main {
    suites: (typeof SuiteEnsureFunctions | typeof SuiteIsFunctions | typeof SuiteIsNotFunctions | typeof SuiteReturnFunctions | typeof SuiteThrowWhenFunctions | typeof SuiteWhenFunctions | typeof SuiteWhenNotFunctions)[];
    controller({ suite }: Apparatus): Promise<void>;
}
