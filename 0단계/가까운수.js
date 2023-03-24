function solution(array, n) {
  var answer = 0;

  if (array.length == 1) {
    return (answer = array[0]);
  } else {
    array.push(n);
    array.sort((a, b) => a - b);

    let ind = array.indexOf(n);
    if (!array[ind - 1]) {
      answer = array[ind + 1];
    } else if (!array[ind + 1]) {
      answer = array[ind - 1];
    } else {
      let left = n - array[ind - 1];
      let right = array[ind + 1] - n;
      left <= right ? (answer = array[ind - 1]) : (answer = array[ind + 1]);
    }
  }

  console.log(answer);
  return answer;
}
solution([3, 10, 28], 20);
solution([10, 11, 12], 13);
