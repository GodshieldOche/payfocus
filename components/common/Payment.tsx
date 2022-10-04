import { useRouter } from 'next/router'
import React from 'react'


interface Props {
    title: string,
    amount: string,
    created: string,
    id: string
}

const PaymentComp: React.FC<Props> = ({title, amount, created, id}) => {

  const router = useRouter()

  return (
    <div 
      onClick={() => router.push(`/dashboard/payments/${id}`)}
      className='flex justify-between cursor-pointer items-center bg-light dark:bg-darkOne rounded-[6px] px-4 py-3 '>
        <div className='flex flex-col space-y-1 sm:space-y-2 '>
            <h3 className='dark:text-light text-black text-sm font-semibold '>{title}</h3>
            <h3 className='text-primaryOne text-xs font-semibold '>{amount}</h3>
        </div>
        <h3 className='text-xs text-mainBlack font-medium ' >{created}</h3>
    </div>
  )
}

export default PaymentComp