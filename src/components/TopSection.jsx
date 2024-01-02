export default function TopSection(props) {

  return (
    <div className="top-section">
          <img src={props.img} />
    <p>{props.text}</p>
    </div>
  );
}