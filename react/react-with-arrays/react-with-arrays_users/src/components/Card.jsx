import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ name, roles, about, id }) {
  return (
    <article key={id} className="card">
      <h2>{name}</h2>
      <ul className="card__taglist">
        {roles.map((role) =>
          <Tag tag={role} />)}
      </ul>
      <p>{about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
