import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer'; 
import { CustomThemeProvider  } from './Components/ThemeContext'; 
import HeroSection from './Components/HeroSection';
import ServicesSection from './Components/ServicesSection';
import SolutionsSection from './Components/SolutionsSection';


const App = () => {
  return (
    
    <CustomThemeProvider>
      <Header />
     <HeroSection></HeroSection>
      <ServicesSection></ServicesSection><SolutionsSection></SolutionsSection>
      <Footer />
    </CustomThemeProvider>
  );
};

export default App;
