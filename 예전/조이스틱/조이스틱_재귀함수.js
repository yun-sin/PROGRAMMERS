function solution(name) {
  // 알파벳을 숫자로 치환 (A는 0으로 치환)
  let arr = [];
  name.split("").forEach((v, i) => {
    let ascii = name.charCodeAt(i);
    if (ascii < 78) {
      arr.push(ascii - 65);
    } else {
      arr.push(91 - ascii);
    }
  });

  // 위아래 무브는 미리 answer에 넣어줌
  var answer = arr.reduce((a, c) => +a + +c);
  let min = arr.length - 1 + answer;

  console.group("직진:" + min);

  var result = min;

  recursion(arr, 0, answer, 0);

  // 재귀함수
  function recursion(배열, i, move, count) {
    // 현재까지 이동거리가 직진보다 크면 그 탐색 즉시 종료
    if (move > min) {
      return;
    }

    // 원본 배열을 수정하면 여러 경우의수를 만들수 없음 임시 배열 생성
    let tmp = 배열.map((v2, i2) => v2);

    // console.log("tmp: " + tmp);
    // console.log("tmp : " + tmp + ", i: " + i + ", count: " + count);
    // if (count == 1) {
    //   console.log("tmp : " + tmp + ", i: " + i + ", count: " + count);
    // }
    tmp[i] = 0;
    let lastIndex = tmp.length - 1;

    // 배열 전부를 0으로 만들었을 경우 탐색 종료
    if (tmp.reduce((a, c) => +a + +c) == 0) {
      // tmp = arr.map((v2, i2) => v2);
      if (move < result) {
        // console.log("새로운 경로" + move + "\n");
        tmp = 배열.map((v2, i2) => v2);
        result = move;
        return result;
      } else {
        tmp = 배열.map((v2, i2) => v2);
        // console.log("변경 없음" + result + "\n");
        return result;
      }
    }
    // 우로 탐색
    if (i == lastIndex) {
      // console.log("count: " + count + ", tmp: " + tmp + "우(끝) : 0(" + i + ")" + " -> " + tmp[0] + "(" + 0 + ")");
      recursion(tmp, 0, move + 1, count + 1);
    } else {
      // console.log("count: " + count + ", tmp: " + tmp + "우 : 0(" + i + ")" + " -> " + tmp[i + 1] + "(" + (i + 1) + ")");
      recursion(tmp, i + 1, move + 1, count + 1);
    }
    // 좌로 탐색
    if (i == 0) {
      // console.log("count: " + count + ", tmp: " + tmp + "좌(끝) : 0(" + i + ")" + " -> " + tmp[lastIndex] + "(" + lastIndex + ")");
      recursion(tmp, lastIndex, move + 1, count + 1);
    } else {
      // console.log("count: " + count + ", tmp: " + tmp + "좌 : 0(" + i + ")" + " -> " + tmp[i - 1] + "(" + (i - 1) + ")");
      recursion(tmp, i - 1, move + 1, count + 1);
    }
  }
  console.groupEnd();

  console.log("              result: " + result + "\n--------------------------------------");
  return result;
}

solution("JEROEN");
solution("JAN");
solution("BBBAAB");
