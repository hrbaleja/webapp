import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const AboutUsSection = () => {
  const missionStatement = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt nunc vel congue mollis.';
  const coreValues = ['Innovation', 'Quality', 'Customer Satisfaction', 'Collaboration'];

  const overview = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat. Suspendisse volutpat ante a tellus malesuada, sed consequat velit mattis. Vestibulum sagittis nisl sed arcu venenatis, a volutpat tortor bibendum. Nulla facilisi.`;

  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      photo: 'https://source.unsplash.com/300x300/?award',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      photo: 'https://source.unsplash.com/300x300/?award',
    },
    {
      name: 'David Johnson',
      position: 'Lead Developer',
      photo: 'https://source.unsplash.com/300x300/?award',
    },
  ];

  const achievements = ['Award 1', 'Award 2', 'Certification 1', 'Certification 2'];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center', mb: 4 }}>
        <Typography variant="body1" gutterBottom>
          {missionStatement}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Core Values: {coreValues.join(', ')}
        </Typography>
      </Box>
      <Typography variant="body2" gutterBottom>
        {overview}
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                sx={{ height: 200 }}
                image={member.photo}
                title={member.name}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {member.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Notable Achievements
        </Typography>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>
              <Typography variant="body2">{achievement}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default AboutUsSection;
