import { Paper } from '@mui/material'
import React from 'react'

interface CardProps {
  children?: React.ReactNode;
  fg?: number;
}

const Card = ({ children = null, fg = 0 }: CardProps) => {
  return (
    <Paper style={{padding: 2, fontWeight: "bold", background: "#111D", color: 'white', minHeight: "5rem", minWidth: "5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: fg}}>
        { children }
    </Paper>
  )
}

export default Card