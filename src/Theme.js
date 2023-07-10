import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'rgba(146, 254, 157, 1)',
      
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
        background:'rgba(146, 254, 157, 1)',
        color:'#fff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        Box: {
          background: 'rgba( 255, 255, 255, 0.15 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 4.5px )',
          WebkitBackdropFilter: 'blur( 4.5px )',
          borderRadius: '10px',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
        },
      },
    },
  },
});

export default theme;
