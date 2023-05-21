function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;

  let min = 0;
  if (numer == denom) {
    answer = [1, 1];
  } else if (numer < denom) {
    min = numer;
  } else if (numer > denom) {
    min = denom;
  }

  if (min) {
    for (let i = min; i >= 1; i--) {
      if (numer % i == 0 && denom % i == 0) {
        answer.push(numer / i);
        answer.push(denom / i);
        break;
      }
    }
  }

  console.log(answer);

  return answer;
}

solution(1, 2, 3, 4);
solution(9, 2, 1, 3);
