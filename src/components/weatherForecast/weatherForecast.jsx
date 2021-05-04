import React, { useEffect, useState } from 'react';
import './weatherForecast.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecastData } from '../../redux/actions/fiveDayForecastActions';
import ForecastDay from './forecastDay';
import CircularProgress from '@material-ui/core/CircularProgress';

function WeatherForecast() {

    const dispatch = useDispatch();
    const forecastList = useSelector(state => state.forecast)
    const { forecastData, loading } = forecastList;

    useEffect(() => {
        //Set default forecast to Tel Aviv
        dispatch(fetchForecastData("215854"))
    }, [])

    return (
        <div className="forecastLayout">
            {loading ?
                <CircularProgress size={200} color="secondary" />
                :
                (forecastData.length != 0) &&
                forecastData.map((forecast, index) =>
                    <ForecastDay
                        key={index}
                        day={forecast.Day}
                        night={forecast.Night}
                        temp={forecast.Temperature}
                        date={forecast.Date}
                    />)
            }
        </div>
    )
}

export default WeatherForecast
