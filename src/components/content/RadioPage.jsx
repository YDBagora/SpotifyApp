import React, { useEffect, useState } from 'react';
import { artists, albums, radios } from './DataArtists';
import { TextField, Button, Box, Typography, Container, InputLabel, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export const RadioPage = () => {
  const [data2, setData2] = useState([]);
  const [visible2, setVisible2] = useState(5);

  useEffect(() => {
    setData2(radios);
  }, []);

  const loadData2 = () => {
    setVisible2(data2.length);
  }

  return (
    <>
      <Box sx={{ px: 2 }}>
        <Typography id="modal-modal-title" variant="h5" component="h1">
          <b className='Title'>Popular Radio</b>
          {visible2 < data2.length && (
            <LanguageBtn onClick={loadData2}><b>Show All</b></LanguageBtn>
          )}
        </Typography>
      </Box>
      {data2.slice(0, visible2).map((item) => {
        return (
          <Gridcontent>
            <Box sx={{ flexGrow: 1 }}>
              <Styles key={item.id}>
                <CardContent>
                  <IconButtons className="icon-btn">
                    <PlayArrowIcon />
                  </IconButtons>
                  <img src={item.image} alt={item.desc} className='logoimg1' />
                  <small> 
                    <b>{item.desc.length > 40 ? item.desc.slice(0, 40) + '...' : item.desc}</b>
                  </small>
                </CardContent>
              </Styles>
            </Box>
          </Gridcontent >
        );
      })}
    </>
  )
}


const Styles = styled(Card)({
  maxWidth: 200,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  background: '#121212',
  color: 'white',
  '&:hover': {
    textDecoration: 'underline',
    background: 'linear-gradient(#121212, #202020, #202020)',
  },
});

const Gridcontent = styled(Container)(({ theme }) => ({
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'left',
  float: 'left',
  background: '#121212',
  color: 'white',
  margin: '0px auto',
  marginTop: '10px',
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    '& .icon-btn': {
      opacity: 1,
      display: 'flex',
    },
  },
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '50%',
  }
}));

const LanguageBtn = styled(Button)({
  position: 'sticky',
  right: '30px',
  backgroundColor: '#121212',
  color: 'white',
  float: 'right',
  opacity: '0.8',
  textTransform: 'none',
  overflowY: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: 'transparent transparent',
  '&:hover': {
    transform: 'scale(1.1)',
    textDecoration: 'underline',
  },
  '@media (min-width: 300px) and (max-width: 800px)': {
    top: '0px',
  }
})

const IconButtons = styled(IconButton)({
  position: 'absolute',
  display: 'none',
  top: '50%',
  right: '16px',
  fontSize: '40px',
  opacity: 0,
  float: 'right',
  transition: 'opacity 0.3s',
  color: '#121212',
  backgroundColor: '#1ed760',
  '&:hover': {
    opacity: 1,
    color: '#121212',
    backgroundColor: '#1ed760',
  },
});