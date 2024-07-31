import React from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'
import banner from '../assets/images/banner.png'
// import app.css
const HeroBanner = () => {
  return (
    <Box 
     sx={{position:'relative',mt: {lg:'130px' , xs:'70px'},
          ml: {sm:'50px'}}}
         >
        <Typography color='#FF2625'
        fontWeight='600'
        fontSize='24px'
         >
            Fitness Club
        </Typography>
        <Typography
        fontWeight='800'
        mb='23px'
        mt='30px'
        sx={{fontSize: {lg:'44px' , xs:'40px'}}}
        >
            Focus on you <br /> Until the focus is on you
        </Typography>
        <Typography
        fontWeight='400'
        sx={{fontSize: '22px' ,
        lineHeight : '35px',
        mb:'2px'}}>
           Be ready for the transforming journey
        </Typography>
        <Button 
        variant="contained"
        sx={{backgroundColor: '#FF2625' ,    
             '&:hover': {
            backgroundColor: '#FF5728', // Change this to your desired hover color
          }}}>
            Explore exercises
        </Button>
        <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{
            mt:'30px',
            opacity:0.1,
            display:{
                lg:'block',xs:'none'
            },
            fontSize:'100px',
            textAlign:'center',
            zIndex:-2
        }}>
            Exercises
        </Typography>
        <img src={banner} alt="banner"
        className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner