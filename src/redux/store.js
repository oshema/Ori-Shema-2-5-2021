import { createStore, applyMiddleware } from 'redux';
import weatherReducer from './reducers/currentWeatherReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    weatherReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store