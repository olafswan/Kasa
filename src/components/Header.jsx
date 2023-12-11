import { NavLink } from "react-router-dom";

// const rooms = [1, 2, 3, 4, 5]

export default function Header() {

  const style = {display: 'flex', flexDirection: 'row', borderBottom: '1px dotted grey'}

  return (
    <header>
      <img src="./src/assets/kasa.svg" alt="Logo Kasa" className="lmj-logo" />
      <nav style = {style}>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">A propos</NavLink>
  
        {/* {rooms.map((room) => (<NavLink to={`/rooms/${room}`} style = {style} key={room}>Appartement {room}</NavLink>))} */}

      </nav>
    </header>
  );
}
