// 기본 스위치(switch) 문
const fruit = "banana";
// const fruitNum = 0; const는 변수값 변경이 안됨.
let fruitNum = 0;

switch (fruit) {
  case "banana":
    console.log("맛있는 바나나");
    fruitNum = 1;
    break;
  case "apple":
    console.log("맛있는 사과");
    fruitNum = 2;
    break;
  case "grape":
    console.log("맛있는 포도");
    fruitNum = 3;
    break;
  default:
    console.log("스위치 문에 없는 과일입니다.");
    break;
}
// //if문과 동일
// if(word === '바나나'){
// }else if(word === '사과'){
// }

//prompt 활용, toLowerCase를 사용해 소문자로 변환
const inputFruit = prompt("좋아하는 과일을 입력해 주세요.");
const convertedValue = inputFruit.toLowerCase(); //입력받은 텍스트를 무조건 소문자로 만들어주는 함수
let fruitNum = 0;

switch (convertedValue) {
  case "banana":
    console.log("맛있는 바나나");
    fruitNum = 1;
    break;
  case "apple":
    console.log("맛있는 사과");
    fruitNum = 2;
    break;
  case "grape":
    console.log("맛있는 포도");
    fruitNum = 3;
    break;
  default:
    console.log("스위치 문에 없는 과일입니다.");
    break;
}
