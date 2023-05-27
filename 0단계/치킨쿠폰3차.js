function solution(chicken) {
  let answer = 0;

  let service = 0;
  let coupon = chicken; // 남은 쿠폰 카운트

  while (coupon >= 10) {
    service = parseInt(coupon / 10);
    answer += service;

    coupon %= 10;
    coupon += service;
  }

  console.log(answer);
  return answer;
}

solution(100);
solution(1081);
