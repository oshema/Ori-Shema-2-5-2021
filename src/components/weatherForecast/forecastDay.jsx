import React, { useEffect, useState } from 'react';
import './forecastDay.css';
import { setCssOfWeather } from '../../utilities/DynamicCardCssBackground';
import { extractWeatherIcon } from '../../utilities/extractWeatherIcon';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

function ForecastDay(props) {

    const { day, night, temp, date } = props

    const [dayTime, setDayTime] = useState('')
    const [nightTime, setNightTime] = useState('')
    const [dayOfTheWeek, setDayOfTheWeek] = useState('')
    const [maxTemp, setMaxTemp] = useState('')
    const [minTemp, setMinTemp] = useState('')
    const [avgTemperature, setAvgTemperature] = useState('')
    const [weatherCSS, setWeatherCSS] = useState("linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)")

    useEffect(() => {
        setDayTime(extractWeatherIcon(day.Icon))
        setNightTime(extractWeatherIcon(night.Icon))
        setDayOfTheWeek(extractDayOfTheWeek(date))
        setMaxTemp(temp.Maximum.Value)
        setMinTemp(temp.Minimum.Value)
    }, [props])

    useEffect(() => {
        let avgTemp = (maxTemp + minTemp) / 2
        avgTemp = Math.round(avgTemp * 10) / 10
        setAvgTemperature(avgTemp)
        const cssBackground = setCssOfWeather(avgTemp)
        setWeatherCSS(cssBackground)
    }, [maxTemp, minTemp])

    const extractDayOfTheWeek = (forecastDate) => {
        let newDateFormat = new Date(forecastDate).toDateString()
        return newDateFormat.split(" ")[0]
    }

    // Material UI Styling //
    const useStyles = makeStyles({
        card: {
            marginTop: "20px",
            maxWidth: "250px",
            height: "170px",
            backgroundImage: weatherCSS,
            overflow: 'auto',
            '@media (max-width: 1060px)': {
                maxWidth: "150px"
            }
        }
    })

    const classes = useStyles();
    // Material UI Styling //

    return (
        <div className="forecastCardLayout">
            <div className="dayTitle">{dayOfTheWeek}</div>
            <Card className={classes.card}>
                <div className="ForecastsTemp">{`${maxTemp}\u00B0 - ${minTemp}\u00B0`}</div>
                <div className="minimizeForecastTemp">{avgTemperature}</div>
                <div className="nightAndDayLayout">
                    <div>
                        <div>{`${day.IconPhrase}`}</div>
                        <img src={`${dayTime}`} alt={`${day.IconPhrase}`} />
                    </div>
                    <Divider orientation="vertical" flexItem={true} />
                    <div className="nightInfo">
                        <div>{`${night.IconPhrase}`}</div>
                        <img src={`${nightTime}`} alt={`${night.IconPhrase}`} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ForecastDay
