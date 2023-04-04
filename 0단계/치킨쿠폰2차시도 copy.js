function solution(chicken) {
  let service = 0;
  let coupon = 0; // 남은 쿠폰 카운트

  while (chicken >= 10) {
    service += parseInt(chicken / 10);
    console.log("서비스 : " + parseInt(chicken / 10));

    coupon += chicken % 10;
    console.log("남은 쿠폰 : " + coupon);

    chicken = parseInt(chicken / 10);
  }

  console.log("최종 남은 쿠폰: " + coupon);

  service += parseInt((chicken + coupon) / 10);

  console.log(service);
  return service;
}

solution(100);
solution(1081);
