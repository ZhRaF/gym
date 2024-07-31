import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes} from  'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import Home from './pages/Home'
import ExerciceDetail from './pages/ExerciceDetail'
import './App.css'

function App() {

  return (
    <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/exercise/:id' element={<ExerciceDetail/>}/>
        </Routes>
        </Router>
        <Footer/>
    </Box>

  )
}

export default App
