import React from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from '../../../redux/features/modal'
import Desktop from './Desktop'

const Modal = () => {

    const dispatch = useDispatch()

    const close = () => {
      dispatch(setModal(false))
    }

  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/50 w-full h-screen overflow-hidden flex items-center justify-center'>
        <Desktop close={close} />
    </div>
  )
}

export default Modal