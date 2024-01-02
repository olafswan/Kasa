import { useState } from "react";

const Slideshow = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const picturesData = props.data.pictures;
  
  const hasSeveralPics = picturesData.length > 1;


  // const slider = (pictures, direction) => {
  //   // récuperer l'index de la pic

  //   // selon le sens et l'index de la pic afficher la pic en question
  // };

  const goToPrevious = () => {
    const isFirstPic = currentIndex === 0;
    const newIndex = isFirstPic ? picturesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastPic = currentIndex === picturesData.length - 1;
    const newIndex = isLastPic ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }



  return (
    <div className="slideshow">
        {/* <p style={{fontStyle: "italic"}}>Slideshow logement n°{props.data.id}</p> */}
        {/* <img style={{width: "85vw", borderRadius: "25px", margin: "auto"}} src={props.data.pictures[0]}/> */}
        <img className="room-picture" src={picturesData[currentIndex]}/>
        <p className={`${!hasSeveralPics ? 'hide' : ''}`}>{currentIndex + 1}/{picturesData.length}</p>
        {/* <img src="../src/assets/arrow-back.svg"/> */}
        <div className={`slide back ${!hasSeveralPics ? 'hide' : ''}`} onClick={goToPrevious}>
        <img className="arrow" src="../src/assets/arrow-back.svg"/>
        </div>
        <div className={`slide forward ${!hasSeveralPics ? 'hide' : ''}`} onClick={goToNext}>
        <img className="arrow" src="../src/assets/arrow-forward.svg"/>
        </div>
    </div>
  );
}

export default Slideshow;