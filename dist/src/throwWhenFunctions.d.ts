/**
 * Provide an error message and error constructor (optional) as arguments. It will throw an exception.
 * @param message
 * @param errorConstructor
 */
export declare function throwException(message: string, errorConstructor?: ErrorConstructor): void;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * object like, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenObjectLike<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * an object, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenObject<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a string, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenString<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a string with length, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenStringWithLength<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a function, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenFunction<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a boolean value, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenBoolean<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a number, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNumber<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * an array, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenArray<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * undefined, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenUndefined<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * null, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNull<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * null or undefined, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenNill<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a big int, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenBigInt<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a symbol, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenSymbol<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * truthy, it will throw an exception using the message and error constructor.
 * @param variable
 * @param message
 * @param errorConstructor
 */
export declare function throwWhenTrue<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
