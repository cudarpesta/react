import "./CharComponent.css";

function CharComponent(props) {
  return (
    <div className="CharComponent" onClick={props.click}>
      {props.theChar}
    </div>
  );
}

export default CharComponent;
