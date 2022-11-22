function solution(numbers, hand) {
  var answer = "";

  let num = numbers.map((v, i) => (v == 0 ? 11 : v));
  let lastL = 10;
  let lastR = 12;

  function Click(side, v) {
    answer += side;
    side == "L" ? (lastL = v) : (lastR = v);
  }

  num.forEach((v, i) => {
    if (v % 3 == 1) {
      Click("L", v);
    } else if (v % 3 == 0) {
      Click("R", v);
    } else {
      let 왼 = parseInt(Math.abs(v - lastL) / 3) + (Math.abs(v - lastL) % 3);
      let 오 = parseInt(Math.abs(v - lastR) / 3) + (Math.abs(v - lastR) % 3);

      if (왼 == 오) {
        hand == "right" ? Click("R", v) : Click("L", v);
      } else {
        왼 < 오 ? Click("L", v) : Click("R", v);
      }
    }
  });

  return answer;
}
