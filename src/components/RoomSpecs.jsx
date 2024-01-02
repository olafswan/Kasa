import Collapse from "../components/Collapse";

const RoomSpecs = (props) => {

    const staromator = (rating) => {
        if (Number(rating) >= 0 && Number(rating) <= 5) {
            const filledStar = Number(rating);
            const emptyStar = 5 - Number(rating);
            let result =[];
            for (let i = 0; i < filledStar; i++) {
                result.push(<img src="../src/assets/star-filled.svg" key={`filledStar-${i}`} />)
            }
            for (let i = 0; i < emptyStar; i++) {
                result.push(<img src="../src/assets/star-empty.svg" key={`emptyStar-${i}`} />)
            }
            return result;
        }
    }

    const namesplitor = name => name.match(/\w+/g);

    const locationstylor = (location) => {
        const locationArray = location.split(" - ");
        locationArray[1] += ", ";
        return locationArray.reverse();
    };
    
  return (
    <div className="specs">
        <div className="top">
            <div className="left">
                <h1>{props.data.title}</h1>
                <h2>
                    {locationstylor(props.data.location).map((word, index) => (<><span key={`${word}${index}`}>{word}</span></>))}
                </h2>
                <div className="tag-container">
                    {props.data.tags.map((tag) => (<p className="tag" key={tag}>{tag}</p>))}
                </div>
            </div>
            <div className="right">
                <div className="host">
                    <div className="profil-name">
                        {namesplitor(props.data.host.name).map((word) => (<p key={`name-${word}`}>{word}</p>))}
                    </div>
                    {/* <p>{props.data.host.name}</p> */}
                    <div className="profil-picture">
                        <img src={props.data.host.picture} alt={props.data.host.name}/>
                    </div>
                </div>
                <div className="rating">
                    {staromator(props.data.rating).map((star) => (star))}
                </div>
            </div>
        </div>
        <div className="bottom">
            <Collapse label="Description" >
                <p>{props.data.description}</p>
            </Collapse>
            <Collapse label="Équipements" >
                {(props.data.equipments).map((equipment) => (<p key={equipment}>{equipment}</p>))}
            </Collapse>
        </div>
    </div>
  );
}

export default RoomSpecs;