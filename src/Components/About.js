import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut augue risus. Suspendisse potenti. Nunc iaculis ex id nibh molestie ultrices. Sed pulvinar velit in consectetur hendrerit. Nullam a sem ac mi venenatis venenatis. Vivamus nec ante lacus. Proin euismod vehicula urna, ac dapibus odio. Sed viverra vehicula lectus, a iaculis justo vulputate a.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Our Values
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut augue risus. Suspendisse potenti. Nunc iaculis ex id nibh molestie ultrices. Sed pulvinar velit in consectetur hendrerit. Nullam a sem ac mi venenatis venenatis. Vivamus nec ante lacus. Proin euismod vehicula urna, ac dapibus odio. Sed viverra vehicula lectus, a iaculis justo vulputate a.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
