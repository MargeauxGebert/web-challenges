export default function App() {
  function handleClick() {
    console.log("You clicked me! Now die.");
  }
  const textColor = "hotpink";
  const textButton = "Click me, if you dare";
  return <Button color={textColor} text={textButton} onClick={handleClick} />;
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button onClick={onClick} style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}
