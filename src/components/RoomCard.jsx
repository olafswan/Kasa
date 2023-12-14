import { NavLink } from "react-router-dom";

export default function RoomCard({room}) {
  return (
    
        <NavLink to={`/rooms/${room.id}`} className='card'>

            <img src={room.cover}></img>
            <h2>{room.title}</h2>
            
        </NavLink>
      
  );
}
