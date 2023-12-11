import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


export default function RoomsGallery() {



  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/olafswan/OC_DAJR_P11/main/src/datas/logements.json'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this effect runs only once (on component mount)

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
{data.map(room => (<p key={room.id}><NavLink to={`/rooms/${room.id}`} key={room.id}> {room.title}</NavLink></p>))}

    </div>
  );
}
