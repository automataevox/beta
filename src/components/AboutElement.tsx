import { Typography } from '@mui/material'
import React from 'react'
import { Card } from './styled'

const AboutElement = () => {
  return (
      <Card>
            <div style={{display: "grid", placeItems: "center", height: "3rem"}}>
                <Typography variant="body1" sx={{fontSize: '2rem', fontFamily: 'VT323'}}>
                    About
                </Typography>
            </div>
            <div style={{overflow: "auto"}}>
              <div style={{padding: "0 1.5rem", display: "flex", flexDirection: "column", gap: 25}}>
                <Typography variant="body1" sx={{fontSize: '1.5rem', fontFamily: 'VT323'}}>
                  DXVIL, born on February 26, 2003, in Hradec Kralove, is an up-and-coming electronic music producer hailing from the Czech Republic. Raised in Havlíčkův Brod, DXVIL began his musical journey in 2016, crafting simple melodies and chord progressions on his mobile phone before transitioning to a PC. With no formal training in music theory or production, he honed his skills through experimentation and dedication.
                </Typography>
                <Typography variant="body1" sx={{fontSize: '1.5rem', fontFamily: 'VT323'}}>
                  In 2017, DXVIL was offered a recording contract from a major label, which he declined as he was unsure if it was a legitimate opportunity. Since then, DXVILhas developed his own unique style and signature sound that blends hard-hitting beats with melodic elements, drawing inspiration from a variety of genres.
                </Typography>
                <Typography variant="body1" sx={{fontSize: '1.5rem', fontFamily: 'VT323'}}>
                  Throughout his career, DXVIL has collaborated with other artists and has gained recognition for his distinctive sound. He continues to push the boundaries of electronic music and connect with fans worldwide.
                </Typography>
                <Typography variant="body1" sx={{fontSize: '1.5rem', fontFamily: 'VT323'}}>
                  Currently based in Liberec, DXVIL is a rising star in the electronic music scene, and his passion and dedication to his craft continue to drive his success.
                </Typography>
              </div>
              <div style={{height: "22.6rem"}}>

              </div>
            </div>
        </Card>
  )
}

export default AboutElement