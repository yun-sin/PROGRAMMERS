function solution(emergency) {
  let arr = emergency.slice(); // 배열의 깊은 복사
  arr.sort((a, b) => b - a); // 내림 차순으로 정렬

  let obj = {};
  arr.forEach((v, i) => {
    obj[v] = i + 1; // 값마다 인덱스 값을 지정해줌
  });

  let arr2 = [];

  emergency.forEach((v, i) => {
    arr2.push(obj[v]); // 원본 배열을 탐색하며 obj에 저장된 값을 새로운 배열로 push
  });

  return arr2;
}

solution([3, 76, 24]);
solution([1, 2, 3, 4, 5, 6, 7]);
solution([30, 10, 23, 6, 100]);
