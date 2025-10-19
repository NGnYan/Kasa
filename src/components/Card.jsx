import { Link } from "react-router-dom";
import "../styles/components/Card.scss";

function Card({ id, cover, title }) {
  return (
    <Link to={`/accommodation/${id}`} className="accommodation-card">
      <img
        src={cover}
        alt={`cover ${title}`}
        className="accommodation-card-img"
      />
      <h3 className="accommodation-card-title">{title}</h3>
    </Link>
  );
}

export default Card;
