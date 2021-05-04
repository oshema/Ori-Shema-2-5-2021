import weatherReducer from './currentWeatherReducer';
import forecastReducer from './fiveDayForecastReducer';
import favoritesReducer from './favoritesReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentWeather: weatherReducer,
    forecast: forecastReducer,
    favorites: favoritesReducer
})

export default rootReducer;