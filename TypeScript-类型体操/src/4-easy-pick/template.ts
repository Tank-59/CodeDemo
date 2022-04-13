export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// extends K 是在 T 里，约束
// keyof "lookup"
