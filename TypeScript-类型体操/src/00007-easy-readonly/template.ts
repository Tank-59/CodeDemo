type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}


//思路：循环，在key前加 readonly

// in  mapped
// keyof  lookup