import React from 'react';
import './searchItem.css';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../redux/actions/currentWeatherActions';
import { fetchForecastData } from '../../redux/actions/fiveDayForecastActions';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import FavoriteButton from '../favoriteButton/favoriteButton';

function SearchItem({ city, country, locationKey, clearList }) {
    const dispatch = useDispatch()

    const fetchWeather = () => {
        clearList('')
        dispatch(fetchWeatherData(locationKey, city))
        dispatch(fetchForecastData(locationKey))
    }

    // Material UI Styling //
    const useStyles = makeStyles((theme) => ({
        listItem: {
            height: 45,
            width: 570,
            fontSize: "15px",
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: theme.palette.grey[100],
            },
        },
    }));

    const classes = useStyles();
    // Material UI Styling //

    return (
        <>
            <div className="searchItemLayout">
                <ButtonBase onClick={() => fetchWeather()}>
                    <ListItem className={classes.listItem}>
                        <span>{`${country} / ${city}`}</span>
                    </ListItem>
                </ButtonBase>
                <div className="favoriteButtonLayout">
                    <FavoriteButton locationKey={locationKey} locationName={city} />
                </div>
            </div>
            <Divider />
        </>
    )
}

export default SearchItem
