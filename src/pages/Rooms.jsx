import { useState, useEffect } from 'react';
import { useParams, Navigate } from "react-router-dom"
import Slideshow from "../components/Slideshow"
import RoomSpecs from "../components/RoomSpecs"

export default function Logement () {
    const {id} = useParams()

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [idError, setIdError] = useState(null);
  
    useEffect(() => {
      // Function to fetch JSON data
      const fetchData = async () => {
        try {
          const response = await fetch('https://raw.githubusercontent.com/olafswan/OC_DAJR_P11/main/src/datas/logements.json'); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          
          // filter with id from url
          const filteredData = jsonData.filter((room) => room.id == {id}.id);
        
          if (filteredData.length === 0) {setIdError(true)}

          setData(filteredData[0]);
        
        } catch (error) {
          setError(error);
        }
      };
  
      fetchData(); // Call the fetchData function
    }, [id, idError]); // Empty dependency array ensures this effect runs only once (on component mount)
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!data) {
      return <div>Loading...</div>;
    }

    // console.log("data", data);


    return (
    <>

        {idError && (
          <Navigate to="/about" replace={true} />
        )}
        <Slideshow data={data}/>
        <RoomSpecs data={data}/>

    </>)
}
