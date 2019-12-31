"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const gates = tslib_1.__importStar(require("../src"));
const dataTypes_1 = require("./model/dataTypes");
class SuiteWhenNotFunctions {
    controller({ testAll }) {
        return testAll(new dataTypes_1.DataTypes());
    }
    whenNotObjectLike({ expect, spotlight, beforeThrowing, tagger }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotObjectLike(types.testArray)(update("array"));
        gates.whenNotObjectLike(types.testObject)(update("object"));
        gates.whenNotObjectLike(types.testString)(update("string"));
        gates.whenNotObjectLike(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotObjectLike(types.testFunction)(update("function"));
        gates.whenNotObjectLike(types.testBoolean)(update("boolean"));
        gates.whenNotObjectLike(types.testNumber)(update("number"));
        gates.whenNotObjectLike(types.testUndefined)(update("undefined"));
        gates.whenNotObjectLike(types.testNull)(update("null"));
        gates.whenNotObjectLike(types.testBigInt)(update("bigInt"));
        gates.whenNotObjectLike(types.testSymbol)(update("symbol"));
        expect(tags.missing("array", "object")).equals(true);
    }
    whenObject({ expect, tagger, spotlight, beforeThrowing }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotObject(types.testArray)(update("array"));
        gates.whenNotObject(types.testObject)(update("object"));
        gates.whenNotObject(types.testString)(update("string"));
        gates.whenNotObject(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotObject(types.testFunction)(update("function"));
        gates.whenNotObject(types.testBoolean)(update("boolean"));
        gates.whenNotObject(types.testNumber)(update("number"));
        gates.whenNotObject(types.testUndefined)(update("undefined"));
        gates.whenNotObject(types.testNull)(update("null"));
        gates.whenNotObject(types.testBigInt)(update("bigInt"));
        gates.whenNotObject(types.testSymbol)(update("symbol"));
        expect(tags.missing("object")).equals(true);
    }
    whenString({ expect, tagger, spotlight, beforeThrowing }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotString(types.testArray)(update("array"));
        gates.whenNotString(types.testObject)(update("object"));
        gates.whenNotString(types.testString)(update("string"));
        gates.whenNotString(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotString(types.testFunction)(update("function"));
        gates.whenNotString(types.testBoolean)(update("boolean"));
        gates.whenNotString(types.testNumber)(update("number"));
        gates.whenNotString(types.testUndefined)(update("undefined"));
        gates.whenNotString(types.testNull)(update("null"));
        gates.whenNotString(types.testBigInt)(update("bigInt"));
        gates.whenNotString(types.testSymbol)(update("symbol"));
        expect(tags.missing("string", "stringWithLength")).equals(true);
    }
    whenStringWithLength({ expect, tagger, beforeThrowing, spotlight }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotStringWithLength(types.testArray)(update("array"));
        gates.whenNotStringWithLength(types.testObject)(update("object"));
        gates.whenNotStringWithLength(types.testString)(update("string"));
        gates.whenNotStringWithLength(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotStringWithLength(types.testFunction)(update("function"));
        gates.whenNotStringWithLength(types.testBoolean)(update("boolean"));
        gates.whenNotStringWithLength(types.testNumber)(update("number"));
        gates.whenNotStringWithLength(types.testUndefined)(update("undefined"));
        gates.whenNotStringWithLength(types.testNull)(update("null"));
        gates.whenNotStringWithLength(types.testBigInt)(update("bigInt"));
        gates.whenNotStringWithLength(types.testSymbol)(update("symbol"));
        expect(tags.missing("stringWithLength")).equals(true);
    }
    whenFunction({ expect, tagger, beforeThrowing, spotlight }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotFunction(types.testArray)(update("array"));
        gates.whenNotFunction(types.testObject)(update("object"));
        gates.whenNotFunction(types.testString)(update("string"));
        gates.whenNotFunction(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotFunction(types.testFunction)(update("function"));
        gates.whenNotFunction(types.testBoolean)(update("boolean"));
        gates.whenNotFunction(types.testNumber)(update("number"));
        gates.whenNotFunction(types.testUndefined)(update("undefined"));
        gates.whenNotFunction(types.testNull)(update("null"));
        gates.whenNotFunction(types.testBigInt)(update("bigInt"));
        gates.whenNotFunction(types.testSymbol)(update("symbol"));
        expect(tags.missing("function")).equals(true);
    }
    whenBoolean({ expect, tagger, beforeThrowing, spotlight }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotBoolean(types.testArray)(update("array"));
        gates.whenNotBoolean(types.testObject)(update("object"));
        gates.whenNotBoolean(types.testString)(update("string"));
        gates.whenNotBoolean(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotBoolean(types.testFunction)(update("function"));
        gates.whenNotBoolean(types.testBoolean)(update("boolean"));
        gates.whenNotBoolean(types.testNumber)(update("number"));
        gates.whenNotBoolean(types.testUndefined)(update("undefined"));
        gates.whenNotBoolean(types.testNull)(update("null"));
        gates.whenNotBoolean(types.testBigInt)(update("bigInt"));
        gates.whenNotBoolean(types.testSymbol)(update("symbol"));
        expect(tags.missing("boolean")).equals(true);
    }
    whenNumber({ expect, tagger, beforeThrowing, spotlight }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotNumber(types.testArray)(update("array"));
        gates.whenNotNumber(types.testObject)(update("object"));
        gates.whenNotNumber(types.testString)(update("string"));
        gates.whenNotNumber(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotNumber(types.testFunction)(update("function"));
        gates.whenNotNumber(types.testBoolean)(update("boolean"));
        gates.whenNotNumber(types.testNumber)(update("number"));
        gates.whenNotNumber(types.testUndefined)(update("undefined"));
        gates.whenNotNumber(types.testNull)(update("null"));
        gates.whenNotNumber(types.testBigInt)(update("bigInt"));
        gates.whenNotNumber(types.testSymbol)(update("symbol"));
        expect(tags.missing("number")).equals(true);
    }
    whenArray({ expect, tagger, beforeThrowing, spotlight }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotArray(types.testArray)(update("array"));
        gates.whenNotArray(types.testObject)(update("object"));
        gates.whenNotArray(types.testString)(update("string"));
        gates.whenNotArray(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotArray(types.testFunction)(update("function"));
        gates.whenNotArray(types.testBoolean)(update("boolean"));
        gates.whenNotArray(types.testNumber)(update("number"));
        gates.whenNotArray(types.testUndefined)(update("undefined"));
        gates.whenNotArray(types.testNull)(update("null"));
        gates.whenNotArray(types.testBigInt)(update("bigInt"));
        gates.whenNotArray(types.testSymbol)(update("symbol"));
        expect(tags.missing("array")).equals(true);
    }
    whenUndefined({ expect, tagger, beforeThrowing, spotlight }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotUndefined(types.testArray)(update("array"));
        gates.whenNotUndefined(types.testObject)(update("object"));
        gates.whenNotUndefined(types.testString)(update("string"));
        gates.whenNotUndefined(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotUndefined(types.testFunction)(update("function"));
        gates.whenNotUndefined(types.testBoolean)(update("boolean"));
        gates.whenNotUndefined(types.testNumber)(update("number"));
        gates.whenNotUndefined(types.testUndefined)(update("undefined"));
        gates.whenNotUndefined(types.testNull)(update("null"));
        gates.whenNotUndefined(types.testBigInt)(update("bigInt"));
        gates.whenNotUndefined(types.testSymbol)(update("symbol"));
        expect(tags.missing("undefined")).equals(true);
    }
    whenNull({ expect, tagger, beforeThrowing, spotlight }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotNull(types.testArray)(update("array"));
        gates.whenNotNull(types.testObject)(update("object"));
        gates.whenNotNull(types.testString)(update("string"));
        gates.whenNotNull(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotNull(types.testFunction)(update("function"));
        gates.whenNotNull(types.testBoolean)(update("boolean"));
        gates.whenNotNull(types.testNumber)(update("number"));
        gates.whenNotNull(types.testUndefined)(update("undefined"));
        gates.whenNotNull(types.testNull)(update("null"));
        gates.whenNotNull(types.testBigInt)(update("bigInt"));
        gates.whenNotNull(types.testSymbol)(update("symbol"));
        expect(tags.missing("null")).equals(true);
    }
    whenNill({ expect, tagger, beforeThrowing, spotlight }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotNill(types.testArray)(update("array"));
        gates.whenNotNill(types.testObject)(update("object"));
        gates.whenNotNill(types.testString)(update("string"));
        gates.whenNotNill(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotNill(types.testFunction)(update("function"));
        gates.whenNotNill(types.testBoolean)(update("boolean"));
        gates.whenNotNill(types.testNumber)(update("number"));
        gates.whenNotNill(types.testUndefined)(update("undefined"));
        gates.whenNotNill(types.testNull)(update("null"));
        gates.whenNotNill(types.testBigInt)(update("bigInt"));
        gates.whenNotNill(types.testSymbol)(update("symbol"));
        expect(tags.missing("undefined", "null")).equals(true);
    }
    whenBigInt({ expect, tagger, beforeThrowing, spotlight }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotBigInt(types.testArray)(update("array"));
        gates.whenNotBigInt(types.testObject)(update("object"));
        gates.whenNotBigInt(types.testString)(update("string"));
        gates.whenNotBigInt(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotBigInt(types.testFunction)(update("function"));
        gates.whenNotBigInt(types.testBoolean)(update("boolean"));
        gates.whenNotBigInt(types.testNumber)(update("number"));
        gates.whenNotBigInt(types.testUndefined)(update("undefined"));
        gates.whenNotBigInt(types.testNull)(update("null"));
        gates.whenNotBigInt(types.testBigInt)(update("bigInt"));
        gates.whenNotBigInt(types.testSymbol)(update("symbol"));
        expect(tags.missing("bigInt")).equals(true);
    }
    whenSymbol({ expect, tagger, beforeThrowing, spotlight }, types) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags));
        const update = (name) => () => tags.add(name);
        gates.whenNotSymbol(types.testArray)(update("array"));
        gates.whenNotSymbol(types.testObject)(update("object"));
        gates.whenNotSymbol(types.testString)(update("string"));
        gates.whenNotSymbol(types.testStringWithLength)(update("stringWithLength"));
        gates.whenNotSymbol(types.testFunction)(update("function"));
        gates.whenNotSymbol(types.testBoolean)(update("boolean"));
        gates.whenNotSymbol(types.testNumber)(update("number"));
        gates.whenNotSymbol(types.testUndefined)(update("undefined"));
        gates.whenNotSymbol(types.testNull)(update("null"));
        gates.whenNotSymbol(types.testBigInt)(update("bigInt"));
        gates.whenNotSymbol(types.testSymbol)(update("symbol"));
        expect(tags.missing("symbol")).equals(true);
    }
}
exports.SuiteWhenNotFunctions = SuiteWhenNotFunctions;
//# sourceMappingURL=suite.whenNotFunctions.js.map