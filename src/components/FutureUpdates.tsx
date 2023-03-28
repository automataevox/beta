import { Card, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Item } from './styled'

const FutureUpdates = () => {

  const objects = [
    {value: "qd7s8y9x544", id: 1},
    {value: "f7e8x44efx5", id: 2},
    {value: "x1uo7g5e6v2", id: 3},
    {value: "4cv8zrhx65t", id: 4},
    {value: "5v1jetz87ed", id: 5},
  ];

  return (
    <Grid container spacing={2} maxWidth={"80%"} sx={{}}>
        <Grid item xs={4}>
          <Card sx={{padding: 2}}>
            <Box>
              <Typography variant='h6' >
                Head
              </Typography>
              <Typography variant='body2' sx={{color: "#5b5b5b"}}>
                Heading description
              </Typography>
            </Box>
            <Box>
              <Typography variant='body1'>
              Body lol
              </Typography>
            </Box>
          </Card>
        </Grid>
    </Grid>
  );
}

export default FutureUpdates