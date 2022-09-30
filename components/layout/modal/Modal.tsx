import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '../../../redux/features/modal'
import Desktop from './Desktop'
import SearchModal from './SearchModal'

const Modal = () => {

    const { modalData } = useSelector((state : any) => state.modal)
    // const dispatch = useDispatch()

    // const close = () => {
    //   dispatch(setModal(false))
    // }

    // const object = {
    //   func: () => { dispatch(setModal(false)) }
    // }

  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/60 w-full h-full overflow-hidden flex items-end md:items-center  justify-center'>
      {
        modalData.type === 'error' || modalData.type === 'success'
          ? <Desktop 
          close={modalData.func} 
          title={modalData.title} 
          text={modalData.text}
          buttonText={modalData.buttonText}
          type={modalData.type}
        /> 
        : <SearchModal />
      }
      


    </div>
  )
}

export default Modal