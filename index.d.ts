export type MethodNames<T> = {
  [K in keyof T & {}]: T[K] extends (this: T, ...args: any) => any ? K : never
}[keyof T]
