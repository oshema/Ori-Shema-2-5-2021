const initialState = {
    loading: false,
    weatherData: '',
    location: '',
    key: '',
    error: ''
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_WEATHER_SUCCESS':
            return {
                ...state,
                loading: false,
                weatherData: action.payload.data,
                location: action.payload.location,
                key: action.payload.key,
                error: ""
            }
        case 'FETCH_WEATHER_FAILURE':
            return {
                ...state,
                loading: false,
                weatherData: [],
                location: '',
                key: '',
                error: action.error
            }
        default:
            return state;
    }
}

export default weatherReducer;