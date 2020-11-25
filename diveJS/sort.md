정렬(sort...weird)
이번엔 배열값들을 정렬할 수 있는 메소드를 사용해 볼 예정

사용법은
const items = ["d", "a", "b", "c"];
const ratings = [9, 1, 3, 4, 2, 5, 7];

items.sort();
console.log(items);
확인해 보면 a부터 d까지 문자열순으로 정리된 것을 볼 수 있다.

rating.sort();
console.log(ratings);
하지만 이렇게 숫자를 정렬하려고 하면 정렬이 안된다.

rating.sort((a,b) => a - b;);
함수를 이용해서 해결해 보겠다. 보는것과 같이 정렬이 되었다.
정렬 원리는 맨처음 숫자 9를 a라고 하고 두번째 숫자 1을 b라고 했을때
a-b를해서 리턴값이 양수면 a와 b의 자리를 바꿔주고 음수면 그대로 두는 원리다.
9 1 3 4 2 5 7에서
9를 a
1을 b 라고 했을때
9-1은 양수이므로 a와b의 자리를 바꿔준다.
그럼 
1 9 3 4 2 5 7이 된다.
그리고 
1 9를  뺐을때 리턴값이 음수이므로 그대로 둔다.
다음 숫자인 9와 3을 뺏을때 리턴값이 양수이므로 또 자리가 바뀐다.
1 3 9 4 2 5 7
이런원리로 숫자를 소팅한다.
반대로 내림차순으로 정렬을 하고 싶다면,
리턴값을 b - a로 바꿔주면 된다.

const sorting = ratings.sort((a, b) => a - b);

console.log(sorting);
여기서 주의할 점은 이렇게 소팅을 하면 기본 배열을 참조해서 소팅해주는 것이기 때문에
원본값이 변한다. 그렇기 때문에 map을 활용해 복사한 다음 소팅하는 것을 추천한다.

그럼 좀더 복잡한 games의 배열 rating을 정렬해보자
기존에 만들었던 객체를 복사하고 
games.sort((a, b) => a.rating - b.rating);

console.log(games);
이렇게 첫번째 a객체의 rating에 접근해 b객체의 rating을 빼준다음 양음수를 구분해
정렬해 줄 수 있다.

games.sort((a, b) => b.rating -  a.rating);
마찬가지로 b에서 a를 빼주면 내림차순이 된다.
