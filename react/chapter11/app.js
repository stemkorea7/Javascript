import React, { Component } from "react";
import NavBar from "./Components/navbar";
import Counters from "./Components/counters.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </>
    );
  }
}

export default App;
