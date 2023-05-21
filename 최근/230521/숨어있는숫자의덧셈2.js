function solution(my_string) {
  var answer = 0;

  let arr = my_string.split("");

  arr.forEach((v, i) => {
    if (isNaN(+v)) {
      arr[i] = " ";
    }
  });

  console.log(arr.join("").split(" "));

  answer += arr
    .join("")
    .split(" ")
    .reduce((a, b) => +a + +b);

  console.log(+answer);

  return +answer;
}

solution("aAb1B2cC34oOp");
solution("ap");
solution("123");
