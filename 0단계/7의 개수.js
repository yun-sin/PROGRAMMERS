function solution(array) {
  var answer = 0;

  array.forEach((v, i) => {
    v += "";
    v.split("").forEach((v2, i2) => {
      v2 == 7 ? answer++ : null;
    });
  });
  return answer;
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));
