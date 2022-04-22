// 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
// 注意： 空数组的话应该返never
type First<T extends any[]> = T extends []? never: T[0]

//length 判断
type First2<T extends any[]> = T['length'] extends 0? never: T[0]
// extends union
type First3<T extends any[]> = T[0] extends T[number]? T[0]: never
// infer
type First4<T extends any[]> = T extends [infer First, ...infer Rest]? First: never


// 
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []  // 空数组的话应该返never
type res = First<arr1>

type ages = [1,2,3]
type age = ages[number]


// ------- test case start----------------
        import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
]
        // ------- test case end----------------
