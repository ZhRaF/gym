import React ,{useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../componenets/HeroBanner'
import SearchExercises from '../componenets/SearchExercises'
import Exercises from '../componenets/Exercises'

const Home = () => {
  return (
   <Box>
      <HeroBanner/>

      <SearchExercises/>

      <Exercises/>

   </Box>

  )
}

export default Home