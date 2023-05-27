function solution(sides) {
  var answer = 0;

  let a = sides[0];
  let b = sides[1];

  let n = a + b;

  let arr = [];

  for (i = 1; i < n; i++) {
    if (i + a > b && i + b > a) {
      arr.push(i);
    }
  }

  console.log(arr);

  console.log(arr.length);

  answer = arr.length;
  return answer;
}

solution([1, 2]);
solution([3, 6]);
solution([11, 7]);
