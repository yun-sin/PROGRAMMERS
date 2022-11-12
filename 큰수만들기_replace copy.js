function solution(number, k) {
  var answer = "";
  console.group(number);

  let arr = number.split("");
  let obj = {};
  arr.forEach((v, i) => {
    obj[v] ? obj[v]++ : (obj[v] = 1);
  });
  console.log(obj);
  console.log(k);

  let reAll = [];
  let re = 0;
  let re_remain = 0;
  Object.keys(obj).forEach((v, i) => {
    if (k > 0) {
      if (k > obj[v]) {
        k -= obj[v];
        obj[v] = 0;
        reAll.push(v);
      } else {
        obj[v] -= k;
        k = 0;
        re = v;
        re_remain = obj[v];
      }
    }
  });

  console.log(obj);
  console.log(k);
  console.log("reAll : " + reAll);
  console.log("re : " + re);

  reAll.forEach((v, i) => {
    number = number.replaceAll(v, " ");
  });
  console.log(number);

  for (let i = 0; i < re_remain; i++) {
    number = number.replace(re, " ");
  }
  console.log(number);

  console.groupEnd();
  return answer;
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
