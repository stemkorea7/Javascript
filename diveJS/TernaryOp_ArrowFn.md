삼항 연산자(Ternary Operator)
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


에로우 함수(Arrow Function)
다음으론 함수를 간결하게 사용할 수 있는 Arrow Functions에 대해 알아볼 예정

const hi1 = function () {
  console.log("hi1");
};
hi1();
익명함수를 사용할땐 이런식으로 코드를 작성해야 함. 
하지만

const hiTest = () => console.log("hi2");
hiTest();
에로우 함수를 쓰면 이런식으로 줄일 수 있음.
에로우 함수는 익명함수를 쓰는 api를 가져오는 함수나 콜백함수 또는 이벤트 리스너 함수를
만들때 코드를 훨씬 간결하게 만들 수 있기 때문에 많이 사용한다.
그럼 기존에 썼던 map 메소드를 에로우 함수로 간결하게 만들어보자

기존코드를 복사 해주고,
const newVideo = videos.map(function (video) {
  return video;
});

const newVideo = videos.map(video => {
  return video.length < 9 ? video : "비어있음";
});
매개변수를 뺀 나머지를 모두 지워준다. 그리고 매개변수 뒤에 => 에로우 함수만 입력해 주면된다.
그리고 두개의 파라미터가 필요할땐 괄호안에 ,콤마로 구분

const newVideo = videos.map((video) => video.length < 9 ? video : "비어있음");
여기서 중괄호를 지워주면 에로우 뒤는 무조건 리턴해주기 때문에 return을 지워도 됌.
이렇게 에로우함수를 쓰면 좀 더 간결한 코드를 만들 수 있음.

const newVideo = videos.map((video) => video.toUpperCase());
그리고 기본적으로 모든값이 리턴되므로 이런식으로 쓸 수 있다.
