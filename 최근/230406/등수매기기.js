function solution(score) {
  var answer = [];

  let arr = [];
  score.forEach((v, i) => {
    arr.push(v[0] + v[1]);
  });

  let obj = {};
  let rank = 1;
  let counter = 0;

  let arr2 = arr
    .slice()
    .sort((a, b) => b - a)
    .forEach((v, i) => {
      if (obj[v]) {
        counter++;
      } else {
        rank += counter;
        obj[v] = rank;
        rank++;
        counter = 0;
      }
    });

  arr.forEach((v, i) => {
    answer.push(obj[v]);
  });

  return answer;
}

solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);

solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);
