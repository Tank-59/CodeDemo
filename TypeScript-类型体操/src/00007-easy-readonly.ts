type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}


//思路：循环，在key前加 readonly

// in  mapped
// keyof  lookup
// ------- test case start----------------
        import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
        // ------- test case end----------------
