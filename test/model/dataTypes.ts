export class DataTypes {
    public testArray: string[] = [];
    public testObject: object = {}
    public testString: string = ""
    public testStringWithLength: string = "something"
    public testFunction: Function = () => { }
    public testBoolean: boolean = false;
    public testNumber: number = 6548
    public testUndefined: undefined = undefined;
    public testNull: null = null;
    public testBigInt: bigint = BigInt(9007199254740991)
    public testSymbol: symbol = Symbol("something")
}
