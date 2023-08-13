function solution(picks, minerals) {
  var answer = 0;

  let obj = {
    diamond: {
      D: 1,
      I: 5,
      S: 25,
    },
    iron: {
      D: 1,
      I: 1,
      S: 5,
    },
    stone: {
      D: 1,
      I: 1,
      S: 1,
    },
  };

  const mineralsCount = minerals.length;
  const picksUse = Math.ceil(mineralsCount / 5);
  const picksHave = picks.reduce((a, b) => a + b);

  if (picksHave == 0) {
    return 0;
  }

  let D = 0;
  let I = 0;
  let S = 0;

  if (picksHave > picksUse) {
    if (picksUse - picks[0] <= 0) {
      D = picksUse;
    } else if (picksUse - picks[0] - picks[1] <= 0) {
      D = picks[0];
      I = picksUse - picks[0];
    } else if (picksUse - picks[0] - picks[1] - picks[2] <= 0) {
      D = picks[0];
      I = picks[1];
      S = picksUse - picks[0] - picks[1];
    }
  } else {
    D = picks[0];
    I = picks[1];
    S = picks[2];
  }

  let arr = [];

  for (let i = 0; i < D; i++) arr.push("D");
  for (let i = 0; i < I; i++) arr.push("I");
  for (let i = 0; i < S; i++) arr.push("S");

  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [fixed, ...permutation]);

      results.push(...attached);
    });

    return results;
  };

  function removeDup(arr) {
    return [...new Set(arr.join("|").split("|"))].map((v) => v.split(",")).map((v) => v.map((a) => a));
  }

  const result2 = getPermutations(arr, arr.length);

  let res = removeDup(result2);

  let arr2 = [];

  result.forEach((v2, i2) => {
    let count = 0;

    for (let i = 0; i < minerals.length; i++) {
      let usingPick = v2[Math.floor(i / 5)];

      if (+obj[minerals[i]][usingPick] > 0) {
        count += +obj[minerals[i]][usingPick];
      }
    }

    arr2.push(count);
  });

  return Math.min(...arr2);
}

solution([1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]);
solution([0, 1, 1], ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]);
