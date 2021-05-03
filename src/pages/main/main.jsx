import React, { useEffect, useState } from 'react';
import './main.css';
import SearchBar from '../../components/searchBar/searchBar';
import CurrentWeather from '../../components/currentWeather/currentWeather';


function Main() {

    return (
        <div className="mainImg">
            <div className="topHeroContainer">
                <div>
                    <CurrentWeather />
                </div>
                <div>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Main;
