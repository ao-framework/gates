/**
 * Provide a variable as an argument. It will return true if the variable
 * is object like, more specifically an array or object. If the variable is
 * null, it will return false.
 * @param variable
 */
export declare function isObjectLike(variable: any): variable is object | any[];
/**
 * Provide a variable as an argument. It will return true if the variable
 * is an object. If the variable is null or an array, it will return false.
 * @param variable
 */
export declare function isObject(variable: any): variable is object;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a string.
 * @param variable
 */
export declare function isString(variable: any): variable is string;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a string and has any length at all.
 * @param variable
 */
export declare function isStringWithLength(variable: any): variable is string;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a function.
 * @param variable
 */
export declare function isFunction(variable: any): variable is Function;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a boolean value.
 * @param variable
 */
export declare function isBoolean(variable: any): variable is boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a number.
 * @param variable
 */
export declare function isNumber(variable: any): variable is number;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is an array.
 * @param variable
 */
export declare function isArray(variable: any): variable is any[];
/**
 * Provide a variable as an argument. It will return true if the variable
 * is undefined.
 * @param variable
 */
export declare function isUndefined(variable: any): variable is undefined;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is null.
 * @param variable
 */
export declare function isNull(variable: any): variable is null;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is undefined or null.
 * @param variable
 */
export declare function isNill(variable: any): variable is null | undefined;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a Big Integer
 * @param variable
 */
export declare function isBigInt(variable: any): variable is bigint;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a Symbol
 * @param variable
 */
export declare function isSymbol(variable: any): variable is symbol;
/**
 * Provide a variable and a constructor as arguments. It will return true if the variable
 * is constructed from the constructor given.
 * @param variable
 */
export declare function constructedFrom<Context>(variable: any, constructor: any): variable is Context;
