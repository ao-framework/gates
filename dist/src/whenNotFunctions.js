"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNotFunctions_1 = require("./isNotFunctions");
const ensureFunctions_1 = require("./ensureFunctions");
function whenNotObjectLike(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotObjectLike(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotObjectLike = whenNotObjectLike;
function whenNotObject(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotObject(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotObject = whenNotObject;
function whenNotString(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotString(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotString = whenNotString;
function whenNotStringWithLength(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotString(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotStringWithLength = whenNotStringWithLength;
function whenNotFunction(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotFunction(variable)) {
            handler(variable);
        }
    };
}
exports.whenNotFunction = whenNotFunction;
function whenNotBoolean(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotBoolean(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotBoolean = whenNotBoolean;
function whenNotNumber(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotNumber(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotNumber = whenNotNumber;
function whenNotArray(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotArray(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotArray = whenNotArray;
function whenNotUndefined(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotUndefined(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotUndefined = whenNotUndefined;
function whenNotNull(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotNull(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotNull = whenNotNull;
function whenNotNill(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotNill(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotNill = whenNotNill;
function whenNotBigInt(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotBigInt(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotBigInt = whenNotBigInt;
function whenNotSymbol(variable) {
    return function (handler) {
        if (isNotFunctions_1.isNotSymbol(variable)) {
            ensureFunctions_1.ensureFunction(handler)(variable);
        }
    };
}
exports.whenNotSymbol = whenNotSymbol;
//# sourceMappingURL=whenNotFunctions.js.map