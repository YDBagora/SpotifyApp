import React, { useEffect, useState } from 'react';
import { artists, albums, radios } from './DataArtists';
import { Button, Box, Typography, Container} from '@mui/material';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { SingerPage } from './SingerPage';


export const ArtistsPage = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(5);
  const [singerId,setSingerId] = useState(null);

  useEffect(() => {
    setData(artists);
  },[]);

  const loadData = () => {
    setVisible(data.length);
  }
  
  const handleSingerId = (id) => {
    setSingerId(id);
    // console.log(id);
  }

  useEffect(() => {
    if (singerId !== null) {
      console.log("Selected singerId:", singerId);
    }
  }, [singerId]);

  return (
    <>
    {singerId && <SingerPage singerid={singerId}/>}
      <Box sx={{ px: 2 }}>
        <Typography id="modal-modal-title" variant="h5" component="h1">
          <b className='Title'>Popular Artists</b>
          {visible < data.length && (
            <LanguageBtn onClick={loadData}><b>Show All</b></LanguageBtn>
          )}
        </Typography>
      </Box>
      {data.slice(0, visible).map((item) => {
        return (
          <Gridcontent onClick={() => handleSingerId(item.id)}>
            <Box sx={{ flexGrow: 1 }}>
              <Styles key={item.id}>
                <CardContent>
                  <IconButtons className="icon-btn">
                    <PlayArrowIcon />
                  </IconButtons>
                  <img src={item.image} alt={item.name} className='logoimg' />
                  <Typography variant="h6" component="h6" sx={{ fontSize: '16px' }}>
                    <b>{item.name.length > 14 ? item.name.slice(0, 14) + '...' : item.name}</b>
                  </Typography>
                  <small>{item.title}</small>
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