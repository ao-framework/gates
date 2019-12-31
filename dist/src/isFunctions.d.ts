/**
 * Provide a variable as an argument. It will return true if the variable
 * is object like, more specifically an array or object. If the variable is
 * null, it will return false.
 * @param variable
 */
export declare function isObjectLike(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is an object. If the variable is null or an array, it will return false.
 * @param variable
 */
export declare function isObject(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a string.
 * @param variable
 */
export declare function isString(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a string and has any length at all.
 * @param variable
 */
export declare function isStringWithLength(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a function.
 * @param variable
 */
export declare function isFunction(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a boolean value.
 * @param variable
 */
export declare function isBoolean(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a number.
 * @param variable
 */
export declare function isNumber(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is an array.
 * @param variable
 */
export declare function isArray(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is undefined.
 * @param variable
 */
export declare function isUndefined(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is null.
 * @param variable
 */
export declare function isNull(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is undefined or null.
 * @param variable
 */
export declare function isNill(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a Big Integer
 * @param variable
 */
export declare function isBigInt(variable: any): boolean;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is a Symbol
 * @param variable
 */
export declare function isSymbol(variable: any): boolean;
/**
 * Provide a variable and a constructor as arguments. It will return true if the variable
 * is constructed from the constructor given.
 * @param variable
 */
export declare function constructedFrom(variable: any, constructor: any): boolean;
