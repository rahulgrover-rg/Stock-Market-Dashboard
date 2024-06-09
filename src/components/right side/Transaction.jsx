import React from 'react'
import BarChart from '../graphs/BarChart'
import { BarChartdata } from '../../data'

const Transaction = () => {
  return (
    <div className="Transaction flex flex-col gap-y-4 my-4 bg-white p-4 rounded-md border-[1px] border-slate-300 min-w-[300px] lg:w-[300px] xl:w-[350px] mx-auto overflow-x-auto scrollbar">
      <p className='text-slate-600 font-semibold'>Transaction
      <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
      </p>
      <p className='text-slate-600 font-semibold'>Last Month <span className='text-green-600 font-semibold'>$42,443</span></p>
        <div className='w-[600px] overflow-x-auto scrollbar p-2'>
        <BarChart data={BarChartdata} />
        </div>
        
    </div>
    
  )
}

export default Transaction