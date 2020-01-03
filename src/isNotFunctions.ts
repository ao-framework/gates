import { isArray, isBigInt, isBoolean, isFunction, isNull, isNumber, isObject, isObjectLike, isString, isSymbol, isUndefined } from "./isFunctions";

type DefinitelyNot<Context, Negation> = Context extends Negation ? never : Context;

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not object like, more specifically not an array or object. Null will 
 * return true.
 * @param variable 
 */
export function isNotObjectLike<Context extends any>(variable: Context): variable is DefinitelyNot<Context, any[]> & DefinitelyNot<Context, object> {
    return !isObjectLike(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not an object. If the variable is null or an array, it will return true.
 * @param variable 
 */
export function isNotObject<Context extends any>(variable: Context): variable is DefinitelyNot<Context, object> {
    return !isObject(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a string.
 * @param variable 
 */
export function isNotString<Context extends any>(variable: Context): variable is DefinitelyNot<Context, string> {
    return isString(variable) === false;
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a string with length.
 * @param variable 
 */
export function isNotStringWithLength<Context extends any>(variable: Context): variable is any {
    return isString(variable) ?
        variable.length === 0 :
        true
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a function.
 * @param variable 
 */
export function isNotFunction<Context extends any>(variable: Context): variable is DefinitelyNot<Context, Function> {
    return !isFunction(variable);
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a boolean value.
 * @param variable 
 */
export function isNotBoolean<Context extends any>(variable: Context): variable is DefinitelyNot<Context, boolean> {
    return !isBoolean(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a number.
 * @param variable 
 */
export function isNotNumber<Context extends any>(variable: Context): variable is DefinitelyNot<Context, number> {
    return !isNumber(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not an array.
 * @param variable 
 */
export function isNotArray<Context extends any>(variable: Context): variable is DefinitelyNot<Context, any[]> {
    return !isArray(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not undefined.
 * @param variable 
 */
export function isNotUndefined<Context extends any>(variable: Context): variable is DefinitelyNot<Context, undefined> {
    return !isUndefined(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not null.
 * @param variable 
 */
export function isNotNull<Context extends any>(variable: Context): variable is DefinitelyNot<Context, null> {
    return !isNull(variable);
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not null or undefined.
 * @param variable 
 */
export function isNotNill<Context extends any>(variable: Context): variable is DefinitelyNot<Context, null> & DefinitelyNot<Context, undefined> {
    return !isUndefined(variable) && !isNull(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a big int.
 * @param variable 
 */
export function isNotBigInt<Context extends any>(variable: Context): variable is DefinitelyNot<Context, bigint> {
    return !isBigInt(variable);
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a symbol.
 * @param variable 
 */
export function isNotSymbol<Context extends any>(variable: Context): variable is DefinitelyNot<Context, symbol> {
    return !isSymbol(variable);
}
