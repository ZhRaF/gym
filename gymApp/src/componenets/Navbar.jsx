import React from 'react'
import { NavLink } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
    return (
      <>
      <Stack
       direction='row' 
       justifyContent='space-around' 
       sx={{ gap:{sm:'144px' , xs:'40px'},
             mt:{sm:'32px' , xs:'20px'},
             px:"20px" }}>
          <NavLink to='/'>
            <img src={Logo} alt="logo" 
              style={{ width: '48px', height: '48px', margin: '0 20px' }} />
          </NavLink>
        <Stack 
        direction="row" 
        gap='40px' 
        fontSize="24px" 
        alignItems="flex-end">
          <NavLink 
            to='/' 
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#b54141' : '#000',
              borderBottom: isActive ? '3px solid #FF2625' : 'none'
            })}
          >
            Home
          </NavLink>
          <a href="#exercises" 
            style={{ textDecoration: 'none', color: '#b54141' }}>
            Exercises
          </a>
        </Stack>
        </Stack>

      </>
    );
  }
  
  export default Navbar;