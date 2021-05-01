// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
import Main from "./components/Main";
import employees from "./employees.json";
import Wrapper from "./components/Wrapper";


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