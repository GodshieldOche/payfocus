import React from 'react'
import { balance } from '../../pages/dashboard/wallet'
import Box from '../common/Box'
import Card from '../common/Card'
import Mobile from '../common/Mobile'
import { User } from './RightNav'

interface Props {
  balances: balance[]
  currentUser: User
}

const Header: React.FC<Props> = ({balances, currentUser}) => {
  return (
    <div className='relative w-full px-4 sm:px-[43px] pt-[24px] lg:pt-[64px] pb-[66px] sm:pb-[75px]
     bg-gradient-to-b from-[#133EA0] to-[#001030] dark:from-[#001030] dark:to-[#133EA0]  '>
      <Mobile currentUser={currentUser} />
      <div className='grid grid-cols-2 gap-y-10 gap-x-4 sm:gap-10 mt-[38px] lg:mt-0'>
        {
          balances?.map((item: balance) => (
            <Card currency={item.currency} balance={item.balance} key={item.id} />
          ))
        }
      </div>
      <div className='right-0 left-0 -bottom-7 absolute w-full flex items-center justify-around px-4 sm:px-[40px]'>
        <Box icon="carbon:add-filled" text="fund" />
        <Box icon="ic:baseline-swap-horizontal-circle" text="swap" />
        <Box icon="bi:arrow-up-circle-fill"  text="transfer" />
        {/* <Box />
        <Box /> */}
      </div>
    </div>
  )
}

export default Header
