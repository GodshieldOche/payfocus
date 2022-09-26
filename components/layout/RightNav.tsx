import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'
import Toggle from '../common/Toggle'

const RightNav = () => {
  return (
    <div className='mt-20 flex flex-col items-center lg:space-y-6 xl:space-y-7 px-6'>
      <div className='flex flex-col space-y-3 items-center justify-center'>
        <div className='relative lg:w-[80px] lg:h-[80px] xl:w-[96px] xl:h-[96px] border-2 border-mainBlack/60 rounded-full'>
            <Image 
              src={'https://res.cloudinary.com/dk6uhtgvo/image/upload/v1662528018/samples/profile3_r4mnes.jpg'}
              layout='fill'
              objectFit='cover'
              className='w-full h-full rounded-full'
              objectPosition={0}
            />
        </div>
        <h1 className=' lg:!text-lg xl:!text-xl text-black dark:text-light !font-semibold '> John Doe</h1>
      </div>

      <Button text="View Profile" handleSubmit={() => {}} />

      <div> 
        <Toggle />
      </div>
        
    </div>
  )
}

export default RightNav