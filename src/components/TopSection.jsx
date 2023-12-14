export default function TopSection({img, text}) {

// const style1 = {maxHeight: '100px', borderRadius: '15px', border: "10px solid red"}

// const styleA = {height: "100px", width: "500px", borderRadius: '15px', borderBottom: '10px dotted red', display: "none"}

  return (
    <div className="top-section">
          <img src={img} />
          {/* <img src="./src/assets/shore.jpg" alt="Photo de bord de mer escarpé" /> */}
    <p>{text}</p>
    {/* <p>Chez vous, <br/>partout et ailleurs</p> */}
    </div>
  );
}