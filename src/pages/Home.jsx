import TopSection from "../components/TopSection";
import RoomsGallery from "../components/RoomsGallery";

export default function Home() {

  const topText = ["Chez vous, ", "partout et ailleurs"]

  return (
    <>
    
      <TopSection img="./src/assets/shore.jpg" text={topText}/>

      <RoomsGallery/>

    </>

  );
}