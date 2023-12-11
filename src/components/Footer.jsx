import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ color : 'white', backgroundColor: 'black', marginTop: 20 }}>
      <nav>
        <NavLink to="/">KASA (image lien vers Home)</NavLink>
      </nav>
      <p>© Kasa, All rights reserved</p>
    </footer>
  );
}
