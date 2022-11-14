function solution(P, limit) {
  P.sort((a, b) => b - a);

  let boat = P.length;

  while (P.length > 1) {
    if (P[0] + P[P.length - 1] > limit) {
      P.shift();
    } else if (P[0] + P[P.length - 1] == limit) {
      P.shift();
      P.pop();
      boat--;
    } else {
      P[0] += P[P.length - 1];
      P.pop();
      boat--;
    }
  }

  return boat;
}
