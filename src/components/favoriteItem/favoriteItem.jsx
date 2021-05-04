import React, { useEffect, useState } from 'react';
import './favoriteItem.css';
import FavoriteButton from '../favoriteButton/favoriteButton';

function FavoriteItem(props) {

    const { temp, iconNumber, text, locationKey } = props

    const [temperature, setTemperature] = useState('')
    const [info, setInfo] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {
        setTemperature(temp.Metric.Value)
        setInfo(text)
        setImg(extractIconURL(iconNumber))
    }, [props])

    const extractIconURL = (number) => {
        let imgURL = ''
        if (number < 10)
            imgURL = `https://developer.accuweather.com/sites/default/files/0${number}-s.png`
        else
            imgURL = `https://developer.accuweather.com/sites/default/files/${number}-s.png`
        return imgURL;
    }

    return (
        <div className="favoriteItemLayout">
            <div>{`${temperature} / ${info}`}</div>
            <img src={`${img}`} alt={`${info}`} />
            <div>
                <FavoriteButton locationKey={locationKey} />
            </div>
        </div>
    )
}

export default FavoriteItem
