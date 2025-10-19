import "../styles/components/Card.scss";

function Card({ cover, title }) {
  return (
    <div className="accomodation-card">
      <img
        src={cover}
        alt={`cover ${title}`}
        className="accomodation-card-img"
      />
      <h3 className="accomodation-card-title">{title}</h3>
    </div>
  );
}

export default Card;
