import React, { useEffect } from 'react';
import './favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { fetchFavoritesData } from '../../redux/actions/favoritesActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeatherCard from '../../components/weatherCard/weatherCard';

function Favorites() {

    const dispatch = useDispatch()
    const state = useSelector(state => state.favorites)
    const { favoritesData, locationKeys, locationNames, loading } = state;

    useEffect(() => {
        dispatch(fetchFavoritesData())
    }, [])

    return (
        <div className="mainImg">
            <div>
                <img className="starImage" src={'./favorite_star.png'} />
            </div>
            <div className="favoritesItemsLayout">
                {loading ?
                    <CircularProgress size={200} color="secondary" />
                    :
                    (favoritesData.length != 0) &&
                    favoritesData.map((favorite, index) =>
                        <WeatherCard
                            key={locationKeys[index]}
                            location={locationNames[index]}
                            temperature={favorite.Temperature.Metric.Value}
                            info={favorite.WeatherText}
                            imageURL={favorite.WeatherIcon}
                            locationKey={locationKeys[index]}
                            isFavoriteButton={false}
                            clickable={true}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Favorites
