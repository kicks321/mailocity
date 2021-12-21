import { Typography } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import Button from './Components/Button/Button.component';
import ThemeProvider from './Core/Theme';
import { Store } from './Store/Store';

function App() {
    return (
        <Provider store={Store}>
            <ThemeProvider>
                <Button />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
