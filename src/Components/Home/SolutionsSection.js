import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia,useTheme } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';

const SolutionsSection = () => {
  const theme = useTheme();

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

  

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Our Solutions
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card   sx={{
                p: 3,
                height: '100%',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
              }}>
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
                <Box sx={{ mt: 4 }} align="left">
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
     
    </Box>
  );
};

export default SolutionsSection;
