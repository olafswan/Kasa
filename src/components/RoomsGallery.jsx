import { useState, useEffect } from 'react';
import RoomCard from './RoomCard';


export default function RoomsGallery() {


  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/olafswan/OC_DAJR_P11/main/src/datas/logements.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData(); 
  }, []); 

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='gallery'>
      
    {/* map de data pour créer les cards de chaque logement  */}
    {data.map(room => (<RoomCard room={room} key={room.id}/>))}

    </div>
  );
}
