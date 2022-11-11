function solution(name) {
  /** 알파벳문자열을 숫자배열로 치환 ex) "BBBAAB" -> [1,1,1,0,0,1] */
  let arr = name.split("").map((v, i) => {
    let ascii = name.charCodeAt(i);
    return ascii < 78 ? ascii - 65 : 91 - ascii;
  });

  // 위아래 조작 횟수는 미리 upDown에 넣어줌
  var upDown = arr.reduce((a, c) => +a + +c);

  // 오른쪽으로만 이동했을때의 총 조작횟수
  let 직진 = arr.length - 1 + upDown;
  console.log("직진:" + 직진);
  var answer = 직진;

  /**
   * 재귀함수 recursion
   * @param {number} i 파라미터로 들어온 배열에서의 현재 인덱스,
   * @param {number} move 지금까지 이동횟수 (초기값 = upDown) 좌우 이동횟수만 추가하면 됨
   * @param {number} depth 재귀함수의 depth
   */
  function recursion(배열, i, move, depth) {
    // [종료 조건 1] 현재까지 조작 횟수가 직진할때보다 크면 그 탐색 즉시 종료
    if (move > 직진) {
      return;
    }

    // tmp : 다음 회차에 호출될 함수에 줄 배열 (현재 인덱스의 값을 0으로 바꿈)(위아래 조작횟수는 미리 다 더해놨음)
    let tmp = 배열.map((v2, i2) => v2);
    tmp[i] = 0;

    // 배열의 마지막 인덱스
    let lastI = tmp.length - 1;

    // [종료 조건 2] 배열 전부를 0으로 만들었을 경우 탐색 종료
    if (tmp.reduce((a, c) => +a + +c) == 0) {
      if (move < answer) {
        // 최근의 최단 경로보다 짧은경로 나오면 answer값 변경
        tmp = 배열.map((v2, i2) => v2);
        answer = move;
        return answer;
      } else {
        // 짧지 않으면 기존 최단 경로값 유지
        tmp = 배열.map((v2, i2) => v2);
        return answer;
      }
    }

    // 우로 탐색 (현재 마지막인덱스여서 오른쪽으로 가면 0번째 인덱스인 경우 : 나머지경우)
    recursion(tmp, i == lastI ? 0 : i + 1, move + 1, depth + 1);
    // 좌로 탐색 (현재 처음인덱스여서 왼쪽으로 가면 마지막 인덱스인 경우 : 나머지경우)
    recursion(tmp, i == 0 ? lastI : i - 1, move + 1, depth + 1);
  }

  /** 재귀함수 호출 */
  // recursion(배열, i, move, depth)
  recursion(arr, 0, upDown, 0);

  console.log("    answer: " + answer + "\n");
  return answer;
}

solution("JEROEN");
solution("JAN");
solution("BBBAAB");
solution("M");
