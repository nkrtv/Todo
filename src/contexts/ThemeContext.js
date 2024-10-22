import React, { createContext, useState, useContext } from 'react';
import { lightTheme, darkTheme } from '../styles/theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    const currentTheme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <MuiThemeProvider theme={currentTheme}>
            <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
                {children} 
            </ThemeContext.Provider>
        </MuiThemeProvider>
    );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;


