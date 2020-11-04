1.Primitives VS Reference Type
이미지로 소개 원시타입과 레퍼런스 타입

이번시간에는 자바스크립트 데이터타입에 대해 정리해서 비교해 볼건데요.
자바스크립트에서는 보시는것 처럼 데이터 타입의 종류는 원시타입과 참조타입 두가지로 분류됩니다
원시타입으로는 예전에 배웠던 것처럼 숫자형, 문자형, 불린형, null, nudefind 등이 있고,
배열이나 함수, 객체가 참조타입인데요. 이두가지 타입엔 큰차이점이 있어요.
한번 확인해 볼게요. 

원시타입 선언은 
const name = 'George';
name = 'bob'
const로 선언한 변수는 값을 수정할 수 없다.

const names = ['George', 'bob', 'test', 'test1']
names[1] = 'change name';
console.log(names);
레퍼런스 타입의 경우 값을 수정할 수 있다.

names.push('push name')
뿐만아니라 값을 추가할 수도있다.

names=[];
하지만 전체 배열을 수정하려고 하면 에러가 난다.
원시타입과 참조타입의 차이점.

다음으론
let account = 250;
let bank = account;

bank = 500
console.log(account, bank)
이렇게 했을때 account가 수정되는지 확인해보자.
확인해보면 원본값은 수정이 안되고 원본을 복사한 값만 수정됐다.

console.log를 값이 수정되기전에 찍어보자
예상했던 것처럼 250, 250이 뜬다

이번엔, 객체와 배열을 확인해보자
//객체와 배열
const names = ['George', 'bob', 'test', 'test1']
만 남기고 삭제

const newNames = names;
console.log(newNames);
를 찍어보면 names가 그대로 복사된것을 확인

newNames.push('push name');
console.log(newNames)
으로 복사한 newNames의 값을 수정해보자 확인

console.log(names)
그리고, names원본을 확인해보면 원본까지 수전되었을을 알 수 있다.

정리를 하자면,
let account = 250;
let bank = 250;

bank = 500
console.log(account, bank)
의 경우 bank를 수정하면 bank값만 바뀌고 account는 값이 그대로 남아있다.

하지만, 
const names = ['George', 'bob', 'test', 'test1']
const newNames = names;

newNames.push('push name');

console.log(newNames)
console.log(names)
의 경우 names의 원본값까지 수정된 것을 알 수있다.


그럼 이번엔 레퍼런스타입인 객체도 확인해보자

const user = {
name: 'George',
age: 28,
};

const newUser = user;

newUser.age = 100;

console.log(user.age)
이렇게 찍어보면 age값이 바뀐것을 확인할 수 있다.

그래서 배열이나 객체의 경우 원본이 같이 수정되는 문제가 발생하니 사용시 주의해야한다.
이문제를 해결하는 방법은 다음 시간에 알려주겠다.

