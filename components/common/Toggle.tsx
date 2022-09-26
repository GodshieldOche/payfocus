import React, { useState } from 'react'
import { Icon } from '@iconify/react';

interface Props {
    
}

const Toggle : React.FC<Props> = ({ }) => {

    const [toggleTheme, setToggleTheme] = useState(false)


  return (
    <div className='flex items-center w-full space-x-1 py-1 px-1 bg-secondaryOne rounded-[15px] '>

      <div className={` ${toggleTheme ? "bg-primaryOne " : "bg-transparent hover:bg-mainBlack/10 "} 
        cursor-pointer px-5 py-2 xl:px-6 xl:py-3 rounded-[10px]`}>
        <Icon icon='bxs:moon' className={` ${toggleTheme ? "!text-light " : "!text-mainBlack "} !text-lg `} />
      </div>

      <div className={`${toggleTheme ? "bg-transparent " : "bg-primaryOne "} cursor-pointer px-5 py-2 xl:px-6 xl:py-3 rounded-[10px]`}>
        <Icon icon='carbon:light-filled' className={`${toggleTheme ? "!text-mainBlack " : "!text-light "} !text-lg `} />
      </div>
    </div>
  )
}

export default Toggle
