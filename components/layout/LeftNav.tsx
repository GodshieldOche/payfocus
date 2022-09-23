import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import IconLink from '../common/Icon'


const LeftNav = () => {
  return (
    <div className='mt-24 flex flex-col items-center space-y-10 '>
        <div>
            <Image src={logo}/>
        </div>
        <div className='w-full flex flex-col space-y-7'>
            <IconLink active={true} text='Wallet' icon="entypo:wallet" />
            <IconLink active={false} text='Payments' icon="material-symbols:payments-outline-rounded" />
            <IconLink active={false} text='Cards' icon="wpf:bank-cards" />
            <IconLink active={false} text='Settings' icon="eva:settings-fill" />
            <IconLink active={false} text='Notifications' icon="clarity:notification-solid" />
        </div>
    </div>
  )
}

export default LeftNav