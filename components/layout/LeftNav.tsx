import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import IconLink from '../common/Icon'


const LeftNav = () => {
  return (
    <div className='mt-12 flex flex-col items-center space-y-10 '>
        <div>
            <Image src={logo}/>
        </div>
        <div className='w-full flex flex-col space-y-7'>
            <IconLink active={true} text='wallet' icon="entypo:wallet" />
            <IconLink active={false} text='payments' icon="material-symbols:payments-outline-rounded" />
            <IconLink active={false} text='cards' icon="wpf:bank-cards" />
            <IconLink active={false} text='settings' icon="eva:settings-fill" />
            <IconLink active={false} text='notifications' icon="clarity:notification-solid" />
        </div>
    </div>
  )
}

export default LeftNav