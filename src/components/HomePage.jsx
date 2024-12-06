import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import { SideBarPage } from './SideBarPage';
import { ContentPage } from './ContentPage';
import { FooterPage } from './FooterPage';
import { Link, useNavigate } from "react-router-dom";


export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'black', height: 'auto' }}>
      <Grid container spacing={2} sx={{ textAlign: 'center', alignItems: 'center', }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{ backgroundColor: "black" }}>
            <Toolbar>
              <Grid item xs={1}>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  <LibraryMusicIcon sx={{ fontSize: '30px' }} />
                </IconButton>
              </Grid>
              <Grid item xs={8}>
                <IconBtn><HomeIcon sx={{ fontSize: '30px' }} /></IconBtn>
                <TxtFiled type='text' placeholder='What do you want to play?' focused variant="standard"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: 'white', fontSize: '30px' }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Link to="/Signup">
                  <Btn1><b>Sign up</b></Btn1>
                </Link>
                <Link to="/">
                  <Btn><b>Log in</b></Btn>
                </Link>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <SideBarPage />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ContentPage />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FooterPage />
        </Grid>
      </Grid>
    </Box>
  );
}

const IconBtn = styled(Button)(({ theme }) => ({
  background: '#121212',
  color: 'white',
  textTransform: 'none',
  fontSize: '25px',
  padding: '8px 0px',
  borderRadius: '80px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '@media (min-width: 300px) and (max-width: 800px)': {
    fontSize: '15px',
  }
}))

const TxtFiled = styled(TextField)(({ theme }) => ({
  width: '50%',
  background: '#121212',
  color: 'white',
  '&:hover': {
    backgroundColor: '#121212',
    border: '2px solid white',
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'white',
  },
  '& .MuiInput-underline:hover:before': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline:before': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline:after': {
    borderBottom: 'none',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  alignItems: 'left',
  textTransform: 'none',
  borderRadius: '50px',
  padding: '8px',
  marginLeft: '5px',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '60%',
  }
}))

const Btn = styled(Button)(({ theme }) => ({
  borderRadius: '80px',
  background: 'white',
  color: 'black',
  border: '1px solid white',
  padding: '10px 25px',
  marginRight: '-50px',
  textTransform: 'none',
  fontSize: '16px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '40%',
    padding: '5px 0px',
    marginRight: '0px',
    fontSize: '12px',
  }
}))

const Btn1 = styled(Button)(({ theme }) => ({
  color: 'white',
  padding: '10px 25px',
  borderRadius: '80px',
  marginLeft: '60px',
  textTransform: 'none',
  fontSize: '16px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '40%',
    padding: '5px 0px',
    marginLeft: '0px',
    fontSize: '12px',
  }
}))