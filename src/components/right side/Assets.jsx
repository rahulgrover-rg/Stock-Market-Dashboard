import React from 'react'

const Assets = () => {
  return (
    <div className='Assets max-w-fit lg:max-w-[400px] mx-auto rounded-md py-2 flex flex-col gap-3'>
      <hr className='w-3/5 mx-auto my-5 border-white border-t-4 lg:hidden'/>
      <div className='upper flex mx-auto w-[300px] justify-between px-2 '>
        <p className='font-semibold'>Assets</p>
        <p className='text-sm text-slate-500 cursor-pointer'>See All</p>
      </div>
      <div className='lower flex gap-x-4 text-left w-[320px] md:w-full lg:w-[300px] xl:w-[350px] mx-auto overflow-x-auto scrollbar pb-5 mb-5'>
        <div className='BTC bg-white rounded-md p-4 px-6 w-[170px] lg:w-[150px] flex flex-col justify-between gap-y-3 border-[1px] border-slate-300 text-left'>
          <p className='flex gap-x-2'><img src='https://www.svgrepo.com/show/452169/bitcoin.svg' alt='icon' className='h-[26px] object-contain'/><span className='text-slate-500 tracking-wider text-lg'>BTC</span></p>
          <p className='tracking-wider font-semibold text-slate-700'>$224,300.40</p>
          <p className='font-semibold text-red-600 text-sm'>7.2526</p>
        </div>
        <div className='UST bg-white rounded-md p-4 px-6 w-[170px] lg:w-[150px] flex flex-col justify-between gap-y-3 border-[1px] border-slate-300 text-left'>
          <p className='flex gap-x-2'><img src='https://imgs.search.brave.com/D2AUAekPznBVX3Eq70Rlnuyjs37VV5c64Pr44se2qUg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTAvVGVy/cmFVU0QtQ3J5cHRv/LUxvZ28tUE5HLVBp/Yy5wbmc' alt='icon' className='h-[26px] object-contain'/><span className='text-slate-500 tracking-wider text-lg'>UST</span></p>
          <p className='tracking-wider font-semibold text-slate-700'>$13,400.20</p>
          <p className='font-semibold text-green-600 text-sm'>9.5256</p>
        </div>
        <div className='LTC bg-white rounded-md p-4 px-6 w-[170px] lg:w-[150px] flex flex-col justify-between gap-y-3 border-[1px] border-slate-300 text-left'>
          <p className='flex gap-x-2'><img src='https://imgs.search.brave.com/D2AUAekPznBVX3Eq70Rlnuyjs37VV5c64Pr44se2qUg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTAvVGVy/cmFVU0QtQ3J5cHRv/LUxvZ28tUE5HLVBp/Yy5wbmc' alt='icon' className='h-[26px] object-contain'/><span className='text-slate-500 tracking-wider text-lg'>UST</span></p>
          <p className='tracking-wider font-semibold text-slate-700'>$13,400.20</p>
          <p className='font-semibold text-green-600 text-sm'>9.5256</p>
        </div>
      </div>
      
    </div>
  )
}

export default Assets