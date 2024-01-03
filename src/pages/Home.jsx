import TopSection from "../components/TopSection";
import RoomsGallery from "../components/RoomsGallery";
import topImg from "../assets/shore.jpg";

export default function Home() {

  const topText = ["Chez vous, ", "partout et ailleurs"]

  return (
    <>
    
      <TopSection img={topImg} text={topText}/>

      <RoomsGallery/>

    </>

  );
}