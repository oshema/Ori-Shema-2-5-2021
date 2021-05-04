import React, { useEffect, useState } from 'react';
import './currentWeather.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../../redux/actions/currentWeatherActions';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import FavoriteButton from '../favoriteButton/favoriteButton';

function CurrentWeather() {

    const dispatch = useDispatch()
    const selectedWeather = useSelector(state => state.currentWeather)
    const { loading, weatherData, location, key, error } = selectedWeather;

    let imgURL = ''
    if (weatherData.WeatherIcon < 10)
        imgURL = `https://developer.accuweather.com/sites/default/files/0${weatherData.WeatherIcon}-s.png`
    else
        imgURL = `https://developer.accuweather.com/sites/default/files/${weatherData.WeatherIcon}-s.png`

    //Set default forecast to Tel Aviv
    useEffect(() => {
        if (!key)
            dispatch(fetchWeatherData("215854", "Tel Aviv"))
    }, [])

    // Material UI Styling //
    const useStyles = makeStyles({
        root: {
            minWidth: 225,
            minHeight: 200,
            display: "flex"
        }
    })

    const classes = useStyles();
    // Material UI Styling //

    return (
        <div>

            {loading ?
                <CircularProgress size={200} color="secondary" />
                :
                weatherData &&
                <>
                    <Card className={classes.root}>
                        <div >
                            <div>
                                {`${location}`}
                            </div>
                            <div>
                                {weatherData.Temperature.Metric.Value}
                            </div>
                            <div>
                                {weatherData.WeatherText}
                            </div>
                        </div>
                        <img className="icon" src={`${imgURL}`} alt={`${weatherData.WeatherText}`} />
                        {console.log(key, "ppp")}
                        <FavoriteButton locationKey={key} />
                    </Card>
                </>


            }
        </div>
    )
}

export default CurrentWeather
