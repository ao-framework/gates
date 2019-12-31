import { Apparatus } from "@ao-framework/acumen";

import * as gates from "../src";
import { DataTypes } from "./model/dataTypes";

export class SuiteIsFunctions {

    public controller({ testAll }: Apparatus) {
        return testAll(new DataTypes())
    }

    public isObjectLike({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isObjectLike(types.testArray)).equal(true)
        expect(gates.isObjectLike(types.testObject)).equal(true)
        expect(gates.isObjectLike(types.testString)).equal(false)
        expect(gates.isObjectLike(types.testStringWithLength)).equal(false)
        expect(gates.isObjectLike(types.testFunction)).equal(false)
        expect(gates.isObjectLike(types.testBoolean)).equal(false)
        expect(gates.isObjectLike(types.testNumber)).equal(false)
        expect(gates.isObjectLike(types.testUndefined)).equal(false)
        expect(gates.isObjectLike(types.testNull)).equal(false)
        expect(gates.isObjectLike(types.testBigInt)).equal(false)
        expect(gates.isObjectLike(types.testSymbol)).equal(false)
    }

    public isObject({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isObject(types.testArray)).equal(false)
        expect(gates.isObject(types.testObject)).equal(true)
        expect(gates.isObject(types.testString)).equal(false)
        expect(gates.isObject(types.testStringWithLength)).equal(false)
        expect(gates.isObject(types.testFunction)).equal(false)
        expect(gates.isObject(types.testBoolean)).equal(false)
        expect(gates.isObject(types.testNumber)).equal(false)
        expect(gates.isObject(types.testUndefined)).equal(false)
        expect(gates.isObject(types.testNull)).equal(false)
        expect(gates.isObject(types.testBigInt)).equal(false)
        expect(gates.isObject(types.testSymbol)).equal(false)
    }

    public isString({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isString(types.testArray)).equal(false)
        expect(gates.isString(types.testObject)).equal(false)
        expect(gates.isString(types.testString)).equal(true)
        expect(gates.isString(types.testStringWithLength)).equal(true)
        expect(gates.isString(types.testFunction)).equal(false)
        expect(gates.isString(types.testBoolean)).equal(false)
        expect(gates.isString(types.testNumber)).equal(false)
        expect(gates.isString(types.testUndefined)).equal(false)
        expect(gates.isString(types.testNull)).equal(false)
        expect(gates.isString(types.testBigInt)).equal(false)
        expect(gates.isString(types.testSymbol)).equal(false)
    }

    public isStringWithLength({ expect }: Apparatus, types: DataTypes) {
        // add max
        // add min
        expect(gates.isStringWithLength(types.testArray)).equal(false)
        expect(gates.isStringWithLength(types.testObject)).equal(false)
        expect(gates.isStringWithLength(types.testString)).equal(false)
        expect(gates.isStringWithLength(types.testStringWithLength)).equal(true)
        expect(gates.isStringWithLength(types.testFunction)).equal(false)
        expect(gates.isStringWithLength(types.testBoolean)).equal(false)
        expect(gates.isStringWithLength(types.testNumber)).equal(false)
        expect(gates.isStringWithLength(types.testUndefined)).equal(false)
        expect(gates.isStringWithLength(types.testNull)).equal(false)
        expect(gates.isStringWithLength(types.testBigInt)).equal(false)
        expect(gates.isStringWithLength(types.testSymbol)).equal(false)
    }

    public isFunction({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isFunction(types.testArray)).equal(false)
        expect(gates.isFunction(types.testObject)).equal(false)
        expect(gates.isFunction(types.testString)).equal(false)
        expect(gates.isFunction(types.testStringWithLength)).equal(false)
        expect(gates.isFunction(types.testFunction)).equal(true)
        expect(gates.isFunction(types.testBoolean)).equal(false)
        expect(gates.isFunction(types.testNumber)).equal(false)
        expect(gates.isFunction(types.testUndefined)).equal(false)
        expect(gates.isFunction(types.testNull)).equal(false)
        expect(gates.isFunction(types.testBigInt)).equal(false)
        expect(gates.isFunction(types.testSymbol)).equal(false)
    }

    public isBoolean({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isBoolean(types.testArray)).equal(false)
        expect(gates.isBoolean(types.testObject)).equal(false)
        expect(gates.isBoolean(types.testString)).equal(false)
        expect(gates.isBoolean(types.testStringWithLength)).equal(false)
        expect(gates.isBoolean(types.testFunction)).equal(false)
        expect(gates.isBoolean(types.testBoolean)).equal(true)
        expect(gates.isBoolean(types.testNumber)).equal(false)
        expect(gates.isBoolean(types.testUndefined)).equal(false)
        expect(gates.isBoolean(types.testNull)).equal(false)
        expect(gates.isBoolean(types.testBigInt)).equal(false)
        expect(gates.isBoolean(types.testSymbol)).equal(false)
    }

    public isNumber({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNumber(types.testArray)).equal(false)
        expect(gates.isNumber(types.testObject)).equal(false)
        expect(gates.isNumber(types.testString)).equal(false)
        expect(gates.isNumber(types.testStringWithLength)).equal(false)
        expect(gates.isNumber(types.testFunction)).equal(false)
        expect(gates.isNumber(types.testBoolean)).equal(false)
        expect(gates.isNumber(types.testNumber)).equal(true)
        expect(gates.isNumber(types.testUndefined)).equal(false)
        expect(gates.isNumber(types.testNull)).equal(false)
        expect(gates.isNumber(types.testBigInt)).equal(false)
        expect(gates.isNumber(types.testSymbol)).equal(false)
    }

    public isArray({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isArray(types.testArray)).equal(true)
        expect(gates.isArray(types.testObject)).equal(false)
        expect(gates.isArray(types.testString)).equal(false)
        expect(gates.isArray(types.testStringWithLength)).equal(false)
        expect(gates.isArray(types.testFunction)).equal(false)
        expect(gates.isArray(types.testBoolean)).equal(false)
        expect(gates.isArray(types.testNumber)).equal(false)
        expect(gates.isArray(types.testUndefined)).equal(false)
        expect(gates.isArray(types.testNull)).equal(false)
        expect(gates.isArray(types.testBigInt)).equal(false)
        expect(gates.isArray(types.testSymbol)).equal(false)
    }

    public isUndefined({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isUndefined(types.testArray)).equal(false)
        expect(gates.isUndefined(types.testObject)).equal(false)
        expect(gates.isUndefined(types.testString)).equal(false)
        expect(gates.isUndefined(types.testStringWithLength)).equal(false)
        expect(gates.isUndefined(types.testFunction)).equal(false)
        expect(gates.isUndefined(types.testBoolean)).equal(false)
        expect(gates.isUndefined(types.testNumber)).equal(false)
        expect(gates.isUndefined(types.testUndefined)).equal(true)
        expect(gates.isUndefined(types.testNull)).equal(false)
        expect(gates.isUndefined(types.testBigInt)).equal(false)
        expect(gates.isUndefined(types.testSymbol)).equal(false)
    }
    public isNull({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNull(types.testArray)).equal(false)
        expect(gates.isNull(types.testObject)).equal(false)
        expect(gates.isNull(types.testString)).equal(false)
        expect(gates.isNull(types.testStringWithLength)).equal(false)
        expect(gates.isNull(types.testFunction)).equal(false)
        expect(gates.isNull(types.testBoolean)).equal(false)
        expect(gates.isNull(types.testNumber)).equal(false)
        expect(gates.isNull(types.testUndefined)).equal(false)
        expect(gates.isNull(types.testNull)).equal(true)
        expect(gates.isNull(types.testBigInt)).equal(false)
        expect(gates.isNull(types.testSymbol)).equal(false)
    }

    public isNill({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNill(types.testArray)).equal(false)
        expect(gates.isNill(types.testObject)).equal(false)
        expect(gates.isNill(types.testString)).equal(false)
        expect(gates.isNill(types.testStringWithLength)).equal(false)
        expect(gates.isNill(types.testFunction)).equal(false)
        expect(gates.isNill(types.testBoolean)).equal(false)
        expect(gates.isNill(types.testNumber)).equal(false)
        expect(gates.isNill(types.testUndefined)).equal(true)
        expect(gates.isNill(types.testNull)).equal(true)
        expect(gates.isNill(types.testBigInt)).equal(false)
        expect(gates.isNill(types.testSymbol)).equal(false)
    }

    public isBigInt({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isBigInt(types.testArray)).equal(false)
        expect(gates.isBigInt(types.testObject)).equal(false)
        expect(gates.isBigInt(types.testString)).equal(false)
        expect(gates.isBigInt(types.testStringWithLength)).equal(false)
        expect(gates.isBigInt(types.testFunction)).equal(false)
        expect(gates.isBigInt(types.testBoolean)).equal(false)
        expect(gates.isBigInt(types.testNumber)).equal(false)
        expect(gates.isBigInt(types.testUndefined)).equal(false)
        expect(gates.isBigInt(types.testNull)).equal(false)
        expect(gates.isBigInt(types.testBigInt)).equal(true)
        expect(gates.isBigInt(types.testSymbol)).equal(false)
    }

    public isSymbol({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isSymbol(types.testArray)).equal(false)
        expect(gates.isSymbol(types.testObject)).equal(false)
        expect(gates.isSymbol(types.testString)).equal(false)
        expect(gates.isSymbol(types.testStringWithLength)).equal(false)
        expect(gates.isSymbol(types.testFunction)).equal(false)
        expect(gates.isSymbol(types.testBoolean)).equal(false)
        expect(gates.isSymbol(types.testNumber)).equal(false)
        expect(gates.isSymbol(types.testUndefined)).equal(false)
        expect(gates.isSymbol(types.testNull)).equal(false)
        expect(gates.isSymbol(types.testBigInt)).equal(false)
        expect(gates.isSymbol(types.testSymbol)).equal(true)
    }
}
