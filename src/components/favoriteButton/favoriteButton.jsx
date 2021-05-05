import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonBase } from '@material-ui/core';
import { removeFavorite } from '../../redux/actions/favoritesActions';
import { addLocationToFavorites } from '../../redux/actions/favoritesActions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

function FavoriteButton({ locationKey, locationName, iconSize }) {

    const [isFavorite, setIsFavorite] = useState(false)

    const dispatch = useDispatch()
    const favoritesData = useSelector(state => state.favorites)
    const favoritesKeys = favoritesData.locationKeys

    useEffect(() => {
        checkIfFavorite(locationKey, favoritesKeys)
    }, [locationKey, favoritesKeys])

    const checkIfFavorite = (keyToCheck, favoritesKeys) => {
        const isKeyFevorite = favoritesKeys.includes(keyToCheck);
        if (isKeyFevorite)
            setIsFavorite(true)
        else
            setIsFavorite(false)
    }

    const addOrRemoveFromFavorites = () => {
        if (isFavorite)
            dispatch(removeFavorite(locationKey, locationName))
        else
            dispatch(addLocationToFavorites(locationKey, locationName))
    }

    // Material UI Styling //
    const useStyles = makeStyles({
        emptyHeart: {
            fontSize: iconSize,
            color: "rgb(128, 128, 128)"
        },
        fullHeart: {
            fontSize: iconSize,
            color: "rgb(233, 48, 88);"
        }
    })

    const classes = useStyles();
    // Material UI Styling //

    return (
        <div>
            <ButtonBase onClick={() => addOrRemoveFromFavorites()}>
                {isFavorite ?
                    <FavoriteIcon className={classes.fullHeart} />
                    :
                    <FavoriteBorderIcon className={classes.emptyHeart} />
                }
            </ButtonBase>
        </div>
    )
}

export default FavoriteButton
