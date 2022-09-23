import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'
import React from 'react'

const Card = () => {
  return (
    <div className="relative bg-light rounded-[10px] flex flex-col w-full space-y-7 p-4 ">
        <div className='flex justify-end'>
            <RiEyeOffFill className='!text-lg !text-primaryOne !cursor-pointer !z-50' />
        </div>
        <div className='flex justify-start'>
            <h4 className='text-base text-primaryOne font-semibold leading-5'>$ 20,000,000,000</h4>
        </div>

        <div className='absolute !-top-[52px] !z-10 bottom-0 right-0 left-0 w-full h-full flex justify-center '>
            <div className='rounded-full !border-[0.2px] border-[#062156]/70 w-12 h-12 bg-light flex items-center justify-center '>
                <h1 className='text-black text-sm font-medium !z-50 '>USD</h1>
            </div>
        </div>
       
    </div>
  )
}

export default Card