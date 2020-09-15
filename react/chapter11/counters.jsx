import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //증가 함수
  handleIncrement = () => {
    // console.log("증가함수 접근");
    // 기본 state 값을 건들지 않기 위해 counters 복사
    const counters = [...this.state.counters];
    counters[0].value++;
    //값을 증가시키면 현재 state.counters[0]번째 값이 변경된걸 알 수 있다.
    console.log(this.state.counters[0]);
  };
  //
  handleIncrement = (counter) => {
    // 기본 state 값을 건들지 않기 위해 counters 복사
    const counters = [...this.state.counters];
    //복사한 counters의 클릭한 매개변수 값의 인덱스값을 찾기위해 indexOf함수를 넣는다
    const index = counters.indexOf(counter);
    //클릭한 인덱스의 값만 증가시켜야하기 때문에 counter 프로퍼티를 복사한다.
    counters[index] = { ...counter };
    //복사한 인덱스 프로퍼티의 value에 접근해 증가시켜준다.
    counters[index].value++;
    //이 내용을 state에 세팅한다.
    this.setState({ counters });
  };

  //리셋함수
  reset = () => {
    const counter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  //삭제 함수
  delete = (checkId) => {
    const counters = this.state.counters.filter((c) => c.id !== checkId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {/*리셋버튼 */}
        <button onClick={this.reset} className="btn btn-secondary btn-sm">
          리셋버튼
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDelete={this.delete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
