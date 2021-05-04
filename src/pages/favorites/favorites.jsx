import React, { useEffect, useState } from 'react';
import './favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoritesData } from '../../redux/actions/favoritesActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import FavoriteItem from '../../components/favoriteItem/favoriteItem';

function Favorites() {

    const dispatch = useDispatch()

    const state = useSelector(state => state.favorites)
    const { favoritesData, locationKeys, loading } = state;

    useEffect(() => {
        dispatch(fetchFavoritesData())
    }, [])

    return (
        <div className="mainImg">
            <h1>Favorites</h1>
            <div className="favoritesItemsLayout">
                {loading ?
                    <CircularProgress size={200} color="secondary" />
                    :
                    (favoritesData.length != 0) &&
                    favoritesData.map((favorite, index) =>
                        <FavoriteItem
                            key={locationKeys[index]}
                            locationKey={locationKeys[index]}
                            temp={favorite.Temperature}
                            iconNumber={favorite.WeatherIcon}
                            text={favorite.WeatherText}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Favorites
