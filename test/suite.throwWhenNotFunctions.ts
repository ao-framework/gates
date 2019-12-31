import { Apparatus } from "@ao-framework/acumen";

import * as gates from "../src";
import { DataTypes } from "./model/dataTypes";

export class SuiteThrowers {

    public controller({ testAll }: Apparatus) {
        return testAll(new DataTypes(), "message");
    }

    public throwWhenNotObjectLike({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotObjectLike(types.testArray, message)).to.not.throw()
        expect(() => gates.throwWhenNotObjectLike(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenNotObjectLike(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotObjectLike(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotObjectLike(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotObjectLike(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotObjectLike(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotObjectLike(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotObjectLike(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotObjectLike(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotObjectLike(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotObject({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotObject(types.testArray, message)).to.throw(message)
        expect(() => gates.throwWhenNotObject(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenNotObject(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotObject(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotObject(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotObject(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotObject(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotObject(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotObject(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotObject(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotObject(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotString({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotString(types.testArray, message)).to.throw(message)
        expect(() => gates.throwWhenNotString(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotString(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenNotString(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenNotString(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotString(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotString(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotString(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotString(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotString(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotString(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotStringWithLength({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotStringWithLength(types.testArray, message)).to.throw(message)
        expect(() => gates.throwWhenNotStringWithLength(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotStringWithLength(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotStringWithLength(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenNotStringWithLength(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotStringWithLength(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotStringWithLength(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotStringWithLength(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotStringWithLength(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotStringWithLength(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotStringWithLength(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotFunction({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotFunction(types.testArray, message)).to.throw(message)
        expect(() => gates.throwWhenNotFunction(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotFunction(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotFunction(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotFunction(types.testFunction, message)).to.not.throw();
        expect(() => gates.throwWhenNotFunction(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotFunction(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotFunction(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotFunction(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotFunction(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotFunction(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotBoolean({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotBoolean(types.testArray, message)).to.throw(message)
        expect(() => gates.throwWhenNotBoolean(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotBoolean(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotBoolean(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotBoolean(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotBoolean(types.testBoolean, message)).to.not.throw();
        expect(() => gates.throwWhenNotBoolean(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotBoolean(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotBoolean(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotBoolean(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotBoolean(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotNumber({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotNumber(types.testArray, message)).to.throw(message)
        expect(() => gates.throwWhenNotNumber(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotNumber(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotNumber(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotNumber(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotNumber(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotNumber(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotNumber(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotNumber(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotNumber(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotNumber(types.testNumber, message)).to.not.throw();
    }

    public throwWhenNotArray({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotArray(types.testArray, message)).to.not.throw();
        expect(() => gates.throwWhenNotArray(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotArray(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotArray(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotArray(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotArray(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotArray(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotArray(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotArray(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotArray(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotArray(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotUndefined({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotUndefined(types.testArray, message)).to.throw(message);
        expect(() => gates.throwWhenNotUndefined(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotUndefined(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotUndefined(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotUndefined(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotUndefined(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotUndefined(types.testUndefined, message)).to.not.throw();
        expect(() => gates.throwWhenNotUndefined(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotUndefined(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotUndefined(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotUndefined(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotNull({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotNull(types.testArray, message)).to.throw(message);
        expect(() => gates.throwWhenNotNull(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotNull(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotNull(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotNull(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotNull(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotNull(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotNull(types.testNull, message)).to.not.throw();
        expect(() => gates.throwWhenNotNull(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotNull(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotNull(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotNill({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotNill(types.testArray, message)).to.throw(message);
        expect(() => gates.throwWhenNotNill(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotNill(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotNill(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotNill(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotNill(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotNill(types.testUndefined, message)).to.not.throw()
        expect(() => gates.throwWhenNotNill(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenNotNill(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotNill(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotNill(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotBigInt({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotBigInt(types.testArray, message)).to.throw(message);
        expect(() => gates.throwWhenNotBigInt(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotBigInt(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotBigInt(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotBigInt(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotBigInt(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotBigInt(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotBigInt(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotBigInt(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenNotBigInt(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenNotBigInt(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotSymbol({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNotSymbol(types.testArray, message)).to.throw(message);
        expect(() => gates.throwWhenNotSymbol(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenNotSymbol(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenNotSymbol(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenNotSymbol(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenNotSymbol(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenNotSymbol(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNotSymbol(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenNotSymbol(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenNotSymbol(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenNotSymbol(types.testNumber, message)).to.throw(message)
    }

    public throwWhenNotTrue({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenFalse(types.testArray, message)).to.not.throw();
        expect(() => gates.throwWhenFalse(types.testObject, message)).to.not.throw();
        expect(() => gates.throwWhenFalse(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenFalse(types.testStringWithLength, message)).to.not.throw();
        expect(() => gates.throwWhenFalse(types.testFunction, message)).to.not.throw();
        expect(() => gates.throwWhenFalse(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenFalse(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenFalse(types.testNull, message)).to.throw(message)
        expect(() => gates.throwWhenFalse(types.testBigInt, message)).to.not.throw();
        expect(() => gates.throwWhenFalse(types.testSymbol, message)).to.not.throw();
        expect(() => gates.throwWhenFalse(types.testNumber, message)).to.not.throw();
    }
}
