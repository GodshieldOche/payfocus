import React from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

const MainLayout: React.FC<any> = ({children}) => {
  return (
    <div className=' w-full h-screen max-w-[1168px] mx-auto grid grid-cols-16'>
        <div className='col-span-4 w-full h-full bg-white mb-10 '>
            <LeftNav />
        </div>
        <div className='col-span-12  overflow-y-auto scroller border-x'>
            {children}
        </div>
        <div className='col-span-4 bg-white'>
            <RightNav />
        </div>
    </div>
  )
}

export default MainLayout