function solution(id_pw, db) {
  var answer = "fail";

  db.forEach((v, i) => {
    // console.log(v);

    if (v[0] == id_pw[0]) {
      answer = "wrong pw";
      if (v[1] == id_pw[1]) {
        answer = "login";
      }
    }
  });

  // console.logd(answer);
  return answer;
}

solution(
  ["meosseugi", "1234"],
  [
    ["rardss", "123"],
    ["yyoom", "1234"],
    ["meosseugi", "1234"],
  ]
);

solution(
  ["programmer01", "15789"],
  [
    ["programmer02", "111111"],
    ["programmer00", "134"],
    ["programmer01", "1145"],
  ]
);

solution(
  ["rabbit04", "98761"],
  [
    ["jaja11", "98761"],
    ["krong0313", "29440"],
    ["rabbit00", "111333"],
  ]
);
