export const setCssOfWeather = (temp) => {
    //HOT
    if (temp > 29)
        return "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)"
    //WARM
    else if (temp > 22 && temp < 30)
        return "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"
    //COLD
    else if (temp < 23 && temp > 12)
        return "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)"
    //COLDER
    else if (temp < 13 && temp > 0)
        return "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)"
    //FREEZING
    else
        return "linear-gradient(to top, #dfe9f3 0%, white 100%)"
}