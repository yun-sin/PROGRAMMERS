function solution(name) {
  var answer = 0;

  // 위아래로 이동하는 횟수
  name.split("").forEach((v, i) => {
    let ascii = name.charCodeAt(i);

    if (ascii < 77) {
      answer += ascii - 65;
    } else {
      answer += 91 - ascii;
    }
  });

  let max = 0;
  let chain = 0;
  let chainLastIndex = 0;

  // 좌우로 이동하는 횟수
  name.split("").forEach((v, i) => {
    if (v == "A") {
      chain += 1;
      if (max < chain) {
        chainLastIndex = i;
        max = chain;
      }
    } else {
      chain = 0;
    }
  });

  let chainFirstIndex = chainLastIndex - max + 1;

  let goStraight = name.length - 1;
  let goBack = name.length - 1 - max + chainFirstIndex - 1;

  goStraight < goBack ? (answer += goStraight) : (answer += goBack);

  return answer;
}

console.log(solution("JAZ"));
console.log(solution("JEROEN"));
console.log(solution("JAN"));
