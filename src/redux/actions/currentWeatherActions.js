import axios from 'axios';

export const fetchWeatherRequest = () => {
    return {
        type: 'FETCH_WEATHER_REQUEST'
    }
}

export const fetchWeatherSuccess = (weatherData, location, key) => {
    return {
        type: 'FETCH_WEATHER_SUCCESS',
        payload: {
            data: weatherData,
            location,
            key
        }
    }
}

export const fetchWeatherFailure = (error) => {
    return {
        type: 'FETCH_WEATHER_FAILURE',
        error
    }
}

export const fetchWeatherData = (locationKey, city) => {
    return async (dispatch) => {
        try {
            dispatch(fetchWeatherRequest())
            const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
            const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`)
            dispatch(fetchWeatherSuccess(response.data[0], city, locationKey))
        }
        catch (err) {
            dispatch(fetchWeatherFailure(err))
        }

    }

} 