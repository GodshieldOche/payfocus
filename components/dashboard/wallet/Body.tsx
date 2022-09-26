import React from 'react'
import Transaction from '../../common/Transaction'
import Tab from './Tab'


const array  = [1,2,3,4,5,6,7, 8, 9, 10]

const Body = () => {
  return (
    <div className='w-full h-full pb-24 !pt-[69px] px-4 sm:px-[43px] lg:px-6 space-y-6'>
        <h1 className=' text-base lg:text-xl text-primaryOne  '>Recent Transactions</h1>
        <Tab />
        <div className='space-y-4'>
         {
            array.map((iem: any) => (
                <Transaction key={iem} />
            ))
        }
        </div>
    </div>
  )
}

export default Body
