function solution(number, k) {
  var answer = "";

  console.group("\n" + "k: " + k + ", number: " + number);
  let arr = number.split("");

  while (k != 0) {
    for (let i = k; i > 0; i--) {
      if (arr[i - 1] < arr[i]) {
        arr.splice(0, i);
        k -= i;
        console.log(i + "개 삭제, 현재 k : " + k);
        console.log(arr);
      }
    }
    console.group("------------------");
    console.log("찾을수 없음 0번째 원소:" + arr[0] + " answer에 전달");
    answer += arr.splice(0, 1);
    console.log("answer : " + answer);
    console.log("arr: " + arr + "\n------------------");
    console.groupEnd();
  }

  console.log(k);
  // console.log(arr);
  console.groupEnd();

  return answer;
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
