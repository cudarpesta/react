function ValidationComponent(props) {
  let lengthMessage = null;
  if (props.checkMe > 5) {
    lengthMessage = <div>Text long enough.</div>;
  } else if (props.checkMe === 5) {
    lengthMessage = <div>Text is exactly 5.</div>;
  } else {
    lengthMessage = <div>Text too short.</div>;
  }
  return <div>{lengthMessage}</div>;
}

export default ValidationComponent;
