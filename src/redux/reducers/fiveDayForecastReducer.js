const initialState = {
    loading: false,
    forecastData: [],
    error: ''
}

const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FORECAST_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_FORECAST_SUCCESS':
            return {
                ...state,
                loading: false,
                forecastData: action.payload,
                error: ""
            }
        case 'FETCH_FORECAST_FAILURE':
            return {
                ...state,
                loading: false,
                forecastData: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default forecastReducer;