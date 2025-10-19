import "../styles/components/Footer.scss";
import logo from "../assets/logo-white.png";

function Footer({ title }) {
  return (
    <div className="footer">
      <img src={logo} alt="Logo Kasa" id="footer-logo" />
      <p className="footer-title">{title}</p>
    </div>
  );
}

export default Footer;
