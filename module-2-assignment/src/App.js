import logo from "./logo.svg";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import React, { Component } from "react";

class App extends Component {
  state = {
    username: "Albert",
  };

  userNameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <UserInput
          changed={this.userNameChangedHandler}
          init={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
