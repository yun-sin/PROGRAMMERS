function solution(n, info) {
  var answer = new Array(11).fill(0);

  let total = 0;
  info.forEach((v, i) => {
    if (v > 0) {
      total += 10 - i;
    }
  });

  console.log(total);

  console.log(answer);
  return answer;
}

solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
