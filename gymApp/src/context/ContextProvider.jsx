import React from 'react'
import { Context } from './Context'
import { useState } from 'react'

const ContextProvider = ({children}) => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])
  return (
    
    <Context.Provider value={{bodyPart,exercises,setExercises,setBodyPart}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider