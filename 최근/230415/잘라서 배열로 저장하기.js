function solution(my_str, n) {
  var answer = [];

  let len = my_str.length;

  for (i = 0; i < len; i += n) {
    answer.push(my_str.substring(i, i + n));
  }

  return answer;
}

solution("abc1Addfggg4556b", 6);
solution("abcdef123", 3);
