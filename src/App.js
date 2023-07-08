import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer'; 
import { CustomThemeProvider  } from './Components/ThemeContext'; 
import HeroSection from './Components/HeroSection';
import ServicesSection from './Components/ServicesSection';


const App = () => {
  return (
    
    <CustomThemeProvider>
      <Header />
     <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <Footer />
    </CustomThemeProvider>
  );
};

export default App;
