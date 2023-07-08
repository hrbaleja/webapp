import React from 'react';
import { CustomThemeProvider  } from './ThemeContext'; 
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
    <Box sx={{ padding: '0 0' }}>
    <CustomThemeProvider>

      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <SolutionsSection></SolutionsSection>
      <ProductsSection></ProductsSection>
      <AboutUsSection></AboutUsSection>
      <TestimonialsSection></TestimonialsSection>
      <ContactUsSection></ContactUsSection>
    </CustomThemeProvider>
  </Box>
   
  );
};

export default Home;


