import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Card } from './styled'
import { releases } from '../releases'
const Content = () => {

    return (
        <Stack sx={{display: 'flex', flexDirection: 'row', gap: 1, minWidth: "28rem"}}>
            <Card>
            </Card>
            <Card fg={1} responsive>
                <Typography variant="body1" sx={{fontSize: '2rem', fontFamily: 'VT323'}}>
                    Releases
                </Typography>
                <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 20}}>
                    {releases.map((release, idx) => {
                        return (
                            <Box key={idx} sx={{alignItems: "center", display: "flex", columnGap: 2}}>
                                <Box >
                                    <img src={release.image} alt={release.releaseName} height={"150rem"}/>
                                </Box>
                                <Box>
                                    <Typography variant="body1" sx={{fontSize: '1.5rem', fontFamily: 'VT323'}}>
                                    {release.artists.map((art) => (art.name))} - {release.releaseName}
                                    </Typography>
                                    <Typography variant="body2" sx={{fontSize: '1.5rem', fontFamily: 'VT323'}}>
                                        {release.releaseDate.toLocaleDateString()}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    }
                    )}
                </Box>
            </Card>
            <Card>
            </Card>
        </Stack>
    )
}

export default Content