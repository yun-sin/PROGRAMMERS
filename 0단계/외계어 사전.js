function solution(spell, dic) {
  var answer = 2;

  console.group(spell);

  dic.forEach((v, i) => {
    console.log(v);

    if (v.length == spell.length) {
      spell.forEach((v2, i2) => {
        v = v.replace(v2, "1");
        console.log(v);
      });

      console.log(Number.isInteger(+v));

      if (Number.isInteger(+v)) {
        answer = 1;
      }
    }
  });

  console.log(answer);

  console.groupEnd();
  return answer;
}

solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]);
solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]);
solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"]);
