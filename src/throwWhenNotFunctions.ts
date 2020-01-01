import { isNotArray, isNotBigInt, isNotBoolean, isNotFunction, isNotNill, isNotNull, isNotNumber, isNotObject, isNotObjectLike, isNotString, isNotStringWithLength, isNotSymbol, isNotUndefined } from "./isNotFunctions";
import { throwException } from "./throwWhenFunctions";

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not object like, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotObjectLike<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotObjectLike(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not an object, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotObject<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotObject(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a string, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotString<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotString(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a string with length, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotStringWithLength<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotStringWithLength(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a function, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotFunction<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotFunction(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a boolean value, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotBoolean<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotBoolean(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a number, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotNumber<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotNumber(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not an array, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotArray<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotArray(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not undefined, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotUndefined<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotUndefined(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not null, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotNull<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotNull(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not null or undefined, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotNill<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotNill(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a big int, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotBigInt<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotBigInt(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not a symbol, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenNotSymbol<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotSymbol(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

/**
 * Provide a variable of any type, error message, and error constructor as arguments. If the variable is
 * not falsy, it will throw an exception using the message and error constructor.
 * @param variable 
 * @param message 
 * @param errorConstructor 
 */
export function throwWhenFalse<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (!variable) {
        throwException(message, errorConstructor)
    }
    return variable;
}


