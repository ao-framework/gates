"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunctions_1 = require("./isFunctions");
/**
 * Provide an error message and error constructor (optional) as arguments. It will throw an exception.
 * @param message
 * @param errorConstructor
 */
function throwException(message, errorConstructor = Error) {
    throw new errorConstructor(message);
}
exports.throwException = throwException;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * object like, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenObjectLike(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isObjectLike(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenObjectLike = throwWhenObjectLike;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * an object, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenObject(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isObject(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenObject = throwWhenObject;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a string, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenString(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isString(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenString = throwWhenString;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a string with length, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenStringWithLength(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isStringWithLength(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenStringWithLength = throwWhenStringWithLength;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a function, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenFunction(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isFunction(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenFunction = throwWhenFunction;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a boolean value, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenBoolean(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isBoolean(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenBoolean = throwWhenBoolean;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a number, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNumber(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isNumber(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNumber = throwWhenNumber;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * an array, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenArray(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isArray(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenArray = throwWhenArray;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * undefined, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenUndefined(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isUndefined(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenUndefined = throwWhenUndefined;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * null, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNull(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isNull(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNull = throwWhenNull;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * null or undefined, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenNill(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isNill(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenNill = throwWhenNill;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a big int, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenBigInt(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isBigInt(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenBigInt = throwWhenBigInt;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a symbol, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenSymbol(variable, message, errorConstructor = Error) {
    if (isFunctions_1.isSymbol(variable)) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenSymbol = throwWhenSymbol;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * truthy, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
function throwWhenTrue(variable, message, errorConstructor = Error) {
    if (variable) {
        throwException(message, errorConstructor);
    }
    return variable;
}
exports.throwWhenTrue = throwWhenTrue;
//# sourceMappingURL=throwWhenFunctions.js.map