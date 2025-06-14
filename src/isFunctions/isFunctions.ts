import type { AnyConstructor, AnyFunction } from '../types'
import { byteSize } from '../utils'

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is
 * an object or an array. In other words, "Object Like."
 */
export function isObjectLike(value: unknown): value is Record<string, unknown> | Array<unknown> {
  return typeof value === 'object' && !isNull(value)
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is
 * an object.
 */
export function isObject(value: unknown): value is object {
  return isObjectLike(value) && Array.isArray(value) === false
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is a
 * string.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * This function is NOT a Type Guard generally for a string.
 * However, this function provides additional checks for min
 * and max values based on byte length; not character length.
 */
export function isStringWithByteLength(value: unknown, options?: { minLength?: number; maxLength?: number }) {
  if (isString(value)) {
    const size = byteSize(value)
    if (isObject(options)) {
      if (isNumber(options.minLength)) if (size < options.minLength) return false
      if (isNumber(options.maxLength)) if (size > options.maxLength) return false
    }
    return size > 0
  }
  return false
}

/**
 * This function is NOT a Type Guard generally for a string.
 * However, this function provides additional checks for min
 * and max values based on based on character length; not byte length.
 */
export function isStringWithLength(value: unknown, options?: { minLength?: number; maxLength?: number }) {
  if (isString(value)) {
    if (isObject(options)) {
      if (isNumber(options.minLength)) if (value.length < options.minLength) return false
      if (isNumber(options.maxLength)) if (value.length > options.maxLength) return false
    }
    return value.length > 0
  }
  return false
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is a
 * function.
 */
export function isFunction(value: unknown): value is AnyFunction {
  return typeof value === 'function'
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is a
 * bool.
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is a
 * number. YES. It does account for `NaN`.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value)
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is
 * an array.
 */
export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value)
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is
 * undefined.
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is
 * null.
 */
export function isNull(value: unknown): value is null {
  return value === null
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is
 * undefined or null.
 */
export function isNil(value: unknown): value is null | undefined {
  return isUndefined(value) || isNull(value)
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is
 * a `BigInt`.
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint'
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value is
 * a symbol.
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

/**
 * This function is a Type Guard. It will take an `unknown`
 * value and return a bool that will indicate if the value was
 * constructed from a given class constructor.
 */
export function isInstanceOf<Context extends AnyConstructor>(
  value: unknown,
  constructor: Context
): value is InstanceType<Context> {
  return value instanceof constructor
}
