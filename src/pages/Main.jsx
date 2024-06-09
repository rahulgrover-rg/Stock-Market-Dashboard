import React from 'react'
import Menu from '../components/left side/Menu' ;
import Balance from '../components/center/Balance' ;
import Watchlist from '../components/center/Watchlist' ;
import Activity from '../components/center/Activity' ;
import Assets from '../components/right side/Assets' ;
import Operation from '../components/right side/Operation' ;
import Transaction from '../components/right side/Transaction' ; 

const Main = () => {
  return (
    <div className='Main flex flex-col lg:flex-row gap-4 bg-slate-200 dark:bg-slate-800 mx-auto md:w-4/5 lg:w-[100vw] h-fit p-5'>
        <div className='left-side lg:basis-1/4 hidden lg:block'>
            <Menu />
        </div>
        <div className='center basis-1/2 lg:basis-2/4 flex flex-col lg:max-w-[48vw]'>
            <div className="Balance basis-1/6"><Balance /></div>
            <div className="Watchlist basis-2/6"><Watchlist /></div>
            <div className="Activity basis-3/6"><Activity /></div>
        </div>
        <div className='right-side basis-1/2 lg:basis-1/4 flex flex-col'>
            <div className='Assets basis-1/5'><Assets /></div>
            <div className='Operation basis-2/5'><Operation /></div>
            <div className='Transaction basis-2/5'><Transaction /></div>
        </div>
    </div>
  )
}

export default Main