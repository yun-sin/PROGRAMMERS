function solution(str1, str2) {
  var answer = 65536;

  console.log(str1);
  console.log(str2);

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  // console.group(str1 + ", " + str2);

  // 아예 같을 경우
  if (str1 == str2) {
    return answer;
  }

  // 문자열을 두 글자씩 잘라 배열을 만드는 함수
  char2 = (str) => {
    let arr = [];
    str.split("").forEach((v, i) => {
      if (i < str.length - 1) {
        if (/[a-zA-Z]/g.test(v) && /[a-zA-Z]/g.test(str[i + 1])) {
          arr.push(v + str[i + 1]);
        }
      }
    });
    return arr;
  };

  let arr1 = char2(str1);
  let arr2 = char2(str2);

  let 교 = arr1.filter((e) => arr2.includes(e));
  let 교2 = arr2.filter((e) => arr1.includes(e));

  let gyo = 교.length;
  if (교.length > 교2.length) {
    gyo = 교2.length;
  }

  console.log(교);
  console.log(교2);

  let 합 = [...arr2];
  arr1.forEach((v, i) => {
    if (!arr2.includes(v)) {
      합.push(v);
    }
  });
  let 합2 = [...arr1];
  arr2.forEach((v, i) => {
    if (!arr1.includes(v)) {
      합2.push(v);
    }
  });

  console.log(합);
  console.log(합2);

  let hop = 합.length;
  if (합.length < 합2.length) {
    hop = 합2.length;
  }

  answer = parseInt((gyo / hop) * 65536);
  // console.log(gyo);
  // console.log(hop);
  // console.log(answer + "\n");
  // console.groupEnd();

  return answer;
}

solution("FR", "fe");
solution("FRANCE", "french");
solution("handshake", "shake hands");
solution("E=M*C^2", "e=m*c^2");
solution("aa1+aa2", "AAAA12");
solution("abab", "baba");
