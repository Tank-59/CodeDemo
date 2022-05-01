/**
* 描述：实现泛型TupleToUnion<T>，它返回元组所有值的合集。
*/
/**
 * eg: 
 type Arr = ['1', '2', '3']
 type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
 * */ 

//实现：

type TupleToUnion<T> = 
// 1. infer 写法
  T extends (infer E)[]? E : never

// 2.
// T[number]



//------ test case --------------

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]