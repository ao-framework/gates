"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ensureFunctions_1 = require("./ensureFunctions");
const isFunctions_1 = require("./isFunctions");
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is object like, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenObjectLike(variable) {
    return function (handler) {
        if (isFunctions_1.isObjectLike(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenObjectLike = whenObjectLike;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is an object, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenObject(variable) {
    return function (handler) {
        if (isFunctions_1.isObject(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenObject = whenObject;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a string, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenString(variable) {
    return function (handler) {
        if (isFunctions_1.isString(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenString = whenString;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a string with length, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenStringWithLength(variable) {
    return function (handler) {
        if (isFunctions_1.isStringWithLength(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenStringWithLength = whenStringWithLength;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a function, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenFunction(variable) {
    return function (handler) {
        if (isFunctions_1.isFunction(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenFunction = whenFunction;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a boolean value, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenBoolean(variable) {
    return function (handler) {
        if (isFunctions_1.isBoolean(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenBoolean = whenBoolean;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a number, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNumber(variable) {
    return function (handler) {
        if (isFunctions_1.isNumber(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNumber = whenNumber;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is an array, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenArray(variable) {
    return function (handler) {
        if (isFunctions_1.isArray(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenArray = whenArray;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is undefined, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenUndefined(variable) {
    return function (handler) {
        if (isFunctions_1.isUndefined(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenUndefined = whenUndefined;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is null, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNull(variable) {
    return function (handler) {
        if (isFunctions_1.isNull(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNull = whenNull;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is null or undefined, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNill(variable) {
    return function (handler) {
        if (isFunctions_1.isNill(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNill = whenNill;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a big int, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenBigInt(variable) {
    return function (handler) {
        if (isFunctions_1.isBigInt(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenBigInt = whenBigInt;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a symbol, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenSymbol(variable) {
    return function (handler) {
        if (isFunctions_1.isSymbol(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenSymbol = whenSymbol;
//# sourceMappingURL=whenFunctions.js.map