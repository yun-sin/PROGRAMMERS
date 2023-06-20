function solution(genres, plays) {
  var answer = [];

  let obj = {};

  genres.forEach((v, i) => {
    if (obj[v]) {
      obj[v].total += plays[i];

      if (plays[i] > plays[obj[v].b1]) {
        obj[v].b2 = obj[v].b1;
        obj[v].b1 = i;
      } else if (plays[i] > plays[obj[v].b2] || obj[v].b2 == null) {
        obj[v].b2 = i;
      }
    } else {
      obj[v] = { total: plays[i], b1: i, b2: null };
    }
  });

  console.log(obj);

  let key = Object.keys(obj);

  console.log(key);

  key.sort((a, b) => obj[b].total - obj[a].total);

  key.forEach((v, i) => {
    answer.push(obj[v].b1);
    if (obj[v].b2 || obj[v].b2 == 0) {
      answer.push(obj[v].b2);
    }
  });

  console.log(answer);

  return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
