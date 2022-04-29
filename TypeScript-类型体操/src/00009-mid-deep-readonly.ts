/**
* 描述：实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。
*/
// eg：

//实现：
type DeepReadonly<T> = {

  readonly [P in keyof T]: 
  T[P] extends Function? T[P]
  : T[P] extends Object? DeepReadonly<T[P]>
  : T[P] 
}


//------ test case --------------
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DeepReadonly<X>, Expected>>,
]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}