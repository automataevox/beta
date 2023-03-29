import React from 'react'

interface NavProps {
  routerDir: string;
  mb?: number;
}

const NavbarComponent = ({routerDir, mb = 0}: NavProps) => {
  return (
    <div style={{fontFamily: 'VT323', fontSize: '2rem', background: '#111D',  borderRadius: 5, padding: "1.25rem", display: "flex", alignItems: "center", marginBottom: mb, minWidth: "6rem"}}> 
          {/*`/${routerDir ? `${routerDir}` : ""}`*/}
          DXVIL
    </div>
  )
}

export default NavbarComponent