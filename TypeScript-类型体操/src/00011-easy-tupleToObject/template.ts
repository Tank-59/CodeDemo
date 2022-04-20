// 传入一个元组类型，将这个元组类型转换为对象类型，
// 这个对象类型的键/值都是从元组中遍历出来。

type TupleToObject<T extends readonly (string | symbol | number)[]>={
  [P in T[number]]: P
}


// usage test--
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type rs = TupleToObject<typeof tuple>
// -----


// 字面量类型，
// const 固定了类型就是个值,不允许修改
// const str = '123';

// .. as const 
// 变为常量，不允许修改内部值
// const tuple = ['tesla', 'model 3'] as const
// tuple[0] = '123'

// typeof  非类型 --> 类型