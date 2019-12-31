"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunctions_1 = require("./isFunctions");
function ensureObject(variable, defaultObject, merge = true) {
    return isFunctions_1.isObject(variable) ?
        (merge ? Object.assign(defaultObject, variable) : variable)
        : defaultObject;
}
exports.ensureObject = ensureObject;
function ensureArray(variable, defaultArray, merge = true) {
    return isFunctions_1.isArray(variable) ?
        (merge ? Object.assign(defaultArray, variable) : variable)
        : defaultArray;
}
exports.ensureArray = ensureArray;
function ensureFunction(variable) {
    return function (...args) {
        if (isFunctions_1.isFunction(variable)) {
            variable(...args);
        }
    };
}
exports.ensureFunction = ensureFunction;
//# sourceMappingURL=ensureFunctions.js.map