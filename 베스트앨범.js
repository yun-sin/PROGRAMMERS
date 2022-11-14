// {
//   classic: { gP: 1450, b1: 3, b2: 0 },
//   pop: { gP: 3100, b1: 4, b2: 1 }
// }

function solution(genres, plays) {
  var answer = [];

  let obj = {};

  genres.forEach((v, i) => {
    if (obj[v]) {
      obj[v]["gP"] += plays[i];

      // 그 장르중 베스트1 노래 (기존값를 베스트2로 밀어냄)
      if (plays[i] > plays[obj[v]["b1"]]) {
        obj[v]["b2"] = obj[v]["b1"];
        obj[v]["b1"] = i;

        // 그 장르중 베스트2 노래 (기존값보다 크거나 기존값이 존재하지 않을 경우)
        // 3.장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
        // forEach문이 i=0부터 탐색하므로 고유번호가 낮은 노래가 먼저 자리를 잡고
        // 값이 같을경우 자리를 뺏을수 없음
      } else if (plays[i] > plays[obj[v]["b2"]] || obj[v]["b2"] == undefined) {
        obj[v]["b2"] = i;
      }
    } else {
      obj[v] = { gP: plays[i], b1: i, b2: undefined };
    }
  });
  console.log(obj);

  let keys = Object.keys(obj);
  // 재생횟수 기준으로 장르 내림차순 정렬
  keys.sort((a, b) => obj[b]["gP"] - obj[a]["gP"]);

  keys.forEach((v, i) => {
    answer.push(obj[v]["b1"]);
    if (obj[v]["b2"] || obj[v]["b2"] == 0) {
      answer.push(obj[v]["b2"]);
    }
  });
  answer.push();

  console.log(answer);
  return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);
