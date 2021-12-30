import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@Core';
import { Store } from '@Store/Store';
import BaseNavigator from '@Navigation/BaseNavigator.navigation';

const App: React.FC = (): JSX.Element => {
    return (
        <Provider store={Store}>
            <ThemeProvider>
                <BaseNavigator />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
