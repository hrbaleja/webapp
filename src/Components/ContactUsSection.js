import React from 'react';
import { Box, Typography, Grid, TextField, Button,  IconButton, Card, CardMedia } from '@mui/material';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const ContactUsSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <Button type="submit" variant="contained" color="primary">
                  Send Message
                </Button>
              </Box>
            </form>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2" align="center" gutterBottom>
              123 Main Street, City, Country
            </Typography>
            <Typography variant="body2" align="center" gutterBottom>
              Phone: 123-456-7890
            </Typography>
            <Typography variant="body2" align="center" gutterBottom>
              Email: info@example.com
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <FiFacebook />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <FiTwitter />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <FiInstagram />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      </Grid>
      {/* Add the Google Maps component or embed your custom map here */}
      <Box sx={{ mt: 4 }}>
        <Card>
          <CardMedia
            sx={{ height: 400 }}
            image="https://maps.googleapis.com/maps/api/staticmap?center=your_location&zoom=13&size=600x400&key=YOUR_API_KEY"
            title="Company Location"
          />
        </Card>
      </Box>
    </Box>
  );
};

export default ContactUsSection;
