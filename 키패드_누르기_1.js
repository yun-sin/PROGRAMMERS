function solution(numbers, hand) {
  var answer = "";
  console.log(numbers);

  // 0을 11로 바꿔줌
  let numbers2 = numbers.map((v, i) => (v == 0 ? 11 : v));
  console.log(numbers2);
  let lastLeft = 10;
  let lastRight = 12;

  let leftScore = 10;
  let rightScore = 10;

  let arr = [];

  numbers2.forEach((v, i) => {
    console.group("숫자 : " + v + ", 인덱스 : " + i);
    if (v % 3 == 1) {
      arr.push("L");
      lastLeft = v;
    } else if (v % 3 == 0) {
      arr.push("R");
      lastRight = v;
    } else {
      if (lastLeft < v) {
        leftScore = parseInt((v - lastLeft) / 3) + ((v - lastLeft) % 3);
        console.log("[lastLeft < v] : lastleft는 " + lastLeft + ", v : " + v + " 일 때 leftScore : " + leftScore);
      } else {
        leftScore = parseInt((lastLeft - v) / 3) + ((lastLeft - v) % 3);
        console.log("[lastLeft > v] : lastleft는 " + lastLeft + ", v : " + v + " 일 때 leftScore : " + leftScore);
      }

      if (lastRight > v) {
        rightScore = parseInt((lastRight - v) / 3) + ((lastRight - v) % 3);
        console.log("[lastRight > v] : lastRight " + lastRight + ", v : " + v + " 일 때 rightScore : " + rightScore);
      } else {
        rightScore = parseInt((v - lastRight) / 3) + ((v - lastRight) % 3);
        console.log("[lastRight < v] : lastRight : " + lastRight + ", v : " + v + " 일 때 rightScore : " + rightScore);
      }

      if (leftScore == rightScore) {
        if (hand == "right") {
          arr.push("R");
          lastRight = v;
        } else {
          arr.push("L");
          lastLeft = v;
        }

        console.log("lastLeft: " + lastLeft + ", lastRight : " + lastRight + "?" + v + "둘이 같지만" + hand + "잡이임");
      } else if (leftScore < rightScore) {
        arr.push("L");
        lastLeft = v;
      } else {
        arr.push("R");
        lastRight = v;
      }
    }

    leftScore = 10;
    rightScore = 10;
    console.groupEnd();
  });
  console.log(arr.join(""));
  answer = arr.join("");

  return answer;
}

solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
