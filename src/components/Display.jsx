import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const Display = () => {

    const count = useSelector((state) => state.counter.count);
    const value = 3;

  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{mb: 2}}>
        <Typography variant='h6'>Current value: {count}</Typography>
    </Box>
  )
}

export default Display