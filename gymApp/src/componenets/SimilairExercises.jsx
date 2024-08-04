import { Box,Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
const SimilairExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <>
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
{    targetMuscleExercises.length ? <HorizontalScrollbar data={ targetMuscleExercises} isBodyPart={false}  /> : <Loader/>
}         
         {/* trying the horizontal thingy */}

     <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>     
{    equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} isBodyPart={false}  /> : <Loader/>
}
    </Box>

    <Box>

    </Box>
    </>
  )
}

export default SimilairExercises