import React, { useEffect, useState } from 'react'
import './searchBar.css'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ButtonBase from '@material-ui/core/ButtonBase';

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('')


    const autoCompleteAPI = async query => {
        setSearchQuery(query)
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        const BASE_URL = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
        const API_CALL = `${BASE_URL}?q=${query}&apikey=${API_KEY}`

        if (query.length > 1) {
            try {
                const response = await axios.get(API_CALL)
                console.log(response)
            }
            //dont forget to handle error
            catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div>
            <div className="searchBarContainer">

                <TextField
                    className="searchBar"
                    label="What's The Weather In..."
                    placeholder="Search"
                    variant="outlined"
                    value={searchQuery}
                    onChange={e => { autoCompleteAPI(e.target.value) }}
                />
                <ButtonBase>
                    <SearchSharpIcon
                        className="searchButton"
                        style={{ fontSize: "56px" }}
                    />
                </ButtonBase>

            </div>
        </div>
    )
}

export default SearchBar
