import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './navBar.css'
import { Link } from 'react-router-dom'

function NavBar() {

    const tooManyFavoritesError = useSelector(state => state.favorites.limitError)

    return (
        <div className="nav">
            <div className="manuContainer">
                <Link className="homeLink" to="/">Home</Link>
                <Link className="favoritesLink" to="/favorites">Favorites</Link>
                <span className="favoritesError">{tooManyFavoritesError}</span>
            </div>
        </div>
    )
}

export default NavBar
