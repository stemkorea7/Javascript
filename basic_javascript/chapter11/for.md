## 반복문  
> 반복 작업이 필요할때 사용.  
> 반복이 가능한 객체는 Array, Map, Set, String, TypeArray, arguments 등이 있으며 우리는 이것들을 반복가능한 객체(Iterable)이라고 한다.
  
### For  
> 특정 조건이 거짓이 될때까지 반복한다. 가장 초기에 만들어진 반복문  
* 사용법: for(초기화; 조건문; 업데이트) {...}  
* 초기화: 사용할 변수를 특정 값으로 초기화 하는 과정  
  * let i = 0;  
* 조건문: 초기화된 변수에 조건을 주면서 거짓이 될때까지 반복한다.  
  * i > 100 (0으로 초기화된 i는 100이 될때까지 반복한다.
* 업데이트: 증감 연산자를 사용해 업데이트한다.  
  * i++ (i는 0부터 99까지 증가한다)  
* for문안에 if문을 넣어 50번째 숫자 도출   
* 배열(array)를 활용한 반복문(For)  
  * 배열의 순번과 내용 나열.  
  * 문자의 스펠링 길이도 나열가능.
  
### For of  
> 반복가능한 객체(Iterable)를 반복하는 문법이며, 기본적으로 값(value)을 읽어들인다. forEach보다 활용도가 높다.
* 사용법: for(변수 of 객체) {...}  
  * 배열의 인덱스와 값을 for of를 활용해 나열해 보자.  
  
### ForEach  
> forEach문은 Iterable 중 Array객체만 사용하다 ES6부터는 Map, Set을 지원한다. 
ForEach역시 반복문이며 value와 index를 출력한다.   
* 사용법: 배열.forEach(function (value, index) {...}  
  * 배열 값과 인덱스 출력 실습.  

** For of가 ForEach보다 활용도가 높은 이유  
> ForEach는 사용할 수 있는 반복적인 객체(Iterable)의 제한도 있지만  
반복문 안에 조건을 넣었을 경우 forEach는 continue나 break를 사용할 수 없다.**  
  
### For in  
> 반복가능한 객체(Iterable)를 반복하는 문법이며, 기본적으로 키(key)를 읽어들인다.  
* 사용법: for(변수 in 객체) {...}  
  * 배열의 키(key)값을 출력해보자

