import React from 'react';
import { Button, Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';

export const SideBarPage = () => {
  return (
    <StyledBox sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography id="modal-modal-title" variant="h6" component="h1" sx={{ opacity: '0.8', fontSize: '16px' }}>
            <LibraryAddCheckIcon />
            <b className='SideLabel'>Your Library</b>
            <AddIcon sx={{ float: 'right' }} />
          </Typography>
        </Grid>
        <GridContent1 item xs={12}>
          <Cards component="section">
            <b>Create your first playlist</b><br />
            <small>It's easy , we'll help you</small><br />
            <Btns><b>Create playlist</b></Btns>
          </Cards>
          <Cards component="section">
            <b>Let's find some podcast to follow</b><br />
            <small>we'll keep you updated on new episodes</small><br />
            <Btns><b>Browse podcasts</b></Btns>
          </Cards>
        </GridContent1>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ opacity: '0.8' }}>
            <Grid item xs={12} sm={2}>
              <small>Legal</small>
            </Grid>
            <Grid item xs={12} sm={6}>
              <small>Safty & Privacy Center</small>
            </Grid>
            <Grid item xs={12} sm={4}>
              <small>Privacy Police</small>
            </Grid>
          </Grid>
          <br/>
          <Grid container spacing={2} sx={{ opacity: '0.8' }}>
            <Grid item xs={12} sm={3}>
              <small>Cookies</small>
            </Grid>
            <Grid item xs={12} sm={3}>
              <small>About Ads</small>
            </Grid>
            <Grid item xs={12} sm={2}>
              <small>Accessibility</small>
            </Grid>
          </Grid>
          <br/>
          <LanguageBtn startIcon={<LanguageIcon />}><b>English</b></LanguageBtn>
        </Grid>
      </Grid>
    </StyledBox>
  )
}

const StyledBox = styled(Box)({
  display: 'flex',
  height: '420px',
  flexDirection: 'column',
  padding: '20px 10px',
  borderRadius: '10px',
  marginBottom: '0px',
  marginTop: '80px',
  background: '#121212',
  color: 'white',
  overflowY: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: 'transparent transparent',
  '@media (min-width: 300px) and (max-width: 800px)': {
    height: '0px',
    display: 'block',
    marginTop: '0px',
    flexDirection: 'none',
  },
});

const GridContent1 = styled(Grid)({
  height: '200px',
  overflowY: 'auto',
  padding: '10px',
  background: '#121212',
  margin: '20px 0px',
})

const Cards = styled(Box)({
  padding: '10px 20px',
  margin: '0px 0px 20px 0px',
  backgroundColor: '#202020',
  color: 'white',
  borderRadius: '10px'
})

const Btns = styled(Button)({
  margin: '15px 0px 5px 0px',
  padding: '0px 20px',
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '50px',
  textTransform: 'none',
})

const LanguageBtn = styled(Button)({
  margin: '10px 0px',
  padding: '5px 20px',
  backgroundColor: '#121212',
  color: 'white',
  border: '1px solid white',
  borderRadius: '50px',
  textTransform: 'none',
})