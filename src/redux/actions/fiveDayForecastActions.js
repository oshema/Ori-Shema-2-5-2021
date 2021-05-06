import axios from 'axios';

export const fetchForecastRequest = () => {
    return {
        type: 'FETCH_FORECAST_REQUEST'
    }
}

export const fetchForecastSuccess = (forecastData) => {
    return {
        type: 'FETCH_FORECAST_SUCCESS',
        payload: forecastData,
    }
}

export const fetchForecastFailure = (error) => {
    return {
        type: 'FETCH_FORECAST_FAILURE',
        error
    }
}

export const fetchForecastData = (locationKey) => {
    return async (dispatch) => {
        try {
            dispatch(fetchForecastRequest())
            const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
            const response = await axios
                .get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&details=false&metric=true`)
            dispatch(fetchForecastSuccess(response.data.DailyForecasts))
        }
        catch (err) {
            if (err.response)
                dispatch(fetchForecastFailure(err.response.data.Message))
            else
                dispatch(fetchForecastFailure(err.message))
        }
    }
} 