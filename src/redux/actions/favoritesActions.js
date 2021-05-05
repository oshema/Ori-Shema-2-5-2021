import axios from 'axios';

export const addLocationToFavorites = (key, city) => {
    return async (dispatch, getState) => {
        if (getState().favorites.locationKeys.length > 4) {
            dispatch(addFavoriteFailure("You can only have 5 favorites"))
            setTimeout(() => {
                dispatch(addFavoriteFailure(""))
            }, 3000);
        }
        else
            dispatch(addFavorite(key, city))
    }
}

export const addFavorite = (locationKey, locationName) => {
    return {
        type: 'ADD_FAVORITE',
        payload: {
            locationKey,
            locationName
        }
    }
}

export const addFavoriteFailure = (error) => {
    return {
        type: 'ADD_FAVORITE_FAILURE',
        error
    }
}

export const removeFavorite = (locationKey, locationName) => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: {
            locationKey,
            locationName
        }
    }
}

export const fetchFavoritesRequest = () => {
    return {
        type: 'FETCH_FAVORITES_REQUEST'
    }
}

export const fetchFavoritesSuccess = (favoritesData) => {
    return {
        type: 'FETCH_FAVORITES_SUCCESS',
        payload: favoritesData
    }
}

export const fetchFavoritesFailure = (error) => {
    return {
        type: 'FETCH_FAVORITES_FAILURE',
        error
    }
}

export const fetchFavoritesData = () => {
    return async (dispatch, getState) => {
        const favoritesKeys = getState().favorites.locationKeys
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        dispatch(fetchFavoritesRequest())
        const favoritesDataPromises = favoritesKeys.map(async key => {
            try {
                const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}`)
                return response.data[0]
            }
            catch (err) {
                return { err }
            }
        })
        const favoritesDataList = await Promise.all(favoritesDataPromises)
        //Check for errors
        const isError = favoritesDataList.filter(data => data.err)
        if (isError.length === 0) {
            dispatch(fetchFavoritesSuccess(favoritesDataList))
        }
        else {
            if (isError[0].err.response)
                dispatch(fetchFavoritesFailure(isError[0].err.response.data.Message))
            else {
                dispatch(fetchFavoritesFailure(isError[0].err.message))
            }
        }
    }
}
