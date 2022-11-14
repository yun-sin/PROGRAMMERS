function solution(P, limit) {
  P.sort((a, b) => b - a);

  let boat = 0;
  console.group(boat + ", " + P);
  let arr = [];

  let i = 0;
  while (P.length > 1 && i < P.length) {
    if (P[i] + P[P.length - 1] > limit) {
      boat++;
      i++;
    } else if (P[i] + P[P.length - 1] == limit) {
      boat++;
      i++;
      P.pop();
    } else {
      P[i] += P[P.length - 1];
      P.pop();
    }
  }

  boat += P.length;

  console.log(P);
  console.log(boat);
  console.log(arr);
  console.log("-------------\n");
  console.groupEnd();
  var answer = P.length;
  return answer;
}

solution([50, 50, 50, 50], 100); // 2
solution([70, 50, 80, 50], 100); // 3
solution([70, 50, 80, 50, 40, 70, 50, 76, 68, 63, 44, 46], 100); //9
solution([70, 80, 50], 100); // 3
