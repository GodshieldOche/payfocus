import React from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from '../../../redux/features/modal'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Modal = () => {

    const dispatch = useDispatch()

    const close = () => {
      dispatch(setModal(false))
    }

  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/50 w-full h-full overflow-hidden flex items-end md:items-center  justify-center'>
        <div className='hidden md:block'>
          <Desktop close={close} /> 
        </div>
        <div className='md:hidden !w-full'>
          <Mobile close={close} />
        </div>
    </div>
  )
}

export default Modal