/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not object like, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotObjectLike<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not an object, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotObject<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a string, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotString<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a string with length, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotStringWithLength<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a function, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotFunction<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a boolean value, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotBoolean<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a number, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotNumber<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not an array, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotArray<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not undefined, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotUndefined<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not null, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotNull<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not null or undefined, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotNill<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a big int, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotBigInt<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a symbol, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNotSymbol<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not falsy, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenFalse<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
