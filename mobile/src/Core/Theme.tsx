import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

interface Props {
    children?: React.ReactNode;
}

const theme: ReactNativePaper.Theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#a2c4fa',
        accent: '#5c5c5c',
    },
};

const ThemeProvider: React.FC<Props> = (props: Props): JSX.Element => {
    return <PaperProvider theme={theme}>{props.children}</PaperProvider>;
};

export default ThemeProvider;
