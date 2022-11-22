function solution(k, m, score) {
  var answer = 0;

  // 내림차순으로 정렬
  score.sort((a, b) => b - a);

  // m개씩 끊어서 체크 (나머지는 버림)
  for (let i = m - 1; i < score.length; i += m) {
    if (score[i]) {
      answer += score[i] * m;
    }
  }
  console.log(answer);

  return answer;
}

solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
