type Reverse<Arr extends unknown[]> = 
  Arr extends [infer First, ...infer Rest]?
  [...Reverse<Rest>, First]: Arr

// 递归去完成循环
// 一次处理一个 First; 剩余的依次递归处理