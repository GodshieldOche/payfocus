import React from 'react'
import Link from 'next/link'

type Props = {
  text: string
  route:string
}


const TextButton: React.FC<Props> = ({text, route}) => {
  return (
    <div className='w-full flex items-center justify-center '>
      <Link href={`/auth/${route}`}>
        <a>
          <h2 className='cursor-pointer'>{text}</h2>
        </a>
      </Link>
    </div>
  )
}

export default TextButton