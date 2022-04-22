// 描述：实现类型版本的 Array.unshift。
// eg：type Result = Unshift<[1, 2], 0> // [0, 1, 2,]


//实现：
type Unshift<T extends any[],U> = [U, ...T]


//------ test case --------------
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]