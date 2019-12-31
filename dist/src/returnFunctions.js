"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunctions_1 = require("./isFunctions");
function returnObjectLikeOrNothing(variable) {
    if (isFunctions_1.isObjectLike(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnObjectLikeOrNothing = returnObjectLikeOrNothing;
function returnObjectOrNothing(variable) {
    if (isFunctions_1.isObject(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnObjectOrNothing = returnObjectOrNothing;
function returnStringOrNothing(variable) {
    if (isFunctions_1.isString(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnStringOrNothing = returnStringOrNothing;
function returnStringWithLengthOrNothing(variable) {
    if (isFunctions_1.isStringWithLength(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnStringWithLengthOrNothing = returnStringWithLengthOrNothing;
function returnFunctionOrNothing(variable) {
    if (isFunctions_1.isFunction(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnFunctionOrNothing = returnFunctionOrNothing;
function returnBooleanOrNothing(variable) {
    if (isFunctions_1.isBoolean(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnBooleanOrNothing = returnBooleanOrNothing;
function returnNumberOrNothing(variable) {
    if (isFunctions_1.isNumber(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnNumberOrNothing = returnNumberOrNothing;
function returnArrayOrNothing(variable) {
    if (isFunctions_1.isArray(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnArrayOrNothing = returnArrayOrNothing;
function returnNullOrNothing(variable) {
    if (isFunctions_1.isNull(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnNullOrNothing = returnNullOrNothing;
function returnBigIntOrNothing(variable) {
    if (isFunctions_1.isBigInt(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnBigIntOrNothing = returnBigIntOrNothing;
function returnSymbolOrNothing(variable) {
    if (isFunctions_1.isSymbol(variable)) {
        return variable;
    }
    return void 0;
}
exports.returnSymbolOrNothing = returnSymbolOrNothing;
//# sourceMappingURL=returnFunctions.js.map