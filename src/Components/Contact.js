import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, TextField, Button } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                123 Main Street, City, Country
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Phone: 123-456-7890
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Email: info@example.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Send an Inquiry
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
