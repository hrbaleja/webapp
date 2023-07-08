import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer'; 
import { CustomThemeProvider  } from './Components/ThemeContext'; 
import HeroSection from './Components/HeroSection';
import ServicesSection from './Components/ServicesSection';
import SolutionsSection from './Components/SolutionsSection';
import ProductsSection from './Components/ProductsSection';
import AboutUsSection from './Components/AboutUsSection';
import TestimonialsSection from './Components/TestimonialsSection';
import ContactUsSection from './Components/ContactUsSection';


const App = () => {
  return (
    
    <CustomThemeProvider>
      <Header />
     <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <SolutionsSection></SolutionsSection>
      <ProductsSection></ProductsSection>
      <AboutUsSection></AboutUsSection>
      <TestimonialsSection></TestimonialsSection>
      <ContactUsSection></ContactUsSection>
      <Footer />
    </CustomThemeProvider>
  );
};

export default App;
