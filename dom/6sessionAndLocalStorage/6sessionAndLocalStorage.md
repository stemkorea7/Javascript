세션과 로컬 스토리지는 웹브라우저
로컬스토리지
localStorage.setItem("key" , "value"); 로컬스토리지의 키와 벨류값은 항상 문자열로 출력된다.
localStorage.setItem("name" , "George"); 작성 후 스토리지 확인 (새로고침을 해도 키와 값이 사라지지 않는다.)

세션스토리지
sesstionStorage.setItem("age" , "23"); 작성 후 세션 확인
브라우저를 껏다 다시 켜면 로컬은 남아있지만 세션은 사라진다는 차이점이 있다.

로컬스토리지 삭제 명령어
localStorage.clear();


localStorage.setItem("name" , "George"); 
localStorage.setItem("todo" , "티비보기"); 이런식으로 추가할 수 있음
localStorage.setItem("todo" , "아무것도 안하기"); 똑같은 키가 있을 경우 값이 업데이트 됨.

이렇게 저장된 로컬스토리지 정보를 활용하는 방법은
const user = localStorage.getItem("name"); 셋에서 겟만 바꾸면됨채 원하는 정보의 키값을 지정
console.log(user); 키에 해당되는 값이 출력

배열로 값을 넣어보자!
const todoList = ["티비보기", "아무것도 안하기", "잠자기", "놀기", "먹기"]
localStorage.setItem("todo", todoList); 확인해 보면 값들만 문자열로 나오는것을 알 수 있음

const getTodo = localStorage.getItem("todo");
console.log(getTodo); 확인해 보면 여전히 문자열로 나옴

문자열을 배열로 바꾸기
localStorage.setItem("todo", JSON.stringify(todoList)); 
JSON.stringify(todoList)로 감싸줌 JSON.stringify ()는 JavaScript 객체를 가져온 다음 JSON 문자열로 변환하는 문법인데 기본데이터의 구조는 남기고 문자열로 출력해줌.  
확인을 해보면 배열의 구조는 확인할 수 있지만 배열의 값들이 여전히 문자열로 출력되는것을 볼 수 있음 

const getTodo = JSON.parse(localStorage.getItem("todo")); 여기서 JSON.parse ()는 JSON 문자열을 가져 와서 JavaScript 객체로 변환합니다. 

todoList 값을 { todo1: "티비보기", todo2:"아무것도 안하기"} 로 넣으면 객체의 값들을 얻을 수 있음

