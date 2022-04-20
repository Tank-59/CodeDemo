// 实现内置的Exclude < T, U > 类型，但不能直接使用它本身。
// <"a" | "b" | "c", "a">
type MyExclude<T, U> = T extends U ? never : T

// T 中的元素不能包含 U 中的元素。

