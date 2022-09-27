import React from 'react'
import TabText from '../../common/TabText'

interface Props {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>
}

const Tab: React.FC <Props> = ({active, setActive}) => {
  return (
    <div className='w-full flex items-center justify-around px-1 lg:px-3 py-1 lg:py-2 rounded-lg bg-secondaryOne dark:bg-darkOne'>
      <TabText active={active} setActive={setActive} text="All" />
      <TabText active={active} setActive={setActive} text="Inflow" />
      <TabText active={active} setActive={setActive} text="Outflow" />
    </div>
  )
}

export default Tab
