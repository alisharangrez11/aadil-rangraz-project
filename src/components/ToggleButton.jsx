import React from 'react'

const ToggleButton = () => {

    const toggleMenu = ()=>{
        
    }
  return (
    <button onClick={toggleMenu} className='md:hidden flex flex-col gap-1.5 p-2'>
        <span className='block w-6 h-0.5 bg-white transition-all'></span>
        <span className='block w-6 h-0.5 bg-white transition-all'></span>
        <span className='block w-6 h-0.5 bg-white transition-all'></span>
    </button>
  )
}

export default ToggleButton