import React from 'react'
import TabText from '../../common/TabText'

const Tab = () => {
  return (
    <div className='w-full flex items-center justify-around px-1 lg:px-3 py-1 lg:py-2 rounded-lg bg-secondaryOne'>
      <TabText active={true} text="All" />
      <TabText active={false} text="Inflow" />
      <TabText active={false} text="Outflow" />
    </div>
  )
}

export default Tab
