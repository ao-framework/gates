"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provide a variable as an argument. It will return true if the variable
 * is object like, more specifically an array or object. If the variable is
 * null, it will return false.
 * @param variable
 */
function isObjectLike(variable) {
    return typeof variable === "object" && !isNull(variable);
}
exports.isObjectLike = isObjectLike;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is an object. If the variable is null or an array, it will return false.
 * @param variable
 */
function isObject(variable) {
    return isObjectLike(variable) && Array.isArray(variable) === false;
}
exports.isObject = isObject;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a string.
 * @param variable
 */
function isString(variable) {
    return typeof variable === "string";
}
exports.isString = isString;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a string and has any length at all.
 * @param variable
 */
function isStringWithLength(variable) {
    return isString(variable) && variable.length > 0;
}
exports.isStringWithLength = isStringWithLength;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a function.
 * @param variable
 */
function isFunction(variable) {
    return typeof variable === "function";
}
exports.isFunction = isFunction;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a boolean value.
 * @param variable
 */
function isBoolean(variable) {
    return typeof variable === "boolean";
}
exports.isBoolean = isBoolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a number.
 * @param variable
 */
function isNumber(variable) {
    return typeof variable === "number";
}
exports.isNumber = isNumber;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is an array.
 * @param variable
 */
function isArray(variable) {
    return Array.isArray(variable);
}
exports.isArray = isArray;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is undefined.
 * @param variable
 */
function isUndefined(variable) {
    return variable === undefined;
}
exports.isUndefined = isUndefined;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is null.
 * @param variable
 */
function isNull(variable) {
    return variable === null;
}
exports.isNull = isNull;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is undefined or null.
 * @param variable
 */
function isNill(variable) {
    return isUndefined(variable) || isNull(variable);
}
exports.isNill = isNill;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a Big Integer
 * @param variable
 */
function isBigInt(variable) {
    return typeof variable === "bigint";
}
exports.isBigInt = isBigInt;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a Symbol
 * @param variable
 */
function isSymbol(variable) {
    return typeof variable === "symbol";
}
exports.isSymbol = isSymbol;
/**
 * Provide a variable and a constructor as arguments. It will return true if the variable
 * is constructed from the constructor given.
 * @param variable
 */
function constructedFrom(variable, constructor) {
    return variable instanceof constructor;
}
exports.constructedFrom = constructedFrom;
//# sourceMappingURL=isFunctions.js.map