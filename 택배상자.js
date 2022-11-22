function solution(order) {
  let truck = []; // 최종 목적지 (이 배열의 길이가 답)
  let sub = []; // 서브컨테이너
  let count = 0; // order에서 몇번째 인덱스를 체크할 지

  console.group(order);
  let i = 1; // i = [1,2,3,4,5]와 유사 -> 컨테이너에서 내리는 물품의 인덱스
  while (i <= order.length) {
    if (order[count] == i) {
      // order가 원하는 것과 컨테이너에서 내리는 것이 동일할때
      console.log("컨테이너 -> 트럭 " + i);
      truck.push(i);
      i++;
      count++;
    } else if (sub[sub.length - 1] == order[count]) {
      // sub로 옮긴것중 마지막(꺼낼수있는)이 현재 order가 원하는 것과 동일할 때
      console.log("서브 -> 트럭 " + sub[sub.length - 1]); // (컨테이너에선 내리지 않았으므로 i는 증가하지 않음)
      truck.push(sub.pop());
      count++;
    } else {
      // 둘다 해당하지 않으면 sub로 옮기기
      sub.push(i);
      console.log("컨테이너 -> 서브 " + i);
      i++;
    }
  }

  // 컨테이너에서는 다 내렸고 sub에 남은것들 옮길 차례
  // sub의 마지막물건이 현재 order와 동일 && order를 전부 체크하기 전
  while (sub[sub.length - 1] == order[count] && count < order.length) {
    console.log("서브 -> 트럭 " + sub[sub.length - 1]);
    truck.push(sub.pop());
    count++;
  }
  console.log(truck);
  console.log(sub);
  console.log("\n");
  console.groupEnd();

  return truck.length;
}

solution([4, 3, 1, 2, 5]);
solution([5, 4, 3, 2, 1]);
