import React from 'react'
import {Box} from '@mui/material'
import ExerciseVideos from '../componenets/ExerciseVideos'
import SimilairExercises from '../componenets/SimilairExercises'
import {useParams}  from 'react-router-dom';
import { fetchData,exerciseOptions,youtubeOptions } from '../utils/fetchData';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData =()=>{
    fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions).
    then(exerciseDetailData =>  setExerciseDetail(exerciseDetailData) ).
    catch(error=>console.log(error))

    fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name} exercise`, youtubeOptions).
    then(exerciseVideosData => setExerciseVideos(exerciseVideosData.contents) ).
    catch(error=>console.log(error))
  }
  
  fetchExercisesData()
   
  
   }, [])
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail