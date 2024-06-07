import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Height } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        color: 'white',
        py: 3,
        mt: 'auto',
        marginBottom:'0',
        background: 'rgb(15,22,36)',
        top:'0'
      }}
      
        style={{  background: '#494980',height:'20vh'}}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © ARYAN BISHT
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}  style={{textDecoration:'none'}}>
            Home
          </Link>
          <Link
      href="mailto:bishtaryan80@gmail.com?subject=Inquiry&body=Hello%2C%0D%0AI%20would%20like%20to%20ask%20about..."
      color="inherit"
      sx={{ mx: 1 }} style={{textDecoration:'none'}}
    >
      E-mail bishtaryan80@gmail.com
    </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }} style={{textDecoration:'none'}}>
            Contact-9718039084
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton href="https://www.linkedin.com" color="inherit" sx={{ mx: 1 }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://github.com/Aryan9bisht" color="inherit" sx={{ mx: 1 }}>
            <GitHubIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
