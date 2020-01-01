/**
 * Provide an variable as an argument. If the variable is an object or an array, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnObjectLikeOrNothing<Context>(variable: Context): Context;
/**
 * Provide an variable as an argument. If the variable is an object, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnObjectOrNothing<Context>(variable: Context): Context;
/**
 * Provide an variable as an argument. If the variable is a string, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnStringOrNothing(variable: any): string;
/**
 * Provide an variable as an argument. If the variable is a string with length, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnStringWithLengthOrNothing(variable: any): string;
/**
 * Provide an variable as an argument. If the variable is a function, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnFunctionOrNothing<Context>(variable: Context): Context;
/**
 * Provide an variable as an argument. If the variable is a boolean value, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnBooleanOrNothing(variable: any): boolean;
/**
 * Provide an variable as an argument. If the variable is a number, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnNumberOrNothing(variable: any): number;
/**
 * Provide an variable as an argument. If the variable is an array, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnArrayOrNothing<Context>(variable: Context): Context;
/**
 * Provide an variable as an argument. If the variable is null, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnNullOrNothing(variable: any): null;
/**
 * Provide an variable as an argument. If the variable is a big int, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnBigIntOrNothing(variable: any): bigint;
/**
 * Provide an variable as an argument. If the variable is a symbol, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export declare function returnSymbolOrNothing<Context>(variable: Context): Context;
