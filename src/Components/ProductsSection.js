import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';

const ProductsSection = () => {
  const products = [
    {
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur eros a metus malesuada, sed mattis mauris tempor.',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      image: 'https://source.unsplash.com/400x300/?product1',
    },
    {
      title: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur eros a metus malesuada, sed mattis mauris tempor.',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      image: 'https://source.unsplash.com/400x300/?product2',
    },
    {
      title: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur eros a metus malesuada, sed mattis mauris tempor.',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      image: 'https://source.unsplash.com/400x300/?product3',
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                sx={{ height: 200 }}
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {product.description}
                </Typography>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <Typography variant="body2">{feature}</Typography>
                    </li>
                  ))}
                </ul>
                <Box sx={{ mt: 4 }} align="left">
        <Button variant="contained" color="primary">
          View More
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

export default ProductsSection;
