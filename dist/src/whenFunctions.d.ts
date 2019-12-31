import { iWhenArgumentFunction } from "./contracts/iWhenArgumentFunction";
export declare function whenObjectLike<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenObject<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenString<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenStringWithLength<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenFunction<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenBoolean<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenNumber<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenArray<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenUndefined<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenNull<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenNill<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenBigInt<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
export declare function whenSymbol<Context>(variable: Context): (handler: iWhenArgumentFunction<Context>) => void;
