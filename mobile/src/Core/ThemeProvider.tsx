import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Theme from './Theme';

interface Props {
    children?: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = (props: Props): JSX.Element => {
    return <PaperProvider theme={Theme}>{props.children}</PaperProvider>;
};

export default ThemeProvider;
