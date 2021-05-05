import React, { useEffect } from 'react';
import './currentWeather.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../../redux/actions/currentWeatherActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeatherCard from '../weatherCard/weatherCard';

function CurrentWeather() {

    const dispatch = useDispatch()
    const selectedWeather = useSelector(state => state.currentWeather)
    const { loading, weatherData, location, key, error } = selectedWeather;

    //Set default forecast to Tel Aviv
    useEffect(() => {
        if (!key)
            dispatch(fetchWeatherData("215854", "Tel Aviv"))
    }, [])

    return (
        <div>
            {loading ?
                <CircularProgress size={200} color="secondary" />
                :
                weatherData.length !== 0 && (key ?
                    <WeatherCard
                        location={location}
                        temperature={weatherData.Temperature.Metric.Value}
                        info={weatherData.WeatherText}
                        imageURL={weatherData.WeatherIcon}
                        locationKey={key}
                        buttonSize="48px" />
                    :
                    <WeatherCard
                        location={"Tel Aviv"}
                        temperature={weatherData.Temperature.Metric.Value}
                        info={weatherData.WeatherText}
                        imageURL={weatherData.WeatherIcon}
                        locationKey={"215854"}
                        buttonSize="48px" />
                )}
        </div>
    )
}

export default CurrentWeather
