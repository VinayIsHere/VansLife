import { Link } from "react-router-dom"
import "../../css/Host/HostVan.css"

function HostVan(props) {
    return (
        <Link
            to={props.id}
            key={props.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={props.id}>
                <img src={props.imageUrl} alt={`Photo of ${props.name}`} />
                <div className="host-van-info">
                    <h3>{props.name}</h3>
                    <p>${props.price}/day</p>
                </div>
            </div>
        </Link>
    )
}

export default HostVan;