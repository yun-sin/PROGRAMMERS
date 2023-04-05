function solution(n) {
  var answer = [];

  for (i = 2; i <= 1000; i++) {
    while (n % i == 0 && n > 1) {
      n = n / i;

      console.log(i);
      answer.push(i);
    }
  }

  console.log(answer);

  answer = [...new Set(answer)];

  console.log(answer);
  return answer;
}

solution(1);
solution(12);
solution(17);
solution(420);
