import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav">
            <div className="manuContainer">
                <Link className="homeLink" to="/">Home</Link>
                <Link className="favoritesLink" to="/favorites">Favorites</Link>
            </div>
        </div>
    )
}

export default NavBar
