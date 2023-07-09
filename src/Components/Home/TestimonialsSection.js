import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      company: 'ABC Company',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
      logo: 'https://source.unsplash.com/100x100/?face-man',
    },{
      name: 'John Doe',
      company: 'ABC Company',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
      logo: 'https://source.unsplash.com/100x100/?face-man',
    },{
      name: 'John Doe',
      company: 'ABC Company',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
      logo: 'https://source.unsplash.com/100x100/?face-man',
    },{
      name: 'John Doe',
      company: 'ABC Company',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
      logo: 'https://source.unsplash.com/100x100/?face-man',
    },{
      name: 'John Doe',
      company: 'ABC Company',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
      logo: 'https://source.unsplash.com/100x100/?face-man',
    },{
      name: 'John Doe',
      company: 'ABC Company',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
      logo: 'https://source.unsplash.com/100x100/?face-man',
    },{
      name: 'John Doe',
      company: 'ABC Company',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae dui sit amet tellus ultrices vestibulum et sed erat.',
      logo: 'https://source.unsplash.com/100x100/?face-man',
    },
    // Add more testimonials
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => {
        if (prevSlide === testimonials.length - 1) {
          return 0;
        }
        return prevSlide + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials || testimonials.length === 0) {
    return null; // Render nothing if testimonials are empty
  }

  const currentTestimonial = testimonials[activeSlide];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Testimonials
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 2,
              transition: 'opacity 0.3s ease',
              opacity: activeSlide === 0 ? 1 : 0,
            }}
          >
            {currentTestimonial.logo && (
              <CardMedia
                sx={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 2 }}
                image={currentTestimonial.logo}
                title={currentTestimonial.company}
              />
            )}
            <Typography variant="body2" gutterBottom align="center">
              "{currentTestimonial.testimonial}"
            </Typography>
            <Typography variant="subtitle1" align="center">
              - {currentTestimonial.name}
            </Typography>
            <Typography variant="subtitle2" align="center" color="text.secondary">
              {currentTestimonial.company}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
