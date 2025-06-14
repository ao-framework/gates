import type { AnyConstructor, AnyFunction } from './types'

/**
 * Provide a variable as an argument. It will return true if the variable
 * is object like, more specifically an array or object. If the variable is
 * null, it will return false.
 * @param variable
 */
export function isObjectLike(variable: unknown): variable is object | Array<unknown> {
  return typeof variable === 'object' && !isNull(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is an object. If the variable is null or an array, it will return false.
 * @param variable
 */
export function isObject(variable: unknown): variable is object {
  return isObjectLike(variable) && Array.isArray(variable) === false
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a string.
 * @param variable
 */
export function isString(variable: unknown): variable is string {
  return typeof variable === 'string'
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a string and has any length at all.
 * @param variable
 */
export function isStringWithLength(variable: unknown): variable is string {
  return isString(variable) && variable.length > 0
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a function.
 * @param variable
 */
export function isFunction(variable: unknown): variable is AnyFunction {
  return typeof variable === 'function'
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a boolean value.
 * @param variable
 */
export function isBoolean(variable: unknown): variable is boolean {
  return typeof variable === 'boolean'
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a number.
 * @param variable
 */
export function isNumber(variable: unknown): variable is number {
  return typeof variable === 'number'
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is an array.
 * @param variable
 */
export function isArray(variable: unknown): variable is Array<unknown> {
  return Array.isArray(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is undefined.
 * @param variable
 */
export function isUndefined(variable: unknown): variable is undefined {
  return variable === undefined
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is null.
 * @param variable
 */
export function isNull(variable: unknown): variable is null {
  return variable === null
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is undefined or null.
 * @param variable
 */
export function isNill(variable: unknown): variable is null | undefined {
  return isUndefined(variable) || isNull(variable)
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a Big Integer
 * @param variable
 */
export function isBigInt(variable: unknown): variable is bigint {
  return typeof variable === 'bigint'
}

/**
 * Provide a variable as an argument. It will return true if the variable
 * is a Symbol
 * @param variable
 */
export function isSymbol(variable: unknown): variable is symbol {
  return typeof variable === 'symbol'
}

/**
 * Provide a variable and a constructor as arguments. It will return true if the variable
 * is constructed from the constructor given.
 * @param variable
 */
export function constructedFrom<Context extends AnyConstructor>(
  variable: unknown,
  constructor: AnyConstructor
): variable is Context {
  return variable instanceof constructor
}
