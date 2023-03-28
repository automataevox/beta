import React from 'react'
import { Item } from './styled'
import { paths } from '../pageSettings'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
import NavbarComponent from './NavbarComponent'

const FileNavigation = () => {  
    return (
        <Stack margin={0} sx={{display: "flex", alignContent: "space-between", flexDirection: "row", gap: 1, marginBottom: 1 }}>
            <NavbarComponent routerDir={window.location.pathname.slice(1).toUpperCase()}/>
            {paths.map((path, idx) => {
                return(
                    <Link key={idx} to={`${window.location.origin}/${path.value}`} style={{textDecoration: "none", color: "white"}}>
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