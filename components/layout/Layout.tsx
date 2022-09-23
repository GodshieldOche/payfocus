import React from 'react'
import { useRouter } from 'next/router'
import MainLayout from './MainLayout'
import { useSelector } from 'react-redux'
import Modal from './modal/Modal'

const Layout : React.FC<any> = ({children}) => {

  const { modalState } = useSelector((state : any) => state.modal)

  const router = useRouter()

  return (
    <div className='relative w-full h-full bg-light'>
      {
        router.pathname.includes('/auth') 
        ? children
        : <MainLayout> 
            {children}
          </MainLayout>
      }
      {
        modalState && 
        <Modal />
      }
    </div>
  )
}

export default Layout