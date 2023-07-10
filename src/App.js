import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { CustomThemeProvider } from './Components/ThemeContext';
import Home from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import LoginForm from './Components/LoginForm';
import bgui from './Ui7.jpg';


const App = () => {
  return (
    <Router>
      <Box sx={{ padding: '0 4px', backgroundImage: `url(${bgui})`,  backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>
        <CustomThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <LoginForm />
        </CustomThemeProvider>
      </Box>
    </Router>
  );
};

export default App;
