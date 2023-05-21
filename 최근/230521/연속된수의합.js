function solution(num, total) {
  let mid = total / num;
  let start = Math.ceil(mid - num / 2);
  let end = start + num - 1;

  var answer = [];
  for (let i = start; i <= end; i++) {
    answer.push(i);
  }

  return answer;
}

solution(3, 12);
solution(5, 15);
solution(4, 14);
solution(5, 5);
