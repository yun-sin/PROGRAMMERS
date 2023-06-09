function solution(citations) {
  citations.sort((a, b) => b - a);
  let max = citations[0];

  for (let i = max; i > 0; i--) {
    let tmp = citations.filter((e) => e >= i);
    // console.log(i);
    // console.log(tmp);
    if (tmp.length >= i) {
      return i;
    }
  }

  return 0;
}

solution([3, 0, 6, 4, 7, 1, 5]);
solution([6, 7, 5]);

// console.log(solution([3, 0, 6, 1, 5]));
