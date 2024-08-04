import React ,{useEffect,useState} from 'react'
import {Box} from '@mui/material'
import ExerciseVideos from '../componenets/ExerciseVideos'
import SimilairExercises from '../componenets/SimilairExercises'
import {useParams}  from 'react-router-dom';
import Detail from '../componenets/Detail'
import { fetchData,exerciseOptions,youtubeOptions } from '../utils/fetchData';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({target:'abs'});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData =()=>{
    fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions).
    then(exerciseDetailData => { 
      // console.log(exerciseDetailData.name)
      // console.log('data',exerciseDetailData.target)
      setExerciseDetail(exerciseDetailData)} ).
    catch(error=>console.log(error))
    // tryy to remove the if bcs we have the loader?
if(exerciseDetail){
    fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name} exercise`, youtubeOptions).
    then(exerciseVideosData => {
      // console.log('videos',exerciseVideosData)
      setExerciseVideos(exerciseVideosData.contents)}).
    catch(error=>console.log(error))
    
    fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetail.target}`, exerciseOptions).
    then(exerciseTargetData => { 
      // console.log('whats wrong')
      // console.log('targetdata',exerciseTargetData)
      console.log(exerciseDetail.target)
      setTargetMuscleExercises(exerciseTargetData)} ).
    catch(error=>console.log(error))

    fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetail.equipment}`, exerciseOptions).
    then(exerciseEquipmentData => { 
      // console.log('whats wrong')
      // console.log('Equipmentdata',exerciseEquipmentData)
      setEquipmentExercises(exerciseEquipmentData)} ).
    catch(error=>console.log(error))
}
// i think there is a problem with fetch list
// maybe addin the variable of url to the dependencies of useEffect
    
  }
  
  fetchExercisesData()
   
  
   }, [id,exerciseDetail])
   if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail}  />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilairExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail