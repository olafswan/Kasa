import { useState, useRef } from "react";

const Collapse = (props) =>{
  const [open, setOPen] = useState(false);
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
      <div onClick={toggle} className="accordion__label">
        <h2>{props.label}</h2>
        <div className="icon-container" style={{ transform: rotate, transition: "all 0.25s linear" }}>
         <img src="../src/assets/chevron-up.svg"/>
        </div>
      </div>
      <div className="content-parent" ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
        <div className='content'> {props.children}</div>
      </div>
    </div>
  );
}

export default Collapse;