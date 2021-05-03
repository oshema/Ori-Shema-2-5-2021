import React, { useEffect, useState } from 'react';
import './searchBar.css';
import SearchItem from '../searchItem/searchItem';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';


function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [searchList, setSearchList] = useState('')

    const autoCompleteAPI = async query => {
        setSearchQuery(query)
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        const BASE_URL = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
        const API_CALL = `${BASE_URL}?q=${query}&apikey=${API_KEY}`
        if (query.length > 1) {
            setLoading(true)
            try {
                const response = await axios.get(API_CALL)
                const extractedList = extractSearchList(response.data)
                setSearchList(extractedList)
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

    // Material UI Styling //
    const useStyles = makeStyles(() => ({
        root: {
            position: "absolute",
            width: '100%',
            maxWidth: 600,
            overflow: 'auto',
            maxHeight: 230,
            backgroundColor: "rgba(148, 240, 240, 0.075);",
        },
        searchIcon: {
            fontSize: "50px"
        },
    }));

    const classes = useStyles();
    // Material UI Styling //


    return (
        <div>
            <div>
                <div>

                    <TextField
                        className="searchBar"
                        label="What's The Weather In..."
                        placeholder="Search"
                        variant="outlined"
                        value={searchQuery}
                        onChange={e => { autoCompleteAPI(e.target.value) }}
                    />
                    <ButtonBase onClick={() => autoCompleteAPI(searchQuery)}>
                        <SearchSharpIcon className={classes.searchIcon} />
                    </ButtonBase>
                </div>
                {loading ?
                    <CircularProgress size={100} className="loading" />
                    :
                    searchList &&
                    <List className={classes.root} >
                        {searchList.map(item =>
                            <SearchItem
                                key={item.key}
                                city={item.city}
                                country={item.country}
                                locationKey={item.key}
                                clearList={setSearchList}
                            />)}
                    </List>
                }
            </div>
        </div>
    )
}

export default SearchBar
