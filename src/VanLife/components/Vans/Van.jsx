import {Link} from "react-router-dom"
import '../../css/Vans/Van.css'

function Van(props){
    return (
        <div key={props.id} className="van--tile">
            <Link to={`/vans/${props.id}`}>
            <img src={props.imageUrl}/>
            <div className="van--info">
                <h3>{props.name}</h3>
                <p>{props.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${props.type} selected`}>{props.type}</i>
            </Link>
        </div>
    )
}

export default Van;