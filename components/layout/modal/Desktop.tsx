import React from 'react'
import vector from '../../../public/ant-design_check-circle-filled.png'
import cancel from '../../../public/cancel.png'
import Image from 'next/image'
import Button from '../../common/Button'

type Props = {
    close: () => void;
    title: string
    text: string
    buttonText: string
    type: string
}

const Desktop: React.FC<Props> = ({close, buttonText, text, title, type}) => {
  return (
    <div className='w-full md:w-[460px] h-fit bg-light dark:bg-dark rounded-t-[20px] md:rounded-[10px] flex flex-col items-center py-[24px] px-[16px] space-y-5 '>
        <h1 className='text-lg text-primaryOne font-[600] tracking-wide '>{title}</h1>
        <div className=''>
          {
            type === 'error' 
            ? <Image src={cancel}/>
            : <Image src={vector} />
          }
        </div>
        <div className='w-full mx-auto max-w-[323px]'>
        <p className='text-mainBlack text-center'>{text}</p>
        </div>
        <Button text={buttonText} handleSubmit={close} />
    </div>
  )
}

export default Desktop


// Recover Password
// Password reset link has been sent to the email entered with an OTP for verification