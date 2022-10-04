import React, { useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti';
import { options } from '../dashboard/wallet/swap/Body';


interface Props {
    label: string;
    value: string;
    handleChange: any;
    options: options;
}


const SelectInput: React.FC <Props> = ({ label, value, handleChange, options}) => {

    const [active, setActive] = useState<boolean>(false)

  return (
    <div 
        className='relative space-y-2' >
        <label htmlFor=''>
                <h3 className={`${active ? "text-primaryOne dark:text-gray-300" : "text-mainBlack"}`}>{label}</h3>
        </label>
        <div 
            onClick={() => setActive(!active)}
            className='w-full h-full relative  '>
            <div className={`input text-left !cursor-default ${active ? "!border dark:!border-gray-300 !border-primaryOne" : "!border-0"}`}>
                <h3 className={`${active ? "text-primaryOne dark:text-gray-300" : "text-mainBlack"}`}>
                    {value}
                </h3>
            </div>
            <div className='absolute h-full top-0 bottom-0 my-auto right-3 flex flex-col justify-center'>
                <TiArrowSortedDown className='text-mainBlack !font-medium !text-sm' />
            </div>
        </div>
        {
            active &&
            <div className='absolute  !z-50 w-full max-h-52 scroller scrollerMain flex flex-col space-y-1 py-1 rounded-md bg-secondaryOne dark:bg-darkOne'>
                {
                    options.map(option => (
                        <h3  
                        onClick={() => {
                            handleChange(option.name)
                            setActive(false)
                        }}
                        className='w-full p-2 hover:bg-mainBlack/20 text-primaryOne dark:text-gray-300 cursor-pointer'>{option.name}</h3>
                    ))
                }
            </div>
        }
    </div>
  )
}

export default SelectInput
