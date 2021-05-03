import React, { useEffect, useState } from 'react';
import './currentWeather.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../../redux/actions/currentWeatherActions'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';

function CurrentWeather() {

    const dispatch = useDispatch()
    const selectedWeather = useSelector(state => state)
    const { loading, weatherData, location, error } = selectedWeather;


    useEffect(() => {
        dispatch(fetchWeatherData("215854", "Tel Aviv"))
    }, [])


    const extractData = (data) => {
        const temp = data.Temperature.Metric.Value
        const info = data.WeatherText
        let imgURL = ''
        if (data.WeatherIcon < 10)
            imgURL = `https://developer.accuweather.com/sites/default/files/0${data.WeatherIcon}-s.png`
        else
            imgURL = `https://developer.accuweather.com/sites/default/files/${data.WeatherIcon}-s.png`
        return { temp, info, imgURL, city: "Tel Aviv" }
    }

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
    //<img className="icon" src={`${defaultWeatherData.imgURL}`} alt={`${defaultWeatherData.info}`} />
    return (
        <div>

            {loading ?
                <CircularProgress size={200} color="secondary" />
                :
                weatherData &&
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

                </Card>

            }
        </div>
    )
}

export default CurrentWeather
