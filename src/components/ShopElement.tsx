import { Stack } from '@mui/material'
import React from 'react'
import ShopContent from './ShopContent'
import FileNavigation from './FileNavigation'

const ShopElement = () => {
  return (
    <Stack>
      <FileNavigation />
      <ShopContent />
    </Stack>
  )
}

export default ShopElement