// 카드하나를 꺼냄
// 그 카드에 해당하는 인덱스+1의 카드를 꺼냄
// 반복

function solution(cards) {
  let obj = {};
  let arr2 = [];
  cards.forEach((v, i) => {
    // console.group(v);

    let arr = [];

    let j = i;
    while (!arr.includes(cards[j])) {
      arr.push(cards[j]);
      j = cards[j] - 1;
    }
    arr = arr.sort();
    // console.log(arr);
    if (!obj[arr[0]]) {
      obj[arr[0]] = arr;
      arr2.push(arr.length);
    }
    // console.groupEnd();
  });

  // console.log(obj);
  // console.log(arr2);

  arr2.sort((a, b) => b - a);
  // console.log(arr2);

  let answer = 0;
  if (arr2.length > 1) {
    answer = arr2[0] * arr2[1];
  }

  return answer;
}

solution([8, 6, 3, 7, 2, 5, 1, 4]);
