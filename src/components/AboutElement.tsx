import { Typography } from '@mui/material'
import React from 'react'
import { Card } from './styled'

const AboutElement = () => {
  return (
    <Card>
      <div style={{display: "grid", placeItems: "center"}}>
          <Typography variant="body1" sx={{fontSize: '2rem', fontFamily: 'VT323'}}>
              About
          </Typography>
      </div>
      <div style={{overflow: "auto"}}>

      </div>
    </Card>
  )
}

export default AboutElement