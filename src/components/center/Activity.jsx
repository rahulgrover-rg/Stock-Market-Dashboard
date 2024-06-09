import React from 'react' ;
import {activities} from '../../data.js' ;

const Activity = () => {
  
  return (
    <div classname='Activity xl:max-w-[700px]'>
      <p className='text-lg font-semibold mb-2'>Activity</p>
      <div className='activity-table flex flex-col bg-slate-300 px-1 rounded-md pb-1  xl:max-w-[700px]'>
        <div className='table-head w-full flex text-left py-1 px-2 font-semibold items-center'>
          <p className='basis-2/5'>Acitvity</p>
          <p className='basis-1/5'>Account</p>
          <p className='basis-1/5 text-center md:text-left'>Last Payment</p>
          <p className='basis-1/5 text-center'>Balance</p>
        </div>
        <div className='table-contents flex flex-col gap-y-2'>
          {activities.map((activity , index)=> (
            <div className='w-full flex text-left py-2 px-2 text-sm bg-white rounded-md text-slate-500 border-[1px] border-slate-400'>
              <p className='basis-2/5 flex'>
                <div className='bg-slate-300 rounded-md mx-2 flex justify-center items-center w-[40px]'>
                  <img src={activity.img} alt='icon' className='h-[24px]'/>
                </div>
                <div>
                  <p className='font-semibold text-slate-600'>{activity.name}</p>
                  <p className=''>{activity.desc}</p>
                </div>
              </p>
              <p className='basis-1/5 text-left'>
                {activity.account}
              </p>
              <p className='basis-1/5'>
                {activity.lastPayment}
              </p>
              <p className={`text-center basis-1/5 ${activity.balance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                {activity.balance < 0 ? `-$${Math.abs(activity.balance)}` : `+$${Math.abs(activity.balance)}` }
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Activity