import React, { useEffect, useState } from 'react';
import './main.css';
import SearchBar from '../../components/searchBar/searchBar';
import CurrentWeather from '../../components/currentWeather/currentWeather';
import WeatherForecast from '../../components/weatherForecast/weatherForecast';


function Main() {

    return (
        <div className="mainImg">
            <div className="topHeroContainer">
                <div>
                    <div className="searchLogoContainer">
                        <img className="searchImg" src={'./cloudSearch.png'} />
                        <div>

                            <div className="searchTitle">
                                Cloud Search
                            </div>
                            <div className="searchSubtitle">
                                Your way to get around the weather
                            </div>
                        </div>
                    </div>
                    <SearchBar />
                </div>
                <div>
                    <CurrentWeather />
                </div>
            </div>
            <WeatherForecast />
        </div>
    )
}

export default Main;
