
export const extractWeatherIcon = (number) => {
    console.log("aa")
    let imgURL = ''
    if (number < 10)
        imgURL = `https://developer.accuweather.com/sites/default/files/0${number}-s.png`
    else
        imgURL = `https://developer.accuweather.com/sites/default/files/${number}-s.png`
    return imgURL
}