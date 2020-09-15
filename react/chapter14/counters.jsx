import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //this.props로 기능들을 묶어주면서 반복적인 코드를 줄일 수 있다
    const { onDelete, counters, onIncrement, onReset } = this.props;
    return (
      <div>
        {/*리셋버튼 */}
        <button onClick={onReset} className="btn btn-secondary btn-sm">
          리셋버튼
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
