import React from 'react';
import { Box, Typography, Button, Grid, useTheme } from '@mui/material';

const ServicesSection = () => {
  const theme = useTheme();

  const services = [
    {
      category: 'Web Development',
      description: 'Build modern and responsive websites tailored to your needs.',
      features: ['Front-end development', 'Back-end development', 'Responsive design'],
    },
    {
      category: 'Software Development',
      description: 'Create custom software solutions to streamline your business processes.',
      features: ['Custom application development', 'Database design and management', 'Integration services'],
    },
    {
      category: 'Cloud Computing',
      description: 'Harness the power of cloud computing for scalability and efficiency.',
      features: ['Cloud infrastructure setup', 'Migration and deployment', 'Cloud management and optimization'],
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Our IT Services
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 3,
                height: '100%',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                backgroundColor: theme.palette.background.default,
                color: '#fff',
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                {service.category}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {service.description}
              </Typography>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Button variant="outlined" color="primary">
                Explore More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
