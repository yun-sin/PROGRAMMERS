function solution(babbling) {
  var answer = 0;

  babbling.forEach((v, i) => {
    if (v.replace(/aya|ye|woo|ma/g, "").length == 0) {
      answer++;
    }
  });

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
console.log(solution(["yayae", "aya"]));
