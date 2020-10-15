html 정리
ul id=todo-list
아이템 클래스 2개빼고 삭제
h2 class='todo-num'

dom.js 컬렉션과 노드리스트 출력결과
collectionItems = document.getEle className (item)
nodeItems = document.queryAll(item)
cosole.log(둘다 찍어줌)

console 설명
헤드나 바디 h2 버튼 테그 각각 엘리먼트타입의 노드라고 한다.
컬렉션의 경우 엘리먼트 밖에 접근을 할 수 없으나 노드리스트의 경우 엘릴먼트뿐만아니라 
모든 타입에 접근이 가능하다.

dom.js 노드리스트 모든 타입에 접근, 엘리먼트만 접근
querySeletor('#todo-list')
콘솔 nodeItems.chiledNodes
ul태그 안에는 li태그들이 있는데 차일드 노드를 활용해서 
태그뿐만아니라 텍스트나 주석등 모든 타입의 자식들을 불러올 수 있다.
text와 주석 추가
확인해면 텍스트 값이나 주석값까지 모두 확인할 수 있지만 html컬렉션은 엘리먼트밖에 불러올 수
없다
그리고 퀄리 셀렉터는 엘리멘트 노드만 불러올 수도 있다.
nodeItem.children

두번째 차이점.
컬렉션은 반복문에 제약이 있다.
for( let item of nodeItems ) {
 콘솔 item
}

컬렉션도 가능하다
for( let item of collectionItems ) {
 콘솔 item
}

하지만, forEach로 노드리스트는 돌릴수 있지만 컬렉션을 돌릴수 없다
실습
nodeItem.forEach(function(item){
 콘솔 item
})

세번째 차이점

collectionItem = getEleClassName ("item")
newItem = createEle('li')
newItem.classList.add('item')
newItem.innerText = 'item3'

아이템의 숫자를 저절로 셀수있다.
하지만 노드리스트의 경우 숫자를 저절로 셀 순없지만 children을 사용하면 가능
