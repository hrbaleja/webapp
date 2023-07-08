import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  const imageUrl = 'https://source.unsplash.com/1920x1080/?information-technology';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: '#ffffff',
      }}
    >
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Engaging Headline or Tagline
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
