import { useRouter } from 'next/router'
import React from 'react'
import { Icon } from '@iconify/react';
import { HiOutlineArrowLeft } from 'react-icons/hi';

interface Props {
    text: string
    icon1: string
    icon2?: string
    showIcon: boolean
}



const PaymentNav: React.FC<Props> = ({text, icon1, icon2, showIcon }) => {

    const router = useRouter()

  return (
    <div className='relative w-full py-5 bg-primaryOne dark:bg-darkOne px-4 sm:px-[43px] lg:px-6 flex items-center justify-center lg:justify-between lg:space-x-5 '>
        <div className={`flex items-center ${showIcon ? "lg:space-x-6" : ""} `}>
          {
            showIcon && <HiOutlineArrowLeft 
            onClick={()=> router.back()}
           className='hidden lg:block text-lg text-light xl:!text-xl cursor-pointer' />
          }
          <h1 className='text-light !text-center'>{text}</h1>
        </div>
       
        <Icon icon={icon1!} className='hidden lg:block text-lg !text-light xl:!text-xl cursor-pointer' />
       
      <div className='absolute lg:hidden w-full h-full top-0 bottom-0 my-auto left-0 right-0 px-4 sm:px-[43px] flex justify-between items-center '>
        <HiOutlineArrowLeft 
         onClick={()=> router.back()}
        className='text-lg text-light xl:!text-xl cursor-pointer' />
        <Icon icon={icon1!} 
         onClick={()=> router.back()}
        className='text-lg text-light xl:!text-xl cursor-pointer' />
      </div>
    </div>
  )
}

export default PaymentNav
