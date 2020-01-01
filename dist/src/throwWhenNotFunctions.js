"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNotFunctions_1 = require("./isNotFunctions");
const throwWhenFunctions_1 = require("./throwWhenFunctions");
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not object like, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotObjectLike(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotObjectLike(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotObjectLike = throwWhenNotObjectLike;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not an object, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotObject(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotObject(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotObject = throwWhenNotObject;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a string, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotString(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotString(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotString = throwWhenNotString;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a string with length, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotStringWithLength(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotStringWithLength(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotStringWithLength = throwWhenNotStringWithLength;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a function, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotFunction(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotFunction(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotFunction = throwWhenNotFunction;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a boolean value, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotBoolean(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotBoolean(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotBoolean = throwWhenNotBoolean;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a number, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotNumber(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotNumber(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotNumber = throwWhenNotNumber;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not an array, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotArray(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotArray(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotArray = throwWhenNotArray;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not undefined, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotUndefined(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotUndefined(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotUndefined = throwWhenNotUndefined;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not null, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotNull(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotNull(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotNull = throwWhenNotNull;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not null or undefined, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotNill(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotNill(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotNill = throwWhenNotNill;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a big int, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotBigInt(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotBigInt(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotBigInt = throwWhenNotBigInt;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a symbol, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNotSymbol(variable, message, errorConstructor = Error) {
    if (isNotFunctions_1.isNotSymbol(variable)) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNotSymbol = throwWhenNotSymbol;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not falsy, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenFalse(variable, message, errorConstructor = Error) {
    if (!variable) {
        throwWhenFunctions_1.throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenFalse = throwWhenFalse;
//# sourceMappingURL=throwWhenNotFunctions.js.map