import { useOutletContext } from "react-router-dom";
import "../../css/Host/HostVanPhotos.css"

function HostVanPhotos(){
    const { currentVan } = useOutletContext()
    return (
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
    )
}

export default HostVanPhotos;