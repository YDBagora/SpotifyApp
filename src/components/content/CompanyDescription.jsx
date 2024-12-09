import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Button, Box, Typography, Container, InputLabel, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export const CompanyDescription = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography id="modal-modal-title" variant="h5" component="h1">
        <b className='Title'>Company Details</b>
      </Typography>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <Typography id="modal-modal-title" variant="h6" component="h1" sx={{ fontSize: '18px' }}>
            <b>Company</b>
          </Typography>
          <Box sx={{ opacity: '0.8' }}>
            <p>About</p>
            <p>Job</p>
            <p>For the Record</p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography id="modal-modal-title" variant="h6" component="h1" sx={{ fontSize: '18px' }}>
            <b>Communities</b>
          </Typography>
          <Box sx={{ opacity: '0.8' }}>
            <p>For Artists</p>
            <p>Developers</p>
            <p>Advertising</p>
            <p>Investors</p>
            <p>Vendors</p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography id="modal-modal-title" variant="h6" component="h1" sx={{ fontSize: '18px' }}>
            <b>Useful links</b>
          </Typography>
          <Box sx={{ opacity: '0.8' }}>
            <p>Support</p>
            <p>Free Mobile App</p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography id="modal-modal-title" variant="h6" component="h1" sx={{ fontSize: '18px' }}>
            <b>Spotify Plans</b>
          </Typography>
          <Box sx={{ opacity: '0.8' }}>
            <p>Premium Individual</p>
            <p>Premium Duo</p>
            <p>Premium Family</p>
            <p>Premium Student</p>
            <p>Spotify Free</p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <BtnIcon><InstagramIcon sx={{fontSize: '20px'}}/></BtnIcon>
          <BtnIcon><TwitterIcon sx={{fontSize: '20px'}}/></BtnIcon>
          <BtnIcon><FacebookIcon sx={{fontSize: '20px'}}/></BtnIcon>
        </Grid>
      </Grid>
    </Box>
  )
}

const BtnIcon = styled(Button)({
  background: '#202020',
  color: 'white',
  borderRadius: '100px',
  padding: '15px 0px',
  margin: '5px',
});