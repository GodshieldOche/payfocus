import React from 'react'
import vector from '../../../public/ant-design_check-circle-filled.png'
import Image from 'next/image'
import Button from '../../common/Button'
import cancel from '../../../public/cancel.png'

type Props = {
  close: () => void;
  title: string
  text: string
  buttonText: string
  type: string
}

const Mobile: React.FC<Props> = ({close, title, buttonText, text, type}) => {
  return (
    <div className='!w-full h-fit bg-light rounded-t-[20px] flex flex-col items-center py-[24px] px-[16px] space-y-5 '>
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

export default Mobile