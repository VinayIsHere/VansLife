import React from "react"
import Van from "./Van"
import '../../resources/server'
import '../../css/Vans/Vans.css'
import Header from "../Header"
import { useSearchParams } from "react-router-dom"
import { type } from "@testing-library/user-event/dist/type"
import { getVans } from "../../api"

function Vans(){

    const [vans, setVans]= React.useState([])
    const [searchParams, setSearchParams]= useSearchParams();
    const [loading, setLoading]= React.useState(false);
    const [error, setError]= React.useState(null)

    const typeFilter= searchParams.get("type");
      
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans();
    }, [])

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
          if (value === null) {
            prevParams.delete(key)
          } else {
            prevParams.set(key, value)
          }
          return prevParams
        })
      }
      
    if(loading){
        return (<h1>Loading...</h1>)
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const displayedVans= typeFilter ? vans.filter(van => van.type == typeFilter): vans;
    
    const vanElements= displayedVans.map(van => {
        return <Van 
            id= {van.id}
            type= {van.type}
            imageUrl= {van.imageUrl}
            name= {van.name}
            price= {van.price}
            searchType= {`?${searchParams.toString()}`}
            filterType= {typeFilter}
        />
    })

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>

            <div className="van-list-filter-buttons">
                <button
                    onClick= {() => handleFilterChange("type", "simple")}
                    className= {`van-type simple ${typeFilter === "simple" ? "selected": ""}`}
                >
                    Simple
                </button>

                <button
                    onClick= {() => handleFilterChange("type", "rugged")}
                    className= {`van-type rugged ${typeFilter === "rugged" ? "selected": ""}`}
                >
                    Rugged
                </button>

                <button
                    onClick= {() => handleFilterChange("type", "luxury")}
                    className= {`van-type luxury ${typeFilter === "luxury" ? "selected": ""}`}
                >
                    Luxury
                </button>

                {
                    typeFilter ?
                    (
                        <button
                        onClick= {() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                        >
                            Clear Filters
                        </button>
                    )
                    : null
                }
                
            </div>
            
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans;