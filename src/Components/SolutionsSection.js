import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Web Development',
      description: 'Build modern and responsive websites tailored to your business needs.',
      icon: <LaptopIcon />,
    },
    {
      title: 'Cloud Computing',
      description: 'Leverage the power of cloud technology for scalability and efficiency.',
      icon: <CloudIcon />,
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your sensitive data and systems from cyber threats.',
      icon: <SecurityIcon />,
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      testimonial: 'Their cloud computing services enabled us to scale our business operations seamlessly and reduce costs.',
    },
    {
      name: 'Jane Smith',
      testimonial: 'Their cloud computing services enabled us to scale our business operations seamlessly and reduce costs.',
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Our Solutions
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                sx={{ height: 200 }}
                image={`https://source.unsplash.com/400x300/?${solution.title}`}
                title={solution.title}
              />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  {solution.icon}
                  <Typography variant="h6" component="h3" sx={{ ml: 2 }}>
                    {solution.title}
                  </Typography>
                </Box>
                <Typography variant="body2" gutterBottom>
                  {solution.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h3" align="center" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Typography variant="body2" gutterBottom>
                "{testimonial.testimonial}"
              </Typography>
              <Typography variant="subtitle1" component="p" align="right">
                - {testimonial.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: 4 }} align="center">
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default SolutionsSection;
