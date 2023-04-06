function solution(numlist, n) {
  var answer = [];

  let obj = [];
  numlist.forEach((v, i) => {
    let tester = v - n;
    let arr = [v, 0];
    tester > 0 ? (arr[1] = tester - 0.5) : (arr[1] = -tester);
    obj.push(arr);
  });

  console.log(obj);

  obj.sort((a, b) => a[1] - b[1]);
  console.log(obj);

  obj.forEach((v, i) => {
    answer.push(v[0]);
  });

  console.log(answer);
  return answer;
}

solution([1, 2, 3, 4, 5, 6], 4);
solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30);
