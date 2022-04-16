type MyAwaited<T> = 
  // T extends Promise<infer U> ? U : T // 单层

  T extends Promise<infer U> ? MyAwaited<U> : T 