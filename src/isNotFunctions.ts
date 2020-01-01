import { isArray, isBigInt, isBoolean, isFunction, isNull, isNumber, isObject, isObjectLike, isString, isSymbol, isUndefined } from "./isFunctions";

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not object like, more specifically not an array or object. Null will 
 * return true.
 * @param variable 
 */
export function isNotObjectLike(variable: any) {
    return !isObjectLike(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not an object. If the variable is null or an array, it will return true.
 * @param variable 
 */
export function isNotObject(variable: any) {
    return !isObject(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a string.
 * @param variable 
 */
export function isNotString(variable: any) {
    return !isString(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a string with length.
 * @param variable 
 */
export function isNotStringWithLength(variable: any) {
    return isString(variable) ?
        variable.length === 0 :
        true
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a function.
 * @param variable 
 */
export function isNotFunction(variable: any) {
    return !isFunction(variable);
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a boolean value.
 * @param variable 
 */
export function isNotBoolean(variable: any) {
    return !isBoolean(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a number.
 * @param variable 
 */
export function isNotNumber(variable: any) {
    return !isNumber(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not an array.
 * @param variable 
 */
export function isNotArray(variable: any) {
    return !isArray(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not undefined.
 * @param variable 
 */
export function isNotUndefined(variable: any) {
    return !isUndefined(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not null.
 * @param variable 
 */
export function isNotNull(variable: any) {
    return !isNull(variable);
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not null or undefined.
 * @param variable 
 */
export function isNotNill(variable: any) {
    return !isUndefined(variable) && !isNull(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a big int.
 * @param variable 
 */
export function isNotBigInt(variable: any) {
    return !isBigInt(variable);
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a symbol.
 * @param variable 
 */
export function isNotSymbol(variable: any) {
    return !isSymbol(variable);
}
