{
  // Array
  const fruits: string[] = ["π", "π"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}
  // function printArray(fruits: readonly Array<number>) {}
  // error, μ λ€λ¦­ μ΄λ μ΄λ readonlyλ₯Ό μΈ μ μλ€.
  // λ°λΌμ μ½λμ μΌκ΄μ±μ μν΄ μμ μλ
  // string[] λ°°μ΄ νν λ°©λ²μΌλ‘ μ¬μ©νλ κ²μ΄ μ’λ€.

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
