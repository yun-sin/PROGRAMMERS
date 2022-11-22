function solution(P, limit) {
  P.sort((a, b) => b - a);

  console.group(P);

  let i = 0;
  while (i < P.length - 1) {
    for (j = P.length - 1; j > i; j--) {
      console.log(P[i] + ":" + P[j]);
      if (P[i] + P[j] <= limit) {
        P[i] = "F";
        P.splice(j, 1);
        break;
      } else if (P[i] + P[j] < limit) {
        P[i] += P[j];
        P.splice(j, 1);
      }
    }
    i++;
  }

  console.log(P);
  console.groupEnd();
  var answer = P.length;
  console.log(answer);
  return answer;
}

solution([50, 50, 50, 50], 100);
solution([70, 50, 80, 50], 100);
solution([70, 50, 80, 50, 40, 70, 50, 76, 68, 63, 44, 46], 100);
solution([70, 80, 50], 100);
