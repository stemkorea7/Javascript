// 만들어야할 것들
// 25 이하의 랜덤 번호 생성
// 유저가 번호를 추측할 수 있어야함
// 만약 틀리면 힌트와 함께 다시 질문함
// 랜덤 번호를 맞추면 - 게임종료

function upAndDown() {
    // let randomNum = Math.random() * 26;
    // let winNum = Math.floor(randomNum);
    let winNum = Math.floor(Math.random() * 26);
    console.log(winNum);
    let guess;

    do {
      guess = prompt("25이하의 숫자를 입력해주세요!");
      console.log(guess, winNum);
      if (guess > winNum) {
        console.log("Down! 숫자를 낮게 적어주세요");
      } else if (guess < winNum) {
        console.log("Up! 숫자를 높게 적어주세요");
      }
    } while (guess != winNum);
    console.log("정답 입니다!");
  }

upAndDown();
