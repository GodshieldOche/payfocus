import { ErrorMessage, Field } from 'formik';
import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

interface Props {
    label: string;
    name: string;
    value: string;
    handleChange: any;
    errors: any;
    touched: any;
    options: string[];
}

const Select: React.FC<Props> = ({ label, name, errors, touched, value, options, handleChange }) => {
  return (
      <div className='space-y-2'>
            <label htmlFor={name} className=" "><h3>{label}</h3></label>
            <div className='w-full h-full relative'>
                <Field id={name} name={name} className={`input  w-full ${errors && touched ? 'border !border-red-400 dark:border-0' : ''}`}
                as="select"
                value={value}
                onChange={handleChange}
                 >
                    {
                        options.map((option, index) => (
                            <option className='!space-y-2' key={index} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </Field>
                <div className='absolute h-full top-0 bottom-0 my-auto right-3 flex flex-col justify-center'>
                    <TiArrowSortedDown className='text-mainBlack !font-medium !text-lg' />
                </div>
            </div>
         
          <ErrorMessage className="text-xs font-medium !text-red-400" name={name} component="div" />
      </div>
  )
}

export default Select