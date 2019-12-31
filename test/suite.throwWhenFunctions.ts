import { Apparatus } from "@ao-framework/acumen";

import * as gates from "../src";
import { DataTypes } from "./model/dataTypes";

export class SuiteThrowWhenFunctions {

    public controller({ testAll }: Apparatus) {
        return testAll(new DataTypes(), "message");
    }

    public throwException({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwException(message)).to.throw(message)
    }

    public throwWhenObjectLike({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenObjectLike(types.testArray, message)).to.throw(message)
        expect(() => gates.throwWhenObjectLike(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenObjectLike(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenObjectLike(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenObjectLike(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenObjectLike(types.testBoolean, message)).to.not.throw()
        expect(() => gates.throwWhenObjectLike(types.testUndefined, message)).to.not.throw()
        expect(() => gates.throwWhenObjectLike(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenObjectLike(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenObjectLike(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenObjectLike(types.testNumber, message)).to.not.throw()
    }

    public throwWhenObject({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenObject(types.testArray, message)).to.not.throw()
        expect(() => gates.throwWhenObject(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenObject(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenObject(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenObject(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenObject(types.testBoolean, message)).to.not.throw()
        expect(() => gates.throwWhenObject(types.testUndefined, message)).to.not.throw()
        expect(() => gates.throwWhenObject(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenObject(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenObject(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenObject(types.testNumber, message)).to.not.throw()
    }

    public throwWhenString({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenString(types.testArray, message)).to.not.throw()
        expect(() => gates.throwWhenString(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenString(types.testString, message)).to.throw(message)
        expect(() => gates.throwWhenString(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenString(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenString(types.testBoolean, message)).to.not.throw()
        expect(() => gates.throwWhenString(types.testUndefined, message)).to.not.throw()
        expect(() => gates.throwWhenString(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenString(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenString(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenString(types.testNumber, message)).to.not.throw()
    }

    public throwWhenStringWithLength({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenStringWithLength(types.testArray, message)).to.not.throw()
        expect(() => gates.throwWhenStringWithLength(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenStringWithLength(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenStringWithLength(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenStringWithLength(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenStringWithLength(types.testBoolean, message)).to.not.throw()
        expect(() => gates.throwWhenStringWithLength(types.testUndefined, message)).to.not.throw()
        expect(() => gates.throwWhenStringWithLength(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenStringWithLength(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenStringWithLength(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenStringWithLength(types.testNumber, message)).to.not.throw()
    }

    public throwWhenFunction({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenFunction(types.testArray, message)).to.not.throw()
        expect(() => gates.throwWhenFunction(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenFunction(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenFunction(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenFunction(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenFunction(types.testBoolean, message)).to.not.throw()
        expect(() => gates.throwWhenFunction(types.testUndefined, message)).to.not.throw()
        expect(() => gates.throwWhenFunction(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenFunction(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenFunction(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenFunction(types.testNumber, message)).to.not.throw()
    }

    public throwWhenBoolean({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenBoolean(types.testArray, message)).to.not.throw()
        expect(() => gates.throwWhenBoolean(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenBoolean(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenBoolean(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenBoolean(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenBoolean(types.testBoolean, message)).to.throw(message)
        expect(() => gates.throwWhenBoolean(types.testUndefined, message)).to.not.throw()
        expect(() => gates.throwWhenBoolean(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenBoolean(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenBoolean(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenBoolean(types.testNumber, message)).to.not.throw()
    }

    public throwWhenNumber({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNumber(types.testArray, message)).to.not.throw()
        expect(() => gates.throwWhenNumber(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenNumber(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenNumber(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenNumber(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenNumber(types.testBoolean, message)).to.not.throw();
        expect(() => gates.throwWhenNumber(types.testUndefined, message)).to.not.throw()
        expect(() => gates.throwWhenNumber(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenNumber(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenNumber(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenNumber(types.testNumber, message)).to.throw(message)
    }

    public throwWhenArray({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenArray(types.testArray, message)).to.throw(message)
        expect(() => gates.throwWhenArray(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenArray(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenArray(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenArray(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenArray(types.testBoolean, message)).to.not.throw();
        expect(() => gates.throwWhenArray(types.testUndefined, message)).to.not.throw()
        expect(() => gates.throwWhenArray(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenArray(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenArray(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenArray(types.testNumber, message)).to.not.throw()
    }

    public throwWhenUndefined({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenUndefined(types.testArray, message)).to.not.throw();
        expect(() => gates.throwWhenUndefined(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenUndefined(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenUndefined(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenUndefined(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenUndefined(types.testBoolean, message)).to.not.throw();
        expect(() => gates.throwWhenUndefined(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenUndefined(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenUndefined(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenUndefined(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenUndefined(types.testNumber, message)).to.not.throw()
    }

    public throwWhenNull({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNull(types.testArray, message)).to.not.throw();
        expect(() => gates.throwWhenNull(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenNull(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenNull(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenNull(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenNull(types.testBoolean, message)).to.not.throw();
        expect(() => gates.throwWhenNull(types.testUndefined, message)).to.not.throw();
        expect(() => gates.throwWhenNull(types.testNull, message)).to.throw(message);
        expect(() => gates.throwWhenNull(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenNull(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenNull(types.testNumber, message)).to.not.throw()
    }

    public throwWhenNill({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenNill(types.testArray, message)).to.not.throw();
        expect(() => gates.throwWhenNill(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenNill(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenNill(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenNill(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenNill(types.testBoolean, message)).to.not.throw();
        expect(() => gates.throwWhenNill(types.testUndefined, message)).to.throw(message)
        expect(() => gates.throwWhenNill(types.testNull, message)).to.throw(message);
        expect(() => gates.throwWhenNill(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenNill(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenNill(types.testNumber, message)).to.not.throw()
    }

    public throwWhenBigInt({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenBigInt(types.testArray, message)).to.not.throw();
        expect(() => gates.throwWhenBigInt(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenBigInt(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenBigInt(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenBigInt(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenBigInt(types.testBoolean, message)).to.not.throw();
        expect(() => gates.throwWhenBigInt(types.testUndefined, message)).to.not.throw();
        expect(() => gates.throwWhenBigInt(types.testNull, message)).to.not.throw();
        expect(() => gates.throwWhenBigInt(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenBigInt(types.testSymbol, message)).to.not.throw()
        expect(() => gates.throwWhenBigInt(types.testNumber, message)).to.not.throw()
    }

    public throwWhenSymbol({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenSymbol(types.testArray, message)).to.not.throw();
        expect(() => gates.throwWhenSymbol(types.testObject, message)).to.not.throw()
        expect(() => gates.throwWhenSymbol(types.testString, message)).to.not.throw()
        expect(() => gates.throwWhenSymbol(types.testStringWithLength, message)).to.not.throw()
        expect(() => gates.throwWhenSymbol(types.testFunction, message)).to.not.throw()
        expect(() => gates.throwWhenSymbol(types.testBoolean, message)).to.not.throw();
        expect(() => gates.throwWhenSymbol(types.testUndefined, message)).to.not.throw();
        expect(() => gates.throwWhenSymbol(types.testNull, message)).to.not.throw();
        expect(() => gates.throwWhenSymbol(types.testBigInt, message)).to.not.throw()
        expect(() => gates.throwWhenSymbol(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenSymbol(types.testNumber, message)).to.not.throw()
    }

    public throwWhenTrue({ expect }: Apparatus, types: DataTypes, message: string) {
        expect(() => gates.throwWhenTrue(types.testArray, message)).to.throw(message)
        expect(() => gates.throwWhenTrue(types.testObject, message)).to.throw(message)
        expect(() => gates.throwWhenTrue(types.testString, message)).to.not.throw();
        expect(() => gates.throwWhenTrue(types.testStringWithLength, message)).to.throw(message)
        expect(() => gates.throwWhenTrue(types.testFunction, message)).to.throw(message)
        expect(() => gates.throwWhenTrue(types.testBoolean, message)).to.not.throw()
        expect(() => gates.throwWhenTrue(types.testUndefined, message)).to.not.throw()
        expect(() => gates.throwWhenTrue(types.testNull, message)).to.not.throw()
        expect(() => gates.throwWhenTrue(types.testBigInt, message)).to.throw(message)
        expect(() => gates.throwWhenTrue(types.testSymbol, message)).to.throw(message)
        expect(() => gates.throwWhenTrue(types.testNumber, message)).to.throw(message)
    }
}
