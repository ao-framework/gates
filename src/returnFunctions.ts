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
  isStringWithLength,
  isSymbol,
} from './isFunctions'
import type { AnyFunction } from './types'

/**
 * Provide an variable as an argument. If the variable is an object or an array, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnObjectLikeOrNothing<Context>(variable: Context) {
  if (isObjectLike(variable)) return variable
}

/**
 * Provide an variable as an argument. If the variable is an object, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnObjectOrNothing<Context>(variable: Context) {
  if (isObject(variable)) return variable
}

/**
 * Provide an variable as an argument. If the variable is a string, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnStringOrNothing(variable: unknown) {
  if (isString(variable)) return variable
}

/**
 * Provide an variable as an argument. If the variable is a string with length, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnStringWithLengthOrNothing(variable: unknown) {
  if (isStringWithLength(variable)) return variable
}

/**
 * Provide an variable as an argument. If the variable is a function, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnFunctionOrNothing<Context extends AnyFunction>(variable: Context): Context | void {
  if (isFunction(variable)) return variable
}

/**
 * Provide an variable as an argument. If the variable is a boolean value, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnBooleanOrNothing(variable: unknown) {
  if (isBoolean(variable)) return variable
}

/**
 * Provide an variable as an argument. If the variable is a number, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnNumberOrNothing(variable: unknown) {
  if (isNumber(variable)) return variable
}

/**
 * Provide an variable as an argument. If the variable is an array, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnArrayOrNothing<Context>(variable: Context) {
  if (isArray(variable)) return variable
}

/**
 * Provide an variable as an argument. If the variable is null, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnNullOrNothing(variable: unknown) {
  if (isNull(variable)) return variable
}

/**
 * Provide an variable as an argument. If the variable is a big int, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnBigIntOrNothing(variable: unknown) {
  if (isBigInt(variable)) return variable
}

/**
 * Provide an variable as an argument. If the variable is a symbol, it
 * will be returned. If it is not, undefined is returned.
 * @param variable
 */
export function returnSymbolOrNothing<Context>(variable: Context) {
  if (isSymbol(variable)) return variable
}
