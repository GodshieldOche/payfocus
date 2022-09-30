import React from 'react'
import BackNav from '../../common/BackNav'

const Details = () => {
  return (
    <div>
      <BackNav text='Transaction Details' />
      <div className='!mt-8 sm:!mt-14 '>
        <div className='w-full flex flex-col items-center justify-center space-y-4 sm:space-y-6'>
            <h1 className='font-medium text-sm sm:text-base  '>Amount</h1>
            <h1 className='font-semibold text-[32px] sm:text-[40px] text-primaryTwo '> + $ 20,000.00</h1>
        </div>

        <div className='w-full px-4 sm:px-8 py-6 flex flex-col space-y-8 bg-secondaryOne dark:bg-darkOne mt-[48px]  sm:mt-[80px]'>
            {/* status */}
            <div className='w-full flex justify-between'>
                <h1 className='left'>Status</h1>
                <h1 className='right'>Initiated</h1>
            </div>
            {/* Currency */}
            <div className='w-full flex justify-between'>
                <h1 className='left'>Currency</h1>
                <h1 className='right'>USD</h1>
            </div>
            {/* Transaction Type */}
            <div className='w-full flex justify-between'>
                <h1 className='left'>Transaction Type</h1>
                <h1 className='right'>Inflow</h1>
            </div>
            {/* Narration */}
            <div className='w-full flex justify-between'>
                <h1 className='left'>Narration</h1>
                <h1 className='right'>Nike Shoes</h1>
            </div>
            {/* Channel */}
            <div className='w-full flex justify-between'>
                <h1 className='left'>Channel</h1>
                <h1 className='right'>Debit Card</h1>
            </div>
            {/* Timestamp */}
            <div className='w-full flex justify-between'>
                <h1 className='left'>Timestamp</h1>
                <h1 className='right'>23/02/23   05:50 PM</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details
