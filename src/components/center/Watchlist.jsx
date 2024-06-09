import React from 'react'
import LineChart from '../graphs/LineChart' ;
import { BTCdata, Ethereumdata, Litecoindata } from '../../data';
import './Watchlist.css'

const Watchlist = () => {
  return ( 
    <div className="Watchlist xl:max-w-[700px]">
      <p className='font-semibold text-lg tracking-wide'>Watchlist</p>
      <div class="flex scrollbar h-fit overflow-auto gap-2 my-2 py-2">    
        <div className='px-6 bg-white rounded-lg py-4 flex flex-col gap-y-2 border-[1px] border-slate-300'>
          <p className='flex justify-between'>
            <span className='font-semibold tracking-wide text-slate-600'>Bitcoin</span>
            <img src='https://www.svgrepo.com/show/304556/three-dots.svg' alt='icon' className='h-[24px]'/>
          </p>
          <LineChart data={BTCdata} />
          <div className='flex mt-5 items-center'>
            <div className='basis-1/5'>
              <img src="https://www.svgrepo.com/show/349310/bitcoin.svg" alt="icon" className='h-[32px]' />
            </div>
            <div className='basis-3/5 text-left'>
              <p className='font-semibold text-slate-600'>0.223245 BTC</p>
              <p className='text-xs font-semibold text-slate-500'>11,032,37 USD</p>
            </div>
            <div className='flex gap-x-2 basis-1/5 self-end'>
              <img src='https://www.svgrepo.com/show/533612/arrow-narrow-up.svg' alt='icon' className='h-[16px]'/>
              <span className='text-green-600 text-xs'>+12.05</span>
            </div>
          </div>
        </div>
        <div className='px-6 bg-white rounded-lg py-4 flex flex-col gap-y-2 border-[1px] border-slate-300'>
          <p className='flex justify-between'>
            <span className='font-semibold tracking-wide text-slate-600'>Ethereum</span>
            <img src='https://www.svgrepo.com/show/304556/three-dots.svg' alt='icon' className='h-[24px]'/>
          </p>
        <LineChart data={Ethereumdata} />
        <div className='flex mt-5 items-center'>
            <div className='basis-1/5'>
              <img src="https://www.svgrepo.com/show/509914/ethereum.svg" alt="icon" className='h-[32px]' />
            </div>
            <div className='basis-3/5 text-left'>
              <p className='font-semibold text-slate-600'>0.457245 ETH</p>
              <p className='text-xs font-semibold text-slate-500'>2,032,37 USD</p>
            </div>
            <div className='flex gap-x-2 basis-1/5 self-end'>
              <img src='https://www.svgrepo.com/show/533612/arrow-narrow-up.svg' alt='icon' className='h-[16px]'/>
              <span className='text-green-600 text-xs'>+8.29</span>
            </div>
          </div>
      </div>
        <div className='px-6 bg-white rounded-lg py-4 flex flex-col gap-y-2 border-[1px] border-slate-300'>
          <p className='flex justify-between'>
            <span className='font-semibold tracking-wide text-slate-600'>Litecoin</span>
            <img src='https://www.svgrepo.com/show/304556/three-dots.svg' alt='icon' className='h-[24px]'/>
          </p>
          <LineChart data={Litecoindata} />
          <div className='flex mt-5 item-center'>
            <div className='basis-1/5'>
              <img src="https://www.svgrepo.com/show/469194/litecoin-square.svg" alt="icon" className='h-[32px]' />
            </div>
            <div className='basis-3/5 text-left'>
              <p className='font-semibold text-slate-600'>0.629278 LTC</p>
              <p className='text-xs font-semibold text-slate-500'>32,537 USD</p>
            </div>
            <div className='flex gap-x-2 basis-1/5 self-end'>
              <img src='https://www.svgrepo.com/show/533601/arrow-narrow-down.svg' alt='icon' className='h-[16px]'/>
              <span className='text-red-600 text-xs'>-3.55</span>
            </div>
          </div>        
        </div>
      </div>
    </div>    
  )
}

export default Watchlist