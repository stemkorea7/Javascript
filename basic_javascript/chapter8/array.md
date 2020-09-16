## 배열(Array)  
> 배열은 변수선언을 최소화하기 위해 값들을 인덱스별로 정리해 둔 것이다.  

* 사용법: const userList = [...]  
       []대괄호에 값을 입력해서 사용한다. 구분은 ,(콤마)로 하며 첫번째 값을 0으로 지정.  
* 지정 인덱스 값 호출  
  * userList[0]  
* 마지막 인덱스 값 삭제 pop  
  * userList.pop();  
* 맨 처음 인덱스 값 삭제 shift  
  * userList.shift();  
* 맨 처음 인덱스 값 생성 unshift  
  * userList.unshift('생성 값 입력');  
* 배열의 길이 확인 .length  
  * console.log(userList.length)   
* 값의 인덱스 호출 indexOf  
  * console.log(indexOf('값 입력'));
