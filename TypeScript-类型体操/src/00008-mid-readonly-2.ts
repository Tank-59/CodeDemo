/**
* 描述：实现一个通用MyReadonly2<T, K>
K指定应设置为Readonly的T的属性集。
如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。
*/
// eg：

//实现：
type MyReadonly2<T, K extends keyof T = keyof T> =

// = keyof T, 第二个范型K可能为空，给默认值
 
//1. K中包含的，添加readonl，否则不添加
  { readonly [key in K]: T[key] } & 
  { [key in keyof T as (key extends K ? never : key)]: T[key] }
  // 第二行的意思即为： Omit<T, K>
  // 也为：{ [key in Exclude<keyof T, K>]: T[key] }


  //2.借助其他
  //  Readonly<Pick<T, K>> & Omit<T, K>

//------ test case --------------

import type { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}