import React from 'react'

type Props = {
    text: string
}

const Button: React.FC<Props> = ({text}) => {
  return (
    <button className='w-full bg-primaryOne text-light !py-[12px] rounded-[7px] '>
       {text}
    </button>
  )
}

export default Button