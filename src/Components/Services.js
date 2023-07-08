import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';

const Services = () => {
  const services = [
    'Flight and Hotel Bookings',
    'Vacation Packages',
    'Travel Guides and Recommendations',
    'Travel Blog and Articles',
    '24/7 Customer Support',
  ];

  const uniqueFeatures = [
    'Customized Trip Planning',
    'Exclusive Deals and Discounts',
    'Expert Travel Advice',
    'User-Friendly Interface',
    'Personalized Recommendations',
  ];

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h4" align="center" gutterBottom>
          Services and Offerings
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="h4" component="h4" gutterBottom>
                Overview of Services
              </Typography>
              <ul>
                {services.map((service) => (
                  <Typography variant="body1" component="li" key={service} gutterBottom>
                    {service}
                  </Typography>
                ))}
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="h4" component="h4" gutterBottom>
                Unique Features
              </Typography>
              <ul>
                {uniqueFeatures.map((feature) => (
                  <Typography variant="body1" component="li" key={feature} gutterBottom>
                    {feature}
                  </Typography>
                ))}
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
