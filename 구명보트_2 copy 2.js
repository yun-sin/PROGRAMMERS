function solution(P, limit) {
  P.sort((a, b) => b - a);

  console.group(P);

  let boat = P.length;
  let count = 1;

  let i = 0;
  let obj = {};

  while (i < P.length) {
    if (P[0] + P[P.length - 1] > limit) {
      obj[count] = [P[0]];
      P.shift();
      count++;
      boat--;
    } else if (P[0] + P[P.length - 1] == limit) {
      obj[count] = [P[0], P[P.length - 1]];
      P.shift();
      P.pop();
      boat--;
    } else {
      P[0] += P[P.length - 1];
      i = 0;
    }
    i++;
  }

  console.log(P);
  console.log(obj);
  console.log("-------------\n");
  console.groupEnd();
  var answer = P.length;
  return answer;
}

solution([50, 50, 50, 50], 100);
solution([70, 50, 80, 50], 100);
solution([70, 50, 80, 50, 40, 70, 50, 76, 68, 63, 44, 46], 100);
solution([70, 80, 50], 100);
