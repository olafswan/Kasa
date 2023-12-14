import TopSection from "../components/TopSection";
import RoomsGallery from "../components/RoomsGallery";



export default function Home() {

  return (
    <>
    
        <TopSection img="./src/assets/shore.jpg" text={["Chez vous, ", <br/>,"partout et ailleurs"]}/>

        <RoomsGallery/>

    </>

  );
}