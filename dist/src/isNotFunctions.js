"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunctions_1 = require("./isFunctions");
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not object like, more specifically not an array or object. Null will
 * return true.
 * @param variable
 */
function isNotObjectLike(variable) {
    return !isFunctions_1.isObjectLike(variable);
}
exports.isNotObjectLike = isNotObjectLike;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not an object. If the variable is null or an array, it will return true.
 * @param variable
 */
function isNotObject(variable) {
    return !isFunctions_1.isObject(variable);
}
exports.isNotObject = isNotObject;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a string.
 * @param variable
 */
function isNotString(variable) {
    return !isFunctions_1.isString(variable);
}
exports.isNotString = isNotString;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a string with length
 * @param variable
 */
function isNotStringWithLength(variable) {
    return isFunctions_1.isString(variable) ?
        variable.length === 0 :
        true;
}
exports.isNotStringWithLength = isNotStringWithLength;
function isNotFunction(variable) {
    return !isFunctions_1.isFunction(variable);
}
exports.isNotFunction = isNotFunction;
function isNotBoolean(variable) {
    return !isFunctions_1.isBoolean(variable);
}
exports.isNotBoolean = isNotBoolean;
function isNotNumber(variable) {
    return !isFunctions_1.isNumber(variable);
}
exports.isNotNumber = isNotNumber;
function isNotArray(variable) {
    return !isFunctions_1.isArray(variable);
}
exports.isNotArray = isNotArray;
function isNotUndefined(variable) {
    return !isFunctions_1.isUndefined(variable);
}
exports.isNotUndefined = isNotUndefined;
function isNotNull(variable) {
    return !isFunctions_1.isNull(variable);
}
exports.isNotNull = isNotNull;
function isNotNill(variable) {
    return !isFunctions_1.isUndefined(variable) && !isFunctions_1.isNull(variable);
}
exports.isNotNill = isNotNill;
function isNotBigInt(variable) {
    return !isFunctions_1.isBigInt(variable);
}
exports.isNotBigInt = isNotBigInt;
function isNotSymbol(variable) {
    return !isFunctions_1.isSymbol(variable);
}
exports.isNotSymbol = isNotSymbol;
//# sourceMappingURL=isNotFunctions.js.map