import React from 'react'
import Transaction from '../../common/Transaction'
import Tab from './Tab'


const array  = [1,2,3,4,5,6,7, 8, 9, 10]

const Body = () => {
  return (
    <div className='w-full h-full pb-24 !pt-[69px] px-3 sm:px-4 lg:px-6 space-y-6'>
        <h1 className=' text-base lg:text-xl text-primaryOne  '>Recent Transactions</h1>
        <Tab />
        <>
         {
            array.map((iem: any) => (
                <Transaction key={iem} />
            ))
        }
        </>
    </div>
  )
}

export default Body
