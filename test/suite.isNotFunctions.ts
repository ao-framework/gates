import { Apparatus } from "@ao-framework/acumen";

import * as gates from "../src";
import { DataTypes } from "./model/dataTypes";

export class SuiteIsNotFunctions {

    public controller({ testAll }: Apparatus) {
        return testAll(new DataTypes());
    }

    public isNotObjectLike({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotObjectLike(types.testArray)).equal(false)
        expect(gates.isNotObjectLike(types.testObject)).equal(false)
        expect(gates.isNotObjectLike(types.testString)).equal(true)
        expect(gates.isNotObjectLike(types.testStringWithLength)).equal(true)
        expect(gates.isNotObjectLike(types.testFunction)).equal(true)
        expect(gates.isNotObjectLike(types.testBoolean)).equal(true)
        expect(gates.isNotObjectLike(types.testNumber)).equal(true)
        expect(gates.isNotObjectLike(types.testUndefined)).equal(true)
        expect(gates.isNotObjectLike(types.testNull)).equal(true)
        expect(gates.isNotObjectLike(types.testBigInt)).equal(true)
        expect(gates.isNotObjectLike(types.testSymbol)).equal(true)
    }

    public isNotObject({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotObject(types.testArray)).equal(true)
        expect(gates.isNotObject(types.testObject)).equal(false)
        expect(gates.isNotObject(types.testString)).equal(true)
        expect(gates.isNotObject(types.testStringWithLength)).equal(true)
        expect(gates.isNotObject(types.testFunction)).equal(true)
        expect(gates.isNotObject(types.testBoolean)).equal(true)
        expect(gates.isNotObject(types.testNumber)).equal(true)
        expect(gates.isNotObject(types.testUndefined)).equal(true)
        expect(gates.isNotObject(types.testNull)).equal(true)
        expect(gates.isNotObject(types.testBigInt)).equal(true)
        expect(gates.isNotObject(types.testSymbol)).equal(true)
    }

    public isNotString({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotString(types.testArray)).equal(true)
        expect(gates.isNotString(types.testObject)).equal(true)
        expect(gates.isNotString(types.testString)).equal(false)
        expect(gates.isNotString(types.testStringWithLength)).equal(false)
        expect(gates.isNotString(types.testFunction)).equal(true)
        expect(gates.isNotString(types.testBoolean)).equal(true)
        expect(gates.isNotString(types.testNumber)).equal(true)
        expect(gates.isNotString(types.testUndefined)).equal(true)
        expect(gates.isNotString(types.testNull)).equal(true)
        expect(gates.isNotString(types.testBigInt)).equal(true)
        expect(gates.isNotString(types.testSymbol)).equal(true)
    }

    public isNotStringWithLength({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotStringWithLength(types.testArray)).equal(true)
        expect(gates.isNotStringWithLength(types.testObject)).equal(true)
        expect(gates.isNotStringWithLength(types.testString)).equal(true)
        expect(gates.isNotStringWithLength(types.testStringWithLength)).equal(false)
        expect(gates.isNotStringWithLength(types.testFunction)).equal(true)
        expect(gates.isNotStringWithLength(types.testBoolean)).equal(true)
        expect(gates.isNotStringWithLength(types.testNumber)).equal(true)
        expect(gates.isNotStringWithLength(types.testUndefined)).equal(true)
        expect(gates.isNotStringWithLength(types.testNull)).equal(true)
        expect(gates.isNotStringWithLength(types.testBigInt)).equal(true)
        expect(gates.isNotStringWithLength(types.testSymbol)).equal(true)
    }

    public isNotFunction({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotFunction(types.testArray)).equal(true)
        expect(gates.isNotFunction(types.testObject)).equal(true)
        expect(gates.isNotFunction(types.testString)).equal(true)
        expect(gates.isNotFunction(types.testStringWithLength)).equal(true)
        expect(gates.isNotFunction(types.testFunction)).equal(false)
        expect(gates.isNotFunction(types.testBoolean)).equal(true)
        expect(gates.isNotFunction(types.testNumber)).equal(true)
        expect(gates.isNotFunction(types.testUndefined)).equal(true)
        expect(gates.isNotFunction(types.testNull)).equal(true)
        expect(gates.isNotFunction(types.testBigInt)).equal(true)
        expect(gates.isNotFunction(types.testSymbol)).equal(true)
    }

    public isNotBoolean({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotBoolean(types.testArray)).equal(true)
        expect(gates.isNotBoolean(types.testObject)).equal(true)
        expect(gates.isNotBoolean(types.testString)).equal(true)
        expect(gates.isNotBoolean(types.testStringWithLength)).equal(true)
        expect(gates.isNotBoolean(types.testFunction)).equal(true)
        expect(gates.isNotBoolean(types.testBoolean)).equal(false)
        expect(gates.isNotBoolean(types.testNumber)).equal(true)
        expect(gates.isNotBoolean(types.testUndefined)).equal(true)
        expect(gates.isNotBoolean(types.testNull)).equal(true)
        expect(gates.isNotBoolean(types.testBigInt)).equal(true)
        expect(gates.isNotBoolean(types.testSymbol)).equal(true)
    }

    public isNotNumber({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotNumber(types.testArray)).equal(true)
        expect(gates.isNotNumber(types.testObject)).equal(true)
        expect(gates.isNotNumber(types.testString)).equal(true)
        expect(gates.isNotNumber(types.testStringWithLength)).equal(true)
        expect(gates.isNotNumber(types.testFunction)).equal(true)
        expect(gates.isNotNumber(types.testBoolean)).equal(true)
        expect(gates.isNotNumber(types.testNumber)).equal(false)
        expect(gates.isNotNumber(types.testUndefined)).equal(true)
        expect(gates.isNotNumber(types.testNull)).equal(true)
        expect(gates.isNotNumber(types.testBigInt)).equal(true)
        expect(gates.isNotNumber(types.testSymbol)).equal(true)
    }

    public isNotArray({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotArray(types.testArray)).equal(false)
        expect(gates.isNotArray(types.testObject)).equal(true)
        expect(gates.isNotArray(types.testString)).equal(true)
        expect(gates.isNotArray(types.testStringWithLength)).equal(true)
        expect(gates.isNotArray(types.testFunction)).equal(true)
        expect(gates.isNotArray(types.testBoolean)).equal(true)
        expect(gates.isNotArray(types.testNumber)).equal(true)
        expect(gates.isNotArray(types.testUndefined)).equal(true)
        expect(gates.isNotArray(types.testNull)).equal(true)
        expect(gates.isNotArray(types.testBigInt)).equal(true)
        expect(gates.isNotArray(types.testSymbol)).equal(true)
    }

    public isNotUndefined({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotUndefined(types.testArray)).equal(true)
        expect(gates.isNotUndefined(types.testObject)).equal(true)
        expect(gates.isNotUndefined(types.testString)).equal(true)
        expect(gates.isNotUndefined(types.testStringWithLength)).equal(true)
        expect(gates.isNotUndefined(types.testFunction)).equal(true)
        expect(gates.isNotUndefined(types.testBoolean)).equal(true)
        expect(gates.isNotUndefined(types.testNumber)).equal(true)
        expect(gates.isNotUndefined(types.testUndefined)).equal(false)
        expect(gates.isNotUndefined(types.testNull)).equal(true)
        expect(gates.isNotUndefined(types.testBigInt)).equal(true)
        expect(gates.isNotUndefined(types.testSymbol)).equal(true)
    }

    public isNotNull({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotNull(types.testArray)).equal(true)
        expect(gates.isNotNull(types.testObject)).equal(true)
        expect(gates.isNotNull(types.testString)).equal(true)
        expect(gates.isNotNull(types.testStringWithLength)).equal(true)
        expect(gates.isNotNull(types.testFunction)).equal(true)
        expect(gates.isNotNull(types.testBoolean)).equal(true)
        expect(gates.isNotNull(types.testNumber)).equal(true)
        expect(gates.isNotNull(types.testUndefined)).equal(true)
        expect(gates.isNotNull(types.testNull)).equal(false)
        expect(gates.isNotNull(types.testBigInt)).equal(true)
        expect(gates.isNotNull(types.testSymbol)).equal(true)
    }

    public isNotNill({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotNill(types.testArray)).equal(true)
        expect(gates.isNotNill(types.testObject)).equal(true)
        expect(gates.isNotNill(types.testString)).equal(true)
        expect(gates.isNotNill(types.testStringWithLength)).equal(true)
        expect(gates.isNotNill(types.testFunction)).equal(true)
        expect(gates.isNotNill(types.testBoolean)).equal(true)
        expect(gates.isNotNill(types.testNumber)).equal(true)
        expect(gates.isNotNill(types.testUndefined)).equal(false)
        expect(gates.isNotNill(types.testNull)).equal(false)
        expect(gates.isNotNill(types.testBigInt)).equal(true)
        expect(gates.isNotNill(types.testSymbol)).equal(true)
    }

    public isNotBigInt({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotBigInt(types.testArray)).equal(true)
        expect(gates.isNotBigInt(types.testObject)).equal(true)
        expect(gates.isNotBigInt(types.testString)).equal(true)
        expect(gates.isNotBigInt(types.testStringWithLength)).equal(true)
        expect(gates.isNotBigInt(types.testFunction)).equal(true)
        expect(gates.isNotBigInt(types.testBoolean)).equal(true)
        expect(gates.isNotBigInt(types.testNumber)).equal(true)
        expect(gates.isNotBigInt(types.testUndefined)).equal(true)
        expect(gates.isNotBigInt(types.testNull)).equal(true)
        expect(gates.isNotBigInt(types.testBigInt)).equal(false)
        expect(gates.isNotBigInt(types.testSymbol)).equal(true)
    }

    public isNotSymbol({ expect }: Apparatus, types: DataTypes) {
        expect(gates.isNotSymbol(types.testArray)).equal(true)
        expect(gates.isNotSymbol(types.testObject)).equal(true)
        expect(gates.isNotSymbol(types.testString)).equal(true)
        expect(gates.isNotSymbol(types.testStringWithLength)).equal(true)
        expect(gates.isNotSymbol(types.testFunction)).equal(true)
        expect(gates.isNotSymbol(types.testBoolean)).equal(true)
        expect(gates.isNotSymbol(types.testNumber)).equal(true)
        expect(gates.isNotSymbol(types.testUndefined)).equal(true)
        expect(gates.isNotSymbol(types.testNull)).equal(true)
        expect(gates.isNotSymbol(types.testBigInt)).equal(true)
        expect(gates.isNotSymbol(types.testSymbol)).equal(false)
    }
}
