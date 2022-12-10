{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}
  // function printArray(fruits: readonly Array<number>) {}
  // error, 제네릭 어레이는 readonly를 쓸 수 없다.
  // 따라서 코드의 일관성을 위해 위에 있는
  // string[] 배열 표현 방법으로 사용하는 것이 좋다.

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
