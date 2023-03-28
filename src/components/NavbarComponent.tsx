import { Paper, Typography } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import React from 'react'
import { Box } from '@mui/system';

const NavbarComponent = ({routerDir}) => {
  return (
    <Paper sx={{padding: 2, backdropFilter: 'blur(5px)', background: '#111D', color: '#fff', flexGrow: 1, alignItems: "center", display: "flex"}}>
      <Box sx={{fontSize: '2rem', fontFamily: 'VT323'}}>
          {`/${routerDir ? `${routerDir}` : ""}`}
      </Box>
    </Paper>
  )
}

export default NavbarComponent