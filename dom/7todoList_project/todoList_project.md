새로운 vscode 창 띄우기  
index.html & app.js & style.css 파일 생성

.html
title변경
구글폰트 접속, Lora 폰트 검색 후 선택 링크복사 (구글이 무료로 제공하는 폰트를 사용가능)
cdnjs font awesome 검색 후 asset Type에서 스타일링 선택 후 첫번째 링크 복사 
(font awsome은 무료로 아이콘을 만들수 있다. 사용법은 헤더에 링크를 걸고
font awsome 접속해보면 icons라는 메뉴를 클릭해보면 사용할 수 있는 아이콘들이 뜨는데 
아무 아이콘을 클릭하고 start using font awesome 을 클릭해보면 클래스 이름을 제공한다.
style.css 링크
app.js 링크

<header> <h1> Todo List </h1> </header>
form > 
input .input
button .todo-button >
i .fas fa-plus-square

div .todo-container >
ul .todo-list > 이안에 자바스크립트 코드를 활용해서 li태그와 삭제 버튼과 체크버튼을 생성할 예정
div .todo >
li태그
삭제와 체크 버튼

day2
스타일링 
전체범위에 해당
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url("https://images.pexels.com/photos/247421/pexels-photo-247421.jpeg?cs=srgb&dl=pexels-pixabay-247421.jpg&fm=jpg");
  color: #ffffff;
  font-family: "Lora";
  /* min-height: 100vh; */
}

header {
  font-size: 1.5rem;
}

header,
form {
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form input,
form button {
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  background-color: white;
}

form button {
  color: teal;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

form button:hover {
  background: teal;
  color: white;
}

day3
이번엔 셀렉터와 이벤트 리스너 함수를 차례대로 만들어 볼 예정
//셀렉터
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//이벤트 리스너
todoButton.addEventListener("click", addTodo);

//함수
function addTodo(e) {
  e.preventDefault();
  console.log("hello"); 접근을 확인하기 위해 콘솔
}

그리고 우리는 투두리스트 생성 버튼을 눌렀을때 아래와 같은 코드들이 여러개 생성될 수 있도록
    <div class="todo-container">
        <ul class="todo-list">
            <li></li>
            <button></button>
        </ul>
    </div>

//함수
function addTodo(e) {
  e.preventDefault();
  console.log("hello");
//div 생성
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
 //li 태그 생성
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = "test";
  todoDiv.appendChild(newTodo);
  //체크버튼
  const checkButton = document.createElement("button");
  checkButton.classList.add("check-btn");
  checkButton.innerHTML = '<i class="fas fa-check"> </i>';
  todoDiv.appendChild(checkButton);
 

여기서 체크버튼은 font awesome에 있는 아이콘을 사용할 예정인데
 innerText 명령어는 값을 문자열로 인식하기 때문에 아이태그를 생성할 수 없다.
이럴땐 innerText 대신 innerHTML을 사용한다.

삭제버튼은 체크버튼을 그대로 복사해서 이름만 조금 수정한다.
 //삭제버튼
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerHTML = '<i class="fas fa-trash"> </i>';
  todoDiv.appendChild(deleteButton);

마지막으로 여태까지 생성했던 모든 내용들을 ul태그인 todoList에 todoDiv를 추가한다.
여기까지 완료하면 추가하기 버튼을 누를때마다 아래와같이 ul태그안에 html 코드가 생성되는 것이다.
  <div class="todoDiv">
                <li class="todo-item">
                </li>
                <button class="check-btn"><i class="fas fa-check"></i></button>
                <button class="delete-btn"><i class="fasfa-trash"></i></button>
            </div>

그리고 확인해 보면 추가할때마다 정리가 안된 버튼이 생성되는것을 볼 수 있다. 다음시간에는
이내용들을 꾸미도록 하겠다.

day4
