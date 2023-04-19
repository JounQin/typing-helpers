import { MethodNames } from './index.js';

type A = MethodNames<string>;
//   ^?

type B = MethodNames<bigint>;
//   ^?

type C = MethodNames<number>;
//   ^?

type D = MethodNames<Generator>;
//   ^?

type E = MethodNames<Function>;
//   ^?

type F = MethodNames<{
  // ^?
  a(): void;
  b(this: null): void;
}>;
