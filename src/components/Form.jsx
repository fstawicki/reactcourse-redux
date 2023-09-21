import React from 'react'

import {Button, Box} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counter'


const Form = () => {


    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

  return (
    <>
        <Button sx={{bgcolor: 'secondary.main', mr: 2}} size='large' variant='contained' onClick={() => dispatch(decrement())}>Decrement by 1</Button>
        <Button size='large'  variant='contained' onClick={() => dispatch(increment())}>Increment by 1</Button>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button size='large' sx={{bgcolor: 'red', mt: 2}} variant='contained' onClick={() => dispatch(incrementByAmount(50))}>Increment by 50</Button>
        </Box>
    </>
  )
}

export default Form