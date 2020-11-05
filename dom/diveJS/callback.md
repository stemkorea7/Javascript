2.고차함수, 콜백(Callbacks, Higher Order Functions)

const videos = [ 'javascript', 'react.js', 'redux']

videos.push('node.js');
명령어 forEach함수와 push함수를 비교했을때
push함수의 경우 괄호안에 인자값을 넣어 사용하는데

videos.forEach(function(video) 
 console.log(video);
}
forEach의 경우 고차함수를 사용한다.
여기서 고차함수란 forEach함수의 매개변수값을 또다른 함수로 넣는것이다.

예를 들어,
function repeat(fn) {
fn();
fn();
fn();
}

function hi() {
   console.log('hi');
}
이렇게 두개의 함수를 메모리에 저장한뒤,

repeat(hi)
리핏함수의 인자값을 다른 함수로 넣어주면서 리핏의 매개변수는 함수를 전달받아서 3번 찍어준다.
확인해보자. 보면 hi가 3번 찍힌것을 확인할 수 있다.
이게 바로 고차함수다.

그런데 같은 고차함수 forEach함수와 생긴게 다르다. 우리가 만든 함수는 이름이 있지만 forEach의 경우 이름이 없다.
똑같이 만들어보자
repeat(function() {
 console.log('hi')
})
이렇게 인자값에 이름을 제외하고 함수만 넣어도 똑같이 작동하는것을 알수있다.
보면 기능은다르지만 forEach함수와 굉장히 비슷한점을 찾아낼 수 있다.
이것이 바로 고차함수이다.

videos.froEach(function(video) {
console.log('hi')
console.log(video);
});
forEach가 루프를 돌면서 매번 forEach내에 있는 함수를 호출한다. 이것이 콜백함수이다.

또 다른방식 콜백함수는 이벤트 리스너이다.
button.addEventlistener('click', function() {
});
의 경우 함수가 바로 실행되는것이 아니라
클릭을 할때까지 기다렸다가 클릭 시 함수가 실행된다.


정리를 하자면 고차함수는 함수내의 매개변수가 함수일 경우 고차함수라고 하고, 
콜백함수의 경우 forEach가 루프를 돌면서 매번 forEach안의 함수를 부르는것을 콜백함수라고 한다.

