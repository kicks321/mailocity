import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Button from './Components/Button/Button.component';
import { Store } from './Store/Store';

function App() {
    return (
        <Provider store={Store}>
            <Button />
        </Provider>
    );
}

export default App;
