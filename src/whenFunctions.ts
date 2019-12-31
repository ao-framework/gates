import { iWhenArgumentFunction } from "./contracts/iWhenArgumentFunction";
import { isArray, isBigInt, isBoolean, isFunction, isNill, isNull, isNumber, isObject, isObjectLike, isString, isSymbol, isUndefined, isStringWithLength } from "./isFunctions";
import { ensureFunction } from './ensureFunctions';

export function whenObjectLike<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isObjectLike(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenObject<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isObject(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenString<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isString(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenStringWithLength<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isStringWithLength(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenFunction<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isFunction(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenBoolean<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isBoolean(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNumber<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNumber(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenArray<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isArray(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenUndefined<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isUndefined(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNull<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNull(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNill<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNill(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenBigInt<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isBigInt(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenSymbol<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isSymbol(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}
