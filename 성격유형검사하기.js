function solution(survey, choices) {
  var answer = "";
  const type = ["R", "C", "J", "A"];
  const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((v, i) => {
    console.log(choices[i]);
    if (choices[i] < 4) {
      obj[v[0]] += 4 - choices[i];
    } else if (choices[i] > 4) {
      obj[v[1]] += choices[i] - 4;
    }
  });

  if (obj["R"] < obj["T"]) {
    type[0] = "T";
  }
  if (obj["C"] < obj["F"]) {
    type[1] = "F";
  }
  if (obj["J"] < obj["M"]) {
    type[2] = "M";
  }
  if (obj["A"] < obj["N"]) {
    type[3] = "N";
  }

  type.forEach((v, i) => {
    answer += v;
  });

  return answer;
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
