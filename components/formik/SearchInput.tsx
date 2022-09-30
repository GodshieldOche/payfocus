import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getSession } from '../../redux/features/session';
import { lookUp } from '../../redux/features/transfer';
import { Person } from '../../typeDefs';
import User from '../common/Person';


interface Props {
    label: string;
    name: string;
    value: string | number ;
    placeholder: string;
    type: string;
    handleChange: any;
    setId: any;
}

const SearchInput: React.FC<Props> = ({ label, name, placeholder, type, value, handleChange, setId}) => {

  const [users, setUsers] = useState<Person[]>([])
  const dispatch = useDispatch()
  const [error, setError] = useState(false)

  const handleLookUp = async (e: any) => {
    setError(false)
    handleChange(e.target.value)

    if(e.target.value) {
        dispatch(getSession()).then((res:any) => {
          dispatch(lookUp({email: e.target.value, token: res?.payload?.token})).then((res : any) => {
            if(res?.payload?.data) {
              let persons: Person[]
              persons =  JSON.parse(res?.payload?.data)
              let few = persons.slice(0, 4)
              setUsers(prev => [...few])
            }
          })
      })
    } 
  }

  return (
    <div className='space-y-2' >
    <label htmlFor={name} className=" "><h3>{label}</h3></label>
    <input 
      type={type}
      placeholder={placeholder} 
      className='input'
      value={value}
      onChange={handleLookUp}
      autoComplete="off"
      required
      onBlur={(e) => {
        if(!value) {
          setError(true)
        } else {
          setError(false)
        }
      }}
      onSubmit={() => {
        if(!value) {
          setError(true)
        }
      }}
    />
    {
      error && <h3 className="text-xs font-medium !text-red-400">Required</h3>
    }
    {
      users.length > 0 && value &&
        <div className='w-full scroller scrollerMain flex flex-col space-y-3 p-3 rounded-md bg-secondaryOne dark:bg-darkOne'>
        {users.map((user: Person) => (
          <User
            Id={user.Id} 
            Picture={user.Picture} 
            Name={user.Name} 
            handleChange={handleChange} 
            setId={setId} 
            key={user.Id} 
            setUsers={setUsers} 
          />
        ))
      }
      </div>
    }
   
</div>
  )
}

export default SearchInput
