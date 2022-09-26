import React from 'react'


interface Props {
    active: boolean;
    text: string
}

const TabText: React.FC<Props> = ({ text, active}) => {
  return (
    <div className={`${active ? "bg-white dark:bg-primaryOne text-primaryOne dark:text-light shadow-sm" : "text-mainBlack"} cursor-pointer px-[30px] lg:px-[38px] w-full  py-1 rounded `}>
        <h2 className='text-[13px] lg:text-base text-center text-inherit '>{text}</h2>
    </div>
  )
}

export default TabText
