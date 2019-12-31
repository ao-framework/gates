"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataTypes {
    constructor() {
        this.testArray = [];
        this.testObject = {};
        this.testString = "";
        this.testStringWithLength = "something";
        this.testFunction = () => { };
        this.testBoolean = false;
        this.testNumber = 6548;
        this.testUndefined = undefined;
        this.testNull = null;
        this.testBigInt = BigInt(9007199254740991);
        this.testSymbol = Symbol("something");
    }
}
exports.DataTypes = DataTypes;
//# sourceMappingURL=dataTypes.js.map