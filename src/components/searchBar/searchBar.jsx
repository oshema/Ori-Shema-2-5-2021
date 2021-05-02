import React, { useEffect, useState } from 'react'
import './searchBar.css'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import CircularProgress from '@material-ui/core/CircularProgress';

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(false)


    const autoCompleteAPI = async query => {
        setSearchQuery(query)
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        const BASE_URL = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
        const API_CALL = `${BASE_URL}?q=${query}&apikey=${API_KEY}`

        if (query.length > 1) {
            setLoading(true)
            try {
                const response = await axios.get(API_CALL)
                const locationList = extractSearchList(response.data)
            }
            //dont forget to handle error
            catch (err) {
                console.log(err)
            }
            setLoading(false)
        }
    }

    const extractSearchList = (data) => {
        return data.map(result => {
            const country = result.Country.LocalizedName
            const city = result.LocalizedName
            const key = result.Key
            return { country, city, key }
        })

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
                {loading && <CircularProgress size={100} className="loading" />}


            </div>
        </div>
    )
}

export default SearchBar
