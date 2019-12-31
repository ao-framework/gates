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
 * is not a string with length
 * @param variable 
 */
export function isNotStringWithLength(variable: any) {
    return isString(variable) ?
        variable.length === 0 :
        true
}

export function isNotFunction(variable: any) {
    return !isFunction(variable);
}

export function isNotBoolean(variable: any) {
    return !isBoolean(variable)
}

export function isNotNumber(variable: any) {
    return !isNumber(variable)
}

export function isNotArray(variable: any) {
    return !isArray(variable)
}

export function isNotUndefined(variable: any) {
    return !isUndefined(variable)
}

export function isNotNull(variable: any) {
    return !isNull(variable);
}

export function isNotNill(variable: any) {
    return !isUndefined(variable) && !isNull(variable)
}

export function isNotBigInt(variable: any) {
    return !isBigInt(variable);
}

export function isNotSymbol(variable: any) {
    return !isSymbol(variable);
}
