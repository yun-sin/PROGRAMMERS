function solution(number, k) {
  var answer = "";

  console.group("k: " + k + " --- number: " + number);

  for (let i = k; i > 0; i--) {
    if (+number[i - 1] < +number[i]) {
      console.log(i + "크기 만큼 삭제");
      number = number.substring(i);
      k = k - i;
    }
    console.log("number : " + number);
  }
  answer += number[0];
  number = number.substring(0);

  console.groupEnd();
  return answer;
}

console.log(solution("1924", 2));
// console.log(solution("1231234", 3));
// console.log(solution("4177252841", 4));
