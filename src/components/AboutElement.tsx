import { Stack } from '@mui/material'
import React from 'react'
import { AboutContent } from '.'
import FileNavigation from './FileNavigation'

const AboutElement = () => {
  return (
    <Stack>
      <FileNavigation />
      <AboutContent />
    </Stack>
  )
}

export default AboutElement