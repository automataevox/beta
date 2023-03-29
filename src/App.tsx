import React from 'react'

import { BrowserRouter} from 'react-router-dom'
import { Typography } from '@mui/material';
import { FileNavigation, MainContent } from './components';

import "bootstrap/dist/js/bootstrap.bundle.min"
import "./style/global.scss"


export const Redirect = ({ red }) => {

  if(red == "code") window.location.replace("https://github.com/jaroslav-masa/beta")
  if(red == "music") window.location.replace("https://open.spotify.com/artist/1Ngynwc6bFIKGzRcOrBAnx")
  
  window.location.reload
  
  return(
    <div style={{display: "grid", placeItems: "center", height: "calc(100vh - 6.9rem)", width: "100%"}}>
      <Typography variant="body1" sx={{fontSize: '2rem', fontFamily: 'VT323'}}>
          Redirecting...
      </Typography>
    </div>
  )
}

function App() {
  return (
      <BrowserRouter>
        <div style={{display: "grid", gridTemplate: '1fr / auto' }}>
          <FileNavigation />
          <MainContent />
        </div>
    </BrowserRouter>
  );
}

export default App