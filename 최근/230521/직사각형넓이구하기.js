function solution(dots) {
  var answer = 0;

  let x,
    y = null;

  let 가로,
    세로 = 0;

  dots.forEach((v, i) => {
    if (x == null) {
      x = v[0];
    } else if (x != v[0]) {
      가로 = Math.abs(v[0] - x);
    }

    if (y == null) {
      y = v[1];
    } else if (y != v[1]) {
      세로 = Math.abs(v[1] - y);
    }
  });

  answer = 가로 * 세로;

  return answer;
}

solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
]);
solution([
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
]);
