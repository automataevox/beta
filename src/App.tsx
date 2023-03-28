import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { FutureUpdates, NavbarComponent, FileNavigation, DataElement, PwdElement, ShadowElement } from './components'
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./style/global.scss"
import bgVideo from './assets/bg.mp4'
import { Box } from '@mui/system'

const App = () => {
  const [routeDir, setRouteDir] = useState('')

  useEffect(() => {
    const pathname = window.location.pathname.slice(1).toUpperCase()
    setRouteDir(pathname)
  }, [window.location.pathname])

  
  return (
    <BrowserRouter>
      <video autoPlay muted loop id='bgVideo'>
        <source src={bgVideo} type={'video/mp4'} />
      </video>
      <Box id={'bgVideo'} sx={{background: '#AA0000', mixBlendMode:'darken'}}/>
      <NavbarComponent routerDir={routeDir}/>
      <Routes>
        <Route path="/" element={<FileNavigation />}/>
        <Route path="/data" element={<DataElement />} />
        <Route path="/pwd" element={<PwdElement />} />
        <Route path="/shadow" element={<ShadowElement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App