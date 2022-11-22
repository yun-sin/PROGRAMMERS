function solution(genres, plays) {
  let totalPlay = new Map();

  // 장르 재생 횟수 총합 구하기
  genres.forEach((e, i) => {
    totalPlay.set(genres[i], (totalPlay.get(genres[i]) | 0) + plays[i]);
  });

  console.log(totalPlay);

  let total = Array.from(totalPlay.keys());
  let js = {};
  total.forEach((e, i) => {
    js[e] = {
      first: [0, 0],
      second: [0, 0],
    };
  }); // 번호, 횟수

  console.log(js);

  // 1,2번째 횟수들 생성
  genres.forEach((e, i) => {
    if (js[e]["first"][1] < plays[i]) {
      let tmp = js[e]["first"];
      js[e]["first"] = [i, plays[i]];
      js[e]["second"] = tmp;
    } else if (js[e]["second"][1] < plays[i]) {
      js[e]["second"] = [i, plays[i]];
    }
  });

  console.log(js);

  // 장르 별 총 재생 횟수 내림 차순
  total.sort((a, b) => totalPlay.get(b) - totalPlay.get(a));
  console.log("재생 횟수 내림 차순");
  console.log(total);
  let answer = [];
  total.forEach((e, i) => {
    answer.push(js[e]["first"][0]);
    // js[e]["second"][1] (그 장르의 두번째로 많이 재생한 횟수)가 0 이면 그 장르의 음악은 한 가지 이므로 push하지 않음)
    if (js[e]["second"][1]) {
      answer.push(js[e]["second"][0]);
    }
  });

  return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
