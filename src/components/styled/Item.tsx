import { Paper } from '@mui/material'
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';

const Item = ({ children }) => {
  return (
    <Paper style={{padding: 2, fontWeight: "bold", background: "#111D", color: 'white', minHeight: "7rem", minWidth: "7rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <FolderIcon sx={{fontSize: "300%"}}/>
        { children }
    </Paper>
  )
}

export default Item