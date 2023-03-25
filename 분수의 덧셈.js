function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  let plus = numer1 / denom1 + numer2 / denom2;
  console.group(plus);

  let i = 0;
  let num = null;

  while (!Number.isInteger(num)) {
    i++;

    plus > 1 ? (num = plus * i) : (num = i / plus);

    console.log("i: " + i + ", plus: " + plus);
  }

  plus > 1 ? (answer = [plus * i, i]) : (answer = [i, i / plus]);

  console.log(answer);
  console.groupEnd();
  return answer;
  // 123
}

solution(1, 2, 3, 4);
solution(9, 2, 1, 3);
solution(1, 4, 1, 400);
