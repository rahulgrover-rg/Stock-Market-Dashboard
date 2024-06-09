import Hamburger from '../components/Hamburger' ;
import React from 'react'

const Support = () => {
  return (
    <div className='flex gap-5 items-center'>
      <div className='hidden lg:block'><Hamburger /></div>
      
      <p className='text-3xl text-slate-600 font-semibold tracking-wide'>Support</p>
    </div>
  )
}

export default Support ;