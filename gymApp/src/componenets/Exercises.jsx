import {useContext,useState,useEffect} from 'react'
import { fetchData ,exerciseOptions } from '../utils/fetchData'
import { Context } from '../context/Context'
import { Box,Typography,Stack} from '@mui/material'
import Pagination from '@mui/material/Pagination';
import ExerciseCard from './ExerciseCard'
// why bodypart where?

const Exercises = () => {
  const {bodyPart,exercises, setExercises}=useContext(Context)
  const [currentPage,setCurrentPage]=useState(1)
  const exercisesPerPage=3
 useEffect(()=>{
  const fetchExercisesData=()=>{
  if (bodyPart=='all'){
    fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions).
    then(exercisesData=>{
      setExercises(exercisesData)
    }).
    catch(error=>error)
  }else{
  fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions).
  then(exercisesData=>{
    console.log(exercises)
    setExercises(exercisesData)
  }).
  catch(error=>error)
  }
}
  fetchExercisesData()

},[bodyPart])
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate=(event,page)=>{
    setCurrentPage(page);
    window.scrollTo({ top: 1800, behavior: 'smooth' });

  }
  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise,index)=>{
         return <ExerciseCard key={index} exercise={exercise}/>

         }  )}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length >  exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
          // count is the tot nb of pages 
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
