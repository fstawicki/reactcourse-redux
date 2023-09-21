import { Card, Paper, Box, ThemeProvider, createTheme, Container, CssBaseline, AppBar, Typography } from '@mui/material'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'


function App() {


  const darkTheme = createTheme({
    palette:{
      mode: 'dark',
    },
  });

  return (
    // <ThemeProvider theme={darkTheme}>
    // </ThemeProvider>
    <>
    <CssBaseline />
    <Paper className='main'>
      <AppBar sx={{bgcolor: 'secondary.main'}}>
        <Typography variant='h4' textAlign='center' sx={{p: 2}}>Redux Course</Typography>
      </AppBar>
      <Card variant="outlined" sx={{p:3}}>
        <Display />
        <Form />
      </Card>
    </Paper>
    </>
  )
}

export default App
