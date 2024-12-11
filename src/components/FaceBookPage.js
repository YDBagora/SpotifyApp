import { Button } from '@mui/material';
import { styled } from "@mui/material/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { useEffect } from 'react';

const FacebookLogin = () => {

  useEffect(() => {
    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '1288090058995032',
        cookie: true,
        xfbml: true,
        version: 'v21.0'
      });
    };
  }, []);


  const handleLogin = () => {
    window.FB.login((response) => {
      if (response.authResponse) {
        console.log('Successfully logged in with Facebook', response);
        getUserData();
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'public_profile,email' });
  };


  const getUserData = () => {
    window.FB.api('/me', { fields: 'id,name,email,picture' }, function (response) {
      console.log('User Data:', response);
    });
  };

  return (
    <div>
     <Btn variant="outlined" onClick={handleLogin} startIcon={<FacebookIcon sx={{ color: 'blue' }} />}><b>Continue width FaceBook</b></Btn>
    </div>
  );
};

export default FacebookLogin;


const Btn = styled(Button)(({ theme }) => ({
  width: '60%',
  borderRadius: '80px',
  background: '#121212',
  color: 'white',
  border: '1px solid white',
  padding: '8px',
  textTransform: 'none',
  fontSize: '16px',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '100%',
  }
}))