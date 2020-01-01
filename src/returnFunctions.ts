import { isArray, isBigInt, isBoolean, isFunction, isNull, isNumber, isObject, isObjectLike, isString, isStringWithLength, isSymbol } from "./isFunctions";

/**
 * Provide an variable as an argument. If the variable is an object or an array, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnObjectLikeOrNothing<Context>(variable: Context): Context {
    if (isObjectLike(variable)) {
        return variable
    }
    return void 0;
}

/**
 * Provide an variable as an argument. If the variable is an object, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnObjectOrNothing<Context>(variable: Context): Context {
    if (isObject(variable)) {
        return variable
    }
    return void 0;
}

/**
 * Provide an variable as an argument. If the variable is a string, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnStringOrNothing(variable: any): string {
    if (isString(variable)) {
        return variable;
    }
    return void 0;
}

/**
 * Provide an variable as an argument. If the variable is a string with length, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnStringWithLengthOrNothing(variable: any): string {
    if (isStringWithLength(variable)) {
        return variable
    }
    return void 0;
}

/**
 * Provide an variable as an argument. If the variable is a function, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnFunctionOrNothing<Context>(variable: Context): Context {
    if (isFunction(variable)) {
        return variable;
    }
    return void 0
}

/**
 * Provide an variable as an argument. If the variable is a boolean value, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnBooleanOrNothing(variable: any): boolean {
    if (isBoolean(variable)) {
        return variable;
    }
    return void 0;
}

/**
 * Provide an variable as an argument. If the variable is a number, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnNumberOrNothing(variable: any): number {
    if (isNumber(variable)) {
        return variable;
    }
    return void 0;
}

/**
 * Provide an variable as an argument. If the variable is an array, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnArrayOrNothing<Context>(variable: Context): Context {
    if (isArray(variable)) {
        return variable;
    }
    return void 0;
}

/**
 * Provide an variable as an argument. If the variable is null, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnNullOrNothing(variable: any): null {
    if (isNull(variable)) {
        return variable;
    }
    return void 0;
}

/**
 * Provide an variable as an argument. If the variable is a big int, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnBigIntOrNothing(variable: any): bigint {
    if (isBigInt(variable)) {
        return variable;
    }
    return void 0;
}

/**
 * Provide an variable as an argument. If the variable is a symbol, it
 * will be returned. If it is not, undefined is returned.
 * @param variable 
 */
export function returnSymbolOrNothing<Context>(variable: Context): Context {
    if (isSymbol(variable)) {
        return variable;
    }
    return void 0;
}
