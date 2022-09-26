import React from 'react'
import { HiArrowDown } from 'react-icons/hi'

const Transaction = () => {
  return (
    <div className=' px-2 py-4 lg:p-4 rounded-[6px] border border-secondaryOne dark:border-0 dark:bg-darkOne w-full flex items-center justify-center space-x-4  '>
      <div className='p-2 rounded-full bg-secondaryTwo flex items-center justify-center'>
        <div>
          <HiArrowDown className='!text-base text-primaryTwo' />
        </div>
      </div>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-sm lg:text-base font-semibold text-black dark:text-light tracking-wider '>$ 20,000.00</h1>
        <h3 className='text-xs lg:text-sm font-medium '>23/02/23</h3>
      </div>
    </div>
  )
}

export default Transaction
