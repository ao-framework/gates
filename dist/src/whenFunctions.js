"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunctions_1 = require("./isFunctions");
const ensureFunctions_1 = require("./ensureFunctions");
function whenObjectLike(variable) {
    return function (handler) {
        if (isFunctions_1.isObjectLike(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenObjectLike = whenObjectLike;
function whenObject(variable) {
    return function (handler) {
        if (isFunctions_1.isObject(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenObject = whenObject;
function whenString(variable) {
    return function (handler) {
        if (isFunctions_1.isString(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenString = whenString;
function whenStringWithLength(variable) {
    return function (handler) {
        if (isFunctions_1.isStringWithLength(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenStringWithLength = whenStringWithLength;
function whenFunction(variable) {
    return function (handler) {
        if (isFunctions_1.isFunction(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenFunction = whenFunction;
function whenBoolean(variable) {
    return function (handler) {
        if (isFunctions_1.isBoolean(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenBoolean = whenBoolean;
function whenNumber(variable) {
    return function (handler) {
        if (isFunctions_1.isNumber(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNumber = whenNumber;
function whenArray(variable) {
    return function (handler) {
        if (isFunctions_1.isArray(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenArray = whenArray;
function whenUndefined(variable) {
    return function (handler) {
        if (isFunctions_1.isUndefined(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenUndefined = whenUndefined;
function whenNull(variable) {
    return function (handler) {
        if (isFunctions_1.isNull(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNull = whenNull;
function whenNill(variable) {
    return function (handler) {
        if (isFunctions_1.isNill(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNill = whenNill;
function whenBigInt(variable) {
    return function (handler) {
        if (isFunctions_1.isBigInt(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenBigInt = whenBigInt;
function whenSymbol(variable) {
    return function (handler) {
        if (isFunctions_1.isSymbol(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenSymbol = whenSymbol;
//# sourceMappingURL=whenFunctions.js.map