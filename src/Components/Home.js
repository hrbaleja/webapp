import React from 'react';
import HeroSection from './Home/HeroSection';
import ServicesSection from './Home/ServicesSection';
import SolutionsSection from './Home/SolutionsSection';
import ProductsSection from './Home/ProductsSection';
import AboutUsSection from './Home/AboutUsSection';
import TestimonialsSection from './Home/TestimonialsSection';
import ContactUsSection from './Home/ContactUsSection';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        padding: '0 0',
        background: 'rgba(162, 255, 230, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(10.5px)',
        webkitBackdropFilter: 'blur(10.5px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
      }}
    >
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <ProductsSection />
      <AboutUsSection />
      <TestimonialsSection />
      <ContactUsSection />
    </Box>
  );
};

export default Home;
