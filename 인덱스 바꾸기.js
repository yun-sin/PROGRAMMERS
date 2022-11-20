function solution(my_string, num1, num2) {
  console.log(my_string);

  let I1 = my_string[num1];
  let I2 = my_string[num2];

  let arr = my_string.split("");
  arr.splice(num1, 1, I2);
  arr.splice(num2, 1, I1);
  console.log(arr);

  return arr.join("");
}

solution("hello", 1, 2);
