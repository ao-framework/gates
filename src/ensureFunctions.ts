import { isObject, isFunction, isArray } from "./isFunctions";

export function ensureObject<Context extends object>(variable: Context, defaultObject: Context, merge: boolean = true) {
    return isObject(variable) ?
        (merge ? Object.assign(defaultObject, variable) : variable)
        : defaultObject
}

export function ensureArray<Context extends any[]>(variable: Context, defaultArray: Context, merge: boolean = true) {
    return isArray(variable) ?
        (merge ? Object.assign(defaultArray, variable) : variable)
        : defaultArray
}

export function ensureFunction(variable: any) {
    return function (...args: any[]) {
        if (isFunction(variable)) {
            variable(...args);
        }
    }
}
