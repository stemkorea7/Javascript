Map

지난시간에 배웠던 forEach는 기본적으로 루프의 기능을 갖고있는 고차함수 메소드였다
이번에 배울 map은 forEach와 비슷하지만 복사의 기능을 갖고 있다.

맵은 forEach와 생김새가 비슷하지만
videos.map(function(video) {
});
가장큰 차이점은
const newVideo = videos.map(function(video) {
   return video
});
map으로 복사한 배열의 값을 반환값으로 받을 수 있고, 변수에 그값을 저장할 수 있다.
console.log(newVideo) 로 확인해 보자. 복사가 된것을 확인 할 수 있다.

const newVideo = videos.map(function(video) {
    console.log(video)
});
리턴값을 한번 지워보자. undefinded값이 나올 것이다. map은 항상 반환값을 가져야한다.

return video 다시 리턴값으로 수정

newVideo.push("newVideo");
console.log(videos);
새로운 배열값을 넣어보자. 그리고 원본값과 맵으로 복사한 값을 비교해보자
원본값을 그대로, 복사한값만 수정된 것을 알 수 있다.
이런식으로 지난시간에 복사했을때 원본이 같이 수정되는 문제를 해결할 수 있다. 
이 map은 상당히 많이 사용되기 때문에 잘기억해 둬야한다.

Find
find는 특정 문자가 포함된 배열값을 가져오는 기능이다.

사용법은 
const searchVideo = video.find(function(video){
  return video.include('js');
  });

console.log(searchVideo)

확인해 보면 하나의 값이 반환된것을 확인 할 수 있다. 
그럼 find 원리에 대해 설명해보겠다.
배열값을 하나하나 체크하는데 그안에 js라는 문자가 하나라도 있으면 true로 그하나의 값을 반환
없으면 false로 다음 배열값을 체크한다. 배열값에 js라는 문자가 두개 있더라도 하나만 반환한다.

Filter
필터는 반환값에 조건을 줘서 배열값이 길거나 짧은것들을 찾아 반환해준다.

const shortName = videos.filter(function(video) {
   return video.length < 7;
   });
 
 console.log(shortName)
확인해 보면 배열값을 길이가 7보다 작은 값들이 반환되는것을 볼 수 있다.

그럼 다른 배열의 객체를 하나 만들어서 원하는 요소만 가져와보자
const games = [
  { title: "javascript", rating: 9.5},
  { title: "react.js", rating: 5},
  { title: "redux", rating: 6},
  { title: "redux2", rating: 10},
  { title: "redux3", rating: 3},
]
이렇게 제목별로 평점이 있는 배열의 객체를 만들고,
const highRating = game.filter(function(game) {
  console.log(game);
  });
  확인해보자. 모든객체들이 출력되는 것을 볼 수 있다.

그리고,
  return game.rating > 9 라고 하고
  
 console.log(highRating)
 출력해보자.
 
 확인해보면 평점이 9이상인 배열값들만 출력되는 것을 확인할 수 있다.
