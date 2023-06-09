function solution(targets) {
  var answer = 1;

  targets.sort((a, b) => b[0] - a[0]);
  console.log(targets);

  let min = targets[0][0] + 0.5;

  targets.forEach((v, i) => {
    if (!(v[0] < min && v[1] > min)) {
      min = v[0] + 0.5;
      answer++;
    }
  });

  console.log(answer);

  return answer;
}

solution([
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
]);
