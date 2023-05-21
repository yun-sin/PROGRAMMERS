function solution(A, B) {
  var answer = 0;

  let arrA = A.split("");
  let arrB = B.split("");

  let obj = {};

  let arr = arrA;

  for (let i = 0; i < A.length; i++) {
    if (!obj[arr] && obj[arr] != 0) {
      obj[arr] = i;
    }
    let tmp = arr.pop();
    arr.unshift(tmp);
  }

  console.log(obj);
  console.log(obj[arrB]);

  obj[arrB] || obj[arrB] == 0 ? (answer = obj[arrB]) : (answer = -1);

  return answer;
}

solution("hello", "ohell");
solution("apple", "elppa ");
solution("atat", "tata");
solution("abc", "abc");
