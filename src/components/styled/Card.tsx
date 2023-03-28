import { Paper } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

interface CardProps {
  children?: React.ReactNode;
  fg?: number;
  responsive?: boolean;
}

const Card = ({ children = null, fg = 0, responsive = false }: CardProps) => {
  if(!responsive) {
    return (
      <Paper style={{padding: 2, fontWeight: "bold", background: "#111D", color: 'white', minHeight: "5rem", minWidth: "5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: fg}}>
        { children }
      </Paper>
    )
  } else {
    return (
      <Paper style={{padding: 2, fontWeight: "bold", background: "#111D", color: 'white', minHeight: "5rem", minWidth: "5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: fg, flexBasis: '100rem'}}>
          { children }
      </Paper>
    )
  } 
}

export default Card