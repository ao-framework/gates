export type AnyFunction = (...args: Array<unknown>) => unknown
export type AnyConstructor = { new (...args: Array<unknown>): unknown }
export type DefinitelyNot<Context, Negation> = Context extends Negation ? never : Context
