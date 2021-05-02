import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav">
            <div className="logo">
            </div>
            <Link className="homeLink" to="/">Home</Link>
            <Link className="favoritesLink" to="/favorites">favorites</Link>
        </div>
    )
}

export default NavBar
