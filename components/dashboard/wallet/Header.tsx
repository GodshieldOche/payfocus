import React from 'react'
import Box from '../../common/Box'
import Card from '../../common/Card'

const Header = () => {
  return (
    <div className='relative w-full px-[43px] pt-[64px] pb-[75px] bg-gradient-to-b from-[#133EA0] to-[#001030] '>
      <div className='grid grid-cols-2 gap-10'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='right-0 left-0 -bottom-8 absolute w-full flex items-center justify-around px-8'>
        <Box icon="carbon:add-filled" text="Fund" />
        <Box icon="ic:baseline-swap-horizontal-circle" text="Swap" />
        <Box icon="bi:arrow-up-circle-fill"  text="Transfer" />
        {/* <Box />
        <Box /> */}
      </div>
    </div>
  )
}

export default Header
