import { isArray, isBigInt, isBoolean, isFunction, isNull, isNumber, isObject, isObjectLike, isString, isStringWithLength, isSymbol } from "./isFunctions";

export function returnObjectLikeOrNothing<Context>(variable: Context): Context {
    if (isObjectLike(variable)) {
        return variable
    }
    return void 0;
}

export function returnObjectOrNothing<Context>(variable: Context): Context {
    if (isObject(variable)) {
        return variable
    }
    return void 0;
}

export function returnStringOrNothing(variable: any): string {
    if (isString(variable)) {
        return variable;
    }
    return void 0;
}

export function returnStringWithLengthOrNothing(variable: any): string {
    if (isStringWithLength(variable)) {
        return variable
    }
    return void 0;
}

export function returnFunctionOrNothing<Context>(variable: Context): Context {
    if (isFunction(variable)) {
        return variable;
    }
    return void 0
}

export function returnBooleanOrNothing(variable: any): boolean {
    if (isBoolean(variable)) {
        return variable;
    }
    return void 0;
}

export function returnNumberOrNothing(variable: any): number {
    if (isNumber(variable)) {
        return variable;
    }
    return void 0;
}

export function returnArrayOrNothing<Context>(variable: Context): Context {
    if (isArray(variable)) {
        return variable;
    }
    return void 0;
}

export function returnNullOrNothing(variable: any): null {
    if (isNull(variable)) {
        return variable;
    }
    return void 0;
}

export function returnBigIntOrNothing(variable: any): bigint {
    if (isBigInt(variable)) {
        return variable;
    }
    return void 0;
}

export function returnSymbolOrNothing<Context>(variable: Context): Context {
    if (isSymbol(variable)) {
        return variable;
    }
    return void 0;
}
