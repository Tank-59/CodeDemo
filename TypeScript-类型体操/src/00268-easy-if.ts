type If<C extends boolean, T, F> =
  C extends true ? T : F

// ------- test case start----------------
        
import type { Equal, Expect } from '@type-challenges/utils'


type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]


type error = If<null, 'a', 'b'>
        // ------- test case end----------------
