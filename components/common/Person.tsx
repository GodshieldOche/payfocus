import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setPerson, setSearchModalState } from '../../redux/features/modal'
import { Person } from '../../typeDefs'

const User : React.FC<Person> = ({Id, Name, Picture}) => {

    const dispatch = useDispatch()

  return (
    <div 
        onClick={() => {
            dispatch(setPerson(Id))
            dispatch(setSearchModalState(false))
        }}
        className='w-full flex items-center  space-x-5 '>
        <div
          className='relative w-[32px] h-[32px] sm:w-[50px] sm:h-[50px] rounded-full'>
            <Image
              src={Picture}
              layout='fill'
              objectFit='cover'
              className='w-full h-full rounded-full'
              objectPosition={0}
            />
        </div>
        <h3>{Name}</h3>
    </div>
  )
}

export default User
