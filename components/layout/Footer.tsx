import React from 'react'
import IconLink from '../common/Icon'

const Footer = () => {
  return (
    <div className='w-full fixed bottom-0 left-0 right-0 bg-[#f5f5f5] px-4 py-2 z-40
    flex items-center justify-between lg:hidden'>
        <IconLink active={true} text='Wallet' icon="entypo:wallet" />
        <IconLink active={false} text='Payments' icon="material-symbols:payments-outline-rounded" />
        <IconLink active={false} text='Cards' icon="wpf:bank-cards" />
        <IconLink active={false} text='Settings' icon="eva:settings-fill" />
    </div>
  )
}

export default Footer
