import { iWhenArgumentFunction } from "./contracts/iWhenArgumentFunction";
/**
 * Provide a condition as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the condition is met, it will call the callback.
 * @param variable
 */
export declare function when(condition: boolean): (handler: iWhenArgumentFunction<void>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is object like, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenObjectLike<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is an object, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenObject<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a string, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenString<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a string with length, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenStringWithLength<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a function, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenFunction<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a boolean value, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenBoolean<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a number, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNumber<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is an array, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenArray<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is undefined, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenUndefined<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is null, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNull<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is null or undefined, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenNill<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a big int, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenBigInt<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
/**
 * Provide a variable of any type as an argument. It will return a function.
 * The function returned, when called, requires a callback as its first argument.
 * If the variable passed is a symbol, it will call the callback passing the
 * original variable in question.
 * @param variable
 */
export declare function whenSymbol<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
