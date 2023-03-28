import { Paper, Typography } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import React from 'react'

const NavbarComponent = ({routerDir}) => {
  return (
    <Paper sx={{padding: 2, backdropFilter: 'blur(5px)', background: '#111D', color: '#fff'}}>
        <Typography variant="body1" sx={{fontSize: '2rem', fontFamily: 'VT323'}}>
          {`/${routerDir ? `${routerDir}` : ""}`}
        </Typography>
    </Paper>
  )
}

export default NavbarComponent