function solution(P, limit) {
  // 무게별 내림차순으로 정렬
  P.sort((a, b) => b - a);
  // 먼저 1인1보트 배정
  let boat = P.length;

  let i = 0;
  while (i < P.length - 1) {
    if (P[i] + P[P.length - 1] > limit) {
      // 가장 무거운 사람 + 가장 가벼운 사람 > 무게제한초과
      // 가장 무거운 사람은 무조건 1인1보트
      i++;
    } else if (P[i] + P[P.length - 1] == limit) {
      // 가장 무거운사람 + 가장 가벼운사람이 무게제한과 동일하다면 2인1보트
      // (처음에 1인1보트로 배정한 보트 개수에서 1개를 뺌)
      i++;
      P.pop();
      boat--;
    } else {
      // 가장 무거운사람 + 가장 가벼운 사람해도 무게제한 밑
      // 그 두사람의 무게를 합한 1명으로 치고 보트하나를 뺌
      // 그 합한 사람을 다시 가장 가벼운 사람과 비교해야하므로 인덱스는 그대로
      P[i] += P[P.length - 1];
      P.pop();
      boat--;
    }
  }

  return boat;
}

// solution([50, 50, 50, 50], 100);
// solution([70, 50, 80, 50], 100);
solution([70, 50, 80, 50, 40, 70, 50, 76, 68, 63, 44, 46], 100);
// solution([70, 80, 50], 100);
