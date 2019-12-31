import { isNotArray, isNotBigInt, isNotBoolean, isNotFunction, isNotNill, isNotNull, isNotNumber, isNotObject, isNotObjectLike, isNotString, isNotStringWithLength, isNotSymbol, isNotUndefined } from "./isNotFunctions";
import { throwException } from "./throwWhenFunctions";

export function throwWhenNotObjectLike<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotObjectLike(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotObject<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotObject(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotString<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotString(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotStringWithLength<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotStringWithLength(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotFunction<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotFunction(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotBoolean<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotBoolean(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotNumber<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotNumber(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotArray<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotArray(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotUndefined<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotUndefined(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotNull<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotNull(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotNill<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotNill(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotBigInt<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotBigInt(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenNotSymbol<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (isNotSymbol(variable)) {
        throwException(message, errorConstructor)
    }
    return variable;
}

export function throwWhenFalse<Context>(variable: Context, message: string, errorConstructor: ErrorConstructor = Error): Context {
    if (!variable) {
        throwException(message, errorConstructor)
    }
    return variable;
}


