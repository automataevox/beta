import React from 'react'
import { Item } from './styled'
import { paths } from '../pageSettings'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
import NavbarComponent from './NavbarComponent'

const FileNavigation = () => {  
    return (
        <Stack sx={{display: "flex", alignContent: "space-between", flexDirection: "row", marginBottom: 1}}>
            <NavbarComponent routerDir={window.location.pathname.slice(1).toUpperCase()}/>
            {paths.map((path, idx) => {
                return(
                    <Link key={idx} to={`${window.location.origin}/${path.value}`} style={{textDecoration: "none", color: "white", paddingLeft: 8}}>
                        <Item iconData={path.icon}>
                            {path.value.toUpperCase()}
                        </Item>
                    </Link>
                )
            })}
        </Stack>
    )
}

export default FileNavigation