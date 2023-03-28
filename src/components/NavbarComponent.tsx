import { Paper, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system';

const NavbarComponent = ({routerDir}) => {
  // SET SM TO HAVE / IN TOP AND NAV UNDER 
  return (
    <Paper sx={{padding: 2, backdropFilter: 'blur(5px)', background: '#111D', color: '#fff', minWidth: "3.25rem", alignItems: "center", display: "flex"}}> 
      <Box sx={{fontSize: '2rem', fontFamily: 'VT323'}}>
          {`/${routerDir ? `${routerDir}` : ""}`}
      </Box>
    </Paper>
  )
}

export default NavbarComponent