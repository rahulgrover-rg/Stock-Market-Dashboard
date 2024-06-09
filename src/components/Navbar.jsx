import React, { useState } from 'react'
import MenuCustomAnimation from './Hamburger'

const Navbar = () => {

  const [lightmode , setLightMode] = useState(true) ;
  
  return (
       <div className='navbar flex justify-between px-2 lg:px-8 py-4 max-h-[100px] md:w-4/5 lg:w-full mx-auto items-center sticky top-0 bg-white z-50'>
        <div className='dropdown lg:hidden'>
          <MenuCustomAnimation />
        </div>
        <div className='company flex gap-2'>
          <div className='logo relative'>
            <div className='bg-blue-300 h-6 w-6 rounded-md relative right-1'></div>
            <div className='bg-violet-500 h-6 w-6 rounded-md absolute bottom-[0.2px] object-contain'>
              <img src="https://www.svgrepo.com/show/517604/loop-infinity.svg" alt="icon" />
            </div> 
          </div>
          <p className='font-semibold text-lg'>InfyToken</p>
        </div>
        <div className='search flex gap-x-10'>
            <input type="text" className='hidden lg:inline px-12 py-[8px] rounded-full min-w-[50px] w-[30vw] max-w-[300px] bg-slate-200 text-slate-500 border-none outline-none'  placeholder='Search...' />
            <div className='icons flex gap-x-2'>
              <img src={lightmode ? 'https://www.svgrepo.com/show/407540/sun.svg' : 'https://www.svgrepo.com/show/528414/moon-stars.svg'} alt='icon' className='h-[24px] cursor-pointer' onClick={()=>(setLightMode(prev => !prev))}/>
              <img src='https://www.svgrepo.com/show/327722/color-palette.svg' alt='icon' className='h-[24px] cursor-pointer' />
              <img src='https://www.svgrepo.com/show/510844/bell-notification.svg' alt='icon' className='h-[24px] cursor-pointer' />
              <img src='https://www.svgrepo.com/show/365765/squares-four-thin.svg' alt='icon' className='h-[24px] cursor-pointer' />
            </div>
        </div>
       </div>
    
  )
}

export default Navbar