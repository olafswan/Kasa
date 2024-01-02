import { NavLink } from "react-router-dom";

export default function Header() {

  return (
    <header>
      <NavLink to="/" className="header__logo-container">
        <img src="../src/assets/kasa.svg" alt="Logo Kasa" />
      </NavLink>
      <nav className="header__menu">

        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>

      </nav>
    </header>
  );
}
