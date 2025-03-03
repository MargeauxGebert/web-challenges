import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button> Click me!</Button>
      <Button>You do not want to click me.</Button>
      <Button>Free Virus</Button>
      <Button>Happy clicking!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
