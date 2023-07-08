import React from 'react';
import { Typography, Container, Grid, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer style={{ backgroundColor: theme.palette.mode === 'dark' ? 'rgba(71, 70, 70, 0.8)' : 'rgba(255, 255, 255, 0.25)', color: theme.palette.text.primary, padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h6" gutterBottom>
              Company
            </Typography>
            <ul>
              <li>
                <Link href="/privacy-policy" color="inherit">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" color="inherit">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faqs" color="inherit">
                  FAQs
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h6" gutterBottom>
              Follow Us
            </Typography>
            <div>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="inherit">
                <LinkedInIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              123 Main Street, City, Country
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Phone: 123-456-7890
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Email: info@example.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" align="right">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
