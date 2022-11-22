function solution(num_list, n) {
  var answer = [[]];

  for (let i = 0; i < num_list.length; i++) {
    for (let j = 0; j < num_list.length / n; j++) {
      if (answer[j].length == n) {
      }
      answer[j].push(i);
    }
  }
}

solution([1, 2, 3, 4, 5, 6, 7, 8], 2);
