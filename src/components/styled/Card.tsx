import React from 'react'

interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children = null }: CardProps) => {
  return (
    <div style={{padding: 2, fontWeight: "bold", background: "#111D", color: 'white', borderRadius: 4, display: "grid", gridTemplateRows: "1fr auto", minHeight: "5rem"}} id={"theCard"}>
      { children }
    </div>
  )
} 

export default Card