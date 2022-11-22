function solution(P, limit) {
  P.sort((a, b) => b - a);

  let boat = P.length;

  let count = 1;

  while (P.length > 1 && P[P.length - 2] + P[P.length - 1] <= limit) {
    console.log(count++ + ", " + P);
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

  console.log(boat);
  return boat;
}

// solution([50, 50, 50, 50], 100);
// solution([70, 50, 80, 50], 100);
solution([70, 50, 80, 50, 40, 70, 50, 76, 68, 63, 44, 46], 100);
// solution([70, 80, 50], 100);
