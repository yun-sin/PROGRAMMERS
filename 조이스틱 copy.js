function solution(name) {
  var answer = 0;

  // 위아래로 이동하는 횟수
  name.split("").forEach((v, i) => {
    // console.log(v);
    let ascii = name.charCodeAt(i);
    // console.log(ascii);
    // console.log(v);
    if (ascii < 77) {
      // console.log("위로" + (ascii - 65));
      answer += ascii - 65;
    } else {
      // console.log("밑으로" + (91 - ascii));
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

  // console.log("S: " + goStraight + ", B: " + goBack);

  // console.log("max: " + max);
  // console.log("CLI: " + chainLastIndex);
  // console.log("CFI: " + chainFirstIndex);

  return answer;
}

console.log(solution("JAZ"));
console.log(solution("JEROEN"));
console.log(solution("JAN"));
