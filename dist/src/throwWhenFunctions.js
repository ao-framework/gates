"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunctions_1 = require("./isFunctions");
function throwException(message, errorConstructor = Error) {
    throw new errorConstructor(message);
}
exports.throwException = throwException;
function throwWhenObjectLike(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isObjectLike(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenObjectLike = throwWhenObjectLike;
function throwWhenObject(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isObject(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenObject = throwWhenObject;
function throwWhenString(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isString(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenString = throwWhenString;
function throwWhenStringWithLength(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isStringWithLength(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenStringWithLength = throwWhenStringWithLength;
function throwWhenFunction(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isFunction(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenFunction = throwWhenFunction;
function throwWhenBoolean(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isBoolean(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenBoolean = throwWhenBoolean;
function throwWhenNumber(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isNumber(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNumber = throwWhenNumber;
function throwWhenArray(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isArray(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenArray = throwWhenArray;
function throwWhenUndefined(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isUndefined(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenUndefined = throwWhenUndefined;
function throwWhenNull(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isNull(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNull = throwWhenNull;
function throwWhenNill(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isNill(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNill = throwWhenNill;
function throwWhenBigInt(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isBigInt(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenBigInt = throwWhenBigInt;
function throwWhenSymbol(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isSymbol(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenSymbol = throwWhenSymbol;
function throwWhenTrue(variable, message, errorConstructor = Error) {
    if (variable) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenTrue = throwWhenTrue;
//# sourceMappingURL=throwWhenFunctions.js.map