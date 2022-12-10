/**
 * 2.24 1-9 Type Inference
 */
let text = "hello";
function print(message = "hello") {
  console.log(message); // message는 string
}
print("hello");

// 리턴이 number라는 것이 자동으로 추론된다.
// function add(x: number, y: number) {
//   return x + y;
// }

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2); // result도 number로 추론
