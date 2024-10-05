import {useParams} from "react-router-dom"
import React from "react"
import HostVan from "./HostVan";
import { Link } from "react-router-dom"
import "../../css/Host/HostVans.css"

function HostVans(){

    const [hostVans, setHostVans]= React.useState([]);

    React.useEffect(() => {
        fetch(`/api/host/vans`)
        .then(res => res.json())
        .then(data => {
            setHostVans(data.vans)
            //console.log(hostVans)
        })
    }, [])
    
    const hostVansElements= hostVans.map(van => (
        <HostVan 
            id= {van.id}
            name= {van.name}
            price= {van.price}
            imageUrl= {van.imageUrl}
        />
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    hostVansElements.length > 0 ? (
                        <section>
                            {hostVansElements}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}

export default HostVans;