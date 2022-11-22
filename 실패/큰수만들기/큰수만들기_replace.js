function solution(number, k) {
  var answer = "";
  console.log(number);

  let arr = number.split("");
  let obj = {};
  arr.forEach((v, i) => {
    obj[v] ? obj[v]++ : (obj[v] = 1);
  });
  console.log(obj);

  let reAll = [];
  let re = Object.keys(obj).forEach((v, i) => {
    if (k > 0) {
      if (k > obj[v]) {
        k - obj[v];
        obj[v] = 0;
        reAll.push(v);
      } else {
        k = 0;
        obj[v] -= k;
      }
    }
  });

  if (k > 0) {
    number = number.replace(1, "");
    k--;
  }

  console.log(number);
  return answer;
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
