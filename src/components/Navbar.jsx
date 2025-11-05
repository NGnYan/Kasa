import { NavLink } from "react-router-dom";
import "../styles/components/Navbar.scss";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img src={logo} alt="Logo Kasa" id="navbar-logo" />
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
