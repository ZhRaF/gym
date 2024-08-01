import { useState,useEffect } from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import  {Context}  from '../context/Context'
import { useContext } from 'react'

const SearchExercises = () => {
  const [search,setSearch] = useState('')
  const {setExercises} = useContext(Context)
  const [bodyParts, setBodyParts] = useState([])

 useEffect(() => {
  const fetchExercisesCat =()=>{
  fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions).
  then(bodyPartsData =>  setBodyParts(['all',...bodyPartsData])).
  catch(error=>console.log(error))
  console.log(bodyParts)
}

  fetchExercisesCat()
 

 }, [])
 

  const handleSearch= ()=>{
    console.log('API Key:', import.meta.env.VITE_RAPID_API_KEY);

    if (search) {
      fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
          .then(exerciseData => {
             const searchedExercises= exerciseData.filter(ex=>ex.name.toLowerCase.includes(search)) ||
              exerciseData.filter(ex=>ex.target.toLowerCase.includes(search)) ||
              exerciseData.filter(ex=>ex.bodypart.toLowerCase.includes(search)) ||
              exerciseData.filter(ex=>ex.equipment.toLowerCase.includes(search)) 

              setExercises('')
              setExercises(searchedExercises)
              console.log('Exercise Data:', exerciseData);
          })
          .catch(error => {
              console.error('Error in handleSearch:', error);
          });
  }
};
  return (
<Stack
  alignItems="center"
  mt="37px"
  justifyContent="center" 
  p="20px">
      <Typography  
      fontWeight={700} 
      sx={{ fontSize: { lg: '44px', xs: '30px' } }}
      mb="49px"
      textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }
               , width: { lg: '1170px', xs: '350px' }
               , backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn"
         sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', 
         width: { lg: '173px', xs: '80px' },
          height: '56px', position: 'absolute', right: '0px',
           fontSize: { lg: '20px', xs: '14px' } }} 
           onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts}  />
      </Box>
    </Stack>

  )
}
export default SearchExercises