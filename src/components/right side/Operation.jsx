import React, { useState } from 'react' ;
import { people } from '../../data';

const Operation = () => {
  const [selected , setSelected] = useState(0) ;
  const options = ['Buy' , 'Sell' , 'Exchange']
  return (
    <div className='bg-white p-4 mx-auto w-full rounded-md lg:w-[300px] xl:w-[350px]'>
      <p className='text-slate-600 font-semibold'>Send Money</p>
      <div className='flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row justify-between px-1 gap-x-1'>
        <div className='flex gap-2 my-2 overflow-x-scroll sm:overflow-x-auto scrollbar py-2 min-w-[250px]'>
          {people.map((person) => (
            <div className='relative h-[50px] w-[50px] bg-slate-300 rounded-full object-cover'>
              <img src={person.src} alt='icon' className='h-[50px] w-[50px] object-cover rounded-full'/>
              <div className={`${person.color} h-3 w-3 rounded-full absolute left-9 top-8`}></div>
            </div>
          ))}
        </div> 
        <button className='text-slate-400 font-semibold text-md bg-slate-200 rounded-full px-4 py-1 h-8 my-auto'>All</button>
      </div>
      <hr className='border-t-[1px] border-slate-300 my-3' />
      <div className='flex flex-col xl:flex-row gap-2 justify-between items-center'>
        <p className='text-slate-600 font-semibold'>Operation</p>
        <div className='flex gap-x-1 bg-slate-300 justify-between p-1 items-center rounded-md'>
          <button className={`px-4 py-1 ${options[selected] === 'Buy' ? 'bg-white' : 'hover:bg-slate-200'} transition-all ease-in-out duration-100 rounded-md text-slate-500 font-semibold`} onClick={()=>(setSelected(0))}>Buy</button>
          <button className={`px-4 py-1 ${options[selected] === 'Sell' ? 'bg-white' : 'hover:bg-slate-200'} transition-all ease-in-out duration-100 rounded-md text-slate-500 font-semibold`} onClick={()=>(setSelected(1))}>Sell</button>
          <button className={`px-4 py-1 ${options[selected] === 'Exchange' ? 'bg-white' : 'hover:bg-slate-200'} transition-all ease-in-out duration-100 rounded-md text-slate-500 font-semibold`} onClick={()=>(setSelected(2))}>Exchange</button>
        </div>
      </div>
      <div>
        <p className='text-sm my-2 text-slate-400 tracking-wide'>You Pay</p>
        <div className='bg-slate-300 rounded-lg p-2 flex items-center gap-x-1 md:gap-x-4'>
          <button className='bg-white px-1 py-1 rounded-md basis-1/4 min-w-[100px] flex gap-x-2'>
            <img src='https://imgs.search.brave.com/D2AUAekPznBVX3Eq70Rlnuyjs37VV5c64Pr44se2qUg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTAvVGVy/cmFVU0QtQ3J5cHRv/LUxvZ28tUE5HLVBp/Yy5wbmc' alt='icon' className='h-[20px] object-contain'/>
            <p className='font-semibold text-slate-600 tracking-wider'>UST</p>
            <img src='https://www.svgrepo.com/show/446816/triangle-down.svg' alt='icon' className='h-[24px] object-contain'/>
          </button>
          <p className='basis-2/4 text-right font-semibold text-slate-600 tracking-wider'>$321.40</p>
          <p className='basis-1/4 text-center'><span className='bg-violet-800 text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-full'>MAX</span></p>
          
        </div>
      </div>
      <div>
        <p className='text-sm my-2 text-slate-400 tracking-wide'>You Get</p>
        <div className='bg-slate-300 rounded-lg p-2 flex items-center gap-x-1 md:gap-x-4'>
          <button className='bg-white px-1 py-1 rounded-md basis-1/4 flex gap-x-2 min-w-[100px]'>
            <img src='https://www.svgrepo.com/show/452169/bitcoin.svg' alt='icon' className='h-[20px] object-contain'/>
            <p className='font-semibold text-slate-600 tracking-wider'>BTC</p>
            <img src='https://www.svgrepo.com/show/446816/triangle-down.svg' alt='icon' className='h-[24px] object-contain'/>
          </button>
          <p className='basis-2/4 text-right font-semibold text-slate-600 tracking-wider'>0.05BTC</p>
          <p className='basis-1/4 text-center'><span className='bg-violet-800 text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-full'>MIN</span></p>
          
        </div>
      </div>
      <div>
        <button className='w-full rounded-md bg-gradient-to-br from-[rgb(126,69,161)] to-[rgb(90,68,199)] py-2 text-white font-semibold tracking-wide my-8'>Buy Bitcoin</button>
      </div>
    </div>
  )
}

export default Operation ;