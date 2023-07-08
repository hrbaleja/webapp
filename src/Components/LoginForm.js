import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  SwipeableDrawer,
  AppBar,
  Toolbar,
  IconButton,
  
  Container,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ReCAPTCHA from 'react-google-recaptcha';

const LoginForm = () => {
  const [isLoginDrawerOpen, setLoginDrawerOpen] = useState(false);
  const [isRegistrationDrawerOpen, setRegistrationDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
    registrationName: '',
    registrationEmail: '',
    registrationPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission logic here
    console.log('Login form submitted:', formData);
    // Reset form fields
    setFormData({
      loginEmail: '',
      loginPassword: '',
      registrationName: '',
      registrationEmail: '',
      registrationPassword: '',
    });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Handle registration form submission logic here
    console.log('Registration form submitted:', formData);
    // Reset form fields
    setFormData({
      loginEmail: '',
      loginPassword: '',
      registrationName: '',
      registrationEmail: '',
      registrationPassword: '',
    });
  };

  const handleLoginDrawerOpen = () => {
    setLoginDrawerOpen(true);
  };

  const handleLoginDrawerClose = () => {
    setLoginDrawerOpen(false);
  };

  const handleRegistrationDrawerOpen = () => {
    setRegistrationDrawerOpen(true);
  };

  const handleRegistrationDrawerClose = () => {
    setRegistrationDrawerOpen(false);
  };

  const loginDrawer = (
    <SwipeableDrawer anchor="left" open={isLoginDrawerOpen} onClose={handleLoginDrawerClose} onOpen={handleLoginDrawerOpen}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Login</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 2 }}>
        <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="loginEmail"
            value={formData.loginEmail}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            name="loginPassword"
            value={formData.loginPassword}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <ReCAPTCHA sitekey="6LftygYnAAAAAAYRbATt9e8XmvqlYThJUR8RmSdc" />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </Container>
    </SwipeableDrawer>
  );

  const registrationDrawer = (
    <SwipeableDrawer anchor="left" open={isRegistrationDrawerOpen} onClose={handleRegistrationDrawerClose} onOpen={handleRegistrationDrawerOpen}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Registration</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 2 }}>
        <Box component="form" onSubmit={handleRegistrationSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="registrationName"
            value={formData.registrationName}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="registrationEmail"
            value={formData.registrationEmail}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            name="registrationPassword"
            value={formData.registrationPassword}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <ReCAPTCHA sitekey="6LftygYnAAAAAAYRbATt9e8XmvqlYThJUR8RmSdc" />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Box>
      </Container>
    </SwipeableDrawer>
  );

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Login or Register
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <IconButton onClick={handleLoginDrawerOpen}>
            <AccountCircle fontSize="large" />
            <Typography variant="body1">Login</Typography>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={handleRegistrationDrawerOpen}>
            <AccountCircle fontSize="large" />
            <Typography variant="body1">Register</Typography>
          </IconButton>
        </Grid>
      </Grid>
      {loginDrawer}
      {registrationDrawer}
    </Box>
  );
};

export default LoginForm;
