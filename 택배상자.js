function solution(order) {
  let truck = [];
  let sub = [];
  let count = 0;

  let i = 1;
  while (i <= order.length) {
    if (order[count] == i) {
      truck.push(i);
      console.log("바로 트럭으로 " + i);
      i++;
      count++;
    } else if (sub[sub.length - 1] == order[count]) {
      console.log("보조에서 트럭으로 " + sub[sub.length - 1]);
      truck.push(sub.pop());
      count++;
    } else {
      sub.push(i);
      console.log("보조 컨테이너에 " + i);
      i++;
    }
  }

  while (sub[sub.length - 1] == order[count] && count < order.length) {
    truck.push(sub.pop());
    count++;
    console.log(123);
  }
  console.log(truck);
  console.log(sub);

  return truck.length;
}

solution([4, 3, 1, 2, 5]);
solution([5, 4, 3, 2, 1]);
