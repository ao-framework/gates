import { test, expect, describe } from 'vitest'
import {
  isArray,
  isBigInt,
  isBoolean,
  isInstanceOf,
  isFunction,
  isNil,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isString,
  isStringWithLength,
  isSymbol,
  isUndefined,
  isStringWithByteLength,
} from './isFunctions'

describe('isFunctions', () => {
  test('isObjectLike', () => {
    // Passing
    expect(isObjectLike({})).toBe(true)
    expect(isObjectLike([])).toBe(true)
    // Failing
    expect(isObjectLike('')).toBe(false)
    expect(isObjectLike(null)).toBe(false)
  })

  test('isObject', () => {
    // Passing
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(false)
    // Failing
    expect(isObjectLike('')).toBe(false)
    expect(isObjectLike(null)).toBe(false)
  })

  test('isString', () => {
    // Passing
    expect(isString('')).toBe(true)
    expect(isString('string with length')).toBe(true)
    // Failing
    expect(isString({})).toBe(false)
    expect(isString(null)).toBe(false)
  })

  test('isStringWithLength', () => {
    // Passing
    expect(isStringWithLength('string with length')).toBe(true)
    expect(isStringWithLength('string with length', { minLength: 5 })).toBe(true)
    expect(isStringWithLength('string with length', { maxLength: 50 })).toBe(true)
    // Failing
    expect(isStringWithLength('')).toBe(false)
    expect(isStringWithLength({})).toBe(false)
    expect(isStringWithLength(null)).toBe(false)
    expect(isStringWithLength('string with length', { minLength: 500 })).toBe(false)
    expect(isStringWithLength('string with length', { maxLength: 5 })).toBe(false)
  })

  test('isStringWithByteLength', () => {
    // Passing
    expect(isStringWithByteLength('😁 string with length')).toBe(true)
    expect(isStringWithByteLength('😁 string with length', { minLength: 5 })).toBe(true)
    expect(isStringWithByteLength('😁 string with length', { maxLength: 50 })).toBe(true)
    // Failing
    expect(isStringWithByteLength('')).toBe(false)
    expect(isStringWithByteLength({})).toBe(false)
    expect(isStringWithByteLength(null)).toBe(false)
    expect(isStringWithByteLength('😁 string with length', { minLength: 500 })).toBe(false)
    expect(isStringWithByteLength('😁 string with length', { maxLength: 5 })).toBe(false)
  })

  test('isFunction', () => {
    // Passing
    expect(isFunction(() => {})).toBe(true)
    // Failing
    expect(isFunction({})).toBe(false)
    expect(isFunction(null)).toBe(false)
  })

  test('isBoolean', () => {
    // Passing
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    // Failing
    expect(isBoolean({})).toBe(false)
    expect(isBoolean(null)).toBe(false)
  })

  test('isNumber', () => {
    // Passing
    expect(isNumber(0)).toBe(true)
    expect(isNumber(1)).toBe(true)
    // Failing
    expect(isNumber({})).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(BigInt(5))).toBe(false)
    expect(isNumber(NaN)).toBe(false)
  })

  test('isArray', () => {
    // Passing
    expect(isArray([])).toBe(true)
    // Failing
    expect(isArray({})).toBe(false)
    expect(isArray(null)).toBe(false)
  })

  test('isUndefined', () => {
    // Passing
    expect(isUndefined(undefined)).toBe(true)
    // Failing
    expect(isUndefined({})).toBe(false)
    expect(isUndefined(null)).toBe(false)
  })

  test('isNull', () => {
    // Passing
    expect(isNull(null)).toBe(true)
    // Failing
    expect(isNull({})).toBe(false)
    expect(isNull(undefined)).toBe(false)
  })

  test('isNil', () => {
    // Passing
    expect(isNil(null)).toBe(true)
    expect(isNil(undefined)).toBe(true)
    // Failing
    expect(isNil({})).toBe(false)
  })

  test('isBigInt', () => {
    // Passing
    expect(isBigInt(BigInt(0))).toBe(true)
    // Failing
    expect(isBigInt({})).toBe(false)
    expect(isBigInt(0)).toBe(false)
  })

  test('isSymbol', () => {
    // Passing
    expect(isSymbol(Symbol('key'))).toBe(true)
    // Failing
    expect(isSymbol({})).toBe(false)
    expect(isSymbol(0)).toBe(false)
  })

  test('isConstructedFrom', () => {
    // Passing
    expect(isInstanceOf(new Error('This is an error'), Error)).toBe(true)
    // Failing
    expect(isInstanceOf({}, Error)).toBe(false)
    expect(isInstanceOf(0, Error)).toBe(false)
  })
})
