import React, { Component } from "react";
import NavBar from "./Components/navbar";
import Counters from "./Components/counters.jsx";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // //증가 함수
  // handleIncrement = () => {
  //   const counters = [...this.state.counters];
  //   counters[0].value++;
  //   console.log(this.state.counters[0]);
  // };
  //
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
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
      <>
        {/* 필터링 부분 이해필요 */}
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.reset}
            onIncrement={this.handleIncrement}
            onDelete={this.delete}
          />
        </main>
      </>
    );
  }
}

export default App;
