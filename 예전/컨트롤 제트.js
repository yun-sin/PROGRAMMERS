function solution(s) {
  var answer = 0;

  let arr = s.split(" ");

  for (i = arr.length - 1; i >= 0; i--) {
    // console.log(arr[i]);
    if (arr[i] == "Z") {
      i--;
    } else {
      answer += +arr[i];
    }
  }

  // console.log(answer);
  return answer;
}

solution("1 2 Z 3");
solution("10 20 30 40");
solution("10 20 30 40");
