some Every

썸과 에브리는 filter와 마찬가지로 리턴값에 조건을 줄 수 있는데요. 차이점은 반환값을 true나 false로 반환합니다.  

const everyRating = games.every(function (game) {
  return game.rating > 8;
});

console.log(everyRating);

확인해 보시면 false가 뜹니다. 그 이유는 rating 값중 하나라도 조건에 충족하지 못한다면 false를 반환합니다.
값을 모두 8보다 큰수로 수정해서 확인

const someRating = games.every(function (game) {
  return game.rating > 8;
});

console.log(someRating);

확인: rating의 값중 하나라도 조건을 충족시킨다면 true 반환
값을 모두 8보다 작은수로 수정 시 false 확인


삼항 연산자
삼항 연산자는 if문을 좀더 간결하게 사용하는 방법.

배열과 map 복사
const newVideo = videos.map(function (video) {
  if (video.length < 9) {
    return video;
  } else {
    return "비어있음";
  }
});

console.log(newVideo);

확인해 보면 배열값이 9보다 작으면 그대로 출력되고, 크다면 비어있음이 출력되는것을 알 수 있음

그럼 이 if문을 간결하게 만들어 보자.
const newVideo = videos.map(function (video) {
  return video.length < 9 ? video : "비어있음";
});

이렇게 한줄로 if문을 구현할 수 있다. 

다음으론 함수를 간결하게 사용할 수 있는 Arrow Functions에 대해 알아볼 예정
const hi = function () {
  console.log("hi");
};

hi();

api를 가져오는 함수를 만들거나 콜백함수를 만들땐 함수 이름이 따로 필요 없다.
그래서 우리는 이런식으로 익명함수를 선언했었는데요.
에로우 함수를 사용해 좀더 간결하게 함수를 만드어보자.


















