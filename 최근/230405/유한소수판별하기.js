function solution(a, b) {
  var answer = 0;

  let c = 0;
  a > b ? (c = b) : (c = a);

  let maxdiv = 0;

  for (i = c; i >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
      maxdiv = i;
      break;
    }
  }

  // console.log("최대공약수 : " + maxdiv);
  console.log(a / maxdiv + "/" + b / maxdiv);
  let gi = b / maxdiv;

  while (gi % 5 == 0) {
    gi = gi / 5;
  }

  while (gi % 2 == 0) {
    gi = gi / 2;
  }

  console.log(gi);

  gi == 1 ? (answer = 1) : (answer = 2);

  console.log("answer : " + answer + "\n");
  return answer;
}

solution(7, 20);
solution(11, 22);
solution(12, 21);
solution(122, 21);
solution(1, 5);
solution(120, 1);
solution(12, 144);
