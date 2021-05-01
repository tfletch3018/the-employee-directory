import React, { Component } from "react";
import Main from "./components/Main";
import employees from "./employees.json";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Title";


class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron />
        <Main />
        </Wrapper>
    )
  }
};

export default App;