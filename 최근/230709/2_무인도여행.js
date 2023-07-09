function solution(maps) {
  var answer = [];

  maps.forEach((v, i) => {
    for (let j = 0; j < v.length; j++) {
      if (parseInt(v[j]) > 0) {
        console.log(v[j]);
      }
    }
  });
  return answer;
}

solution(["X591X", "X1X5X", "X231X", "1XXX1"]);
solution(["XXX", "XXX", "XXX"]);
