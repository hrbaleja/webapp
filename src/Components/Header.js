import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from './ThemeContext'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export default function MyAppBar() {
  const { darkMode, toggleDarkMode, loggedIn, toggleLoggedIn } = useContext(ThemeContext);
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleMenu = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleLogin = () => {
    toggleLoggedIn(!loggedIn);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Services', link: '/services' },
    { text: 'Portfolio', link: '/portfolio' },
    { text: 'Contact Us', link: '/contact' },
    { text: 'About Us', link: '/about' },
  ];

  const menuList = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem key={index} component={Link} to={item.link} selected={item.link === location.pathname}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" sx={{
      background: 'rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      backdropFilter: 'blur(0px)',
      webkitBackdropFilter: 'blur(0px)',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      color:'#000000'
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        #Software Solutions
        </Typography>

        {/* Responsive Menu Button */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={toggleMenu} sx={{ fontWeight: 'bold' }}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Menu Items */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={Link}
                  to={item.link}
                  selected={item.link === location.pathname}
                  sx={{
                    color: item.link === location.pathname ? 'rgba(6, 106, 137, 0.55 )' : 'inherit',
                    fontWeight: 'bold',
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Grid>
            <Grid item>
              <IconButton color="inherit" onClick={toggleDarkMode}>
                {darkMode ? <FiSun /> : <FiMoon />}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit" onClick={toggleLogin}>
                {loggedIn ? <LogoutIcon /> : <AccountCircleIcon />}
              </IconButton>
            </Grid>
          </Grid>
        </Box>

        {/* Responsive Menu Items */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleMenu}
          sx={{
            '& .MuiDrawer-paper': {
              width: '200px',
             
            },
          }}
        >
          <Box p={2} onClick={toggleMenu}>
            {menuList}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
