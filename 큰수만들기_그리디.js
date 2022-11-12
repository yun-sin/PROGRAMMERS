function solution(number, k) {
  var answer = "";
  console.group("\n" + "k: " + k + ", number: " + number);
  let arr = number.split("");

  let i = 0;
  while (k > 0) {
    if (!arr[i + 1]) {
      // 전부 탐색해도 작은걸 못찾음 (모든 숫자가 크거나 같은 순으로 내림차순일 경우) 맨뒤 요소 삭제
      arr.pop();
      k--;
      i = 0;
    } else if (arr[i] == 9) {
      i++;
    } else if (+arr[i] < +arr[i + 1]) {
      // 어떤 요소가 그 뒤 요소보다 작을 경우 해당 요소 삭제
      arr.splice(i, 1);
      k--;
      i = 0;
    } else {
      // arr[i] >= arr[i+1] 일 때 다음 탐색
      i++;
    }
    // console.log("i: " + i + ", arr: " + arr);
  }

  console.groupEnd();

  // answer = arr.reduce((a, c) => a + c);
  // return answer;
  return arr.join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
console.log(solution("100052841", 4));
console.log(solution("9987921", 4));
console.log(solution("998721", 4));
