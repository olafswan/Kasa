import { useState } from "react";
import back from "../assets/arrow-back.svg";
import forward from "../assets/arrow-forward.svg";


const Slideshow = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const picturesData = props.data.pictures;
  
  const hasSeveralPics = picturesData.length > 1;

  // fonction précédent
  const goToPrevious = () => {
    // vérifie si l'image acctuelle est la 1ère
    const isFirstPic = currentIndex === 0;
    // si l'image était la 1ère afficher la dernière sinon la précédente
    const newIndex = isFirstPic ? picturesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  // fonction suivant
  const goToNext = () => {
    // vérifie si l'image acctuelle est la dernière
    const isLastPic = currentIndex === picturesData.length - 1;
    // si l'image était la dernière afficher la 1ère sinon la suivante
    const newIndex = isLastPic ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }



  return (
    <div className="slideshow">
      <img className="room-picture" src={picturesData[currentIndex]} alt={props.data.title}/>
      {/* numéro de l'image affiché uniquement si plusieurs images  */}
      <p className={`${!hasSeveralPics ? 'hide' : ''}`}>{currentIndex + 1}/{picturesData.length}</p>
      {/* bouton précédent affiché uniquement si plusieurs images  */}
      <div className={`slide back ${!hasSeveralPics ? 'hide' : ''}`} onClick={goToPrevious}>
        <img className="arrow" src={back}/>
      </div>
      {/* bouton suivant affiché uniquement si plusieurs images  */}
      <div className={`slide forward ${!hasSeveralPics ? 'hide' : ''}`} onClick={goToNext}>
        <img className="arrow" src={forward}/>
      </div>
    </div>
  );
}

export default Slideshow;