import { Box } from '@mui/material'
import React from 'react'
import { Item } from './styled'
import { paths } from '../pageSettings'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'

const FileNavigation = () => {  
    return (
        <Stack margin={0} sx={{display: "flex", alignContent: "center", flexDirection: "row", gap: 5, marginY: 4 }}>
            {paths.map((path, idx) => {
                return(
                    <Link to={path.value} style={{textDecoration: "none", color: "white"}}>
                        <Item key={idx}>
                            {path.value.toUpperCase()}
                        </Item>
                    </Link>
                )
            })}
        </Stack>
    )
}

export default FileNavigation