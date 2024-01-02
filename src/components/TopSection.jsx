export default function TopSection(props) {

  return (
    <div className="top-section">
          <img src={props.img} />

    <div>
      {props.text?.map((line) => (<p key={line}>{line}</p>))}
    </div>

    </div>
  );
}