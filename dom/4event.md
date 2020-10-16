이벤트

이벤트는 웹사이트에서 버튼을 누르거나 어떠한 행위를 했을때 일어나는 상태를 말하는데요

events.js
button = querySele (#submit)

index.html 
button 생성 

//이벤트 리스너를 붙이기 (클릭, 스크롤, 리사이징)
button.addEventListener()
첫번째 값은 원하는 행위를 입력해주세요. 예를 들어 클릭을 했을때
콤마로 구분
함수를 넣어줍니다.
그럼 클릭 시, 함수가 실행
즉, submit이라는 아이디값을 가진 버튼을 클릭하면 이벤트가 실행되는데 
그 이벤트는 클릭 시 함수가 실행된다는 뜻.

함수 생성 / 콘솔로그(이벤트가 실행되었습니다.)

함수를 밖에다가 생성 /  콘솔로그(이벤트가 실행되었습니다.)

이벤트 리스너에 함수값을 넣을땐 ()를 뺀다. 괄호안에서 함수호출 문법을 쓰면 클릭하기도전에
실행이 되기 때문이다. 그래서 우리는 괄호를빼서 함수를 참조한다

자 그럼 클릭을 할때마다 아이템이 추가될 수 있도록 만들어 보자!
버튼 id 선택하기
ul태그 id 선택하기
함수안에 태그생성 4줄 입력

넘버를 세주기 위해 넘버 class 선택하기
그리고 아이템의 숫자를 세기위해 ul list의 children을 불러옴
넘버.innerText 사용해서 아이템 세주기
html에 넘버를 세주는곳에 아이템 넘버라고 적어준다.
하지만 넘버를 세주는 innerText를 보면 기존에 있던값을 모두 지우고 새로 생성되는 문제가 생기는데
문자 옆에 볼드태그를 만들어서 넘버를 세주는 셀렉터를 넘버에 있는 볼드로 선택해준다.

아이템역시 innerText 값을 넣을때 백틱을 활용해 아이템은 그대로 쓰고 뒤에 ${items.length + 1}
을 넣어줌



const button = document.querySelector("#submit");
const list = document.querySelector("#list");
const listItems = list.children;

const itemNum = document.querySelector(".listNum b");

button.addEventListener("click", function () {
  const newitem = document.createElement("li");
  newitem.classList.add("item");
  newitem.innerText = `item ${listItems.length + 1}`;
  list.appendChild(newitem);
  itemNum.innerText = listItems.length;
});

-------------------------------
클릭을 했을때 글자의 색상이나 크기가 변경되는 코드 생성해보자!!
h1 생성 클래스 title (아무 문구)
title 선택 셀렉터
이벤트 함수안에 



