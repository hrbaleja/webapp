import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box,  Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from './ThemeContext'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export default function MyAppBar() {
  const { darkMode, toggleDarkMode, loggedIn, toggleLoggedIn } = useContext(ThemeContext);
  // const isSmallScreen = useMediaQuery('(max-width:600px)');
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
        <ListItem  key={index}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        {/* Responsive Menu Button */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
        </Box>


        {/* Desktop Menu Items */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">About Us</Button>
        </Box>
        {/* Light/Dark Mode Toggle */}
        <IconButton color="inherit" onClick={toggleDarkMode}>
          {darkMode ? <FiSun /> : <FiMoon />}
        </IconButton>
  {/* Login/Logout Button */}
  <IconButton color="inherit" onClick={toggleLogin}>
          {loggedIn ? <LogoutIcon /> : <AccountCircleIcon />}
        </IconButton>
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
