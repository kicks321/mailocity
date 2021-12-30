import { DefaultTheme } from 'react-native-paper';

const Theme: ReactNativePaper.Theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#a2c4fa',
        accent: '#5c5c5c',
    },
};

export default Theme;
