function solution(brown, yellow) {
  var answer = [];
  let halfBrown = (brown - 4) / 2;

  for (let i = 0; i < halfBrown; i++) {
    let centerSquare = (halfBrown - i) * i;

    if (centerSquare == yellow) {
      answer.push(halfBrown - i + 2);
      answer.push(i + 2);
      console.log(answer);
      return answer;
    }
  }
}

solution(10, 2);
