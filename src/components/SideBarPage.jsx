import React from 'react';
import { Button, Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const SideBarPage = () => {
  return (
    <StyledBox sx={{ flexGrow: 1 }}></StyledBox>
  )
}

const StyledBox = styled(Box)({
    display: 'flex',
    height: '440px',
    flexDirection: 'column',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '0px',
    marginTop: '80px',
    background: '#121212',
    color: 'white',
    overflowY: 'auto',
    '@media (min-width: 300px) and (max-width: 800px)': {
      height: 'auto',
    }
  });