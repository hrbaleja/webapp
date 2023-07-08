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
