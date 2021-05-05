import React, { useEffect, useState } from 'react';
import './searchBar.css';
import SearchItem from './searchItem';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TextField from '@material-ui/core/TextField';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import { ButtonBase } from '@material-ui/core';
import ErrorHandler from '../../utilities/errorHandler';

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [searchList, setSearchList] = useState('')
    const [error, setError] = useState("")

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
            catch (err) {
                if (err.response) {
                    setError(err.response.data.Message)
                    setTimeout(() => {
                        setError(false)
                    }, 3000);
                }
                else {
                    setError(err.message)
                    setTimeout(() => {
                        setError(false)
                    }, 3000);
                }
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
        list: {
            position: "absolute",
            width: '100%',
            maxWidth: 600,
            overflow: 'auto',
            maxHeight: 135,
            backgroundColor: "rgba(148, 240, 240, 0.075);",
            '@media (max-width: 900px)': {
                maxWidth: 300,
                maxHeight: 100
            },
        },
        searchIcon: {
            fontSize: "50px",
            '@media (max-width: 900px)': {
                display: "none"
            }
        },
    }));

    const classes = useStyles();
    // Material UI Styling //


    return (
        <div>
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
                    <ButtonBase className={classes.searchIcon} onClick={() => autoCompleteAPI(searchQuery)}>
                        <SearchSharpIcon className={classes.searchIcon} />
                    </ButtonBase>
                </div>
                {error ?
                    <ErrorHandler errorMessage={error} />
                    :
                    loading ?
                        <CircularProgress size={100} className="loading" />
                        :
                        searchList &&
                        <ClickAwayListener onClickAway={() => setSearchList('')}>
                            <List className={classes.list} >
                                {searchList.map(item =>
                                    <SearchItem
                                        key={item.key}
                                        city={item.city}
                                        country={item.country}
                                        locationKey={item.key}
                                        clearList={setSearchList}
                                    />)}
                            </List>
                        </ClickAwayListener>
                }
            </div>
        </div>
    )
}

export default SearchBar
