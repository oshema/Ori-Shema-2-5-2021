import weatherReducer from './currentWeatherReducer';
import forecastReducer from './fiveDayForecastReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentWeather: weatherReducer,
    forecast: forecastReducer
})

export default rootReducer;