import React from 'react'

type Props = {
  text: string
}


const TextButton: React.FC<Props> = ({text}) => {
  return (
    <div className='w-full flex items-center justify-center '>
        <h2 className='cursor-pointer'>{text}</h2>
    </div>
  )
}

export default TextButton