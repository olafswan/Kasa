import { useParams } from "react-router-dom"

export default function Logement () {
    const {id} = useParams()

    return <div>
        <h1>Fiche du logement n°{id}</h1>
    </div>
}
