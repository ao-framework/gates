/**
 * Provide a variable of any type, a default object, and a boolean value to specify whether to merge both
 * objects as parameters. If merging (default is true), it will return a merged object that represents the
 * variable passed and the default object. If not merging, it will either return the variable (if it is an object)
 * or the default object.
 * @param variable
 * @param defaultObject
 * @param merge
 */
export declare function ensureObject<Context extends object>(variable: Context, defaultObject: Context, merge?: boolean): Context;
/**
 * Provide a variable of any type, a default array, and a boolean value to specify whether to merge both
 * arrays as parameters. If merging (default is true), it will return a merged array that represents the
 * variable passed and the default array. If not merging, it will either return the variable (if it is an array)
 * or the default array.
 * @param variable
 * @param defaultObject
 * @param merge
 */
export declare function ensureArray<Context extends any[]>(variable: Context, defaultArray: Context, merge?: boolean): Context;
/**
 * Provide a variable of any type as a parameter. It will return a function. If the returned
 * function is called and if the variable passed is a function, the variable will be called
 * as a function, and the arguments will be emitted downwards.
 * @param variable
 */
export declare function ensureFunction(variable: any): (...args: any[]) => void;
