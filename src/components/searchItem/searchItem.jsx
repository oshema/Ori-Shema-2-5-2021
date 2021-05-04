import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../../redux/actions/currentWeatherActions'
import { fetchForecastData } from '../../redux/actions/fiveDayForecastActions'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ButtonBase from '@material-ui/core/ButtonBase';

function SearchItem({ city, country, locationKey, clearList }) {
    const dispatch = useDispatch()

    const fetchWeather = () => {
        clearList('')
        dispatch(fetchWeatherData(locationKey, city))
        dispatch(fetchForecastData(locationKey))
    }

    // Material UI Styling //
    const useStyles = makeStyles((theme) => ({
        root: {
            height: 55,
            width: 600,
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: theme.palette.grey[100],
            },
        },
    }));

    const classes = useStyles();
    // Material UI Styling //

    return (
        <div>
            <ButtonBase onClick={() => fetchWeather()}>
                <ListItem divider className={classes.root}>
                    {`${country} / ${city} - ${locationKey}`}
                </ListItem>
            </ButtonBase>
        </div>
    )
}

export default SearchItem
