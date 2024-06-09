import React from 'react'

const Balance = () => {
  return (
    <div className='text-white bg-gradient-to-br from-[rgb(126,69,161)] to-[rgb(90,68,199)] p-4 rounded-md xl:max-w-[700px]'>
      <p className='text-xl font-bold tracking-wide'>Your Balance</p>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className='left basis-1/2 mt-3 flex flex-col gap-2'>
          <p className='flex text-xs font-semibold tracking-wider text-[rgb(221,218,223)]'>jkjnkjojfowvpoweut6187189784  <img src='https://www.svgrepo.com/show/503010/copy.svg' alt='icon' className='h-[18px] ml-2 fill-white'/></p>
          <p className='text-2xl font-extrabold tracking-wide'>$31,300.40</p>
          <p className='text-lg tracking-wide'>28.6165489 BTC</p>
        </div>
        <div className='right flex gap-x-7'>
          <div className='recieve flex flex-col gap-y-2'>
            <p className='text-[rgb(211,206,237)] font-semibold' >Income</p>
            <p className='text-xl font-bold tracking-wider'>$459.20</p>
            <button className='px-8 py-[6px] bg-[rgb(124,107,207)] rounded-lg hover:bg-[rgb(83,57,187)] hover:border-[1px] hover:border-white transition-all ease-in-out duration-100'>Recieve</button>
          </div>
          <div className='send flex flex-col gap-y-2'>
            <p className='text-[rgb(211,206,237)] font-semibold' >Expense</p>
            <p className='text-xl font-bold tracking-wider'>$250.40</p>
            <button className='px-8 py-[6px] bg-[rgb(124,107,207)] rounded-lg hover:bg-[rgb(83,57,187)] hover:border-[1px] hover:border-white transition-all ease-in-out duration-100'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Balance