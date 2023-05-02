function solution(numbers, k) {
  let L = numbers.length;

  var answer = 0;

  let 주기 = 0;

  if (L % 2 == 0) {
    console.group("짝수");

    주기 = L / 2;

    console.groupEnd();
  } else {
    console.group("홀수");

    주기 = L;

    console.groupEnd();
  }

  let B = k % 주기;

  if (B == 0) {
    answer = L - 1;
  } else {
    answer = B * 2 - 1;
  }

  if (answer > L) {
    answer -= L;
  }

  console.log(answer);
  return answer;
}

solution([1, 2, 3, 4], 2);
solution([1, 2, 3, 4, 5, 6], 5);
solution([1, 2, 3], 3);
solution([1, 2, 3, 4, 5], 8);
solution([1, 2, 3, 4, 5], 9);
solution([1, 2, 3, 4, 5], 10);
