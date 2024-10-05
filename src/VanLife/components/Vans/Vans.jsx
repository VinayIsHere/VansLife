import React from "react"
import Van from "./Van"
import '../../resources/server'
import '../../css/Vans/Vans.css'
import Header from "../Header"

function Vans(){

    const [vans, setVans]= React.useState([])

    React.useEffect(() => {
        fetch('/api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    //console.log(vans)
    const vanElements= vans.map(van => {
        return <Van 
            id= {van.id}
            type= {van.type}
            imageUrl= {van.imageUrl}
            name= {van.name}
            price= {van.price}
        />
    })

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans;