export declare function ensureObject<Context extends object>(variable: Context, defaultObject: Context, merge?: boolean): Context;
export declare function ensureArray<Context extends any[]>(variable: Context, defaultArray: Context, merge?: boolean): Context;
export declare function ensureFunction(variable: any): (...args: any[]) => void;
