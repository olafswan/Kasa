import { NavLink } from "react-router-dom";


export default function RoomCard({room}) {
  return (
    
        <NavLink to="/room/{room}">

            <img src={room.cover}></img>
            <h1>{room.title}</h1>
            
        </NavLink>
      
  );
}
