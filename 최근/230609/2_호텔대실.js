function solution(book_time) {
  let room = book_time.length;

  let arr = [];

  book_time.forEach((v, i) => {
    let arr2 = [];
    v.forEach((v2, i2) => {
      let tmp = v2.split(":");

      arr2.push(+(tmp[0] * 60) + +tmp[1]);
    });
    arr.push(arr2);
  });

  console.log(arr);

  arr.sort((a, b) => a[0] - b[0]);

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let min = 1440;
    let id1 = null;
    let id2 = null;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][0] - arr[i][1] >= 10 && arr[j][0] - arr[i][1] < min) {
        min = arr[j][0] - arr[i][1];
        id1 = i;
        id2 = j;
      }
    }

    if (id1 && id2) {
      room--;
      arr[id1] = [arr[id1][0], arr[id2][1]];
      arr[id2] = [];
      i--;
    }
  }

  console.log(room);

  return room;
}

solution([
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
]);
solution([
  ["09:10", "10:10"],
  ["10:20", "12:20"],
]);
solution([
  ["10:20", "12:30"],
  ["10:20", "12:30"],
  ["10:20", "12:30"],
]);
