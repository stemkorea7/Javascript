## 자바스크립트 작동원리  
html과 css는 Javascirpt에 완벽히 호환이 가능하다. 코드는 기본적으로 **위에서 아래로** 자바스크립트 엔진에 의해 읽혀진다.
* 디자인 링크 방법
html의 head 부분에 디자인을 담당하는 CSS파일을 링크할 수 있다. html 파일내의 코드는 링크된 css파일의 Class나 Id 디자인을 사용할 수 있다.  
* 스크립트 링크 방법  
html의 body 부분에 스크립트를 담당하는 Javascript 파일을 작성할 수 있지만 가독성을 위해 Javascript 파일을 링크한다. 


index.html 생성 > ! Tab
<head>css파일 링크걸기
<body>안에 script 테그 넣어보기 (<body> alert(‘hello world’)
바디 끝부분에 script 연동 > app.js 파일 생성 > alert(‘hello world’); 입력
만약 <head>부분에 <script>를 넣는다면 <body>부분의 html영역보다 먼저 로드되기 때문에 <body>부분의 html코드에 <script>반영이 안됨. 그러므로 <script>는 바디 끝부분에 작성 및 연동.
