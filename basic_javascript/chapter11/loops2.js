//while 문
let i = 10;
while (i < 20) {
  console.log(i);
  i++; // 2. 숫자를 증가시켜주면서 30보다 작은 수까지만 출력!
  //   i += 5; //3. 5씩 더해주므로 20과 25만 출력!
} // 1. 조건이 항상 true이기 때문에 무한 루프

//Do While 문
let i = 0;

do {
  console.log(i);
  i++;
} while (i > 10); //10까지 증가하면서 출력 만약 조건이 false일땐 최초 값 0만 출력

//간단예제
while (true) {
  let i = Math.floor(Math.random() * 11);
  console.log(i);
  if (i === 10) {
    console.log("10을 찾았다!!");
    break;
  }
} // 1. 조건이 항상 true이기 때문에 무한 루프
