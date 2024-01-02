import TopSection from "../components/TopSection";
import RoomsGallery from "../components/RoomsGallery";

export default function Home() {

  const topText = ["Chez vous, ", "partout et ailleurs"]

  return (
    <>
    
      {/* <TopSection img="./src/assets/shore.jpg" text={"Chez vous, partout et ailleurs"}/> */}

      {/* <TopSection img="./src/assets/shore.jpg" text={["Chez vous, ", <br/>,"partout et ailleurs"]}/> */}
      <TopSection img="./src/assets/shore.jpg" text={topText}/>

      {/* <TopSection key="12345" img="./src/assets/shore.jpg" text={[`Chez vous, `, <br/>,`partout et ailleurs`]}/> */}

      <RoomsGallery/>

    </>

  );
}