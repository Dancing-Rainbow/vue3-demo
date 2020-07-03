// 变量声明
let num: number = 1
let str: string = 'hello'

// 函数参数类型与返回值类型
function sum(a: number, b: number): number {
  return a + b
}

// 复合元素类型
let arr: Array<number> = [1, 2, 3]
let map: Map<string, number> = new Map([['key',1], ['key2', 2]])

// 接口类型
interface Point { 
  x: number
  y: number
}
const point: Point = {x: 10, y: 20}
// 类型别名
type mathfunc = (a: number, b: number) => number
const product: mathfunc = (a, b) => a * b