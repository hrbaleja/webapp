import React, { createContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const CustomThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? 'rgba(71, 70, 70, 0.8)' : 'rgba(255, 255, 255, 0.25)',
      },
      text: {
        primary: darkMode ? '#fff' : '#333',
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
