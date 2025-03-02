export default function App() {
  return <Greeting name="Daniel" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Roland" ? "Coach" : name}!</h1>;
}
