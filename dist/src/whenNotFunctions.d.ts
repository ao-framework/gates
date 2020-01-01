import { iWhenArgumentFunction } from "./contracts/iWhenArgumentFunction";
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not object like, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotObjectLike<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not an object, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotObject<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a string, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotString<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a string with length, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotStringWithLength<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a function, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotFunction<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a boolean value, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotBoolean<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a number, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotNumber<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not an array, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotArray<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not an undefined, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotUndefined<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not null, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotNull<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not null or undefined, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotNill<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a big int, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotBigInt<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is not a symbol, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNotSymbol<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
