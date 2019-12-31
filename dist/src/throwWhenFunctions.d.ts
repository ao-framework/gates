export declare function throwException(message: string, errorConstructor?: ErrorConstructor): void;
export declare function throwWhenObjectLike<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenObject<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenString<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenStringWithLength<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenFunction<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenBoolean<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenNumber<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenArray<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenUndefined<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenNull<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenNill<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenBigInt<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenSymbol<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
export declare function throwWhenTrue<Context>(variable: Context, message: string, errorConstructor?: ErrorConstructor): Context;
