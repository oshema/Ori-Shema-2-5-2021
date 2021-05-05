import React, { useEffect, useState } from 'react';
import './weatherCard.css'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../redux/actions/currentWeatherActions';
import { fetchForecastData } from '../../redux/actions/fiveDayForecastActions';
import { extractWeatherIcon } from '../../utilities/extractWeatherIcon';
import { setCssOfWeather } from '../../utilities/DynamicCardCssBackground';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FavoriteButton from '../favoriteButton/favoriteButton';
import { ButtonBase } from '@material-ui/core';

function WeatherCard(props) {
    const { location,
        temperature,
        info,
        imageURL,
        locationKey,
        buttonSize,
        isFavoriteButton = true,
        clickable = false
    } = props

    let history = useHistory();
    const dispatch = useDispatch()

    const [weatherCSS, setWeatherCSS] = useState("linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)")
    const [imgURL, setImgURL] = useState('')


    useEffect(() => {
        const url = extractWeatherIcon(imageURL)
        setImgURL(url)
        const cssBackground = setCssOfWeather(temperature)
        setWeatherCSS(cssBackground)
    }, [imageURL, temperature])


    const redirectFromFavorites = () => {
        dispatch(fetchWeatherData(locationKey, location))
        dispatch(fetchForecastData(locationKey))
        let path = `/`;
        history.push(path);
    }


    // Material UI Styling //
    const useStyles = makeStyles({
        card: {
            marginTop: "20px",
            maxWidth: "250px",
            height: "240px",
            backgroundImage: weatherCSS,
            overflow: 'auto',
            '@media (max-width: 900px)': {
                maxHeight: "150px",
                marginTop: "80px",
                marginLeft: "20px"
            }
        },
        favoriteCards: {
            marginTop: "20px",
            width: "200px",
            height: "240px",
            backgroundImage: weatherCSS,
            overflow: 'auto',
            '@media (max-width: 1000px)': {
                width: "150px",
            },
            '@media (max-width: 750px)': {
                height: "75px",

            }
        },
    })

    const classes = useStyles();
    // Material UI Styling //

    return (
        <div >
            <>
                {clickable ?
                    <ButtonBase onClick={() => redirectFromFavorites()}>
                        <Card className={classes.favoriteCards}>
                            <div className="titleFavorite">
                                {`${location}`}
                            </div>
                            <div>
                                <div className="tempAndIconLayout">
                                    <div className="tempFavorite">
                                        {`${temperature}\u00B0`}
                                    </div>
                                    <div>
                                        <img className="iconFavorite" src={`${imgURL}`} alt={`${info}`} />
                                    </div>
                                </div>
                                <div className="info">
                                    {info}
                                </div>
                            </div>
                        </Card>
                    </ButtonBase>
                    :
                    <Card className={classes.card}>
                        <div className="weatherTitle">
                            {`${location}`}
                        </div>
                        <div>
                            <div className="tempAndIconLayout">
                                <div className="temp">
                                    {`${temperature}\u00B0`}
                                </div>
                                <div>
                                    <img className="icon" src={`${imgURL}`} alt={`${info}`} />
                                </div>
                            </div>
                            <div className="info">
                                {info}
                            </div>
                        </div>
                        {isFavoriteButton &&
                            <div className="favoriteButton">
                                <FavoriteButton locationKey={locationKey} locationName={location} iconSize={buttonSize} />
                            </div>
                        }
                    </Card>
                }
            </>
        </div>
    )
}

export default WeatherCard
