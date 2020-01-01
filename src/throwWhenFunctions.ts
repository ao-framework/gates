import { isArray, isBigInt, isBoolean, isFunction, isNill, isNull, isNumber, isObject, isObjectLike, isString, isStringWithLength, isSymbol, isUndefined } from "./isFunctions";

/**
 * Provide an error message and error constructor (optional) as arguments. It will throw an exception.
 * @param message 
 * @param errorConstructor 
 */
export function throwException(message: string, errorConstructor: ErrorConstructor = Error) {
    throw new errorConstructor(message);
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * object like, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenObjectLike<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isObjectLike(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * an object, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenObject<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isObject(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a string, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenString<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isString(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a string with length, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenStringWithLength<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isStringWithLength(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a function, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenFunction<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isFunction(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a boolean value, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenBoolean<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isBoolean(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a number, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNumber<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNumber(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * an array, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenArray<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isArray(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * undefined, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenUndefined<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isUndefined(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * null, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNull<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNull(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * null or undefined, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNill<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNill(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a big int, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenBigInt<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isBigInt(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * a symbol, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenSymbol<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isSymbol(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * truthy, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenTrue<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (variable) {
        throwException(message, errorConstructor)
    }
    return variable;
}
