import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Card } from './styled'

const Content = () => {

    return (
        <Stack sx={{display: 'flex', flexDirection: 'row', gap: 1}}>
            <Card>
            </Card>
            <Card fg={1}>
                <Typography variant="body1" sx={{fontSize: '2rem', fontFamily: 'VT323'}}>
                    Releases
                </Typography>
                <Box sx={{height: "41.5vw"}}>

                </Box>
            </Card>
            <Card>
            </Card>
        </Stack>
    )
}

export default Content