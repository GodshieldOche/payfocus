import React from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

const MainLayout: React.FC<any> = ({children, currentUser}) => {
  return (
    <div className=' w-full h-screen max-w-[1168px] bg-light dark:bg-dark flex flex-col mx-auto lg:grid lg:grid-cols-16'>
        <div className='hidden h-full lg:block lg:col-span-4 w-full bg-white dark:bg-dark mb-10 '>
            <LeftNav />
        </div>
        <div className='lg:col-span-12 h-full  overflow-y-auto scroller '>
            {children}
        </div>
        <div className='hidden h-full lg:block lg:col-span-4 order-first lg:order-3 bg-white dark:bg-dark'>
            <RightNav currentUser={currentUser} />
        </div>
    </div>
  )
}

export default MainLayout