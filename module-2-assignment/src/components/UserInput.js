import React from "react";

const userInput = (props) => {
  //inline style
  const inputStyle = {
    border: "2px solid red",
  };
  return (
    <div>
      <input
        style={inputStyle}
        type="text"
        onChange={props.changed}
        value={props.init}
      />
    </div>
  );
};

export default userInput;
