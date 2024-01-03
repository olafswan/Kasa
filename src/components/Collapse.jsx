import { useState, useRef } from "react";
import up from "../assets/chevron-up.svg";


const Collapse = (props) =>{
  const [open, setOPen] = useState(false);
  // toggle ouverture / fermeture d'un accordéon
  const toggle = () => {
    setOPen(!open);
    handleRotate();
  };
  const contentRef = useRef();
  
  const [rotateChevron, setRotateChevron] = useState(false);
  const handleRotate = () => setRotateChevron(!rotateChevron);
  const rotate = rotateChevron ? "rotate(-180deg)" : "rotate(0)";

  return (
    <div className="accordion">
      {/* au click ouverture / fermeture  */}
      <div onClick={toggle} className="accordion__label">
        {/* récupère la props label pour le titre */}
        <h2>{props.label}</h2>
        {/* chevron et son animation */}
        <div className="icon-container" style={{ transform: rotate, transition: "all 0.25s linear" }}>
         <img src={up}/>
        </div>
      </div>
      {/* modifie la hauteur si ouvert ou pas */}
      <div className="content-parent" ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
        {/* récupère la props "children" pour le contenu*/}
        <div className='content'> {props.children}</div>
      </div>
    </div>
  );
}

export default Collapse;