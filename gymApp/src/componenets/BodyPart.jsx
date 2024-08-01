import React,{useContext} from 'react'
import  Icon  from '../assets/icons/gym.png'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'
import { Context } from '../context/Context'

const BodyPart = ({item}) => {
const {bodyPart, setBodyPart} = useContext(Context)

  return (
   <Stack 
   type='button'
   alignItems='center'
   justifyContent='center'
   className='bodyPart-card'
   sx={{
    borderTop: bodyPart === item ? '4px solid #FF2625' : 'none',
    background: '#fff',
    borderBottomLeftRadius: '20px',
    width: '270px',
    height: '282px',
    cursor: 'pointer',
    gap: '47px',
  }}
   onClick={()=>{
    setBodyPart(item)
    window.scrollTo({top:1800 , behavior:'smooth' , left:100})
   }}
   >
    <img src={Icon} alt="dumbbell" style={{width:'40px',height:'40px'}} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>

   </Stack>
  )
}

export default BodyPart