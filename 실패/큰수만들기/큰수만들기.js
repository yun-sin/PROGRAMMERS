function solution(number, k) {
  var answer = "";

  let arr = number.split("");

  // console.log(arr);

  let obj = {};

  arr.forEach((v, i) => {
    obj[v] ? obj[v]++ : (obj[v] = 1);
  });

  console.log("k : " + k);
  console.log(obj);
  console.log("--------------");

  let dif = 0;
  let num = 0;

  for (let i = 1; i <= 9; i++) {
    // 해당 수가 존재하고 k가 아직 남았을때
    if (obj[i] && k > 0) {
      if (k >= obj[i]) {
        // 만약 그 수보다 k가 크거나 같을때
        k -= obj[i];
        obj[i] = 0;
        console.log(obj);
      } else {
        // k는 남았지만 그 수가 k보다 작을때
        dif = k - obj[i];
        k == 0;
        obj[i] = obj[i] - k;
        num = i;
        console.log(k);
        console.log(obj);
      }
    }
  }
  console.log("결과\nk : " + k);
  console.log(obj);

  return answer;
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
