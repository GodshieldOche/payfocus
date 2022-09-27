import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'
import React from 'react'


interface Props {
    currency: string;
    balance: string
}

const Card : React.FC<Props> = ({currency, balance}) => {
  return (
    <div className="relative bg-light rounded-[10px] flex flex-col w-full space-y-4 sm:space-y-6 xl:space-y-7 p-3 sm:p-4 ">
        <div className='flex justify-end'>
            <RiEyeOffFill className='!text-sm sm:!text-lg !text-primaryOne !cursor-pointer !z-50' />
        </div>
        <div className='flex justify-start'>
            <h4 className='text-sm sm:text-base text-primaryOne font-semibold leading-5'>{balance}</h4>
        </div>

        <div className='absolute !-top-[37px] sm:!-top-[45px]  lg:!-top-[52px] !z-10 bottom-0 right-0 left-0 w-full h-full flex justify-center '>
            <div className='rounded-full !border-[0.2px] border-[#062156]/70 w-10 h-10 sm:w-12 sm:h-12 bg-light flex items-center justify-center '>
                <h1 className='text-black text-xs sm:text-sm font-medium !z-50 '>{currency}</h1>
            </div>
        </div>
       
    </div>
  )
}

export default Card