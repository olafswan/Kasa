import { NavLink } from "react-router-dom";
import logo from "../assets/kasa.svg";


export default function Header() {

  return (
    <header>
      <NavLink to="/" className="header__logo-container">
        <img src={logo} alt="Logo Kasa" />
      </NavLink>
      <nav className="header__menu">

        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>

      </nav>
    </header>
  );
}
