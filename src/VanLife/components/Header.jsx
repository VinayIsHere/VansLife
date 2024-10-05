import {NavLink, Link} from 'react-router-dom'
import '../css/Header.css'

function Header(){

    return (
        <header className="header">
            <Link to="/" className='site--logo'> #VANLIFE</Link>
            <nav>
                <NavLink 
                    className= {({isActive}) => isActive ? "active-link": null}
                    to="host">
                        Host
                </NavLink>
                
                <NavLink 
                    className= {({isActive}) => isActive ? "active-link": null}
                    to='about'
                >
                    About
                </NavLink>
                
                <NavLink 
                    className= {({isActive}) => isActive ? "active-link": null}
                    to='vans'
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;