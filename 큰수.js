function solution(number, k) {
  let arr = number.split("");

  let i = 0;
  let nine = -1;
  while (k > 0) {
    if (!arr[i + 1]) {
      arr.splice(i - k + 1, k);
      k = 0;
    } else if (+arr[i] < +arr[i + 1]) {
      arr.splice(i, 1);
      k--;
      i = 0;
    } else {
      i++;
    }
  }

  return arr.join("");
}
