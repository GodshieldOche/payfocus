import React from 'react'
import vector from '../../../public/ant-design_check-circle-filled.png'
import Image from 'next/image'
import Button from '../../common/Button'

type Props = {
    close: () => void
}

const Desktop: React.FC<Props> = ({close}) => {

  return (
    <div className='w-[460px] h-[346px] bg-light rounded-[10px] flex flex-col items-center py-[24px] px-[16px] space-y-7 '>
        <h1 className='text-lg text-primaryOne font-[600] tracking-wide '>Recover Password</h1>
        <div className=''>
            <Image
                src={vector}
            />
        </div>
        <div className='w-full mx-auto max-w-[323px]'>
        <p className='text-mainBlack '>Password reset link has been sent to the email entered with an OTP for verification</p>
        </div>
        <Button text='Proceed' handleSubmit={close} />
    </div>
  )
}

export default Desktop