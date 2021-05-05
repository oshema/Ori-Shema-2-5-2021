const initialState = {
    loading: false,
    favoritesData: [],
    locationKeys: [],
    locationNames: [],
    error: '',
    limitError: ''
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                locationKeys: [...state.locationKeys, action.payload.locationKey],
                locationNames: [...state.locationNames, action.payload.locationName],
                limitError: ''
            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                locationKeys: state.locationKeys.filter(key => action.payload.locationKey !== key),
                locationNames: state.locationNames.filter(name => action.payload.locationName !== name),
                limitError: ''
            }
        case 'ADD_FAVORITE_FAILURE':
            return {
                ...state,
                limitError: action.error
            }

        case 'FETCH_FAVORITES_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_FAVORITES_SUCCESS':
            return {
                ...state,
                loading: false,
                favoritesData: action.payload,
                error: ""
            }
        case 'FETCH_FAVORITES_FAILURE':
            return {
                ...state,
                loading: false,
                favoritesData: [],
                error: action.error
            }
        default:
            return state;
    }
}

export default favoritesReducer;