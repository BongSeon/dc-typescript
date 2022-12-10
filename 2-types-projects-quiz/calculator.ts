/**
 * Let's make a calculator 🧮
 */

type method = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'
function calculate(method: method, a: number, b: number) {
  if (method === 'add') {
    return a + b
  } else if (method === 'substract') {
    return a - b
  } else if (method === 'multiply') {
    return a * b
  } else if (method === 'divide') {
    return a / b
  } else if (method === 'remainder') {
    return a % b
  }
}

console.log(calculate('add', 1, 3)) // 4
console.log(calculate('substract', 3, 1)) // 2
console.log(calculate('multiply', 4, 2)) // 8
console.log(calculate('divide', 4, 2)) // 2
console.log(calculate('remainder', 5, 2)) // 1
