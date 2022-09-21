import React, { useState, useEffect } from 'react'
import { ErrorMessage, Field } from 'formik'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'


interface Props {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    type: string;
    handleChange: any;
    errors: any;
    touched: any;
}

const Input: React.FC<Props> = ({ label, name, placeholder, errors, type, touched, value, handleChange}) => {

    const [inputType, setInputType] = useState<string>(type)

    useEffect(() => {
        setInputType(type)
    }, [])

  return (
    <div className='space-y-2' >
          <label htmlFor={name} className=" "><h3>{label}</h3></label>
          <div className='w-full h-full relative'>
            <Field id={name} name={name} type={inputType} value={value}
              className={`input ${errors && touched ? 'border !border-red-300' : ''}`}
              onChange={handleChange}
              placeholder={placeholder} 
              />
            {
                name === "password" &&
                <div className='absolute h-full top-0 bottom-0 right-4 flex flex-col justify-center'>
                    {
                        inputType === 'password' 
                        ? <RiEyeFill 
                        onClick={() => setInputType('text')}
                        className='!text-lg !text-primaryOne cursor-pointer' />
                        : <RiEyeOffFill 
                        onClick={() => setInputType('password')}
                        className='!text-lg !text-mainBlack cursor-pointer' />
                    }
                   
                </div>
            }
          </div>
          <ErrorMessage className="text-xs font-medium !text-red-300" name={name} component="div" />
    </div>
  )
}

export default Input