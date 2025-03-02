export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  if (isHappy === true) {
    return <section>🤗</section>;
  }
  return <section>🥺</section>;
}
