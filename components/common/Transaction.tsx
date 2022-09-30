import { useRouter } from 'next/router';
import React from 'react'
import { HiArrowDown, HiArrowUp } from 'react-icons/hi'

interface Props {
  price: string;
  date: string
  type: string
  id: string
}

const Transaction: React.FC<Props> = ({price, date, type, id}) => {

  const router = useRouter()

  return (
    <div 
      onClick={() => router.push(`/dashboard/wallet/transaction/${id}`)}
      className=' px-2 py-4 lg:p-4 rounded-[6px] border border-secondaryOne cursor-pointer dark:border-0 dark:bg-darkOne w-full flex items-center justify-center space-x-4  '>
      
      {
        type === 'inflow' 
        ? <div className='p-2 rounded-full bg-secondaryTwo flex items-center justify-center'>
            <HiArrowDown className='!text-base text-primaryTwo' />
          </div>
        : <div className='p-2 rounded-full bg-secondaryThree flex items-center justify-center'>
            <HiArrowUp className='!text-base text-primaryThree' />
          </div>
      }
      
      
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-sm lg:text-base font-semibold text-black dark:text-light tracking-wider '>{price}</h1>
        <h3 className='text-xs lg:text-sm font-medium '>{date.substring(0, 10)}</h3>
      </div>
    </div>
  )
}

export default Transaction
