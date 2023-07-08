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
        default: darkMode ? '#006064' : 'rgba(255, 255, 255, 0.25)',
      },
      text: {
        primary: darkMode ? '#fff' : '#333',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: darkMode ? '#006064' : 'rgba(255, 255, 255, 0.2)',
            boxShadow: darkMode ? '0 8px 32px 0 rgba(31, 38, 135, 0.37)' : '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(0px)',
            webkitBackdropFilter: 'blur(0px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color: darkMode ? '#fff' : '#000000',
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
