import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';

function ErrorHandler({ errorMessage }) {
    return (
        <div>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{errorMessage}</strong>
            </Alert>
        </div>
    )
}

export default ErrorHandler
