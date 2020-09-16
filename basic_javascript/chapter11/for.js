// for 반복문
for (let i = 0; i < 100; i++) {
  console.log(i); // 0~99까지 출력
}

// 50번째 숫자 도출
for (let i = 0; i < 100; i++) {
  if (i === 50) {
    console.log("50번째 입니다!"); //50번째 출력
    continue; //50번째 숫자를 스킵. 스킵이 안되는 이유는 console.log(i)가 먼저 찍히기 때문
  }
  //   if (i === 50) {
  //     console.log("50번째 입니다!"); //50번째 출력
  //     break; //50번째 까지만 출력
  //   }

  console.log(i); // 0~99까지 출력
}

// 배열을 활용한 반복문
const texts = ["banana", "strawberry", "apple", "grape"];

for (let i = 0; i < texts.length; i++) {
  console.log(i); //배열의 순번을 나열
  console.log(texts[i]); //texts 변수의 0~3까지의 값을 나열
}

const text = "banana";

for (let i = 0; i < text.length; i++) {
  console.log(i); //banana는 6글자이므로 0~5출력
}

//for of
const texts = ["banana", "strawberry", "apple", "grape"];

for (let i of texts) {
  console.log(i); // texts 배열의 값들을 나열
  console.log(texts.indexOf(i)); //indexOf함수를 통해 순번을 나열
}

//forEach
const texts = ["banana", "strawberry", "apple", "grape"];

texts.forEach(function (fruit, index) {
  console.log(fruit, index);
});

//for of + 조건
const texts = ["banana", "strawberry", "apple", "grape"];

for (name of texts) {
  if (name === "apple") {
    console.log("it is apple!");
    break;
  }
  console.log(name);
}

//forEach + 조건
const texts = ["banana", "strawberry", "apple", "grape"];

texts.forEach(function (name, index) {
  if (name === "apple") {
    console.log("it is apple");
    break;
  }
});

//for in
const user = {
  name: "George",
  age: 28,
  married: false,
  account: 35000,
};

for (let x in user) {
  console.log(x); //user의 키값
  console.log(user[x]); //user의 벨류값 출력
}
