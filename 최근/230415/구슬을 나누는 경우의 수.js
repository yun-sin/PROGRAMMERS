function solution(balls, share) {
  let factorial = (n) => {
    let fac = BigInt(1);
    for (i = 1; i <= n; i++) {
      fac *= BigInt(i);
    }
    return fac;
  };

  console.log(factorial(2));

  let answer = factorial(balls) / (factorial(balls - share) * factorial(share));

  return answer;
}

solution(3, 2);
solution(5, 3);
