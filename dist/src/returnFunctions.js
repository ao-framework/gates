"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunctions_1 = require("./isFunctions");
/**
 * Provide an variable as an argument. If the variable is an object or an array, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnObjectLikeOrNothing(variable) {
    if (isFunctions_1.isObjectLike(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnObjectLikeOrNothing = returnObjectLikeOrNothing;
/**
 * Provide an variable as an argument. If the variable is an object, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnObjectOrNothing(variable) {
    if (isFunctions_1.isObject(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnObjectOrNothing = returnObjectOrNothing;
/**
 * Provide an variable as an argument. If the variable is a string, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnStringOrNothing(variable) {
    if (isFunctions_1.isString(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnStringOrNothing = returnStringOrNothing;
/**
 * Provide an variable as an argument. If the variable is a string with length, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnStringWithLengthOrNothing(variable) {
    if (isFunctions_1.isStringWithLength(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnStringWithLengthOrNothing = returnStringWithLengthOrNothing;
/**
 * Provide an variable as an argument. If the variable is a function, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnFunctionOrNothing(variable) {
    if (isFunctions_1.isFunction(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnFunctionOrNothing = returnFunctionOrNothing;
/**
 * Provide an variable as an argument. If the variable is a boolean value, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnBooleanOrNothing(variable) {
    if (isFunctions_1.isBoolean(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnBooleanOrNothing = returnBooleanOrNothing;
/**
 * Provide an variable as an argument. If the variable is a number, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnNumberOrNothing(variable) {
    if (isFunctions_1.isNumber(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnNumberOrNothing = returnNumberOrNothing;
/**
 * Provide an variable as an argument. If the variable is an array, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnArrayOrNothing(variable) {
    if (isFunctions_1.isArray(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnArrayOrNothing = returnArrayOrNothing;
/**
 * Provide an variable as an argument. If the variable is null, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnNullOrNothing(variable) {
    if (isFunctions_1.isNull(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnNullOrNothing = returnNullOrNothing;
/**
 * Provide an variable as an argument. If the variable is a big int, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnBigIntOrNothing(variable) {
    if (isFunctions_1.isBigInt(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnBigIntOrNothing = returnBigIntOrNothing;
/**
 * Provide an variable as an argument. If the variable is a symbol, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
function returnSymbolOrNothing(variable) {
    if (isFunctions_1.isSymbol(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnSymbolOrNothing = returnSymbolOrNothing;
//# sourceMappingURL=returnFunctions.js.map