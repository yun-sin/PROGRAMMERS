let max = new Map();

// set으로 맵 객체에 삽입
max.set("id", 0);
max.set("이름", "마이클");
max.set("전공", "영문학");
max.set("나이", 25);
max.set("1", 123);

console.log(max);

max.forEach((v, i) => {
  console.log(v);
  console.log(i);
});

let a = 1;
let b = 1;

if ((a, b > 0)) {
  console.log("참");
} else {
  console.log("거짓");
}
