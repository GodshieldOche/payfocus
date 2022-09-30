import React, {useState} from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { setSearchModalState } from '../../../redux/features/modal'
import { getSession } from '../../../redux/features/session'
import { lookUp } from '../../../redux/features/transfer'
import { Person  } from '../../../typeDefs'
import User from '../../common/Person'


const SearchModal = () => {

  const dispatch = useDispatch()
  const [users, setUsers] = useState<Person[]>([])

  const handleLookUp = async (e: any) => {
    if(e.target.value) {
        dispatch(getSession()).then((res:any) => {
          dispatch(lookUp({email: e.target.value, token: res?.payload?.token})).then((res : any) => {
            if(res?.payload?.data) {
              let persons: Person[]
              persons =  JSON.parse(res?.payload?.data)
              setUsers(prev => [...persons])
            }
          })
      })
    } 
  }

  return (
    <div className='relative w-full md:w-[500px] h-[300px] bg-light dark:bg-dark rounded-t-[20px] md:rounded-[10px] flex flex-col items-center py-[24px] px-4 sm:px-[16px] space-y-5'>
      <div className='absolute top-0 left-0 right-0 w-full flex items-center space-x-2 py-4 px-4'>
        <HiOutlineArrowLeft
          onClick={() => dispatch(setSearchModalState(false))}
         className='!text-xl text-mainBlack dark:text-light !cursor-pointer' />
        <input 
          type='text'
          placeholder='Search' 
          className='input'
          onChange={handleLookUp}
        />
      </div>

      <div className='w-full scroller !mt-16 scrollerMain flex flex-col space-y-3 h-full overflow-y-auto'>
        {users.map((user: Person) => (
          <User Id={user.Id} Picture={user.Picture} Name={user.Name} key={user.Id} />
        ))}
      </div>
      
    </div>
  )
}

export default SearchModal
