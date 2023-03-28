import { Stack } from '@mui/system'
import React from 'react'
import { MainContent, FileNavigation } from '.'

const MainElement = () => {
  return (
    <Stack>
        <FileNavigation />
        <MainContent />
    </Stack>
  )
}

export default MainElement