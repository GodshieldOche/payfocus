import React from 'react'
import { Icon } from '@iconify/react';

interface Props {
    active: boolean;
    text: string;
    icon: string;
}


const IconLink: React.FC<Props> = ({active, text, icon }) => {
  return (
    <div className={`flex items-center w-full pl-[34px] py-3 cursor-pointer rounded-l-full ${active ? 'bg-primaryOne/10 !text-primaryOne' : '' } space-x-5  `}>
        <Icon icon={icon} className={`!text-3xl ${active ? '!text-primaryOne' : '!text-mainBlack'}  `} />
        <h1 className={`${active ? 'text-primaryOne !font-semibold ' : '!font-medium'}`}>{text}</h1>
    </div>
  )
}

export default IconLink