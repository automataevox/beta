import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainElement, AboutElement, ShopElement } from './components';
import { Box } from '@mui/system'

import "bootstrap/dist/js/bootstrap.bundle.min"
import "./style/global.scss"

import bgVideo from './assets/bg.mp4'

function App() {

  return (
    <BrowserRouter>
      <video autoPlay muted loop id='bgVideo'>
        <source src={bgVideo} type={'video/mp4'} />
      </video>
      <Box id={'bgVideo'} sx={{ background: '#AA0000', mixBlendMode: 'darken' }} />
      <Routes>
        <Route path="/" element={<MainElement />} />
        <Route path="/shop" element={<ShopElement />} />
        <Route path="/about" element={<AboutElement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App