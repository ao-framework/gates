import {
  isArray,
  isBigInt,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isString,
  isSymbol,
  isUndefined,
} from './isFunctions'
import type { AnyFunction, DefinitelyNot } from './types'

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not object like, more specifically not an array or object. Null will
 * return true.
 * @param variable
 */
export function isNotObjectLike<Context>(
  variable: Context
): variable is DefinitelyNot<Context, unknown[]> & DefinitelyNot<Context, object> {
  return !isObjectLike(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not an object. If the variable is null or an array, it will return true.
 * @param variable
 */
export function isNotObject<Context>(variable: Context): variable is DefinitelyNot<Context, object> {
  return !isObject(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a string.
 * @param variable
 */
export function isNotString<Context>(variable: Context): variable is DefinitelyNot<Context, string> {
  return isString(variable) === false
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a string with length.
 * @param variable
 */
export function isNotStringWithLength<Context>(variable: Context): variable is Context {
  return isString(variable) ? variable.length === 0 : true
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a function.
 * @param variable
 */
export function isNotFunction<Context>(variable: Context): variable is DefinitelyNot<Context, AnyFunction> {
  return !isFunction(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a boolean value.
 * @param variable
 */
export function isNotBoolean<Context>(variable: Context): variable is DefinitelyNot<Context, boolean> {
  return !isBoolean(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a number.
 * @param variable
 */
export function isNotNumber<Context>(variable: Context): variable is DefinitelyNot<Context, number> {
  return !isNumber(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not an array.
 * @param variable
 */
export function isNotArray<Context>(variable: Context): variable is DefinitelyNot<Context, Array<unknown>> {
  return !isArray(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not undefined.
 * @param variable
 */
export function isNotUndefined<Context>(variable: Context): variable is DefinitelyNot<Context, undefined> {
  return !isUndefined(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not null.
 * @param variable
 */
export function isNotNull<Context>(variable: Context): variable is DefinitelyNot<Context, null> {
  return !isNull(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not null or undefined.
 * @param variable
 */
export function isNotNill<Context>(
  variable: Context
): variable is DefinitelyNot<Context, null> & DefinitelyNot<Context, undefined> {
  return !isUndefined(variable) && !isNull(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a big int.
 * @param variable
 */
export function isNotBigInt<Context>(variable: Context): variable is DefinitelyNot<Context, bigint> {
  return !isBigInt(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is not a symbol.
 * @param variable
 */
export function isNotSymbol<Context>(variable: Context): variable is DefinitelyNot<Context, symbol> {
  return !isSymbol(variable)
}
