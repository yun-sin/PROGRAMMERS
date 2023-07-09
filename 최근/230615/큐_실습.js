function solution(priorities, location) {
  var answer = 0;

  let arr = [...priorities];
  let arr2 = [];

  let i = 0;
  while (arr.length > 0) {
    let max = arr[0];

    arr.forEach((v, i) => {
      if (v > max) {
        max = v;
      }
    });

    if (arr[0] < max) {
      let tmp = arr.shift();
      arr.push(tmp);
      // console.log(arr);
    } else {
      arr.shift();
      arr2.push(i);
    }

    i++;
    if (i >= priorities.length) {
      i -= priorities.length;
    } else {
    }
  }

  console.log(arr2);

  answer = arr2.indexOf(location) + 1;
  console.log(answer);

  return answer;
}

solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);
