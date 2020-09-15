//비교연산자
console.log(5 == 5); //true
console.log(5 == 10); //false

console.log(5 != 10); //true
console.log(5 != 5); //false

console.log(5 > 10); //false
console.log(5 < 10); //true

console.log(5 >= 5); //true
console.log(5 >= 10); //false
console.log(5 <= 5); //true
console.log(5 <= 10); //true

console.log(10 == "10"); //true
console.log(10 === "10"); //false

//논리 연산자
const access = true;

if(access) {
  console.log('참 입니다.')
} else {
  console.log('거짓 입니다.')
}

// 성인인증 프로그램
const age = 20;
const account = 50000;
// if(age >= 18) {
//   console.log('성인 입니다.')
// } else {
//   console.log('청소년 입니다.')
// }

//&&(AND)
if (age >= 18 && account >= 20000) {
  console.log("성인인증과 계좌인증 모두 완료되었습니다.");
} else {
  console.log("청소년 혹은 계좌인증에 실패하였습니다.");
}

//||(OR)
if (age >= 18 || account >= 20000) {
  console.log("성인인증 또는 계좌인증이 완료되었습니다.");
} else {
  console.log("성인인증과 계좌인증 모두 실패하였습니다.");
}

//여러 조건주기: 조건 기준은 첫 조건부터 참인지 거짓인지 판단
if (age >= 18) {
  console.log("성인 인증에 성공하였습니다.");
} else if (account >= 20000) {
  console.log("계좌인증에 성공하였습니다.");
} else {
  console.log("계좌나 성인인증에 실패하였습니다.");
}

//항상 거짓값 = fase, 0, "", null, undefined, NaN
let age = 0;

if (age) {
  console.log("참");
} else {
  console.log("거짓");
}
