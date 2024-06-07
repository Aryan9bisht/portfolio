import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const ResumeDownloader = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1Wd_M3Mnw2bQ4oONaaeselJZhF7llWPBS/view?usp=drivesdk'; 
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h4" gutterBottom>
       
        </Typography>
        <Button
          variant="contained"
         
          startIcon={<DownloadIcon />}
          onClick={handleDownload}
          style={
            {
                borderRadius:'10px',
                background: 'rgb(30 55 105)'
            }
          }
        >
            View My Resume
        </Button>
      </Box>
    </Container>
  );
};

export default ResumeDownloader;
