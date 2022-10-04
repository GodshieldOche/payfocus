import React from 'react'
import IconLink from '../common/Icon'

const Footer = () => {
  return (
    <div className='w-full fixed bottom-0 left-0 right-0 bg-[#f5f5f5] dark:bg-dark px-4 sm:px-[43px] py-2 z-40
    flex items-center justify-between lg:hidden'>
        <IconLink text='wallet' icon="entypo:wallet" />
        <IconLink text='payments' icon="material-symbols:payments-outline-rounded" />
        <IconLink text='cards' icon="wpf:bank-cards" />
        <IconLink text='settings' icon="eva:settings-fill" />
    </div>
  )
}

export default Footer
