function solution(numbers, hand) {
  var answer = "";

  /** [*, 0, #]을 [10, 11, 12]로 생각 */
  let num = numbers.map((v, i) => (v == 0 ? 11 : v));
  let lastL = 10; // 왼손 가장 최근 지점 (시작점)
  let lastR = 12; // 오른손 가장 최근 지점 (시작점)

  /** 문자열에 L또는 R을 더하고 / 해당 손가락 최근 지점 설정하는 함수 */
  function Click(side, v) {
    answer += side;
    side == "L" ? (lastL = v) : (lastR = v);
  }

  num.forEach((v, i) => {
    if (v % 3 == 1) {
      // 1 4 7 무조건 왼손
      Click("L", v);
    } else if (v % 3 == 0) {
      // 3 6 9 무조건 오른손
      Click("R", v);
    } else {
      // 왼손과 오른손의 거리 측정 (작을수록 가까움) (3으로 나눈 몫 + 나머지 = 거리)
      // ex) v=5 이고 lastL이 1이면 몫=1 나머지=1  ==> 거리 =2
      let 왼 = parseInt(Math.abs(v - lastL) / 3) + (Math.abs(v - lastL) % 3);
      let 오 = parseInt(Math.abs(lastR - v) / 3) + (Math.abs(lastR - v) % 3);

      // 왼손 오른손 거리 비교
      if (왼 == 오) {
        hand == "right" ? Click("R", v) : Click("L", v);
      } else {
        왼 < 오 ? Click("L", v) : Click("R", v);
      }
    }
  });

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
