import { isArray, isBigInt, isBoolean, isFunction, isNill, isNull, isNumber, isObject, isObjectLike, isString, isStringWithLength, isSymbol, isUndefined } from "./isFunctions";

export function throwException(message: string, errorConstructor: ErrorConstructor = Error) {
    throw new errorConstructor(message);
}

export function throwWhenObjectLike<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isObjectLike(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenObject<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isObject(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenString<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isString(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenStringWithLength<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isStringWithLength(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenFunction<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isFunction(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenBoolean<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isBoolean(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNumber<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNumber(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenArray<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isArray(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenUndefined<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isUndefined(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNull<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNull(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNill<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNill(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenBigInt<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isBigInt(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenSymbol<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isSymbol(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenTrue<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (variable) {
        throwException(message, errorConstructor)
    }
    return variable;
}
