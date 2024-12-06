import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export const FooterPage = () => {
  return (
    <StyledBox>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Typography sx={{ fontWeight: 'bold',fontSize: '15px' }}>
            Preview of Spotify
          </Typography>
          <Typography sx={{ color: 'text.secondary', color:'white' ,fontSize: '18px'}}>
            Sign up to get Unlimited songs and podcasts with occasional ads. No credit card needed.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Btn fullWidth><b>Sign up for Free</b></Btn>
        </Grid>
      </Grid>
    </StyledBox>
  )
}

const StyledBox = styled(Box)({
  display: 'flex',
  height: '50px',
  flexDirection: 'column',
  padding: '10px',
  margin: '6px',
  background: '#121212',
  color: 'white',
  backgroundImage: 'linear-gradient(90deg, #af2896, #509bf5)',
  '@media (min-width: 300px) and (max-width: 800px)': {
    height: 'auto',
  }
});

const Btn = styled(Button)(({ theme }) => ({
  width: '50%',
  borderRadius: '80px',
  background: 'white',
  color: 'black',
  border: '1px solid white',
  textTransform: 'none',
  fontSize: '16px',
  padding: '10px',
  marginLeft: '100px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}))