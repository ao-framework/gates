"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const gates = tslib_1.__importStar(require("../src"));
const dataTypes_1 = require("./model/dataTypes");
class SuiteReturnFunctions {
    controller({ testAll }) {
        return testAll(new dataTypes_1.DataTypes());
    }
    returnObjectLikeOrNothing({ expect }, types) {
        expect(gates.returnObjectLikeOrNothing(types.testArray)).equal(types.testArray);
        expect(gates.returnObjectLikeOrNothing(types.testObject)).equal(types.testObject);
        expect(gates.returnObjectLikeOrNothing(types.testString)).equal(undefined);
        expect(gates.returnObjectLikeOrNothing(types.testStringWithLength)).equal(undefined);
        expect(gates.returnObjectLikeOrNothing(types.testFunction)).equal(undefined);
        expect(gates.returnObjectLikeOrNothing(types.testBoolean)).equal(undefined);
        expect(gates.returnObjectLikeOrNothing(types.testNumber)).equal(undefined);
        expect(gates.returnObjectLikeOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnObjectLikeOrNothing(types.testNull)).equal(undefined);
        expect(gates.returnObjectLikeOrNothing(types.testBigInt)).equal(undefined);
        expect(gates.returnObjectLikeOrNothing(types.testSymbol)).equal(undefined);
    }
    returnObjectOrNothing({ expect }, types) {
        expect(gates.returnObjectOrNothing(types.testArray)).equal(undefined);
        expect(gates.returnObjectOrNothing(types.testObject)).equal(types.testObject);
        expect(gates.returnObjectOrNothing(types.testString)).equal(undefined);
        expect(gates.returnObjectOrNothing(types.testStringWithLength)).equal(undefined);
        expect(gates.returnObjectOrNothing(types.testFunction)).equal(undefined);
        expect(gates.returnObjectOrNothing(types.testBoolean)).equal(undefined);
        expect(gates.returnObjectOrNothing(types.testNumber)).equal(undefined);
        expect(gates.returnObjectOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnObjectOrNothing(types.testNull)).equal(undefined);
        expect(gates.returnObjectOrNothing(types.testBigInt)).equal(undefined);
        expect(gates.returnObjectOrNothing(types.testSymbol)).equal(undefined);
    }
    returnStringOrNothing({ expect }, types) {
        expect(gates.returnStringOrNothing(types.testArray)).equal(undefined);
        expect(gates.returnStringOrNothing(types.testObject)).equal(undefined);
        expect(gates.returnStringOrNothing(types.testString)).equal(types.testString);
        expect(gates.returnStringOrNothing(types.testStringWithLength)).equal(types.testStringWithLength);
        expect(gates.returnStringOrNothing(types.testFunction)).equal(undefined);
        expect(gates.returnStringOrNothing(types.testBoolean)).equal(undefined);
        expect(gates.returnStringOrNothing(types.testNumber)).equal(undefined);
        expect(gates.returnStringOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnStringOrNothing(types.testNull)).equal(undefined);
        expect(gates.returnStringOrNothing(types.testBigInt)).equal(undefined);
        expect(gates.returnStringOrNothing(types.testSymbol)).equal(undefined);
    }
    returnStringWithLengthOrNothing({ expect }, types) {
        expect(gates.returnStringWithLengthOrNothing(types.testArray)).equal(undefined);
        expect(gates.returnStringWithLengthOrNothing(types.testObject)).equal(undefined);
        expect(gates.returnStringWithLengthOrNothing(types.testString)).equal(undefined);
        expect(gates.returnStringWithLengthOrNothing(types.testStringWithLength)).equal(types.testStringWithLength);
        expect(gates.returnStringWithLengthOrNothing(types.testFunction)).equal(undefined);
        expect(gates.returnStringWithLengthOrNothing(types.testBoolean)).equal(undefined);
        expect(gates.returnStringWithLengthOrNothing(types.testNumber)).equal(undefined);
        expect(gates.returnStringWithLengthOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnStringWithLengthOrNothing(types.testNull)).equal(undefined);
        expect(gates.returnStringWithLengthOrNothing(types.testBigInt)).equal(undefined);
        expect(gates.returnStringWithLengthOrNothing(types.testSymbol)).equal(undefined);
    }
    returnFunctionOrNothing({ expect }, types) {
        expect(gates.returnFunctionOrNothing(types.testArray)).equal(undefined);
        expect(gates.returnFunctionOrNothing(types.testObject)).equal(undefined);
        expect(gates.returnFunctionOrNothing(types.testString)).equal(undefined);
        expect(gates.returnFunctionOrNothing(types.testStringWithLength)).equal(undefined);
        expect(gates.returnFunctionOrNothing(types.testFunction)).equal(types.testFunction);
        expect(gates.returnFunctionOrNothing(types.testBoolean)).equal(undefined);
        expect(gates.returnFunctionOrNothing(types.testNumber)).equal(undefined);
        expect(gates.returnFunctionOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnFunctionOrNothing(types.testNull)).equal(undefined);
        expect(gates.returnFunctionOrNothing(types.testBigInt)).equal(undefined);
        expect(gates.returnFunctionOrNothing(types.testSymbol)).equal(undefined);
    }
    returnBooleanOrNothing({ expect }, types) {
        expect(gates.returnBooleanOrNothing(types.testArray)).equal(undefined);
        expect(gates.returnBooleanOrNothing(types.testObject)).equal(undefined);
        expect(gates.returnBooleanOrNothing(types.testString)).equal(undefined);
        expect(gates.returnBooleanOrNothing(types.testStringWithLength)).equal(undefined);
        expect(gates.returnBooleanOrNothing(types.testFunction)).equal(undefined);
        expect(gates.returnBooleanOrNothing(types.testBoolean)).equal(types.testBoolean);
        expect(gates.returnBooleanOrNothing(types.testNumber)).equal(undefined);
        expect(gates.returnBooleanOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnBooleanOrNothing(types.testNull)).equal(undefined);
        expect(gates.returnBooleanOrNothing(types.testBigInt)).equal(undefined);
        expect(gates.returnBooleanOrNothing(types.testSymbol)).equal(undefined);
    }
    returnNumberOrNothing({ expect }, types) {
        expect(gates.returnNumberOrNothing(types.testArray)).equal(undefined);
        expect(gates.returnNumberOrNothing(types.testObject)).equal(undefined);
        expect(gates.returnNumberOrNothing(types.testString)).equal(undefined);
        expect(gates.returnNumberOrNothing(types.testStringWithLength)).equal(undefined);
        expect(gates.returnNumberOrNothing(types.testFunction)).equal(undefined);
        expect(gates.returnNumberOrNothing(types.testBoolean)).equal(undefined);
        expect(gates.returnNumberOrNothing(types.testNumber)).equal(types.testNumber);
        expect(gates.returnNumberOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnNumberOrNothing(types.testNull)).equal(undefined);
        expect(gates.returnNumberOrNothing(types.testBigInt)).equal(undefined);
        expect(gates.returnNumberOrNothing(types.testSymbol)).equal(undefined);
    }
    returnArrayOrNothing({ expect }, types) {
        expect(gates.returnArrayOrNothing(types.testArray)).equal(types.testArray);
        expect(gates.returnArrayOrNothing(types.testObject)).equal(undefined);
        expect(gates.returnArrayOrNothing(types.testString)).equal(undefined);
        expect(gates.returnArrayOrNothing(types.testStringWithLength)).equal(undefined);
        expect(gates.returnArrayOrNothing(types.testFunction)).equal(undefined);
        expect(gates.returnArrayOrNothing(types.testBoolean)).equal(undefined);
        expect(gates.returnArrayOrNothing(types.testNumber)).equal(undefined);
        expect(gates.returnArrayOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnArrayOrNothing(types.testNull)).equal(undefined);
        expect(gates.returnArrayOrNothing(types.testBigInt)).equal(undefined);
        expect(gates.returnArrayOrNothing(types.testSymbol)).equal(undefined);
    }
    returnNullOrNothing({ expect }, types) {
        expect(gates.returnNullOrNothing(types.testArray)).equal(undefined);
        expect(gates.returnNullOrNothing(types.testObject)).equal(undefined);
        expect(gates.returnNullOrNothing(types.testString)).equal(undefined);
        expect(gates.returnNullOrNothing(types.testStringWithLength)).equal(undefined);
        expect(gates.returnNullOrNothing(types.testFunction)).equal(undefined);
        expect(gates.returnNullOrNothing(types.testBoolean)).equal(undefined);
        expect(gates.returnNullOrNothing(types.testNumber)).equal(undefined);
        expect(gates.returnNullOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnNullOrNothing(types.testNull)).equal(types.testNull);
        expect(gates.returnNullOrNothing(types.testBigInt)).equal(undefined);
        expect(gates.returnNullOrNothing(types.testSymbol)).equal(undefined);
    }
    returnBigIntOrNothing({ expect }, types) {
        expect(gates.returnBigIntOrNothing(types.testArray)).equal(undefined);
        expect(gates.returnBigIntOrNothing(types.testObject)).equal(undefined);
        expect(gates.returnBigIntOrNothing(types.testString)).equal(undefined);
        expect(gates.returnBigIntOrNothing(types.testStringWithLength)).equal(undefined);
        expect(gates.returnBigIntOrNothing(types.testFunction)).equal(undefined);
        expect(gates.returnBigIntOrNothing(types.testBoolean)).equal(undefined);
        expect(gates.returnBigIntOrNothing(types.testNumber)).equal(undefined);
        expect(gates.returnBigIntOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnBigIntOrNothing(types.testNull)).equal(undefined);
        expect(gates.returnBigIntOrNothing(types.testBigInt)).equal(types.testBigInt);
        expect(gates.returnBigIntOrNothing(types.testSymbol)).equal(undefined);
    }
    returnSymbolOrNothing({ expect }, types) {
        expect(gates.returnSymbolOrNothing(types.testArray)).equal(undefined);
        expect(gates.returnSymbolOrNothing(types.testObject)).equal(undefined);
        expect(gates.returnSymbolOrNothing(types.testString)).equal(undefined);
        expect(gates.returnSymbolOrNothing(types.testStringWithLength)).equal(undefined);
        expect(gates.returnSymbolOrNothing(types.testFunction)).equal(undefined);
        expect(gates.returnSymbolOrNothing(types.testBoolean)).equal(undefined);
        expect(gates.returnSymbolOrNothing(types.testNumber)).equal(undefined);
        expect(gates.returnSymbolOrNothing(types.testUndefined)).equal(undefined);
        expect(gates.returnSymbolOrNothing(types.testNull)).equal(undefined);
        expect(gates.returnSymbolOrNothing(types.testBigInt)).equal(undefined);
        expect(gates.returnSymbolOrNothing(types.testSymbol)).equal(types.testSymbol);
    }
}
exports.SuiteReturnFunctions = SuiteReturnFunctions;
//# sourceMappingURL=suite.returnFunctions.js.map