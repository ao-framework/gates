import { iWhenArgumentFunction } from "./contracts/iWhenArgumentFunction";
import { ensureFunction } from "./ensureFunctions";
import { isNotArray, isNotBigInt, isNotBoolean, isNotFunction, isNotNill, isNotNull, isNotNumber, isNotObject, isNotObjectLike, isNotString, isNotSymbol, isNotUndefined } from "./isNotFunctions";

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not object like, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotObjectLike<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotObjectLike(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not an object, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotObject<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotObject(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a string, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotString<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotString(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a string with length, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotStringWithLength<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotString(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a function, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotFunction<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotFunction(variable)) {
            handler(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a boolean value, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotBoolean<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotBoolean(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a number, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotNumber<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotNumber(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not an array, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotArray<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotArray(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not an undefined, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotUndefined<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotUndefined(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not null, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotNull<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotNull(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not null or undefined, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotNill<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotNill(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a big int, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotBigInt<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotBigInt(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}

/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a symbol, it will call the callback passing the
 * original variable in question.
 * @param variable 
 */
export function whenNotSymbol<Context>(variable: Context) {
    return function (handler: iWhenArgumentFunction<Context>) {
        if (isNotSymbol(variable)) {
            ensureFunction(handler)(variable)
        }
    }
}
