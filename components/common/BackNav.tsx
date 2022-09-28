import { useRouter } from 'next/router'
import React from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'

interface Props {
  text: string
}


const BackNav: React.FC<Props> = ({text}) => {

    const router = useRouter()

  return (
    <div className='w-full py-5 bg-primaryOne dark:bg-darkOne px-4 sm:px-[43px] lg:px-6 flex items-center space-x-5 '>
        <HiOutlineArrowLeft
        className='text-lg text-light xl:!text-xl cursor-pointer'
        onClick={()=> router.back()}
        />
      <h1 className='text-light !text-center'>{text}</h1>
    </div>
  )
}

export default BackNav
