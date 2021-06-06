import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hi, I'm a react app!</h1>
  //   </div>
  // );
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "some text in h1")
  );
}

export default App;
