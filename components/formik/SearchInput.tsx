import React, { useState, useEffect } from 'react'
import { ErrorMessage, Field } from 'formik'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { setSearchModalState } from '../../redux/features/modal';


interface Props {
    label: string;
    name: string;
    value: string | number ;
    placeholder: string;
    type: string;
    handleChange: any;
    errors: any;
    touched: any;
}

const SearchInput: React.FC<Props> = ({ label, name, placeholder, errors, type, touched, value, handleChange}) => {

    const dispatch = useDispatch()

  return (
    <div className='space-y-2' >
    <label htmlFor={name} className=" "><h3>{label}</h3></label>
    <div className='w-full h-full relative'>
      <Field 
        id={name} 
        name={name} 
        type={type} 
        value={value}
        className={`input `}
        onChange={handleChange}
        onClick={() => dispatch(setSearchModalState(true))}
        autoComplete="off"
        placeholder={placeholder} 
        />
        
        <div className='absolute h-full top-0 bottom-0 right-4 flex flex-col justify-center'>
        <RiEyeOffFill 
        className='!text-lg !text-mainBlack cursor-pointer' />
        </div>
    </div>
    {/* <ErrorMessage className="text-xs font-medium !text-red-400" name={name} component="div" /> */}
</div>
  )
}

export default SearchInput
