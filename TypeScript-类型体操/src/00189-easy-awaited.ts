type MyAwaited<T> = 
  // T extends Promise<infer U> ? U : T // 单层

  T extends Promise<infer U> ? MyAwaited<U> : T 
// ------- test case start----------------
        import type { Equal, Expect } from '@type-challenges/utils'


type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

type error = MyAwaited<number>
        // ------- test case end----------------
