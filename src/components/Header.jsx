import { NavLink } from "react-router-dom";

// const rooms = [1, 2, 3, 4, 5]

export default function Header() {

  return (
    <header>
      <NavLink to="/" className="header__logo-container">
        <img src="./src/assets/kasa.svg" alt="Logo Kasa" />
      </NavLink>
      <nav className="header__menu">

        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
        
        {/* TODO underline home or about when this is the current page */}
  
        {/* {rooms.map((room) => (<NavLink to={`/rooms/${room}`} key={room}>Appartement {room}</NavLink>))} */}

      </nav>
    </header>
  );
}
