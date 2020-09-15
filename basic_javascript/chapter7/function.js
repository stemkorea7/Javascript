//기본 함수 만들기
function greet() {
  //Prompt는 자바스크립트 내장 함수로 팝업형태의 입력을 할 수 있다.
  let name = prompt("성함을 입력해주세요.");
  console.log(`${name}님, 환영합니다!`);
}

console.log("함수실행 전 테스트");
//함수 호출 방법. 함수를 호출을 하면 메모리에 저장되있던 함수를 호출.
greet();

//기본 함수 속 함수
//함수이므로 메모리에 저장
// let name = prompt("성함을 입력해주세요.");
function greet() {
  console.log(`${name}님! 환영합니다!`);
}
//출력 테스트
console.log("함수실행 전 테스트");

function signUp() {
  let name = prompt("성함을 입력해주세요.");
  greet(); //함수 호출
} // 메모리 저장

signUp(); //함수 호출
// name 변수가 전역변수가 아닌 함수내에 호출됐기 때문에 greet함수에 도달할 수 없다.

// 매개변수(Parameters)
// 그래서 우린 매개변수와 인자값을 통해 변수를 전달. 여러개의 인자도 전달가능.
function greet(text, age) {
  console.log(`${text}님! 환영합니다!`);
  console.log(age);
}

console.log("함수실행 전 테스트");

function signUp() {
  //   let name = prompt("성함을 입력해주세요.");
  greet("아무단어", 25);
}

signUp();

//반환값
//인자값 중 큰 수를 반환
const maxFn = Math.max(5, 10);
//반환값을 가지고 있다.
console.log(maxFn);

const cons = console.log(5);
//undefined로 반환값이 없다.
console.log(cons);

//Math.max() 함수 만들기
function maxFn(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let maxFx = maxFn(5, 10);
console.log(maxFx);

//return값 연산
function maxFn(num1, num2) {
  if (num1 > num2) {
    return num1 * 5;
  } else {
    return num2 * 10;
  }
}

let maxFx = maxFn(5, 10);
console.log(maxFx);

//매개변수가 0, 인자값이 ()없을때 return값 0
function maxFn(num1 = 0, num2 = 0) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let maxFx = maxFn(5);
console.log(maxFx);

//매개변수가 0, 인자값 한개만 넣어준다면 그대로 return
function maxFn(num1 = 0, num2 = 0) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let maxFx = maxFn(5);
console.log(maxFx);

//매개변수가 0, 인자값을 모두 넣어준다면 정상적으로 return
function maxFn(num1 = 0, num2 = 0) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let maxFx = maxFn(5, 30);
console.log(maxFx);

매개변수와 인자값은 개수는 동일해야함

//라면 제조 함수
const water = 1;
const spicyPowder = 2;
const blackPowder = 3;
const kelp = 4;
const paste = 5;

const sinRamen = 8;
const jjapageti = 9;
const nuguri = 10;

function makeRamen(soup1, soup2, soup3) {
  const result = soup1 + soup2 + soup3;

  if (result === sinRamen) {
    console.log("신라면이 완성되었습니다.");
  } else if (result === jjapageti) {
    console.log("짜빠게티가 완성되었습니다.");
  } else if (result === nuguri) {
    console.log("너구리가 완성 되었습니다.");
  } else {
    console.log("레시피에 없는 라면입니다.");
  }
}

makeRamen(water, spicyPowder, paste);
