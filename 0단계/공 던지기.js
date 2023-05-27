function solution(numbers, k) {
  var answer = 0;

  if (numbers.length % 2 == 0) {
    console.group("짝수");

    let A = k % (numbers.length / 2);
    console.log(A);

    A == 0 ? (answer = numbers[numbers.length - 2]) : (answer = A * 2 - 1);

    console.log(answer);
    console.groupEnd();
  } else {
    console.group("홀수");

    let B = k % numbers.length;

    B == 0 ? (answer = numbers[numbers.length - 2]) : B < numbers.length / 2 ? (answer = B * 2 - 1) : (answer = B - ((numbers.length + 1) / 2) * 2);

    console.log(answer);
    console.groupEnd();
  }

  return answer;
}
// k=1 일땐 무조건 1
solution([1, 2, 3, 4], 2);
solution([1, 2, 3, 4, 5, 6], 5);
solution([1, 2, 3], 3);
