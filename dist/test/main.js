"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const acumen_1 = require("@ao-framework/acumen");
const suite_ensureFunctions_1 = require("./suite.ensureFunctions");
const suite_isFunctions_1 = require("./suite.isFunctions");
const suite_isNotFunctions_1 = require("./suite.isNotFunctions");
const suite_returnFunctions_1 = require("./suite.returnFunctions");
const suite_throwWhenFunctions_1 = require("./suite.throwWhenFunctions");
const suite_whenFunctions_1 = require("./suite.whenFunctions");
const suite_whenNotFunctions_1 = require("./suite.whenNotFunctions");
class Main {
    constructor() {
        this.suites = [
            suite_isFunctions_1.SuiteIsFunctions,
            suite_isNotFunctions_1.SuiteIsNotFunctions,
            suite_returnFunctions_1.SuiteReturnFunctions,
            suite_throwWhenFunctions_1.SuiteThrowWhenFunctions,
            suite_whenFunctions_1.SuiteWhenFunctions,
            suite_whenNotFunctions_1.SuiteWhenNotFunctions,
            suite_ensureFunctions_1.SuiteEnsureFunctions
        ];
    }
    async controller({ suite }) {
        return Promise.resolve()
            .then(() => suite(suite_isFunctions_1.SuiteIsFunctions))
            .then(() => suite(suite_isNotFunctions_1.SuiteIsNotFunctions))
            .then(() => suite(suite_returnFunctions_1.SuiteReturnFunctions))
            .then(() => suite(suite_throwWhenFunctions_1.SuiteThrowWhenFunctions))
            .then(() => suite(suite_whenFunctions_1.SuiteWhenFunctions))
            .then(() => suite(suite_whenNotFunctions_1.SuiteWhenNotFunctions))
            .then(() => suite(suite_ensureFunctions_1.SuiteEnsureFunctions));
    }
}
exports.Main = Main;
acumen_1.suiteFromClass(Main).listen();
//# sourceMappingURL=main.js.map