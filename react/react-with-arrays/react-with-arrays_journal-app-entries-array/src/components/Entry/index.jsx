import FavoriteButton from "../FavoriteButton";
import "./Entry.css";

export default function Entry({ motto, notes, date, id }) {
  return (
    <article className="entry" key={id}>
      <time className="entry__date">{date}</time>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>{motto}</q>
          </h2>
          <FavoriteButton />
        </div>
        <p className="entry__notes">{notes}</p>
      </div>
    </article>
  );
}
