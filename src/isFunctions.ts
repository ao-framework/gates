/**
 * Provide a variable as an argument. It will return true if the variable
 * is object like, more specifically an array or object. If the variable is
 * null, it will return false.
 * @param variable 
 */
export function isObjectLike(variable: any): variable is object | any[] {
    return typeof variable === "object" && !isNull(variable);
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is an object. If the variable is null or an array, it will return false.
 * @param variable 
 */
export function isObject(variable: any): variable is object {
    return isObjectLike(variable) && Array.isArray(variable) === false;
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a string.
 * @param variable 
 */
export function isString(variable: any): variable is string {
    return typeof variable === "string";
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a string and has any length at all.
 * @param variable 
 */
export function isStringWithLength(variable: any): variable is string {
    return isString(variable) && variable.length > 0;
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a function.
 * @param variable 
 */
export function isFunction(variable: any): variable is Function {
    return typeof variable === "function"
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a boolean value.
 * @param variable 
 */
export function isBoolean(variable: any): variable is boolean {
    return typeof variable === "boolean";
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a number.
 * @param variable 
 */
export function isNumber(variable: any): variable is number {
    return typeof variable === "number";
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is an array.
 * @param variable 
 */
export function isArray(variable: any): variable is any[] {
    return Array.isArray(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is undefined.
 * @param variable 
 */
export function isUndefined(variable: any): variable is undefined {
    return variable === undefined;
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is null.
 * @param variable 
 */
export function isNull(variable: any): variable is null {
    return variable === null;
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is undefined or null.
 * @param variable 
 */
export function isNill(variable: any): variable is null | undefined {
    return isUndefined(variable) || isNull(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a Big Integer
 * @param variable 
 */
export function isBigInt(variable: any): variable is bigint {
    return typeof variable === "bigint";
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a Symbol
 * @param variable 
 */
export function isSymbol(variable: any): variable is symbol {
    return typeof variable === "symbol";
}

/**
 * Provide a variable and a constructor as arguments. It will return true if the variable
 * is constructed from the constructor given.
 * @param variable 
 */
export function constructedFrom<Context>(variable: any, constructor: any): variable is Context {
    return variable instanceof constructor;
}
