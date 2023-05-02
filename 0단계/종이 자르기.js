function solution(M, N) {
  var answer = M - 1 + M * (N - 1);

  return answer;
}

console.log(solution(2, 2));
console.log(solution(2, 5));
console.log(solution(1, 1));
