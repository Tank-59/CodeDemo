// ------- test case start----------------
        import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'


type cases = [
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
]
        // ------- test case end----------------
// 实现类似js中的 Array.reverse()方法

type Reverse<Arr extends unknown[]> = 
  Arr extends [infer First, ...infer Rest]?
  [...Reverse<Rest>, First]: Arr

// 递归去完成循环
// 一次处理一个 First, 调换位置; 剩余的依次递归处理
