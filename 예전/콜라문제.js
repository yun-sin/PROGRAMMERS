function solution(a, b, n) {
  // console.group(n);
  let count = 0;
  let left = 0;

  while (n + left > a) {
    count += b * parseInt(n / a);
    left += n % a;
    n = b * parseInt(n / a);

    if (n < a) {
      left += n;
      n = 0;
    }

    if (left >= a) {
      let tmp = b * parseInt(left / a);
      count += tmp;
      left -= tmp;
    }
  }

  console.log(count);
  console.groupEnd();
  return count;
}

solution(2, 1, 20);
solution(3, 1, 20);
solution(4, 1, 20);
