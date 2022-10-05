import React from 'react'
import { options } from '../../dashboard/wallet/swap/Body'

interface Props {
    options: options;
    handleChange: any;
    setValue: any
    setActive: any
}

const SelectModal: React.FC<Props> = ({options, handleChange, setValue, setActive}) => {
  return (
    <div className='flex sm:hidden fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/60 w-full h-full overflow-hidden  items-end justify-center'>
      <div className='relative w-full h-[267px] bg-light dark:bg-dark rounded-t-[20px] flex flex-col items-center py-2 px-[16px] space-y-5 '>
        <div className='absolute top-0 right-0 left-0 py-3 rounded-t-[20px]  flex w-full items-center justify-center bg-dark'>
            <div className='h-[2px] rounded-md w-24 bg-mainBlack'></div>
        </div>
        <div className='flex !z-50 w-full scroller scrollerMain !my-5 overflow-y-auto  flex-col space-y-1 py-1 rounded-md '>
            {
                options.map(option => (
                    <h3  
                    onClick={() => {
                        handleChange(option.name)
                        setValue(option.value)
                        setActive(false)
                    }}
                    key={option.value}
                    className='w-full p-2 hover:bg-mainBlack/20 text-primaryOne dark:text-gray-300 cursor-pointer'>{option.name}</h3>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default SelectModal
