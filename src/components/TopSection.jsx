export default function TopSection(props) {

  return (
    <div className="top-section">
          <img src={props.img} />
          {/* <img src="./src/assets/shore.jpg" alt="Photo de bord de mer escarpé" /> */}
    <p>{props.text}</p>
    {/* <p>Chez vous, <br/>partout et ailleurs</p> */}
    </div>
  );
}