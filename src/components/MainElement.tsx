import { Box, Typography } from '@mui/material'
import React from 'react'

import { releases } from '../releases'
import { Card } from './styled'
import fallbackImage from '../assets/imageFallback.jpg'

const MainElement = () => {
  return (
    <Card>
      <div style={{display: "grid", placeItems: "center", height: "3rem"}}>
          <Typography variant="body1" sx={{fontSize: '2rem', fontFamily: 'VT323'}}>
              Releases
          </Typography>
      </div>
      <div style={{ overflow: "auto" }} id={"contentBody"}>
          <div style={{display: "grid", margin: "auto"}}>
              {releases.sort(function(a, b) {return b.id - a.id}).map((release, idx) => {
                  return (
                      <Box key={idx} sx={{alignItems: "center", display: "flex", columnGap: 2, padding: "0 5vw 1rem 5vw"}} id={"record"}>
                          <Box >
                              {release.image ? 
                                  <img src={release.image} alt={release.releaseName} height={"150rem"} style={{ width: '100%' }} /> : 
                                  <img src={fallbackImage} alt={"/notFound"} height={"150rem"} style={{width: '100%'}} />
                              }
                          </Box>
                          <Box id={"releaseText"}>
                              <Typography variant="body1" sx={{fontSize: '1.5rem', fontFamily: 'VT323'}}>
                                  {release.artists.map((art) => (art.name))} - {release.releaseName}
                              </Typography>
                              <Typography variant="body2" sx={{fontSize: '1.5rem', fontFamily: 'VT323'}}>
                                  {release.releaseDate.toLocaleDateString() !== "Invalid Date" ? release.releaseDate.toLocaleDateString() : "Future release"}
                              </Typography>
                          </Box>
                      </Box>
                  )
              }
              )}
          </div>
      </div>
  </Card>
  )
}

export default MainElement