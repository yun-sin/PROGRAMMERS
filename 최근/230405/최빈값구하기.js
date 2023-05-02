function solution(array) {
  var answer = 0;

  let obj = {};
  array.forEach((v, i) => {
    obj[v] ? obj[v]++ : (obj[v] = 1);
  });
  console.log(obj);

  let arr = [];
  let count = 0;
  for (let key in obj) {
    if (obj[key] > count) {
      count = obj[key];
      answer = key;
    } else if (obj[key] == count) {
      answer = -1;
    }
  }

  console.log(+answer);

  return answer;
}

solution([1, 2, 3, 3, 3, 4]);
solution([1, 1, 2, 2]);
solution([1]);
