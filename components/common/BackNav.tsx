import { useRouter } from 'next/router'
import React from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'

interface Props {
  text: string
}


const BackNav: React.FC<Props> = ({text}) => {

    const router = useRouter()

  return (
    <div className='relative w-full py-5 bg-primaryOne dark:bg-darkOne px-4 sm:px-[43px] lg:px-6 flex items-center justify-center lg:justify-start space-x-5 '>
        <HiOutlineArrowLeft
        className='hidden lg:block text-lg text-light xl:!text-xl cursor-pointer'
        onClick={()=> router.back()}
        />
      <h1 className='text-light !text-center'>{text}</h1>

      <div className='absolute lg:hidden h-full top-0 bottom-0 my-auto left-0 sm:left-4 flex flex-col justify-center'>
        <HiOutlineArrowLeft 
         onClick={()=> router.back()}
        className='text-lg text-light xl:!text-xl cursor-pointer' />
      </div>
    </div>
  )
}

export default BackNav
