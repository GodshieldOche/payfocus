import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'
import Toggle from '../common/Toggle'

const RightNav = () => {
  return (
    <div className='mt-20 flex flex-col items-center space-y-7 px-6'>
      <div className='flex flex-col space-y-3 items-center justify-center'>
        <div className='relative w-[90px] h-[90px] border-2 border-mainBlack/60 rounded-full'>
            <Image 
              src={'https://res.cloudinary.com/dk6uhtgvo/image/upload/v1662528018/samples/profile3_r4mnes.jpg'}
              layout='fill'
              objectFit='cover'
              className='w-full h-full rounded-full'
              objectPosition={0}
            />
        </div>
        <h1 className='!text-xl text-black !font-semibold '> John Doe</h1>
      </div>

      <Button text="View Profile" handleSubmit={() => {}} />

      <div> 
        <Toggle />
      </div>
        
    </div>
  )
}

export default RightNav