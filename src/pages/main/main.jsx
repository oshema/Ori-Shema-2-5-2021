import React from 'react';
import './main.css';
import TextField from '@material-ui/core/TextField';

function Main() {
    return (
        <div className="mainImg">
            <TextField
                className="searchBar"
                label="What's The Weather In..."
                style={{ margin: 8 }}
                placeholder="Placeholder"
                variant="outlined"
            />
        </div>
    )
}

export default Main;
