function solution(num_list, n) {
  var answer = [[]];

  let j = 0;
  num_list.forEach((v, i) => {
    console.log(v);
    if (answer[j].length < n) {
      answer[j].push(v);
    } else {
      j++;
      answer.push([v]);
    }
  });
  console.log(answer);
  return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8], 2);
