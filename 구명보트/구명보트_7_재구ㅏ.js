function solution(people, limit) {
  people.sort((a, b) => b - a);
  let boat = people.length;

  var CC = 0;
  recursion(people, boat);

  function recursion(P, n) {
    console.log(CC++ + ", " + P);
    if (P.length <= 1 || P[P.length - 2] + P[P.length - 1] > limit) {
      return boat;
    } else if (P[0] + P[P.length - 1] > limit) {
      P.shift();
      recursion(P, n);
    } else if (P[0] + P[P.length - 1] == limit) {
      P.shift();
      P.pop();
      boat--;
      recursion(P, n);
    } else {
      P[0] += P[P.length - 1];
      P.pop();
      boat--;
      recursion(P, n);
    }
  }

  console.log(people);
  console.log("------" + boat + "------");

  return boat;
}

solution([50, 50, 50, 50], 100);
solution([70, 50, 80, 50], 100);
solution([70, 50, 80, 50, 40, 70, 50, 76, 68, 63, 44, 46], 100);
solution([70, 80, 50], 100);
