function solution(s) {
  var answer = "";
  // console.group(s);

  const obj = {};
  for (i = 0; i < s.length; i++) {
    obj[s[i]] ? obj[s[i]]++ : (obj[s[i]] = 1);
  }
  // console.log(obj);

  let arr = [];
  Object.keys(obj).forEach((v, i) => {
    if (obj[v] == 1) {
      arr.push(v);
    }
  });

  // console.log(arr);
  arr.sort();
  // console.log(arr);

  arr.forEach((v, i) => {
    answer += v;
  });

  // console.log(answer);
  // console.groupEnd();
  return answer;
}

solution("abcabcadc");
solution("abdc");
solution("hello");
