function solution(n, lost, reserve) {
  var answer = n;

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let arr = [];

  reserve.forEach((v, i) => {
    if (lost.includes(v)) {
      lost.splice(lost.indexOf(v), 1);
    } else {
      arr.push(v);
    }
  });

  arr.forEach((v, i) => {
    if (lost.includes(v - 1)) {
      lost.splice(lost.indexOf(v - 1), 1);
    } else if (lost.includes(v + 1)) {
      lost.splice(lost.indexOf(v + 1), 1);
    }
  });

  answer -= lost.length;

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
