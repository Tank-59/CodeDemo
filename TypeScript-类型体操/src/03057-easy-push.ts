// 在类型系统里实现通用的 Array.push 
// eg:type Result = Push<[1, 2], '3'> // [1, 2, '3']

type Push<T extends any[], U> = [...T, U]


// test case
//-----------------------------------------------------------------------------
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]