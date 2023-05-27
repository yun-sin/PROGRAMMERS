function solution(quiz) {
  var answer = [];

  quiz.forEach((v, i) => {
    let arr = v.split("=");
    arr[0] = arr[0].trim().split(" ");

    console.log(arr);

    let a = +arr[0][0];
    let b = +arr[0][2];
    let c = +arr[1];

    let ab = null;

    arr[0][1] == "-" ? (ab = a - b) : (ab = a + b);

    ab == c ? answer.push("O") : answer.push("X");
  });
  console.log(answer);

  return answer;
}

solution(["3 - 4 = -3", "5 + 6 = 11"]);
