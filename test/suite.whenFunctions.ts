import { Apparatus } from "@ao-framework/acumen";

import * as gates from "../src";
import { DataTypes } from "./model/dataTypes";

export class SuiteWhenFunctions {

    public controller({ testAll }: Apparatus) {
        return testAll(new DataTypes())
    }

    public whenObjectLike({ expect, spotlight, beforeThrowing, tagger }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenObjectLike(types.testArray)(update("array"))
        gates.whenObjectLike(types.testObject)(update("object"))
        gates.whenObjectLike(types.testString)(update("string"))
        gates.whenObjectLike(types.testStringWithLength)(update("stringWithLength"))
        gates.whenObjectLike(types.testFunction)(update("function"))
        gates.whenObjectLike(types.testBoolean)(update("boolean"))
        gates.whenObjectLike(types.testNumber)(update("number"))
        gates.whenObjectLike(types.testUndefined)(update("undefined"))
        gates.whenObjectLike(types.testNull)(update("null"))
        gates.whenObjectLike(types.testBigInt)(update("bigInt"))
        gates.whenObjectLike(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("array", "object")).equals(true)
    }

    public whenObject({ expect, tagger, spotlight, beforeThrowing }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenObject(types.testArray)(update("array"))
        gates.whenObject(types.testObject)(update("object"))
        gates.whenObject(types.testString)(update("string"))
        gates.whenObject(types.testStringWithLength)(update("stringWithLength"))
        gates.whenObject(types.testFunction)(update("function"))
        gates.whenObject(types.testBoolean)(update("boolean"))
        gates.whenObject(types.testNumber)(update("number"))
        gates.whenObject(types.testUndefined)(update("undefined"))
        gates.whenObject(types.testNull)(update("null"))
        gates.whenObject(types.testBigInt)(update("bigInt"))
        gates.whenObject(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("object")).equals(true)
    }

    public whenString({ expect, tagger, spotlight, beforeThrowing }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenString(types.testArray)(update("array"))
        gates.whenString(types.testObject)(update("object"))
        gates.whenString(types.testString)(update("string"))
        gates.whenString(types.testStringWithLength)(update("stringWithLength"))
        gates.whenString(types.testFunction)(update("function"))
        gates.whenString(types.testBoolean)(update("boolean"))
        gates.whenString(types.testNumber)(update("number"))
        gates.whenString(types.testUndefined)(update("undefined"))
        gates.whenString(types.testNull)(update("null"))
        gates.whenString(types.testBigInt)(update("bigInt"))
        gates.whenString(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("string", "stringWithLength")).equals(true)
    }

    public whenStringWithLength({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenStringWithLength(types.testArray)(update("array"))
        gates.whenStringWithLength(types.testObject)(update("object"))
        gates.whenStringWithLength(types.testString)(update("string"))
        gates.whenStringWithLength(types.testStringWithLength)(update("stringWithLength"))
        gates.whenStringWithLength(types.testFunction)(update("function"))
        gates.whenStringWithLength(types.testBoolean)(update("boolean"))
        gates.whenStringWithLength(types.testNumber)(update("number"))
        gates.whenStringWithLength(types.testUndefined)(update("undefined"))
        gates.whenStringWithLength(types.testNull)(update("null"))
        gates.whenStringWithLength(types.testBigInt)(update("bigInt"))
        gates.whenStringWithLength(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("stringWithLength")).equals(true)
    }

    public whenFunction({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenFunction(types.testArray)(update("array"))
        gates.whenFunction(types.testObject)(update("object"))
        gates.whenFunction(types.testString)(update("string"))
        gates.whenFunction(types.testStringWithLength)(update("stringWithLength"))
        gates.whenFunction(types.testFunction)(update("function"))
        gates.whenFunction(types.testBoolean)(update("boolean"))
        gates.whenFunction(types.testNumber)(update("number"))
        gates.whenFunction(types.testUndefined)(update("undefined"))
        gates.whenFunction(types.testNull)(update("null"))
        gates.whenFunction(types.testBigInt)(update("bigInt"))
        gates.whenFunction(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("function")).equals(true)
    }

    public whenBoolean({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenBoolean(types.testArray)(update("array"))
        gates.whenBoolean(types.testObject)(update("object"))
        gates.whenBoolean(types.testString)(update("string"))
        gates.whenBoolean(types.testStringWithLength)(update("stringWithLength"))
        gates.whenBoolean(types.testFunction)(update("function"))
        gates.whenBoolean(types.testBoolean)(update("boolean"))
        gates.whenBoolean(types.testNumber)(update("number"))
        gates.whenBoolean(types.testUndefined)(update("undefined"))
        gates.whenBoolean(types.testNull)(update("null"))
        gates.whenBoolean(types.testBigInt)(update("bigInt"))
        gates.whenBoolean(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("boolean")).equals(true)
    }

    public whenNumber({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenNumber(types.testArray)(update("array"))
        gates.whenNumber(types.testObject)(update("object"))
        gates.whenNumber(types.testString)(update("string"))
        gates.whenNumber(types.testStringWithLength)(update("stringWithLength"))
        gates.whenNumber(types.testFunction)(update("function"))
        gates.whenNumber(types.testBoolean)(update("boolean"))
        gates.whenNumber(types.testNumber)(update("number"))
        gates.whenNumber(types.testUndefined)(update("undefined"))
        gates.whenNumber(types.testNull)(update("null"))
        gates.whenNumber(types.testBigInt)(update("bigInt"))
        gates.whenNumber(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("number")).equals(true)
    }

    public whenArray({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenArray(types.testArray)(update("array"))
        gates.whenArray(types.testObject)(update("object"))
        gates.whenArray(types.testString)(update("string"))
        gates.whenArray(types.testStringWithLength)(update("stringWithLength"))
        gates.whenArray(types.testFunction)(update("function"))
        gates.whenArray(types.testBoolean)(update("boolean"))
        gates.whenArray(types.testNumber)(update("number"))
        gates.whenArray(types.testUndefined)(update("undefined"))
        gates.whenArray(types.testNull)(update("null"))
        gates.whenArray(types.testBigInt)(update("bigInt"))
        gates.whenArray(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("array")).equals(true)
    }

    public whenUndefined({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenUndefined(types.testArray)(update("array"))
        gates.whenUndefined(types.testObject)(update("object"))
        gates.whenUndefined(types.testString)(update("string"))
        gates.whenUndefined(types.testStringWithLength)(update("stringWithLength"))
        gates.whenUndefined(types.testFunction)(update("function"))
        gates.whenUndefined(types.testBoolean)(update("boolean"))
        gates.whenUndefined(types.testNumber)(update("number"))
        gates.whenUndefined(types.testUndefined)(update("undefined"))
        gates.whenUndefined(types.testNull)(update("null"))
        gates.whenUndefined(types.testBigInt)(update("bigInt"))
        gates.whenUndefined(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("undefined")).equals(true)
    }

    public whenNull({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenNull(types.testArray)(update("array"))
        gates.whenNull(types.testObject)(update("object"))
        gates.whenNull(types.testString)(update("string"))
        gates.whenNull(types.testStringWithLength)(update("stringWithLength"))
        gates.whenNull(types.testFunction)(update("function"))
        gates.whenNull(types.testBoolean)(update("boolean"))
        gates.whenNull(types.testNumber)(update("number"))
        gates.whenNull(types.testUndefined)(update("undefined"))
        gates.whenNull(types.testNull)(update("null"))
        gates.whenNull(types.testBigInt)(update("bigInt"))
        gates.whenNull(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("null")).equals(true)
    }

    public whenNill({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenNill(types.testArray)(update("array"))
        gates.whenNill(types.testObject)(update("object"))
        gates.whenNill(types.testString)(update("string"))
        gates.whenNill(types.testStringWithLength)(update("stringWithLength"))
        gates.whenNill(types.testFunction)(update("function"))
        gates.whenNill(types.testBoolean)(update("boolean"))
        gates.whenNill(types.testNumber)(update("number"))
        gates.whenNill(types.testUndefined)(update("undefined"))
        gates.whenNill(types.testNull)(update("null"))
        gates.whenNill(types.testBigInt)(update("bigInt"))
        gates.whenNill(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("undefined", "null")).equals(true)
    }

    public whenBigInt({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenBigInt(types.testArray)(update("array"))
        gates.whenBigInt(types.testObject)(update("object"))
        gates.whenBigInt(types.testString)(update("string"))
        gates.whenBigInt(types.testStringWithLength)(update("stringWithLength"))
        gates.whenBigInt(types.testFunction)(update("function"))
        gates.whenBigInt(types.testBoolean)(update("boolean"))
        gates.whenBigInt(types.testNumber)(update("number"))
        gates.whenBigInt(types.testUndefined)(update("undefined"))
        gates.whenBigInt(types.testNull)(update("null"))
        gates.whenBigInt(types.testBigInt)(update("bigInt"))
        gates.whenBigInt(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("bigInt")).equals(true)
    }

    public whenSymbol({ expect, tagger, beforeThrowing, spotlight }: Apparatus, types: DataTypes) {
        const tags = tagger();
        beforeThrowing(() => spotlight("tags", tags))
        const update = (name: string) => () => tags.add(name);
        gates.whenSymbol(types.testArray)(update("array"))
        gates.whenSymbol(types.testObject)(update("object"))
        gates.whenSymbol(types.testString)(update("string"))
        gates.whenSymbol(types.testStringWithLength)(update("stringWithLength"))
        gates.whenSymbol(types.testFunction)(update("function"))
        gates.whenSymbol(types.testBoolean)(update("boolean"))
        gates.whenSymbol(types.testNumber)(update("number"))
        gates.whenSymbol(types.testUndefined)(update("undefined"))
        gates.whenSymbol(types.testNull)(update("null"))
        gates.whenSymbol(types.testBigInt)(update("bigInt"))
        gates.whenSymbol(types.testSymbol)(update("symbol"))
        expect(tags.hasOnly("symbol")).equals(true)
    }
}
