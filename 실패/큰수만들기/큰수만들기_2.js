function solution(number, k) {
  var answer = "";

  console.log(number);
  let arr = number.split("");
  console.log(arr);

  let arr2 = [];
  arr.forEach((v, i) => {
    if (k > 0 && v < arr[i + 1]) {
      k--;
      arr2.push(0);
    } else {
      arr2.push(v);
    }
  });

  console.log(arr2);
  return answer;
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
