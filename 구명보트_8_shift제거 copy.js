function solution(P, limit) {
  P.sort((a, b) => b - a);
  let boat = P.length;

  let i = 0;
  while (i < P.length - 1) {
    if (P[i] + P[P.length - 1] > limit) {
      i++;
    } else if (P[i] + P[P.length - 1] == limit) {
      i++;
      P.pop();
      boat--;
    } else {
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
