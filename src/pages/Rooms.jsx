import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import Slideshow from "../components/Slideshow"
import RoomSpecs from "../components/RoomSpecs"

export default function Logement () {
    // id dans l'url
    const {id} = useParams()
    // data en fonction de l'id
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
  
    useEffect(() => {
      // Function to fetch JSON data
      const fetchData = async () => {
        try {
          const response = await fetch('https://raw.githubusercontent.com/olafswan/OC_DAJR_P11/main/src/datas/logements.json'); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          
          // filtre les données avec l'id
          const filteredData = jsonData.filter((room) => room.id == {id}.id);
          
          // si pas de données => erreur 404
          if (filteredData.length === 0) {
            navigate('/not-found')
          }

          setData(filteredData[0]);
        
        } catch (error) {
          setError(error);
        }
      };
  
      fetchData();
    }, [id, navigate]); 
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!data) {
      return <div>Loading...</div>;
    }



    return (
    <>

        <Slideshow data={data}/>
        <RoomSpecs data={data}/>

    </>)
}
