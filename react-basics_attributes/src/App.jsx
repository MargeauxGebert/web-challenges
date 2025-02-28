import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">This is me, Margeaux!</h2>
      <label htmlFor="input"></label>
      <input type="text" id="input" />
      <a
        href="https://en.wikipedia.org/wiki/Margaux_(name)"
        className="article__link"
        target="blank"
      >
        Some more Margeaux
      </a>
    </article>
  );
}
