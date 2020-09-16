// const name1 = '이병헌';
// const name1 = '장쯔이';

const userList = ["이병헌", "장쯔이", "홍길동", "왕서방", "존"];
console.log(userList[0]);
console.log(typeof userList);

//마지막 인덱스 값 삭제 pop
userList.pop();
console.log(userList);

//마지막 인덱스 값 생성 push 
userList.push("존 생성");
console.log(userList);

// 맨 처음 인덱스 값 삭제 shift 
userList.shift();
console.log(userList);
//맨 처음 인덱스 값 생성 unshift 
userList.unshift("이병헌 생성");
console.log(userList);
// 배열의 길이 확인 .length  
console.log(userList.length);

//값의 인덱스 호출 indexOf 
console.log(userList.indexOf("홍길동"));
