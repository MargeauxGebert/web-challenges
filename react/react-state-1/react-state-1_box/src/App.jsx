import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [activateText, setActivateText] = useState("Activate");
  function handleClick() {
    // isActive = !isActive;
    setIsActive(!isActive);
    setActivateText(!activateText);
    // setActivateText(!activateText);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {activateText ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}
