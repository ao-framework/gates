declare type DefinitelyNot<Context, Negation> = Context extends Negation ? never : Context;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not object like, more specifically not an array or object. Null will
 * return true.
 * @param variable
 */
export declare function isNotObjectLike<Context extends any>(variable: Context): variable is DefinitelyNot<Context, any[]> & DefinitelyNot<Context, object>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not an object. If the variable is null or an array, it will return true.
 * @param variable
 */
export declare function isNotObject<Context extends any>(variable: Context): variable is DefinitelyNot<Context, object>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a string.
 * @param variable
 */
export declare function isNotString<Context extends any>(variable: Context): variable is DefinitelyNot<Context, string>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a string with length.
 * @param variable
 */
export declare function isNotStringWithLength<Context extends any>(variable: Context): variable is any;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a function.
 * @param variable
 */
export declare function isNotFunction<Context extends any>(variable: Context): variable is DefinitelyNot<Context, Function>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a boolean value.
 * @param variable
 */
export declare function isNotBoolean<Context extends any>(variable: Context): variable is DefinitelyNot<Context, boolean>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a number.
 * @param variable
 */
export declare function isNotNumber<Context extends any>(variable: Context): variable is DefinitelyNot<Context, number>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not an array.
 * @param variable
 */
export declare function isNotArray<Context extends any>(variable: Context): variable is DefinitelyNot<Context, any[]>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not undefined.
 * @param variable
 */
export declare function isNotUndefined<Context extends any>(variable: Context): variable is DefinitelyNot<Context, undefined>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not null.
 * @param variable
 */
export declare function isNotNull<Context extends any>(variable: Context): variable is DefinitelyNot<Context, null>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not null or undefined.
 * @param variable
 */
export declare function isNotNill<Context extends any>(variable: Context): variable is DefinitelyNot<Context, null> & DefinitelyNot<Context, undefined>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a big int.
 * @param variable
 */
export declare function isNotBigInt<Context extends any>(variable: Context): variable is DefinitelyNot<Context, bigint>;
/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a symbol.
 * @param variable
 */
export declare function isNotSymbol<Context extends any>(variable: Context): variable is DefinitelyNot<Context, symbol>;
export {};
