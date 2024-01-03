import { NavLink } from "react-router-dom";
import logoW from "../assets/kasa_w.svg";

export default function Footer() {

  // récupère l'année en cours
  const year = new Date().getFullYear();

  return (
    <footer>
      <nav>
      <NavLink to="/">
        <img src={logoW} alt="Logo Kasa"/>
      </NavLink>
      </nav>
      <p>© {year} Kasa. All rights reserved</p>
    </footer>
  );
}
