function solution(chicken) {
  var answer = 0;
  let coupon = 0;

  while (chicken >= 10) {
    answer += parseInt(chicken / 10);
    // console.log("서비스: " + answer);

    coupon += chicken % 10;
    // console.log("쿠폰: " + coupon);

    if (coupon >= 10) {
      answer += parseInt(coupon / 10);
      coupon %= 10;
    }

    chicken = parseInt(chicken / 10);
    // console.log("치킨: " + chicken);
  }

  // if (coupon + chicken >= 10) {
  //   answer++;
  // }

  // console.log(chicken);
  // console.log(coupon);
  console.log(answer);
  return answer;
}

solution(100);
solution(1081);
