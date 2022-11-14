function solution(PP, limit) {
  var answer = 0;

  PP.sort((a, b) => a - b);
  console.log(PP);

  while (PP[0] + PP[1] <= limit) {
    let obj = { max: 0, I1: null, I2: null };

    for (let i = 0; i < PP.length; i++) {
      for (let j = 0; j < PP.length; j++) {
        if (i != j && PP[i] + PP[j] == limit) {
          if (i > j) {
            PP.splice(i, 1);
            PP[j] = limit;
          } else {
            PP.splice(j, 1);
            PP[i] = limit;
          }
        }
        console.log(PP);

        if (i != j && PP[i] + PP[j] < limit) {
          if (PP[i] + PP[j] > obj["max"]) {
            obj["max"] = PP[i] + PP[j];
            if (i < j) {
              obj["I1"] = i;
              obj["I2"] = j;
            } else {
              obj["I1"] = j;
              obj["I2"] = i;
            }
          }
          console.log(obj);
        }
      }
    }
    console.log(obj);
    if (obj["I1"] && obj["I2"]) {
      PP.splice(obj["I2"], 1);
      PP.splice(obj["I1"], 1);
    }
  }

  console.log(PP);
  answer = PP.length;
  return answer;
}

solution([70, 50, 80, 50], 100);
// solution([70, 50, 80, 50, 40, 70, 50, 76, 68, 63, 44, 46], 100);
solution([70, 80, 50], 100);
