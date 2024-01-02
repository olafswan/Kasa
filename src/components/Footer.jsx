import { NavLink } from "react-router-dom";

export default function Footer() {

  // récupère l'année en cours
  const year = new Date().getFullYear();

  return (
    <footer>
      <nav>
      <NavLink to="/">
        <img src="../src/assets/kasa_w.svg" alt="Logo Kasa"/>
      </NavLink>
      </nav>
      <p>© {year} Kasa. All rights reserved</p>
    </footer>
  );
}
