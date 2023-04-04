function solution(n) {
  var answer = 0;
  let arr = [0]; // 인덱스를 1로 맞추기 위함

  for (i = 1; i <= 300; i++) {
    let arr2 = ("" + i).split("");

    if (!(i % 3 == 0 || arr2.some((e) => e == 3))) {
      arr.push(i);
    }
  }

  answer = arr[n];
  return answer;
}

solution(15);
