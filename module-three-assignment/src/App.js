import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ValidationComponent from "./inputChecker/ValidationComponent";
import CharComponent from "./inputChecker/CharComponent";

function App() {
  let [theText, setText] = useState("");

  const getText = (event) => {
    setText(event.target.value);
  };

  let i = 0;
  let items = [];
  let textMap = new Map();
  for (i = 0; i < theText.length; i++) {
    let keyId = theText.charAt(i) + Math.random();
    textMap.set(keyId, theText.charAt(i));
    items.push(
      <CharComponent
        theChar={theText.charAt(i)}
        key={keyId}
        click={() => deletePersonHandler(keyId)}
      />
    );
  }

  const deletePersonHandler = (charId) => {
    console.log("deleting: " + charId);
    textMap.delete(charId);
    console.log(textMap.size + " size");
    let newText = "";
    textMap.forEach((key, value) => {
      console.log("key " + key);
      console.log("value " + value);
      newText += key;
    });
    console.log(newText);
    setText(newText);
  };

  /*
  
let itemsToBe = [];
    for (const [index, value] of items) {
      itemsToBe.push(<CharComponent theChar={value} key={index} />);
    }
    itemsToBe.push(
      <CharComponent theChar={event.target.value} key={textLength + 1} />
    );

    setItems(itemsToBe);


  let i = 0;
  for (i = 0; i < textLength; i++) {
    items.push(<CharComponent theChar={theText.charAt(i)} />);
  }
*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <p>The input text:</p>
      <input onChange={getText} value={theText} />
      <div>{theText.length}</div>
      <ValidationComponent checkMe={theText.length} />
      {items}
    </div>
  );
}

export default App;
