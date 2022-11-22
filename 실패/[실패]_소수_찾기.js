function solution(numbers) {
  var answer = 0;

  let arr = [...numbers].map((v, i) => Number(v));
  console.log(arr);
  console.log(typeof arr);
  const arr2 = Array.from(arr);
  console.log(typeof arr2);

  return answer;
}

console.log(solution("177"));

function solution(numbers) {
  var answer = 0;

  let arr = [...numbers].map((v, i) => Number(v));
  console.log(arr);
  const arr2 = Array.from(arr);
  console.log(typeof arr2);
  console.log(typeof Array.from(arr));

  numbers.split("").forEach((v, i) => {});
  // cases("123", numbers.split(""));

  return answer;
}

function cases(str, 배열) {
  console.log("str: " + str);
  console.log("배열: " + 배열);
  console.log(typeof 배열);
  // if (배열.length == 0) {
  //   Array.push(str);
  //   return;
  // }

  // console.log(배열);
  // console.log(typeof 배열);

  // 배열.forEach((v, i) => {
  //   let tmp = 배열.splice(i, 1);

  //   str += tmp;
  //   cases(str, v);
  // });
}

console.log(solution("177"));
