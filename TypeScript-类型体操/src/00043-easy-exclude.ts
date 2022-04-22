// ------- test case start----------------
        import { Equal, Expect } from '@type-challenges/utils'


type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, Exclude<"a" | "b" | "c", "a" | "b">>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]
        // ------- test case end----------------
// 实现内置的Exclude < T, U > 类型，但不能直接使用它本身。
// <"a" | "b" | "c", "a">
type MyExclude<T, U> = T extends U ? never : T

// T 中的元素不能包含 U 中的元素。


