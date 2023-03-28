import { Icon, Paper } from '@mui/material'
import React from 'react'

const Item = ({ children, iconData }) => {
  return (
    <Paper style={{padding: 2, fontWeight: "bold", background: "#111D", color: 'white', minHeight: "5rem", minWidth: "5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Icon component={iconData} sx={{fontSize: "250%"}}/>
        { children }
    </Paper>
  )
}

export default Item