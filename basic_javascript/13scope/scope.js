//글로벌 범위
let fruit = 5;
var fruitNum = 10;

// 함수 범위의 경우 프라이빗 공간이라 같은 변수라도 선언이 가능
function store() {
  //함수 범위
  let fruit = 25;
  var fruitNum = 15;
  console.log("fruit:", fruit);
  console.log("fruitNum:", fruitNum);
}

store();

//블럭 범위 경우 let은 변화 없음, var는 변경
//for문 테스트
for (let fruit = 0; fruitNum < 10; fruitNum++) {
  console.log(fruitNum);
}
for (var fruitNum = 0; fruitNum < 15; fruitNum++) {
  console.log(fruitNum);
}
//if문 테스트
if (true) {
  let fruit = "kiwi"; //let같은 경우 변하지않았지만
  var fruitNum = 25; // var는 변경
}
console.log("global " + fruit, fruitNum);
