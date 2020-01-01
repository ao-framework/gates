"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ensureFunctions_1 = require("./ensureFunctions");
const isNotFunctions_1 = require("./isNotFunctions");
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not object like, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotObjectLike(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotObjectLike(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotObjectLike = whenNotObjectLike;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not an object, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotObject(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotObject(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotObject = whenNotObject;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a string, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotString(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotString(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotString = whenNotString;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a string with length, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotStringWithLength(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotString(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotStringWithLength = whenNotStringWithLength;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a function, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotFunction(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotFunction(variable)) {
            handler(variable);
        }
    };
}
exports.whenNotFunction = whenNotFunction;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a boolean value, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotBoolean(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotBoolean(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotBoolean = whenNotBoolean;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a number, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotNumber(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotNumber(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotNumber = whenNotNumber;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not an array, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotArray(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotArray(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotArray = whenNotArray;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not an undefined, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotUndefined(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotUndefined(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotUndefined = whenNotUndefined;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not null, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotNull(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotNull(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotNull = whenNotNull;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not null or undefined, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotNill(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotNill(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotNill = whenNotNill;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a big int, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotBigInt(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotBigInt(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotBigInt = whenNotBigInt;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a symbol, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
function whenNotSymbol(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotSymbol(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotSymbol = whenNotSymbol;
//# sourceMappingURL=whenNotFunctions.js.map