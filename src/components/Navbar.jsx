import { NavLink } from "react-router-dom";
import "../styles/components/Navbar.scss";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo Kasa" id="navbar-logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about">A Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
