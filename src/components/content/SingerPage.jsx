import React, { useState, useEffect, useRef } from 'react'
import { artists } from './DataArtists';
import { fontSize, styled } from '@mui/system';
import { Button, Box, Typography, Container } from '@mui/material';
import { Grid } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PauseIcon from '@mui/icons-material/Pause';
import { IconButton } from '@mui/material';

export const SingerPage = ({ singerid }) => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (singerid) {
      const artist = artists.find((art) => art.id === singerid);
      if (artist) {
        setSelectedArtist(artist);
      }
    }
  }, [singerid]);

  useEffect(() => {
    if (selectedArtist) {
      console.log("This is Object", selectedArtist);
    }
  }, [selectedArtist]);

  const togglePlayPause = (song) => {
    if (currentSong?.id === song.id && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentSong(song);
      if (audioRef.current) {
        audioRef.current.src = song.file;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };


  return (
    <Box>
      {selectedArtist && (
        <Grid container spacing={2} sx={{
          backgroundImage: `url(${selectedArtist.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '40vh',
          padding: '16px',
        }}
        >
          <Grid item xs={12}>
            <Typography>
              <VerifiedIcon sx={{ color: '#4cb3ff' ,mb: -1}} />
              <small className='verify'>Verified Artist</small>
            </Typography>
            <Typographys id="modal-modal-title" variant="h1" component="h1">
              <b >{selectedArtist?.name}</b>
            </Typographys>
            <Typography variant="h6"><small>{selectedArtist?.fans} monthly listeners</small></Typography>
          </Grid>
        </Grid>
      )}

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <BtnPlay><PlayArrowIcon sx={{ fontSize: '40px' }} /></BtnPlay>
          <BtnFollow><b>Follow</b></BtnFollow>
          <BtnMore><MoreHorizIcon /></BtnMore>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3, ml: 2 }}>
        <Typography id="modal-modal-title" variant="h5" component="h6"><b>Popular</b></Typography>
      </Box>

      {selectedArtist?.songs.map((data) => {
        return (
          <GridCont container spacing={2}>
            <Grid item xs={12} sm={1} sx={{ textAlign: 'center', opacity: '0.8' }}>
              {data?.id}
            </Grid>
            <Grid item xs={12} sm={1} sx={{mt:-1,mb:1}}>
              <img src={selectedArtist?.image} className='logoimg2' />
            </Grid>
            <Grid item xs={12} sm={5} sx={{ textAlign: 'left' }}>
              {data?.title}
            </Grid>
            <Grid item xs={12} sm={2} sx={{mt:-1}}>
              <MainBtn onClick={() => togglePlayPause(data)}>
                {currentSong?.id === data?.id && isPlaying ? <PauseIcon/>: <PlayArrowIcon/>}
              </MainBtn>
            </Grid>
            <Grid item xs={12} sm={2}>
              {data?.list}
            </Grid>
            <Grid item xs={12} sm={1}>
              {data?.time}
            </Grid>
          </GridCont>
        )
      })}
      <audio ref={audioRef} />
      <br /><br />
    </Box>
  )
}


const BtnPlay = styled(Button)({
  borderRadius: '50%',
  padding: '10px 0px',
  margin: '0px 10px',
  color: '#121212',
  backgroundColor: '#1ed760',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const BtnFollow = styled(Button)({
  background: '#121212',
  color: 'white',
  border: '1px solid white',
  borderRadius: '50px',
  fontSize: '14px',
  padding: '0px 15px',
  margin: '10px',
  textTransform: 'none',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const BtnMore = styled(Button)({
  background: '#121212',
  borderRadius: '50%',
  color: 'white',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const GridCont = styled(Grid)({
  margin: '2px 0px',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#202020',
  },
});

const MainBtn = styled(IconButton)({
  borderRadius: '50%',
  padding: '10px',
  color: '#202020',
  backgroundColor: 'white',
  '&:hover': {
    color: '#202020',
    backgroundColor: 'white',
    transform: 'scale(1.1)',
  },
});

const Typographys = styled(Typography)({
  '@media (min-width: 300px) and (max-width: 800px)': {
    fontSize: '50px',
  }
});