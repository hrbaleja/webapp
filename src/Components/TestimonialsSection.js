import React from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

const TestimonialsSection = () => {
  const testimonials = [
    {
        name: 'John Doe',
        company: 'ABC Company',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
        logo: 'https://source.unsplash.com/100x100/?company1',
      },
      {
        name: 'Jane Smith',
        company: 'XYZ Corporation',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
        logo: 'https://source.unsplash.com/100x100/?company2',
      },{
        name: 'John Doe',
        company: 'ABC Company',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
        logo: 'https://source.unsplash.com/100x100/?company1',
      },
      {
        name: 'Jane Smith',
        company: 'XYZ Corporation',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
        logo: 'https://source.unsplash.com/100x100/?company2',
      },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Testimonials
      </Typography>
   

<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {testimonials.map((testimonial, index) => (
           <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <CardMedia
                sx={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 2 }}
                image={testimonial.logo}
                title={testimonial.company}
              />
              <Typography variant="body2" gutterBottom align="center">
                "{testimonial.testimonial}"
              </Typography>
              <Typography variant="subtitle1" align="center">
                - {testimonial.name}
              </Typography>
              <Typography variant="subtitle2" align="center" color="text.secondary">
                {testimonial.company}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
