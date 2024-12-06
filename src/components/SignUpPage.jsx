import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { InputLabel } from '@mui/material';


export default function SignUpPage() {
  return (
    <div className='bg-colorSignup'>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <MainBox>
            <IconButton size="large" aria-label="menu">
              <LibraryMusicIcon sx={{ color: 'white', fontSize: '40px' }} />
            </IconButton>
            <LogoTxt id="modal-modal-title" variant="h3" component="h2">
              Sign up to start listening
            </LogoTxt>
            <GridContainer container spacing={2}>
              <Grid item xs={12}>
                <InpLabel sx={{ float: 'left' }}><b>Email address</b></InpLabel>
                <TxtFiled fullWidth type='text' color='white' size="small" variant="outlined" placeholder='name@domain.com' focused />
              </Grid>
              <Grid item xs={12}>
                <BtnLogin fullWidth variant="outlined"><b>Next</b></BtnLogin>
              </Grid>
              <Grid item xs={12}>
                <a href='#' className='link1'><small>Use phone number instead.</small></a>
              </Grid>
            </GridContainer>
            <hr className='hrTag'/>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Btn variant="outlined" startIcon={<GoogleIcon sx={{ color: 'red' }}/>}><b>Continue width Google</b></Btn>
              </Grid>
              <Grid item xs={12}>
                <Btn variant="outlined" startIcon={<FacebookIcon sx={{ color: 'blue'}}/>}><b>Continue width FaceBook</b></Btn>
              </Grid>
              <Grid item xs={12}>
                <Btn variant="outlined" startIcon={<AppleIcon sx={{ color: 'white' }}/>}><b>Continue width Apple</b></Btn>
              </Grid>
            </Grid>
            <hr className='hrTag'/>
            <Grid item xs={12}>
                <span>Already have an account? </span><a href='#' className='link'> Log in here</a>
              </Grid>
          </MainBox>
        </Container>
      </React.Fragment>
    </div>
  )
}


const MainBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '600px',
  margin: '0 auto',
  background: '#121212',
  color: 'white',
  textAlign: 'center',
  alignItems: 'center',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '100%',
  }
}))

const LogoTxt = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '-3px',
  marginBottom: '30px',
  fontFamily: 'SpotifyMixUITitle, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, var(--fallback-fonts, sans-serif)',
}))

const Btn = styled(Button)(({ theme }) => ({
  width: '60%',
  borderRadius: '80px',
  background: '121212',
  color: 'white',
  border: '1px solid white',
  padding: '8px',
  textTransform: 'none',
  fontSize: '16px',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '100%',
  }
}))

const InpLabel = styled(InputLabel)(({ theme }) => ({
  background: '121212',
  color: 'white',
  textTransform: 'none',
  fontSize: '13px',
  padding: '5px',
}))

const TxtFiled = styled(TextField)(({ theme }) => ({
  background: '121212',
  color: 'white',
  '&:hover': {
    backgroundColor: '#121212',
    border: '1px solid white',
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'white',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  alignItems: 'center',
  border: '1px solid white',
  textTransform: 'none',
  fontSize: '16px',
  borderRadius: '5px',
  padding: '2px'
}))

const BtnLogin = styled(Button)(({ theme }) => ({
  background: '#1ED760',
  color: 'black',
  textTransform: 'none',
  borderRadius: '80px',
  fontSize: '15px',
  border: 'none',
  margin: '5px',
  padding: '10px',
}))

const GridContainer = styled(Grid)(({ theme }) => ({
  width: '70%',
  position: 'relative',
  left: '15%',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '100%',
    left: '0%',
  }
}))
