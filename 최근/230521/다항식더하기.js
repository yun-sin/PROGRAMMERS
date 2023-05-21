function solution(polynomial) {
  var answer = "";

  let arr = polynomial.split(" + ");

  let x = 0;
  let num = 0;

  arr.forEach((v, i) => {
    if (isNaN(+v)) {
      let tmp = v.replace("x", "");
      tmp ? (x += +tmp) : x++;
    } else {
      num += +v;
    }
  });

  if (x && num) {
    answer += (x == 1 ? "" : x) + "x + " + num;
  } else if (!x && num) {
    answer += num;
  } else if (x && !num) {
    answer += (x == 1 ? "" : x) + "x";
  }

  console.log(answer);

  return answer;
}

solution("3x + 7 + x");
solution("x + x + x");
