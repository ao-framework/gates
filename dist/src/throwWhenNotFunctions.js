"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNotFunctions_1 = require("./isNotFunctions");
const throwWhenFunctions_1 = require("./throwWhenFunctions");
function throwWhenNotObjectLike(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotObjectLike(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotObjectLike = throwWhenNotObjectLike;
function throwWhenNotObject(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotObject(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotObject = throwWhenNotObject;
function throwWhenNotString(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotString(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotString = throwWhenNotString;
function throwWhenNotStringWithLength(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotStringWithLength(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotStringWithLength = throwWhenNotStringWithLength;
function throwWhenNotFunction(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotFunction(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotFunction = throwWhenNotFunction;
function throwWhenNotBoolean(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotBoolean(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotBoolean = throwWhenNotBoolean;
function throwWhenNotNumber(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotNumber(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotNumber = throwWhenNotNumber;
function throwWhenNotArray(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotArray(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotArray = throwWhenNotArray;
function throwWhenNotUndefined(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotUndefined(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotUndefined = throwWhenNotUndefined;
function throwWhenNotNull(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotNull(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotNull = throwWhenNotNull;
function throwWhenNotNill(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotNill(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotNill = throwWhenNotNill;
function throwWhenNotBigInt(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotBigInt(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotBigInt = throwWhenNotBigInt;
function throwWhenNotSymbol(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotSymbol(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotSymbol = throwWhenNotSymbol;
function throwWhenFalse(variable, message, errorConstructor = Error) {
    if (!variable) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenFalse = throwWhenFalse;
//# sourceMappingURL=throwWhenNotFunctions.js.map