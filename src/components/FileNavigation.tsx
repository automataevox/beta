import React from 'react'
import { Item } from './styled'
import { paths } from '../pageSettings'
import { Link } from 'react-router-dom'
import NavbarComponent from './NavbarComponent'

const FileNavigation = () => {  
    return (
        <div style={{display: "grid"}} id="navBar">
            <NavbarComponent routerDir={window.location.pathname.slice(1).toUpperCase()} mb={10}/>
            <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto", gap: 11, marginBottom: 10}} id={"navIcons"}>
                {paths.map((path, idx) => {
                    return(
                        <Link key={idx} to={`${window.location.origin}/${path.value}`} style={{textDecoration: "none", color: "white"}}>
                            <Item iconData={path.icon}>
                                {path.value.toUpperCase()}
                            </Item>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default FileNavigation