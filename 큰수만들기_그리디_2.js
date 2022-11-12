function solution(number, k) {
  console.group("\n" + "k: " + k + ", number: " + number);
  let arr = number.split("");

  let i = 0;
  let nine = -1;
  while (k > 0) {
    if (!arr[i + 1]) {
      // 전부 탐색했는데 모든 숫자가 크거나 같은 순으로 내림차순일 경우 -> 맨뒤부터 k만큼 삭제
      arr.splice(i - k + 1, k);
      k = 0;
    } else if (+arr[i] < +arr[i + 1]) {
      // 현재 값이 뒤의 값보다 작을 경우 현재값 삭제 , 다시 배열의 처음부터 탐색 (9가 아닌 수부터)
      arr.splice(i, 1);
      k--;

      nine > -1 ? (i = nine) : (i = 0);
    } else {
      // 현재 값이 뒤의 값보다 같거나 클 경우

      // 현재 값이 9일 경우
      if (arr[i] == 9) {
        nine = i;
      }

      i++;
    }
  }

  console.groupEnd();
  return arr.join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
console.log(solution("100052841", 4));
console.log(solution("9987921", 4));
console.log(solution("998721", 4));
