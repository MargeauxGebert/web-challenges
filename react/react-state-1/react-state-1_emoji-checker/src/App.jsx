import { useState } from "react";
import "./styles.css";

export default function App() {
  // let code = "?";
  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode((prev) => prev + emoji);
    // console.log(emoji);
    console.log(code);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
          setCode("");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
