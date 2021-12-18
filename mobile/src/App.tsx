import * as React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Store } from './Store/Store';
import Button from './Components/Button/Button.component';

const App: React.FC = (): JSX.Element => {
    return (
        <Provider store={Store}>
            <SafeAreaView
                style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
            >
                <Button />
            </SafeAreaView>
        </Provider>
    );
};

export default App;
