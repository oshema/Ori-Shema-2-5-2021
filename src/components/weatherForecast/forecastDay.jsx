import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';

function ForecastDay(props) {

    const { day, night, temp, date } = props

    const [dayTime, setDayTime] = useState('')
    const [nightTime, setNightTime] = useState('')
    const [dayOfTheWeek, setDayOfTheWeek] = useState('')
    const [maxTemp, setMaxTemp] = useState('')
    const [minTemp, setMinTemp] = useState('')


    useEffect(() => {
        setDayTime(extractIconData(day))
        setNightTime(extractIconData(night))
        setDayOfTheWeek(extractDayOfTheWeek(date))
        setMaxTemp(temp.Maximum.Value)
        setMinTemp(temp.Minimum.Value)
    }, [props])


    const extractIconData = (values) => {
        const info = values.IconPhrase
        let imgURL = ''
        if (values.Icon < 10)
            imgURL = `https://developer.accuweather.com/sites/default/files/0${values.Icon}-s.png`
        else
            imgURL = `https://developer.accuweather.com/sites/default/files/${values.Icon}-s.png`

        return { imgURL, info }
    }

    const extractDayOfTheWeek = (forecastDate) => {
        let newDateFormat = new Date(forecastDate).toDateString()
        return newDateFormat.split(" ")[0]
    }

    return (
        <Card>
            <div>{dayOfTheWeek}</div>
            <div>{`day: ${dayTime.info}`}</div>
            <img src={`${dayTime.imgURL}`} alt={`${dayTime.info}`} />
            <div>{`night: ${nightTime.info}`}</div>
            <img src={`${nightTime.imgURL}`} alt={`${nightTime.info}`} />
            <div>{`Temp - ${maxTemp} - ${minTemp}`}</div>
        </Card>
    )
}

export default ForecastDay
