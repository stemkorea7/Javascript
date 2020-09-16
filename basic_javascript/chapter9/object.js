// 기존 변수 선언
const name = "George";
const age = 24;
const married = false;

// 객체 선언
const user = {
  name: "George",
  age: 24,
  married: false,
  greet: function () {
    console.log("hello object!");
  },
};

//프로퍼티와 메소드 접근 방법
console.log(user.age);
user.greet();

//자바스크립트 내 함수와 비슷하게 생김.
//console의 경우 자바스크립트에서 자동으로 만들어줌
console.log();
user.greet();
Math.random();
