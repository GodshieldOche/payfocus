import React from 'react'
import ButtonLoader from './ButtonLoader';

type Props = {
    text: string
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    isSubmitting: boolean
}

const Button: React.FC<Props> = ({text, handleSubmit, isSubmitting}) => {
  return (
    <button className='w-full h-fit bg-primaryOne text-light !py-[12px] rounded-[7px] '
    type='submit'
    onClick={() => handleSubmit}
    >
       { isSubmitting ? <ButtonLoader /> : text}
    </button>
  )
}

export default Button