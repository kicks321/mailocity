import React from 'react';
import { useSelector } from 'react-redux';
import { PaletteMode, ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { blue, grey, lightBlue } from '@mui/material/colors';
import { AppState } from '@/Types';
import GlobalStyles from './GlobalStyles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
    children?: React.ReactElement;
}

const ThemeProvider = (props: Props): React.ReactElement => {
    /**
     * @todo get dark mode from system or user agent
     */
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const { userState } = useSelector((state: AppState) => state);

    const isDarkMode = () => {
        return prefersDarkMode ? 'dark' : 'light';
    };

    const getDesignTokens = (mode?: PaletteMode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                      // palette values for light mode
                      primary: {
                          main: lightBlue[100],
                      },
                      divider: lightBlue[200],
                      background: {
                          default: '$fff',
                      },
                      text: {
                          primary: grey[900],
                          secondary: grey[100],
                      },
                  }
                : {
                      // palette values for dark mode
                      primary: {
                          main: lightBlue[200],
                      },
                      divider: blue[700],
                      background: {
                          default: grey[900],
                      },
                      text: {
                          primary: grey[100],
                          secondary: grey[200],
                      },
                  }),
        },
    });

    const theme = React.useMemo(
        () => createTheme(getDesignTokens(userState.mode)),
        [userState.mode],
    );

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            {props.children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
