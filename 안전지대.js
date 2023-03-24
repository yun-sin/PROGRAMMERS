function solution(board) {
  let n = board.length;
  let answer = 0;

  console.group("시작");

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] == 1) {
        for (let i = x - 1; i <= x + 1; i++) {
          for (let j = y - 1; j <= y + 1; j++) {
            if (i >= 0 && j >= 0 && i < n && j < n) {
              if (board[i][j] == 0) {
                board[i][j] = 2;
              }
            }
          }
        }
      }
    }
  }

  board.forEach((v, i) => {
    console.log(v);
    answer += v.reduce((a, b) => a + (b == 0), 0);
  });

  console.log("count:" + answer);
  console.groupEnd();

  return answer;
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]);
solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
]);
solution([
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
]);
