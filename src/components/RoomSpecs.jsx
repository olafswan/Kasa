import Collapse from "../components/Collapse";

const RoomSpecs = (props) => {

    // fonction pour converting la note en étoiles
    const staromator = (rating) => {
        // vérifie si la note est entre 0 et 5
        if (Number(rating) >= 0 && Number(rating) <= 5) {
            // étoiles remplies = la note
            const filledStar = Number(rating);
            // étoiles vides = 5 - la note
            const emptyStar = 5 - Number(rating);
            let result =[];
            // ajoute le nombre d'étoiles remplies
            for (let i = 0; i < filledStar; i++) {
                result.push(<img src="../src/assets/star-filled.svg" key={`filledStar-${i}`} />)
            }
           // ajoute le nombre d'étoiles vides
            for (let i = 0; i < emptyStar; i++) {
                result.push(<img src="../src/assets/star-empty.svg" key={`emptyStar-${i}`} />)
            }
            return result;
        }
    }

    // fonction pour séparer le nom du prénom
    const namesplitor = name => name.match(/\w+/g);

    // fonction pour mettre en forme le lieu comme sur la maquette ("Ile de France - Paris 17e" => "Paris 17e, Ile de France")
    const locationstylor = (location) => {
        // split au niveau du tiret
        const locationArray = location.split(" - ");
        // ajoute la virgule et l'espace après la ville
        locationArray[1] += ", ";
        // inverse le tableau
        return locationArray.reverse();
    };
    
  return (
    <div className="specs">
        <div className="top">
            <div className="left">
                <h1>{props.data.title}</h1>
                <h2>
                    {/* affiche le lieu avec la bonne mise en forme */}
                    {locationstylor(props.data.location).map((word, index) => (<><span key={`${word}${index}`}>{word}</span></>))}
                </h2>
                <div className="tag-container">
                    {/* map pour afficher les tags */}
                    {props.data.tags.map((tag) => (<p className="tag" key={tag}>{tag}</p>))}
                </div>
            </div>
            <div className="right">
                <div className="host">
                    <div className="profil-name">
                        {/* affiche le nom et prénom sur des lignes différents */}
                        {namesplitor(props.data.host.name).map((word) => (<p key={`name-${word}`}>{word}</p>))}
                    </div>
                    <div className="profil-picture">
                        <img src={props.data.host.picture} alt={props.data.host.name}/>
                    </div>
                </div>
                <div className="rating">
                    {/* affiche la note sous forme d'étoile  */}
                    {staromator(props.data.rating).map((star) => (star))}
                </div>
            </div>
        </div>
        <div className="bottom">
            <Collapse label="Description" >
                <p>{props.data.description}</p>
            </Collapse>
            <Collapse label="Équipements" >
                {/* map pour afficher la liste d'équipements  */}
                {(props.data.equipments).map((equipment) => (<p key={equipment}>{equipment}</p>))}
            </Collapse>
        </div>
    </div>
  );
}

export default RoomSpecs;