function solution(bin1, bin2) {
  var answer = (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);

  console.log(answer);
  return answer;
}

solution("10", "11");
solution("1001", "1111");
