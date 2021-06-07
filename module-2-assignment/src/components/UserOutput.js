import React from "react";
import "./UserOutput.css";

function UserOutput(props) {
  return (
    <div className="UserOutput">
      <p>User output for</p>
      <p>{props.userName}</p>
    </div>
  );
}
export default UserOutput;
