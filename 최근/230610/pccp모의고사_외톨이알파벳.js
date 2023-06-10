function solution(input_string) {
  let obj = {};
  let arr = [];

  input_string.split("").forEach((v, i) => {
    if (obj[v] >= 0) {
      if (obj[v] != i - 1) {
        arr.push(v);
      } else {
        obj[v] = i;
      }
    } else {
      obj[v] = i;
    }
  });

  const arr2 = [...new Set(arr)];

  arr2.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  console.log(arr);
  console.log(arr2);
  let answer = "N";

  if (arr2.length > 0) {
    answer = arr2.join("");
  }

  return answer;
}

solution("edeaaabbccd");
solution("zbzbz");
