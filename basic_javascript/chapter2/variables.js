//명령어 이름 = 값; 순서로 작성
let age = 23;
//문자 선언 가능
let name = "Geroge";
//변수 출력 및 연산
alert(age);
alert(age + 1);

//변수끼리 연산
let age1 = 34;
let age2 = 25;
let sumAge = age1 + age2;
alert(sumAge);

//변수값 변경
let age = 20;
// //age 변경 확인
// alert(age);
age = 30;
alert(age);

//변수를 선언하지 않을 시 undefined or 에러
let age;
console.log(age);
const ageCon;
console.log(ageCon)

//const는 let과 다르게 값 변경 불가
const age = 20;
age = 30;
console.log(age);

// 변수 선언시 오류가 나는경우
let 1age = 20;
let let = 20;
let const = 20;

//CamelCase(낙타형)
let myAge = 20;
