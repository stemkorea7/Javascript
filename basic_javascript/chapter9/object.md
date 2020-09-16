## 객체  
> 여러개의 정보를 한곳에 담는 그릇이다. 정보를 담을때 방법은 2가지로 나뉠 수 있다.  
> 키(Key)와 값(value)을 갖고있는 프로퍼티(property)방식이 있고, 함수를 입력하는 메소드(Method)방식이 있다.  

* 사용법: const user = { ... }   
  * 객체선언은 변수선언과 똑같다. 다만 중괄호를 추가해 중괄호안에 프로퍼티(property)나 메소드(Method)를 담을 수 있다.      
* 프로퍼티(property)란? key와 value를 갖고 있는 객체내 요소이다.  
  * 사용법: name(key): "George"(value)   
           name(key): [...](value)    
* 메소드(Method)란? 객체내에 함수를 말한다.  
  * 사용법: getName(key): function(...) {...}
  
**프로퍼티(property)나 메소드(Method)를 추가할때는 ,(콤마)를 사용하고 프로퍼티와 메소드를 호출할 때는 .(점)을 활용한다.**  

* 자바스크립트 내장 객체와 닮은점
  * console.log();와 user.greet();는 같은 객체이지만 콘솔의 경우 자바스크립트에 내장되어있는 메소드(Method)이고, user,greet();의 경우 우리가 만든 (Method)이다. console같은 경우
  자바스크립트 엔진이 돌면서 저절로 실행된다.
  * window Document 확인
    * 콘솔창에 window를 쳐본다. 많은 속성들을 확인할 수 있다.
    * window.console을 쳐본다. 우리가 주로쓰는 log()메소드(Method)를 확인할 수 있다.
  * console 타입 확인
    * 콘솔창에 typeof console을 쳐본다. console의 타입은 객체인 것을 확인할 수 있다. console.log는 함수
    * 콘솔창에 window를 쳐본다. 타입은 객체인 것을 알 수 있다.  
    
* [실습 코드링크](https://github.com/stemkorea7/javascript/blob/master/basic_javascript/chapter9/object.js)
