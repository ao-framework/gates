import { iWhenArgumentFunction } from "./contracts/iWhenArgumentFunction";
import { ensureFunction } from "./ensureFunctions";
import { isArray, isBigInt, isBoolean, isFunction, isNill, isNull, isNumber, isObject, isObjectLike, isString, isStringWithLength, isSymbol, isUndefined } from "./isFunctions";

/**
 * Provide a condition as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the condition is met, it will call the callback.
 * @param variable 
 */
export function when(condition: boolean) {
    return function (handler: iWhenArgumentFunction<void>) {
        if (condition) {
            ensureFunction(handler)()
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is object like, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenObjectLike<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isObjectLike(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is an object, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenObject<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isObject(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a string, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenString<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isString(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a string with length, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenStringWithLength<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isStringWithLength(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a function, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenFunction<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isFunction(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a boolean value, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenBoolean<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isBoolean(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a number, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNumber<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNumber(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is an array, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenArray<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isArray(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is undefined, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenUndefined<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isUndefined(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is null, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNull<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNull(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is null or undefined, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNill<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNill(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a big int, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenBigInt<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isBigInt(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a symbol, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenSymbol<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isSymbol(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}
