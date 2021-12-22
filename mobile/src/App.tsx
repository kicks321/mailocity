import * as React from 'react';
import { Provider } from 'react-redux';
import { ContainerProvider, ThemeProvider } from '@Core';
import { Store } from '@Store/Store';
import { BaseNavigator } from '@Navigation';

const App: React.FC = (): JSX.Element => {
    return (
        <Provider store={Store}>
            <ThemeProvider>
                <ContainerProvider>
                    <BaseNavigator />
                </ContainerProvider>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
