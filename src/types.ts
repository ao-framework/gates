export type AnyFunction = (...args: Array<unknown>) => unknown
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyConstructor = new (...args: any[]) => any
export type DefinitelyNot<Context, Negation> = Context extends Negation ? never : Context
