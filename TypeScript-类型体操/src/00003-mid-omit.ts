// 描述：不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。
// Omit 会创建一个省略 K 中字段的 T 对象。 (剔除掉T中的K)
// eg：

//实现：
// 1.
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never:P]: T[P]
}

// 2: 其他ts自带工具
// type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

//------ test case --------------
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}