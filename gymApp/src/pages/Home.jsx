import React ,{useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../componenets/HeroBanner'
import SearchExercises from '../componenets/SearchExercises'
import Exercises from '../componenets/Exercises'
import ContextProvider from '../context/ContextProvider'
const Home = () => {
  return (
   <Box>

      <HeroBanner/>

      <ContextProvider>
      <SearchExercises />
      <Exercises/>
      </ContextProvider>

   </Box>

  )
}

export default Home