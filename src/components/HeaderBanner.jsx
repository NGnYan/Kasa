import "../styles/components/HeaderBanner.scss";

function HeaderBanner({ img, title }) {
  return (
    <div className="header-banner">
      <img src={img} alt="img de la bannière" className="header-banner-img" />
      <h2>{title}</h2>
    </div>
  );
}

export default HeaderBanner;
