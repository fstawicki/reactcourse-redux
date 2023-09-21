import React from 'react'

import {Button} from '@mui/material'

const Form = () => {
  return (
    <div>
        <Button size='large' color='error' variant='contained'>Decrement by 1</Button>
        <Button size='large'  variant='contained'>Increment by 1</Button>
    </div>
  )
}

export default Form