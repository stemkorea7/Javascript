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









