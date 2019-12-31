import { iWhenArgumentFunction } from "./contracts/iWhenArgumentFunction";
import { isNotArray, isNotBigInt, isNotBoolean, isNotFunction, isNotNill, isNotNull, isNotNumber, isNotObject, isNotObjectLike, isNotString, isNotSymbol, isNotUndefined } from "./isNotFunctions";
import { ensureFunction } from "./ensureFunctions";

export function whenNotObjectLike<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotObjectLike(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotObject<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotObject(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotString<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotString(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotStringWithLength<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotString(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotFunction<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotFunction(variable)) {
            handler(variable)
        }
    }
}

export function whenNotBoolean<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotBoolean(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotNumber<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotNumber(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotArray<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotArray(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotUndefined<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotUndefined(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotNull<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotNull(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotNill<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotNill(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotBigInt<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotBigInt(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

export function whenNotSymbol<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotSymbol(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}
