/**
알파벳 갯수 26개 A~M 과 N~Z 로 반으로 나뉨


각 문자별 ascii 코드 이동 + 방향 이동을 따로 계산

기본적으로 오른쪽으로 이동 (count++)
다음에 A가 올 경우 오른쪽으로 갈지 왼쪽으로 갈지 판단해야함.
방향은 한번 바뀔수 있음

탐색하면서 방향을 바꿀지 말지 결정하는 것보다
탐색전에 A의 위치와 갯수를 파악한후 어디서 방향을 바꿀지 정하는게 나을듯.

A직전의 index가 A가 연속되는게 끝나는 지점으로 가기 위한 최소거리
원래 방향대로 갈 경우 처음부터 끝까지는 length-1 
반대 방향으로 갈 경우 처음부터 체인다음부분까지는  체인직전 + (전체길이- 맥스)
chain

0000AAAA0

AAAAOOO

3

7 - 4
 */

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
  console.log("위아래이동: " + answer);

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
  let goBack = 0;
  if (chainFirstIndex <= 1) {
    goBack = name.length - chainLastIndex - 1;
  } else {
    goBack = goStraight - 1 + chainFirstIndex - 1;
  }

  console.log("직: " + goStraight + ", 턴: " + goBack);
  goStraight < goBack ? (answer += goStraight) : (answer += goBack);
  // goBack >= 0 ? (answer += goBack) : (answer += 0);
  return answer;
}

console.log(solution("JAZ"));
console.log(solution("JEROEN"));
console.log(solution("JAN"));
console.log(solution("AABB"));
