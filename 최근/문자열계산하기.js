function solution(my_string) {
  var answer = 0;

  let arr = my_string.split(" ");

  console.log(arr);

  let op = +1;

  arr.forEach((v, i) => {
    console.log(Number.isInteger(+v));
    if (Number.isInteger(+v)) {
      answer += v * op;
    } else {
      v == "+" ? (op = 1) : (op = -1);
    }
  });

  console.log(answer);

  return answer;
}

solution("3 + 4");
