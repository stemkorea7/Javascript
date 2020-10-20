이벤트 버블링 - 이벤트가 실행될때 부모뿐만아니라 조상까지 영향을 미치는 현상을 이벤트 버블링
(예를 들어 li태그는 ul태그가 감싸고 있고 ul 태그는 body태그가 감싸고 있는데 li태그를 클릭했을때
그 이벤트가 ul나 body까지 영향을 미치는것) 그림설명

intro
그림을 보시면 바디안에 ul태그를 만들고 ul태그안에 li태그가 있다고 했을때, li태그에
클릭 이벤트를 걸었다고 가정해볼게요. 그리고 li태그를 클릭하면 li태그 뿐만아니라 li태그를
감싸고 있는 부모ul태그도 클릭되고 그 부모의 부모태그인 바디태그 부모의 조상태그까지 이벤트가
영향을 미치는데요.
우리는 실습을 통해서 이문제를 해결해 볼게요. 
이번에는 아이템을 클릭했을때 삭제하는 기능을 만들어 볼건데요.
색상 바뀌는 코드는 주석처리

.js
for (item of items){ items.addeventlistener('click', deleteItem) } 했을때 맨처음 두개의 아이템에만
적용이 되고 새로 생성되는 아이템에는 적용이 안됨.

그래서 생성과 동시에 삭제 기능도 넣기위해 아이템 생성하는 함수안에 삭제 이벤트리스너를 넣어줌

deleteItem 함수{콘솔 삭제} 
첫번째 파라미터는 이벤트 정보를 확인할 수 있는 자리이다. 임의로 e라는 매개변수를 넣는다.
콘솔을 e로 넣고 확인했을때 어떤 엘리먼트를 클릭했는지 알 수 있다. target 확인
콘솔 e.target 으로 내가 누른 엘리먼트값을 가져올 수 있다.
e.target.remove() 를 쓰면 엘리먼트가 삭제됨

생성된 li태그를 클릭했을때 ul 태그까지 영향을 미치는지 확인하기 위해 
deleteItem에 콘솔로 체크
임의로 list.addeventlistener 생성 후 콘솔로 체크
ul영역과 li영역을 확인한 후 클릭 했을 시 문구가 어떻게 뜨는지 확인
버블링 해결방법은 delete함수에  e.stopPropergation()

이번엔 내가 원하는 글을 써넣어보자
.html 
form 태그안에 버튼 click을 submit으로 바꿔서 넣어준다.
input 태그 생성 type='text' class='input'

.js
input 셀렉터 .input
item 생성 함수안에 콘솔 input
확인해보면 html form 안에 버튼을 누르면 저절로 리프레쉬 됨 해결책: 생성 함수안에e.preventDefault();
값을 입력하고 input정보를 확인해 보면 값을 찾을 수 있고 명령어도 찾을 수 있다.
newItem.innerText 를 items.value롤 수정
값입력시 값이 남아있는데 없애는 방법은 아이템 생성 함수 코드밑에 input.value 를 ''; 빈공간으로 변경

