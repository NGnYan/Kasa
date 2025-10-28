import "../styles/components/HostInfo.scss";

function HostInfo({ name, picture, rating }) {
  const totalStars = 5;

  const nameParts = name.trim().split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const Star = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      className={filled ? "star filled" : "star empty"}
    >
      <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
    </svg>
  );

  return (
    <div className="host-info">
      <div className="stars">
        {[...Array(totalStars)].map((_, index) => (
          <Star key={index} filled={index < Number(rating)} />
        ))}
      </div>

      <div className="host-profil">
        <div className="host-name">
          <span className="first-name">{firstName}</span>
          <span className="last-name">{lastName}</span>
        </div>
        <img src={picture} alt={`Photo de ${name}`} className="host-picture" />
      </div>
    </div>
  );
}

export default HostInfo;
