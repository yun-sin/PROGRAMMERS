function solution(id_list, report, k) {
  let obj = {};
  id_list.forEach((v, i) => {
    obj[v] = 0;
  });

  console.group(obj);

  // 중복 신고 제거
  let arr = new Set(report);

  let R = {};
  arr.forEach((v, i) => {
    let tmp = v.split(" ");
    if (R[tmp[1]]) {
      R[tmp[1]]["count"] += 1;
      R[tmp[1]]["reporter"].push(tmp[0]);
    } else {
      R[tmp[1]] = { count: 1, reporter: [tmp[0]] };
    }
  });

  console.log(R);

  for (let key in R) {
    if (R[key]["count"] >= k) {
      R[key]["reporter"].forEach((v, i) => {
        obj[v]++;
      });
    }
  }
  var answer = Object.values(obj);
  console.log(answer);
  console.log("\n");
  console.groupEnd();

  return answer;
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2);
solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
//   {
//   frodo: { count: 2, reporter: [ 'muzi', 'apeach' ] },
//   neo: { count: 2, reporter: [ 'frodo', 'muzi' ] },
//   muzi: { count: 1, reporter: [ 'apeach' ] }
// }
