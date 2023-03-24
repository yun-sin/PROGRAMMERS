function solution(keyinput, board) {
  var answer = [];

  let 가로 = (board[0] - 1) / 2;
  let 세로 = (board[1] - 1) / 2;

  let x = 0;
  let y = 0;

  keyinput.forEach((v, i) => {
    if (v == "left" && x > -가로) {
      x--;
    } else if (v == "right" && x < 가로) {
      x++;
    } else if (v == "down" && y > -세로) {
      y--;
    } else if (v == "up" && y < 세로) {
      y++;
    }
  });

  console.log([x, y]);
  answer = [x, y];

  return answer;
}

solution(["left", "right", "up", "right", "right"], [11, 11]);
solution(["down", "down", "down", "down", "down"], [7, 9]);
