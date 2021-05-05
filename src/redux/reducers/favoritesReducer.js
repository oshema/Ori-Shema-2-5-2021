const initialState = {
    loading: false,
    favoritesData: [],
    locationKeys: [],
    locationNames: [],
    error: ''
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                locationKeys: [...state.locationKeys, action.payload.locationKey],
                locationNames: [...state.locationNames, action.payload.locationName],
                error: ""
            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                locationKeys: state.locationKeys.filter(key => action.payload.locationKey !== key),
                locationNames: state.locationNames.filter(name => action.payload.locationName !== name),
                error: ""
            }
        case 'ADD_FAVORITE_FAILURE':
            return {
                ...state,
                error: action.error
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
                error: action.payload
            }
        default:
            return state;
    }
}

export default favoritesReducer;