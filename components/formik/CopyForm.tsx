import React, { useState } from 'react'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { Icon } from '@iconify/react';


interface Props {
    label: string;
    name: string;
    value: string | number ;
    type: string
}

const CopyForm: React.FC<Props> = ({ label, name, value, type}) => {

    const [inputType, setInputType] = useState<string>(type)

  return (
    <div className='space-y-2' >
    <label htmlFor={name}>
      <h3 className={`text-primaryOne dark:!text-gray-300`}>{label}</h3>
    </label>
    <div className='w-full h-full relative'>
      <input 
        contentEditable={false} 
        id={name} name={name} 
        type={inputType}   
        value={value}
        className={`input !text-primaryOne dark:!text-gray-300 dark:!border-gray-300 !border !border-primaryOne `}
        autoComplete="off"
        disabled
        />
      {
          name === "pin" ?
          <div className='absolute h-full top-0 bottom-0 right-4 flex flex-col justify-center'>
              {
                  inputType === 'password' 
                  ? <RiEyeFill 
                  onClick={() => setInputType('text')}
                  className='!text-lg !text-primaryOne dark:!text-gray-300 cursor-pointer' />
                  : <RiEyeOffFill 
                  onClick={() => setInputType('password')}
                  className='!text-lg !text-mainBlack cursor-pointer' />
              }
             
          </div>
          : name === "balance" ?
            <div className='absolute h-full top-0 bottom-0 right-4 flex flex-col justify-center'>
                {
                    inputType === 'password' 
                    ? <RiEyeFill 
                    onClick={() => setInputType('text')}
                    className='!text-lg !text-primaryOne dark:!text-gray-300 cursor-pointer' />
                    : <RiEyeOffFill 
                    onClick={() => setInputType('password')}
                    className='!text-lg !text-mainBlack cursor-pointer' />
                }
            </div>
        :  <div className='absolute h-full top-0 bottom-0 right-4 flex flex-col justify-center'>
                <Icon icon="fluent:copy-24-filled" className='!text-lg !text-primaryOne dark:!text-gray-300 cursor-pointer' />
            </div>
      }

     
    </div>
</div>
  )
}

export default CopyForm