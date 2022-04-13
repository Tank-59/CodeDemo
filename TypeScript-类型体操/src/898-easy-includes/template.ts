// 在类型系统里实现 JavaScript 的 Array.includes 方法，
// 这个类型接受两个参数，返回的类型要么是 true 要么是 false

// import { Equal } from "@type-challenges/utils"

type Includes<T extends readonly any[], U> = 
  T extends [infer First, ...infer Rest]?
  MyEqual <First, U> extends true ? true : Includes <Rest, U>
  : false

type MyEqual<K extends unknown, U extends unknown> =
  (<T>() => T extends K ? 1 : 2) extends
  (<T>() => T extends U ? 1 : 2) ? true : false